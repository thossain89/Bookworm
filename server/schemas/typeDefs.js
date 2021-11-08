const {gql} = require('apollo-server-express');

const typeDefs = gql`

type Book {
    _id:ID
    name: String
    author: String
    category: String
    description: String
    pages: String
    year: String
    image: String    
    isAvailable : Boolean!
    addedBy: User
    reviews: [Review]
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
    review: String
    author: User
    rating: Int    
    createdAt: String
}

type Auth {
    token: ID
    user: User
}

type StripeSession {
    url: String!
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
    createDonation: StripeSession
    
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
        pages: String!,
        year: String!,
        image: String!     
        
    ): Book  

    addReview(
        bookId: ID!,
        review: String!,
        rating: Int!        
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