const { AuthenticationError } = require('apollo-server-express');
const {User,Book} = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find();
    },
    user: async (parent, { _id }) => {
        
      return await User.findOne({_id: _id});
    },    
    books: async (parent,{options},context) => {
     
      const { category, searchPhrase, start, limit } = options;
     
      let query = [];

      if (searchPhrase) {
        const searchText = {
          $regex: searchPhrase,
          $options: 'i',
        };
        query.push({
          $or: [
            { name: searchText },
            { author: searchText },
            { category: searchText },
            { addedBy: searchText },
          ],
        });
      }

      if (category.length) query.push({ category: category });     
      if (!query.length) query = [{}];

      const books = await Book.find({ $and: query })        
        .skip(start)
        .limit(limit);
      return books;
    },
    book: async (parent, { _id }) => {
      return await Book.find({ _id });
    },    
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('Book');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
  Book:{
    addedBy: async ({addedBy}, args,context)=>{ 
      return !addedBy.email? await User.findOne({_id:addedBy._id}) : addedBy;
    } 
  },
  User:{
    books: async ({_id}) =>
    {
      return await Book.find({addedBy:_id});
    }
  },
  Review:{
    author: async ({author}, args,context)=>{
      return !author.email? await User.findOne({_id:author._id}) : author;
   } 
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    // Need Clarification
    addBook: async (parent, {name,author,category,description,pages,year,image}, context) => {
      if (!context.user) throw new AuthenticationError('You need to be logged in!');
        const user = await User.findOne({email:context.user.email});
        const book = await Book.create({
          name,
          author,
          category,
          description,
          pages,
          year,
          image,
          addedBy:user,
        });        
        return book;
      
      
    },
    deleteBook: async (parent, { bookId }, context) => {
      if (context.user) {
        const book = await Book.findOneAndDelete({_id: bookId});

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { books: book._id } }
        );

        return book;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addReview: async (parent, { bookId, reviewText }, context) => {
      if (context.user) {
        return Thought.findOneAndUpdate(
          { _id: bookId },
          {
            $addToSet: {
              review: { reviewText, reviewAuthor: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeReview: async (parent, { bookId, reviewId }, context) => {
      if (context.user) {
        return Book.findOneAndUpdate(
          { _id: bookId },
          {
            $pull: {
              comments: {
                _id: reviewId,
                reviewAuthor: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },  
   
},
};

module.exports = resolvers;
