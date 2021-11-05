import React, {useState, useEffect} from 'react'

function AddBook() {

    const [bookName, setBookName] = useState("");

    function handleInput(event){
        setBookName(event.target.value);
    }

    function clearBook(){
        setBookName("");
    }

    useEffect(() => {
        console.log("mounted")
    }, [bookName]);


    return (
        <div className='addbooks'>
           <h1>Add Books</h1> 
           <button onClick={clearBook}>clear</button>
            <h2>{bookName}</h2>
           <form >
               <input  onInput={handleInput} type="text" />
               </form>
        </div>
    )
}

export default AddBook
