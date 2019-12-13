//fetching data with useEffect
/*
useEffect serves the same purpose as componentDidMount, componentDidUpdate, 
and componentWillUnmount in React classes, but unified into a single API”.

The component becomes a function and fetch gets called inside useEffect. 
Instead of calling this.setState  use setData (an arbitrary function extracted from useState):

“useEffect serves the same purpose as componentDidMount, 
componentDidUpdate, and componentWillUnmount“

If you call useEffect like would see an infinite loop. And for solving this “bug” 
we need to pass an empty array as a second argument to useEffect:
*/

import React, { useState, useEffect } from "react";
export default function DataLoader() {
  const [data, setData] = useState([]);

  /*  Bad practise - there is bug without []
useEffect(() => {
    fetch("http://localhost:3001/links/")
      .then(response => response.json())
      .then(data => setData(data));
  }); // << super important array
*/

// Bug fixed with [] 
useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setData(data));
  },[]);// without array, it is going to infinte loop (bug) .. fix it with []
  return (
    <div>
      <ul>
        {data.map(el => (
          <li key={el.id}>{el.name}- {el.email}</li>
        ))}
      </ul>
    </div>
  );
}


