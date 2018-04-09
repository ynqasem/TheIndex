import React, {Component} from 'react';

import SearchBar from './SearchBar';
import BookTable from './BookTable';

class BookList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: this.props.books,
      filteredBooks: this.props.books
    }

    this.filterBooks = this.filterBooks.bind(this);
  }

  filterBooks(query) {
    query = query.toLowerCase()
    let filteredBooks = this.state.books.filter(book => {
      return `${book.title}`.toLowerCase().includes(query);
    });
    this.setState({filteredBooks})
  }

  render() {
    return (
      <div className="books">
        <h3>Books</h3>
        <SearchBar changeHandler={this.filterBooks} />
        <BookTable books={this.state.filteredBooks} />
      </div>
    );
  }
}

export default BookList;
