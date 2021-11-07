import React from 'react';
import { useMutation } from '@apollo/client';
import { REMOVE_REVIEW } from '../../utils/mutations';
import { QUERY_BOOKS } from '../../utils/queries';
import DeleteIcon from '@mui/icons-material/DeleteForeverOutlined';
import { IconButton } from '@mui/material';



const ReviewList = ({ book }) => {

  const [RemoveReview, { error }]= useMutation(REMOVE_REVIEW, {
    refetchQueries:mutationResult => [{query:QUERY_BOOKS}]
  });

  if (!book?.reviews?.length) {
    return <h3>No Reviews Yet</h3>;
  }
  
  
  return (
    <>
      <h3
        className="p-5 display-inline-block"
        style={{ borderBottom: '1px dotted #1a1a1a' }}
      >
        Reviews
      </h3>
      <div className="flex-row my-4">
      {book?.reviews?.map((review) => (
            <div key={review._id} className="col-12 mb-3 pb-3">
              <div className="p-3 bg-dark text-light">
                <h5 className="card-header">
                  {review.author.username} commented{' '}
                </h5>
                <p className="card-body">Rating: {review.rating}<br/>{review.review}</p>
                <IconButton 
                edge="end" 
                aria-label="delete" 
                onClick={()=>RemoveReview({variables:{bookId: book._id, reviewId:review._id}})}
                >
                  <DeleteIcon style={{ color: 'red' }}/>
                </IconButton>
                
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ReviewList;