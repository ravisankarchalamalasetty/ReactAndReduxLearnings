import React, { Component } from 'react';
import "./context.css";
import NumberContext from "./context";

//subscriber
const Counter=()=>{
  
  return (
    //by using consumer we are using value in our component.
    // we need to use a function to get our value
    <NumberContext.Consumer>
         {(val) => <h1>{val} 💪</h1>}
    </NumberContext.Consumer>
  );
}
export default class ContextApp extends Component {
  constructor(props){
    super(props)
    this.state = {
       number: 0
  };
  this. onDecHandler=this.onDecHandler.bind(this);
  this. onIncHandler=this.onIncHandler.bind(this);
}
  //Increment
  onIncHandler() {
    this.setState({
      number: this.state.number + 1
    });
  };
  //Decrement
  onDecHandler(){
    this.setState({
      number: this.state.number - 1
    });
  };
  render() {
    return (
     <div>
          <h1 className="App-title">React Context APi v16.x</h1>
        {
          /* by using provider we are providing value to the 
              counter component */
        }
        <NumberContext.Provider value={this.state.number}>
             <Counter />                 
        </NumberContext.Provider>     
        <button onClick={this.onIncHandler}  className="btn">
               Increment
        </button>
        <button onClick={this.onDecHandler} className="btn">
              Decrement
        </button>        
      </div>
    );
  }
}


