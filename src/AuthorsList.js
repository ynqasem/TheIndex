import React from 'react';
import {observer} from 'mobx-react';

import AuthorCard from './AuthorCard';
import SearchBar from './SearchBar';

function AuthorsList(props) {

  const authors = props.authorStore.filteredAuthors.map(author => (
    <AuthorCard key={author.first_name + author.last_name}
                author={author}/>
    )
  );

  return (
    <div className="authors">
      <h3>Authors</h3>
      <SearchBar store={props.authorStore} />
      <div className="row">
        {authors}
      </div>
    </div>
  );
}

export default observer(AuthorsList);
