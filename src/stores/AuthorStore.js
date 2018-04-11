import {decorate, observable, computed} from 'mobx';
import axios from 'axios';

class AuthorStore {
  constructor() {
    this.authors = [];
    this.query = "";
    this.loading = true;
    
    this.fetchAllAuthors();
  }

  fetchAllAuthors() {
    return axios.get('https://the-index-api.herokuapp.com/api/authors/')
            .then(res => res.data)
            .then(authors => {
              this.authors = authors;
              this.loading = false;
            })
            .catch(err => console.error(err));
  }

  get filteredAuthors() {
    return this.authors.filter(author => {
      return `${author.first_name} ${author.last_name}`
                .toLowerCase()
                .includes(this.query);
    });
  }

  getAuthorById(id) {
    return this.authors.find(author => author.id == id);
  }
}

decorate(AuthorStore, {
  authors: observable,
  query: observable,
  loading: observable,
  filteredAuthors: computed
})

export default new AuthorStore();
