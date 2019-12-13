import React, { Component } from "react";
export default class Button extends Component {
  state = { buttonText: "Click me, please" };
  handleClick = () => {
    this.setState(() => {
      return { buttonText: "Thanks, been clicked!" };
    });
  };
  render() {
    const { buttonText ,x} = this.state;
    return <button onClick={this.handleClick}>{buttonText}</button>;
  }
}

/*
So, in the beginning there was setState
 (and still it will be). But keep calm.
  The style above is perfectly fine and ES6 classes 
  in React won’t go away anytime soon.

But now with React hooks it’s possible to express 
the flow internal state change -> UI reaction 
without using an ES6 class.

*/