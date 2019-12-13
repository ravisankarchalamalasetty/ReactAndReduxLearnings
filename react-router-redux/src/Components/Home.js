import React, { Component } from 'react';
import MenuBar from './MenuBar';

class Home extends React.Component {

  render() {
    return (
      <div>
        <MenuBar/>
        <h1>Welcome to the Online Training Programme</h1>
        <h2>Technologies Offered Online</h2>
      <ul>
        <li>React with Redux & Mobx</li>
        <li>Angular 8 with AMD</li>
        <li>Devops with Docker Microservies</li>
        <li>AWS cloud administration</li>
        <li>Dotnet Core 3.0</li>
        <li>Node js with MongoDB 4.x</li>
      </ul>
      </div>
    );
  }

}

export default (Home);
