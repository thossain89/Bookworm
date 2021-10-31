const {gql} = require('apollo-server-express');

const typeDefs = gql`

type Book {
    _id:ID
    name: String
    category: String
    description: String
    pages: Int
    year: Int
    image: String
    rating: Int
    isAvailable : Boolean!
    addedBy: User
}

type User {
    _id: ID
    firstName: String
    lastName: String
    email: String 
    password: String
    books : [Book]   
}

type BookRating {
    _id:ID
    userId: String
    bookId: String
    value: Float
}

type Comment {
    _id:ID
    userId: String
    bookId: String
    text: String 
}

type CommentRating {
    _id:ID
    userId: String
    commentId : String
    value: String
}

type Marker {
    _id:ID
    userId: String
    bookId: String
}

type Category {
    _id: ID
    name: String
}

type Auth {
    token: ID
    user: User
}

type Query {
    user : User
    books : [Books]
    book(_id: ID!): Book
    bookRatings: [BookRating]
    bookRating(_id: ID!): BookRating
    category: [Category]
    comments: [Comments]
    commentRatings: [CommentRating]
    commentRating(_id: ID!): CommentRating
    markers: [Marker]
    marker(_id: ID!): marker
}

type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addBook()  
}


`;

module.exports = typeDefs;