import {extendObservable} from 'mobx';
import axios from 'axios';

class AuthorStore {
  constructor() {
    extendObservable(this, {
      authors: []
    });
  }

  fetchAllAuthors() {
    return axios.get('https://the-index-api.herokuapp.com/api/authors/')
            .then(res => res.data)
            .then(authors => {
              this.authors = authors
            })
            .catch(err => console.error(err));
  }

  getAuthorById(id) {
    return this.authors.find(author => author.id == id);
  }
}

export default new AuthorStore();
