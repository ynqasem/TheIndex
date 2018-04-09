import React, {Component} from 'react';
import axios from 'axios';

import Loading from './Loading';
import BookTable from './BookTable';

class AuthorDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: {}
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.authorID !== this.props.match.params.authorID) {
      this.getAuthor();
    }
  }

  componentDidMount() {
    this.getAuthor();
  }

  getAuthor() {
    const authorID = this.props.match.params.authorID
    this.setState({loading: true});
    axios.get(`https://the-index-api.herokuapp.com/api/authors/${authorID}/`)
    .then(res => res.data)
    .then(author => this.setState({author, loading: false}))
    .catch(err => console.error(err));
  }

  render() {
    const author = this.state.author;
    return this.state.loading ? <Loading /> :
      <div className="author col-xs-10">
        <div>
          <h3>{author.first_name} {author.last_name}</h3>
          <img src={author.imageUrl} className="img-thumbnail"/>
        </div>
        <BookTable books={author.books} />
      </div>;
  }
}

export default AuthorDetail;
