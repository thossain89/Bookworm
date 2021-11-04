import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_REVIEW = gql`
mutation addReview($bookId:ID!, $review:String!, $rating:Int!) {
    addReview(bookId:$bookId, review:$review, rating:$rating) {
      _id
      name
      reviews {
        _id
        review
        rating     
        author {
          _id
          username        
        }
      }
    }
  }
`;

export const REMOVE_REVIEW = gql`
mutation removeReview($bookId:ID!, $reviewId:ID!) {
    removeReview(bookId:$bookId, reviewId:$reviewId) {
      _id
      name
      reviews {
        _id
        review
        rating
        author {
          _id
          username
          
        }
      }
    }
  }
`;

export const ADD_BOOK = gql`
mutation addBook($name:String!,$author:String!,$category:String!,$description:String!,$pages: Int!,$year: Int!,$image: String!)
{
 addBook(name:$name, author:$author, category:$category, description:$description,pages:$pages,year:$year,image:$image){
  _id
  name
  author
  category
  description
  pages
  year
  image
} 
}
`;

export const DELETE_BOOK = gql`
mutation deleteBook ($bookId:ID!){
    deleteBook(bookId:$bookId){
      _id
      name
    }
  }
`;