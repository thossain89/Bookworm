import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_BOOK } from '../utils/mutations';

import Auth from '../utils/auth';

const AddBook = (props) => {
  const [formState, setFormState] = useState({
    name: '',
    author: '',
    category: '',
    description: '',
    pages: '',
    year: '',
    image: '',
  });

  const [addBook, { error, data }] = useMutation(ADD_BOOK);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    //   console.log(formState);
    try {
      const { data } = await addBook({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      name: '',
      author: '',
      category: '',
      description: '',
      pages: '',
      year: '',
      image: '',
    });
  };
  return (
    <div>
      {Auth.loggedIn() ? (
        <>
          <main className="flex-row justify-center mb-4">
            <div className="col-20 col-lg-20">
              <div className="card">
                <h4 className="card-header bg-dark text-light p-2">
                  Add Books
                </h4>
                <div className="card-body">
                  {data ? (
                    <p>
                      Success!
                      <Link to="/mybooks">Back to My Books</Link>
                    </p>
                  ) : (
                    <form onSubmit={handleFormSubmit}>
                      <input
                        className="form-input"
                        placeholder="Name of Book"
                        name="name"
                        type="text"
                        value={formState.name}
                        onChange={handleChange}
                      />
                      <input
                        className="form-input"
                        placeholder="Author"
                        name="author"
                        type="text"
                        value={formState.author}
                        onChange={handleChange}
                      />
                      <input
                        className="form-input"
                        placeholder="Category"
                        name="category"
                        type="text"
                        value={formState.category}
                        onChange={handleChange}
                      />
                      <input
                        className="form-input"
                        placeholder="Year Published"
                        name="year"
                        type="text"
                        value={formState.year}
                        onChange={handleChange}
                      />
                      <input
                        className="form-input"
                        placeholder="Number of Pages"
                        name="pages"
                        type="text"
                        value={formState.pages}
                        onChange={handleChange}
                      />
                      <input
                        className="form-input"
                        placeholder="Description"
                        name="description"
                        type="text"
                        value={formState.description}
                        onChange={handleChange}
                      />
                      <input
                        className="form-input"
                        placeholder="Add Cover Image"
                        name="image"
                        type="text"
                        value={formState.image}
                        onChange={handleChange}
                      />
                      <button
                        className="btn btn-block btn-primary"
                        style={{ cursor: 'pointer' }}
                        type="submit"
                      >
                        Add Book
                      </button>
                    </form>
                  )}

                  {error && (
                    <div className="my-3 p-3 bg-danger text-white">
                      {error.message}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </main>
        </>
      ) : (
        <p>
          You need to be logged in to add books. Please{' '}
          <Link to="/login"> login </Link> or <Link to="/signup"> signup. </Link>
        </p>
      )}
    </div>
  );
};

export default AddBook;
