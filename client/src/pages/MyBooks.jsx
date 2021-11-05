import React from 'react'
import {useQuery} from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import BookList from '../components/BookList';

export default function MyBooks() {
    const { loading, data } = useQuery(QUERY_ME);
    const me = data?.me || [];
    return (
         
            <div className="flex-row justify-center">                
                <div className="col-12 col-md-8 mb-3">
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <BookList
                    books={me.books}
                    title="My Books"
                    />
                )}
                </div>
            </div>            
    )       
};




