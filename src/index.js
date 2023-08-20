import React from "react";
import ReactDOM from "react-dom/client";

//Images
import IronFlame from './styles/img/ironflame.jpg';

//CSS

import './styles/index.css'

function BookList (){
return( 
    <div className="wrapper">
      <Book className="one"/>
      <Book className="two"/>
      <Book className="three"/>
    </div>
  )
}

const Book = () => {
return(
  <section className="book">
    <BookImage />
    <BookTitle />
    <BookAuthor />
  </section>
)
}

const BookImage = () => <img src={IronFlame} alt="Iron Flame Cover"></img>
const BookTitle = () => <h2>Book Title</h2>
const BookAuthor = () => <h4>Book Author</h4>


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList/>)