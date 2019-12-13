import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home';
import AddStudent from './Components/AddStudent';
import ViewStudents from './Components/ViewStudents';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory({ basename: 'demo-app'});

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Murthy Infotek Online Training Center</h2>
        <p>mail:dsrmurthy786@yahoo.com</p>
        <Router history={history}>
          <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/add-student" component={AddStudent} />
            <Route exact path="/view-students" component={ViewStudents} />
          </div>
        </Router>
        <h3>Copyright Reserved to DSR Murthy</h3>
      </div>
    );
  }
}

export default (App);
