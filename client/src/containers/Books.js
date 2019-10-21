import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


class Collection extends Component {
  state = {
    books: [],
    search: ""
  };

//   componentDidMount() {
//     this.getBooks();
//   }

  getBooks = () => {
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=title:Harry Potter")
      .then(books => {
        console.log(books);
        this.setState({ books: books.data.items });
      })
      .catch(err => {
        console.log(err);
      });
     
  };
  
    handleChange = event => {
      let value = event.target.value;
      let name = event.target.name;
  
      this.setState({
        [name]: value
      });
    };
  
    handleFormSubmit = event => {
      event.preventDefault();
      // console.log(this.state);
      axios
      .get("https://www.googleapis.com/books/v1/volumes?q=title:" + this.state.search)
      .then(books => {
        console.log(books);
        this.setState({ books: books.data.items });
      })
      .catch(err => {
        console.log(err);
      });        
    };
  render() {
    return (
      <div>
        <h1>Collection of Books</h1>
        <form>
          <div className="form-group">
            <input
              type="text"
              placeholder="Book"
              onChange={this.handleChange}
              name="search"
              value={this.state.search}
            />
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.handleFormSubmit}
            >
              Submit
            </button>
          </div>
          </form>
        <Link to="/Search" >Search Books</Link>
        {this.state.books.map((book, i) => (
          <div key={book.id}>
            <p>Title: {book.volumeInfo.title}</p>
            <p>Author: {book.volumeInfo.authors}</p>
            <img src= {book.volumeInfo.imageLinks.thumbnail} ></img>
            <p>Description: {book.volumeInfo.description}</p>
            <p>Link: {book.link}</p>
            <Link to={"/collection/" + book._id}>Link</Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Collection