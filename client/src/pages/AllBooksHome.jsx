import React from 'react';
import { useQuery } from '@apollo/client';

import BookList from '../components/BookList';

import {QUERY_BOOKS} from '../utils/queries'

function AllBooksHome() {
    const { loading, data } = useQuery(QUERY_BOOKS);
    const books = data?.books || [];

    return (
        <main>
          <div className="flex-row justify-center">
            <div
              className="col-12 col-md-10 mb-3 p-3"
              style={{ border: '1px dotted #1a1a1a' }}
            >
            <h3>Welcome To Bookworm</h3> 
            <h3>Platform to discuss your favorite books</h3>   
            </div>
            <div className="col-12 col-md-8 mb-3">
              {loading ? (
                <div>Loading...</div>
              ) : (
                <BookList
                  books={books}
                  title="All Books"
                />
              )}
            </div>
          </div>
        </main>
      );
};

export default AllBooksHome
