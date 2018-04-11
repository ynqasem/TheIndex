import React, { Component } from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {observer} from 'mobx-react';
import axios from 'axios';

// Components
import Sidebar from './Sidebar';
import Loading from './Loading';
import AuthorsList from './AuthorsList';
import AuthorDetail from './AuthorDetail';
import BookList from './BookList';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    this.props.authorStore
      .fetchAllAuthors()
      .then(() => this.setState({loading: false}))
      .catch(err => console.error(err));
  }

  render() {
    const authorStore = this.props.authorStore;
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="content col-10">
            {this.state.loading ?
              <Loading /> :
              <Switch>
                <Route exact path='/' render={() => <Redirect to='/authors'/>}/>
                <Route path='/authors/:authorID'
                       render={
                         props => <AuthorDetail {...props} authorStore={authorStore}/>
                       }/>
                <Route path='/authors/'
                       render={
                         props => <AuthorsList {...props} authorStore={authorStore}/>
                       }/>
              </Switch>}
            </div>
          </div>
        </div>
    );
  }
}

export default withRouter(observer(App));
