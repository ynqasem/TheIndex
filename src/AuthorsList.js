import React, {Component} from 'react';
import {observer} from 'mobx-react';

import AuthorCard from './AuthorCard';
import SearchBar from './SearchBar';

class AuthorsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filteredAuthors: this.props.authors
    }

    this.filterAuthors = this.filterAuthors.bind(this);
  }

  filterAuthors(query) {
    query = query.toLowerCase()
    let authors = this.props.authorStore.authors;
    let filteredAuthors = authors.filter(author => {
      return `${author.first_name} ${author.last_name}`.toLowerCase().includes(query);
    });
    this.setState({filteredAuthors})
  }

  render() {
    const authors = this.state.filteredAuthors.map(author => (
      <AuthorCard key={author.first_name + author.last_name}
        author={author} />
      ));

    return (
      <div className="authors">
        <h3>Authors</h3>
        <SearchBar changeHandler={this.filterAuthors} />
        <div className="row">
          {authors}
        </div>
      </div>
    );
  }
}

export default observer(AuthorsList);
