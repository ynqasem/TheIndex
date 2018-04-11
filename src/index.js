import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

  import authorStore from './stores/AuthorStore';

  import App from './App';

  ReactDOM.render((
    <BrowserRouter>
      <App authorStore={authorStore}/>
    </BrowserRouter>
  ), document.getElementById('root'));
  registerServiceWorker();
