
import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Switch,
    Route,
    Link
  } from 'react-router-dom'

  import {App} from './App';
  
  ReactDOM.render((
    <HashRouter>
      <App />
    </HashRouter>
  ), document.getElementById('app'))
  

  /*
 const data = [
  {
  "name": "Baked Salmon",
  "ingredients": [
  { "name": "Salmon", "amount": 1, "measurement": "l lb" },
  { "name": "Pine Nuts", "amount": 1, "measurement": "cup" },
  { "name": "Butter Lettuce", "amount": 2, "measurement": "cups" },
  { "name": "Yellow Squash", "amount": 1, "measurement": "med" },
  { "name": "Olive Oil", "amount": 0.5, "measurement": "cup" },
  { "name": "Garlic", "amount": 3, "measurement": "cloves" }
  ],
  "steps": [
  "Preheat the oven to 350 degrees.",
  "Spread the olive oil around a glass baking dish.",
  "Add the salmon, garlic, and pine nuts to the dish.",
  "Bake for 15 minutes.",
  "Add the yellow squash and put back in the oven for 30 mins.",
  "Remove from oven and let cool for 15 minutes. Add the lettuce and serve."
  ]
  },
  {
  "name": "Fish Tacos",
  "ingredients": [
  { "name": "Whitefish", "amount": 1, "measurement": "l lb" },
  { "name": "Cheese", "amount": 1, "measurement": "cup" },
  { "name": "Iceberg Lettuce", "amount": 2, "measurement": "cups" },
  { "name": "Tomatoes", "amount": 2, "measurement": "large"},
  { "name": "Tortillas", "amount": 3, "measurement": "med" }
  ],
  "steps": [
  "Cook the fish on the grill until hot.",
  "Place the fish on the 3 tortillas.",
  "Top them with lettuce, tomatoes, and cheese."
  ]
  }
  ]

 import {Menu} from './propsStates/menu'
  ReactDOM.render(
    <Menu recipes={data}
         title="Delicious Recipes" />,
        document.getElementById("app")
)

*/

//import {App} from './lazyload/App'
//ReactDOM.render(<App/>,document.getElementById('root'))


/*
import App from './App';
const company="Sapient Private Limited";

ReactDOM.render(<App company={company} />, 
                    document.getElementById('app'));

*/


/*
//Shopping case study
import App from './shopping/App'
import '../css/style.css';

const products=[
    {id:2424,name:"Pendrive",price:23.45,rating:2},
    {id:4646,name:"Monitor",price:243.45,rating:3},
    {id:2784,name:"CPU",price:723.45,rating:4.5},
    {id:9820,name:"Mouse",price:283.45,rating:5}
    ];
    
ReactDOM.render(<App products={products}/>, 
                           document.getElementById('app'));
*/