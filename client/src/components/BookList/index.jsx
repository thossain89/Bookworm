import React from 'react';
import {Link} from 'react-router-dom';
import Auth from '../../utils/auth';

const BookList = ({
    books,
    title,
    showTitle,    
       
}) => {   

    return (

        <div>    
        {Auth.loggedIn() ? (
            <>
               {showTitle && <h3>{title}</h3>}                
                {books && books.map((book) => (
                <div key={book._id} className="card mb-3">
                    <h4 className="card-header bg-primary text-light p-2 m-0">
                    <p> {book.name} </p>
                    <p> {book.author} </p>
                    <p> {book.year} </p>
                    </h4>
                    <div className="card-body bg-light p-2">
                    <p>{book.category}</p>
                    <p>{book.pages}</p>
                    <p>{book.description}</p>
                    </div>
                    <Link
                    className="btn btn-primary btn-block btn-squared"
                    to={`/book/${book._id}`}
                    >
                    Join the discussion on this book.
                    </Link>
                </div>
                
                ))}
                
            </>

            ) : (
                <p>
                You need to be logged in to see all the books. Please{' '}
                <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
                </p>
            )
            
        }
        </div>
    );   
};

export default BookList
