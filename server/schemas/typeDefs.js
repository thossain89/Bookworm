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
    isAvailable : Boolean!
    addedBy: User
    review: [Review]
}

type User {
    _id: ID
    username: String    
    email: String 
    password: String
    books : [Book]   
}


type Review {
    _id: ID
    reviewText: String
    reviewAuthor: String    
    createdAt: String
}

type Auth {
    token: ID
    user: User
}

input SearchOption {
    category: String
    searchPhrase: String
    start: Int
    limit: Int
}

type Query {
    users : [User]
    user(_id: ID!): User 
    books(options:SearchOption) : [Book]
    book(_id: ID!): Book     
    me: User
}

type Mutation {
    addUser(
        username: String!,         
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
        image: String!     
        
    ): Book  

    addReview(
        bookId: ID!,
        reviewText: String!
    ): Book

    deleteBook(
        bookId: ID!
    ): Book

    removeReview(
        bookId: ID!, 
        reviewId: ID!
    ): Book

    login(
        email: String!, 
        password: String!
    ): Auth


}


`;

module.exports = typeDefs;