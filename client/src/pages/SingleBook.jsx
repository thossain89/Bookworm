import React from 'react';


import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import ReviewList from '../components/ReviewList';
import ReviewForm from '../components/ReviewForm';

import { QUERY_SINGLE_BOOK } from '../utils/queries';

const SingleBook = () => {
  
  const { id } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_BOOK, {
    
    variables: { _id: id },
  });

  const book = data?.book || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className="my-3">      
      <h2>{book.name}</h2>
      <h3>by {book.author}</h3>

      <div className="my-5">
        <ReviewList reviews={book.reviews} />
      </div>
      <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <ReviewForm bookId={book._id} />
      </div>
    </div>
  );
};

export default SingleBook;