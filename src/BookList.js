import React, {Component} from 'react';
import SearchBar from './SearchBar';
import BookRow from './BookRow';
import axios from 'axios';



class BookList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: this.props.books,
      filteredBooks: this.props.books,
    }

    this.filterBooks = this.filterBooks.bind(this);
  }

  //  componentDidMount() {
  //   axios.get('https://the-index-api.herokuapp.com/api/books/')
  //     .then(res => res.data)
  //     .then(books => this.setState({
  //       books,
  //       loading: false,
  //     }))
  //     .catch(err => console.error(err));
  // }

  filterBooks(query) {
    query = query.toLowerCase()
    let filteredBooks = this.state.books.filter(book => {
      return `${book.title}`.toLowerCase().includes(query);
    });
    this.setState({filteredBooks})
  }

  render() {
    const books = this.state.filteredBooks.map(book => (
      <BookRow key={book.title}
        	   book={book} />
      ));

    return (
      <div className="books col-xs-10" >
        <h3>Books</h3>
        <SearchBar changeHandler={this.filterBooks} />
        <table>
        	<thead className='mt-3 table'>
        		<tr>
        			<th>Name</th>
              		<th>Authors</th>
              		<th>Color</th>
              	</tr>
            </thead>
            <tbody>
            	{books}
            </tbody>
        </table>
      </div>
    );
  }
}



export default BookList;