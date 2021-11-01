const {gql} = require('apollo-server-express');

const typeDefs = gql`

type Book {
    _id:ID
    name: String
    author: String
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
    users : [User]
    user(_id: ID!): User 
    books : [Book]
    book(_id: ID!): Book
    bookRatings: [BookRating]
    bookRating(_id: ID!): BookRating
    category: [Category]
    comments: [Comment]
    comment(bookId: ID!): Book   
    markers: [Marker]
    marker(_id: ID!): Marker
    isBookMarked:[Marker]
    userBookRating: [BookRating]
    averageBookRating:[BookRating]
    me: User
}

type Mutation {
    addUser(
        firstName: String!, 
        lastName: String!, 
        email: String!, 
        password: String!
    ): Auth

    addBook(
        name: String!, 
        author: String!, 
        category: String!, 
        description: String!, 
        pages: Int!,
        year: Int!,
        image: String!,
        rating: Int!,
        isAvailable : Boolean!
    ): Book

    addBookRating(
        userId: String!, 
        bookId: String!, 
        value: Float!
    ): BookRating

    addComment(
        userId: String!,
        bookId: String!,
        text: String!
    ): Comment   

    addMarker(
        userId: String!,
        bookId: String!
    ): Marker

    addCategory(
        name: String!
    ): Category

    deleteBook(
        bookId: ID!
    ): Book

    removeMarker(
        bookId: ID!
        userId: ID!
    ): User

    deleteCategory(
        categoryId: ID!
    ): Category

    login(
        email: String!, 
        password: String!
    ): Auth


}


`;

module.exports = typeDefs;