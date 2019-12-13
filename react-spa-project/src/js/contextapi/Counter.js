import React from 'react'
import NumberContext from "./context";
//subscriber
export const Counter=()=>{
    return (
      //by using consumer we are using value in our component.
      // we need to use a function to get our value
      <NumberContext.Consumer>
           {(val) => <h1>{val} 💪</h1>}
      </NumberContext.Consumer>
    );
  }