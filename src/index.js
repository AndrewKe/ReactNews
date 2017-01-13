import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import Posts from './Components/Posts';
import Login from './Components/Login';
import NewPost from './Components/NewPost';
import './index.css';
import { Router, Route, hashHistory, IndexRoute} from 'react-router'


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component = {Posts}/>
      <Route path = "/login" component = {Login}/>
      <Route path = "/post" component = {NewPost}/>
    </Route>
  </Router>
),document.getElementById('root'));
