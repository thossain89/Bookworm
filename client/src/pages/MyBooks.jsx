import React from 'react'
import {useQuery} from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
export default function MyBooks() {

    // get the 'me' query
    const {data, loading} = useQuery(QUERY_ME);



    // get all the books from me



    // show the books
    function renderBooks(books){
        return (
            <ul>
                {books.map((book) => {

                    return (<li key={book._id} >{book.name}</li>)

                })}
            </ul>
        )
    }



    return (
        <div>
            {loading && (<p>Loading...</p>)}
            {!loading && renderBooks(data.me.books)}
        </div>
    )
}
