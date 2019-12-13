import React, { Component } from 'react';
export default class  Greeting extends Component {
  render() {
    return (
      <div>
        <h1 className="bg-success"> 
           {this.props.name} - Welcome to React World
        </h1>      
      </div>
    );
  }
}
// Specifies the default values for props:
Greeting.defaultProps = {
  name: 'Murthy'
};


