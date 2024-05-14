import './Bookshelf.css';
import { useState } from "react";

function Bookshelf() {
  const [ books, setBooks ] = useState([]);
  const [ newBook, setNewBook ] = useState({
    title: '',
    author: '',
  });

  const handleInputChange = (event) => {
    setNewBook({...newBook, [event.target.name]: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks([...books, newBook]);
    setNewBook({ title: '', author: '' });
  }

  return (
    <>
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input 
            id="title" 
            name="title" 
            type="text" 
            value={newBook.title} 
            onChange={handleInputChange} 
          />
          <label htmlFor="author">Author:</label>
          <input 
            id="author" 
            name="author" 
            type="text" 
            value={newBook.author} 
            onChange={handleInputChange}
          />
          <button className="btn" type="submit">Add Book</button>
        </form>
      </div>
      <ul className="bookshelfList">
      {books.map(book => (
        <li className="bookCard">
          <div className="bookCardsDiv">
            <h2 className="bookTitle">{book.title}</h2>
            <h2 className="bookAuthor">By {book.author}</h2>
          </div>
        </li>
      ))}
      </ul>
    </>
  );
}

export default Bookshelf;