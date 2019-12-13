
/*
React: by enforcing a clear structure (container and functional components) and a
strict data flow (components react   to state and props change) 
now its easier than before to create well reasoned UI logic

A more concise version of the component can be 
expressed by removing the constructor using class fields.
*/

import React, { Component } from "react";
export default class Button extends Component {
  state = { buttonText: "Click me, please" };
  handleClick = () => {
    this.setState(() => {
      return { buttonText: "Thanks, been clicked!" };
    });
  };
  render() {
    const { buttonText } = this.state;// Object destructuring syntax in ES6
    return <button onClick={this.handleClick}>{buttonText}</button>;
  }
}

/*
But now with React hooks
it’s possible to express the flow internal state change -> UI reaction without 
using an ES6 class.
*/

