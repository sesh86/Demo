import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Demo from './components/Demo';
import Timer from './components/Timer';
import NavBar from './components/NavBar';
import Users from './components/Users';
import Posts from './components/Posts';

import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
    <div className="App">
      <NavBar></NavBar>
      <Route exact path="/" component={App}/>
      <Route path="/Demo" component={Demo}/>
      <Route path="/Timer" component={Timer}/>
      <Route path="/Users" component={Users}/>
      <Route path="/Posts/:id/:name" component={Posts}/>
    </div>
    </BrowserRouter>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
