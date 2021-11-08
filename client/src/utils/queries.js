import { gql } from '@apollo/client';

export const QUERY_BOOKS = gql`
query books($options: SearchOption) {
    books (options: $options) {
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

export const QUERY_SINGLE_BOOK= gql `
query book($_id: ID!) {
    book(_id:$_id){
      _id
      name
      author
      pages
      year
      description
      category
      image
      reviews{
        _id
        review
        author{
          username
        }
        rating
        
      }
      addedBy{
        _id
        username      
      }
    }
  }
`;

export const QUERY_ME = gql`
query me {
    me{
      _id
        username
        email 
      books{
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
  }
`;

export const STRIPE_SESSION = gql`
query stripe{
  createDonation{
    url
  }
}`;