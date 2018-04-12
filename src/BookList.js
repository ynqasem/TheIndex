
import {Link} from 'react-router-dom';
import axios from 'axios';

import React from 'react';
import {observer} from 'mobx-react';

import Loading from './Loading';
import SearchBar from './SearchBar';
import BookTable from './BookTable';
import BookRow from './BookRow';




function BooksList(props) {

  return (
    <div className="books">
      <h3>Books</h3>
      <SearchBar store={props.bookStore} />
      <div className="row">
        <BookTable books={props.bookStore.filteredBooks}/>
      </div>
    </div>
  );
}

export default observer(BooksList);



  
