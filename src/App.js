import React, { Component } from 'react';
import axios from 'axios';

// Components
import Sidebar from './Sidebar';
import Loading from './Loading';
import AuthorsList from './AuthorsList';
import AuthorDetail from './AuthorDetail';


const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com"
});

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      authors: [],
      loading: true,
      currentAuthor: {}
    };

    this.selectAuthor = this.selectAuthor.bind(this);



  }


   


  componentDidMount() {
    instance.get('/api/authors/')
      .then(res => res.data)
      .then(authors => this.setState({authors, loading: false}))
      .catch(err => console.error(err));
  }

  getView() {
    if (this.state.loading) {
      return <Loading />
    } else {
      return <AuthorsList authors={this.state.authors}
      						chooseAuthorling={this.selectAuthor} />

    }

  }

  selectAuthor(newAuthorling) {
     this.setState({currentAuthor: newAuthorling})
};

  render() {
	/*const details = this.state.authors.map(author => <detail clickHandler={this.selectAuthor} author={author} />)
        return (
          <div className="jumbotron text-center">
            {details}
          </div>
        );*/
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="content col-10">
            {this.getView()}
            <AuthorDetail author={this.state.currentAuthor}/>

           
          </div>
        </div>
      </div>
    );
  }
}

export default App;
