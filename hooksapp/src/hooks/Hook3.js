//updating the state in React … without setState
/*
But now with React hooks
it’s possible to express the flow internal state change -> UI reaction without 
using an ES6 class.
*/

/*
//React hook: useState
// useState is a function exposed by the react package
   import React, { useState } from "react";


By importing useState  ,we signal the intent to hold some kind 
of state inside  React component.  It can be a pure and simple JavaScript function.

After importing useState ,pick an array containing two variables 
out of useState, and the code should go inside React component:
const [buttonText, setButtonText] = useState("Click me, please");

The argument passed to useState is the actual starting state, 
the data that will be subject to changes. useState returns  two bindings:

1. the actual value for the state
2. the state updater function for said state
*/

import React, { useState } from "react";
export default function Button() {

  const [buttonText, setButtonText] = useState("Click me, please");
  
  return (
    <button onClick={() => setButtonText("Thanks, been clicked!")}>
      {buttonText}
    </button>
  );
}