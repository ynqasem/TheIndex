import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import Loading from './Loading';
import SearchBar from './SearchBar';
import BookTable from './BookTable';

class BookList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],
      loading: true
    }
  }

  componentDidMount() {
    axios.get("https://the-index-api.herokuapp.com/api/books/")
      .then(res => res.data)
      .then(books => this.setState({
        books,
        loading: false
      }))
      .catch(err => console.error(err));
  }

  render() {
    const bookColor = this.props.match.params.bookColor;
    const books = this.state.books;
    return this.state.loading ? <Loading /> :
            <div className="books">
              <h3>Books</h3>
              <SearchBar store={{}}/>
              {bookColor &&
                <Link to="/books">
                <button className="btn">All Books</button>
              </Link>}
              <BookTable books={bookColor ? books.filter(book => book.color === bookColor) : books} />
            </div>;
  }
}

export default BookList;
