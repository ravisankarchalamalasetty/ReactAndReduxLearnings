import React from "react";
import useFetch from "./UseFetch";
export default function DataLoader(props) {
  const data = useFetch("https://jsonplaceholder.typicode.com/users");
  return (
    <div>
      <ul>
        {data.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    </div>
  );
}
// CLEAN CODE with Seperation of Concern
