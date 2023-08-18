import React from "react";
import ReactDOM from "react-dom/client";

function BookList (){
return( 
    <>
      <Book/>
    </>
  )
}

const Book = () => {
return(
  <section>
    <BookImage />
    <BookTitle />
    <BookAuthor />
  </section>
)
}

const BookImage = () => <img src="#"></img>
const BookTitle = () => <h2>Book Title</h2>
const BookAuthor = () => <h4>Book Author</h4>


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList/>)