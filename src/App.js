import React from 'react';
import { Router, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Portfolio from './components/Portfolio';

import './App.css';

const history = createBrowserHistory();
const App = ({store}) => {
  return (
    <Router history={history}>
      <Route path="/" component={Portfolio}/>
    </Router>
  );
}

export default App;