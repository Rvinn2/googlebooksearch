import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Collection extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.getBooks();
  }

  getBooks = () => {
    axios
      .get("/api/books")
      .then(cars => {
        console.log(books);
        this.setState({ books: books.data.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <h1>Collection of Books</h1>
        {this.state.books.map((book, i) => (
          <div key={book._id}>
            <p>Title: {book.titile}</p>
            <p>Author: {book.author}</p>
            <p>Image: {book.image}</p>
            <p>Description: {book.description}</p>
            <p>Link: {book.link}</p>
            <Link to={"/collection/" + car._id}>Link</Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Collection