import React from 'react';
import {Link} from 'react-router-dom';
import Auth from '../../utils/auth';

const BookList = ({
    books,
    title,
    showTitle = true,    
       
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
                    <p>Author:{book.author} </p>
                    <p>{book.category},{book.pages}pages</p>
                    <p>Year:{book.year}</p>
                    <img src ={book.image} alt="book cover"/>
                    
                    </h4>
                    <div className="card-body bg-light p-2"> 
                    <strong>Description:</strong>                  
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
