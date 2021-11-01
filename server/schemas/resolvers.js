const { AuthenticationError } = require('apollo-server-express');
const {
    User, 
    Book, 
    Marker, 
    BookRating, 
    Category, 
    Comment    
} = require('../models');

const { signToken } = require('../utils/auth');

const resolvers = {
    Query:{
        users: async () => {
            return User.find();
        },
        user: async (parent, {_id, email}) => {
                const params ={};

                if (_id) {
                    params._id = _id;
                }

                if (email) {
                    params.email = {
                      $regex: email,
                    };
                  }
                
                  return User.find(params)           
        },
        category: async () => {
            return Category.find({});
        },
        comments:async () => {
            return Comment.find({});
        },
        comment: async (parent, {bookId}) => {
            return await Comment.find({bookId}).sort({ createdAt: -1 });
        },
        markers: async (parent, {userId})=> {
            const markers = await Marker.find({ userId });

            const bookIds = markers.map((m) => m.bookId);    
            return await Book.getBooksByIds(bookIds);
        }, 
        isBookMarked: async (parent, {userId, bookId}) => {
            const marker = await Marker.findOne({ bookId, userId });
              
            if (marker !== null) {
                return true;
            }
                return false;
        },
        books : async (body) => {
            const { options, limits } = body;
            const { category, pages, year, sortBy, searchPhrase } = options;
            const { page, itemsPerPage } = limits;
            let query = [];
          
            if (searchPhrase) {
              const searchText = {
                $regex: searchPhrase,
                $options: "i",
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
            if (pages.length) query.push({ pages: { $lt: pages[1], $gt: pages[0] } });
            if (year.length) query.push({ year: { $lt: year[1], $gt: year[0] } });
            if (!query.length) query = [{}];
          
            const books = await Book.find({ $and: query })
              .sort(sortBy || { createdAt: -1 })
              .skip(page * itemsPerPage)
              .limit(itemsPerPage);
            return books;
        },
        book: async (parent, {_id}) => {
            return await Book.find({_id})
        },
        bookRatings:async () => {
            return await BookRating.find({});
        },
        bookRating: async (parent, {bookId}) => {
            return await BookRating.find({bookId});
        },
        userBookRating:async (parent, {bookId, userId}) => {           
          
            const bookRating = await BookRating.findOne({
              userId,
              bookId,
            });
          
            if (bookRating)
              return {
                value: bookRating.value,
                isFound: true,
              };
            return { isFound: false };
        },
        averageBookRating:async (parent, {bookId}) => {           
          
            const bookRatings = await BookRating.find({bookId});
            if (!bookRatings.length) return { value: 0 };
          // Is this right way to calculate average rating?
            const value = (
              bookRatings.reduce((acc, { value }) => {
                return acc + value;
              }, 0) / bookRatings.length
            ).toFixed(2);
          
            return { value, quantity: bookRatings.length };
        },           
        me: async (parent, args, context) => {
            if (context.user) {
              return User.findOne({ _id: context.user._id }).populate('Book');
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        
    },
    Mutation:{
        addUser: async (parent, { firstName, lastName, email, password }) => {
            const user = await User.create({ firstName, lastName, email, password });
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
        addBook:async (parent, {_book, userId})=> {
            const user = await User.getById(userId);
          
            _book.addedBy = `${user.firstName} ${user.lastName}`;           
          
            const book = new Book(_book);
          
            return book.save();
        },
        deleteBook:async (parent, {bookId, userId}) => {
            const book = await Book.findById({bookId});
          
            if (!book) throw new Error("Book does not exist!");
            // ToDo how do I get the addedByID?
            if (userId !== book.addedById) 
              throw new Error("Book was not created by you!");
          
            return await book.remove();
        },
        addBookRating:async (parent,{ bookId, value , userId})=> {
                      
            const ratingInDatabase = await BookRating.findOne({userId,bookId});
          
            if (ratingInDatabase) {
              ratingInDatabase.value = value;
              ratingInDatabase.save((err, obj) => {
                if (err) throw new Error("err.message");
                return;
              });
            } else {
              const commentRating = new BookRating({ userId, bookId, value });
              commentRating.save();
            }
        },
        addComment:async (parent, {comment, userId}) => {
            const { text, bookId } = comment;         
            
          
            const book = await Book.findById(bookId);
            if (!book) throw new Error("Book does not exist!");
          
            const newComment = new Comment({ userId, bookId, text });
            newComment.save();
        },
        addMarker:async (parent,{bookId, userId}) => {
            const book = await Book.findById(bookId);
            if (!book) return { message: "Book does not exist!", isSaved: false };
          
            const _marker = await Marker.findOne({userId, bookId});
            if (_marker)
              return { message: "Marker already in database!", isSaved: false };
          
            const marker = new Marker({ userId, bookId });
            return await marker.save();
        },
        removeMarker: async (parent, {bookId, userId})=> {
            const book = await Book.findById(bookId);
            if (!book) throw new Error("Book does not exist!");
          
            const marker = await Marker.findOne({userId, bookId});
          
            if (!marker) throw new Error("Marker is not in database!");
          
            return await marker.remove();
        },
        addCategory: async (parent, {name} ) => {
            const user = await Category.create({ name });
        },
        deleteCategory: async (parent, { categoryId }, context) => {
            if (context.user) {
              const category = await Category.findOneAndDelete({
                _id: categoryId                
              });   
              
      
              return category;
            }
            throw new AuthenticationError('You need to be logged in!');
          },
        
    },
};

module.exports = resolvers;
