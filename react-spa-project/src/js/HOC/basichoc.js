/*
//Arrow functions:

var sum=function(){return 42}

// same as:
var sum = () => 42
// same as:
var sum = () => {
  return 42
}

function person(name) {
  return { name: name }
}
// same as:
var person = (name) => {
  return { name: name }
}

function Employee(name,sal){
     var company="Verionz";
     this.name=name;
     this.salary=sal;
     this.show= (data)=>{
       console.log(this.name)
     }
}
var e1= new Employee("murthy",5000)
var e2 = new Employee("kiran",6000)
e1.show("xyz")


//ES6

class Employee extends React.Component{
  constructor(name,sal){
    this.name=name;
    this.salary=sal;
  }
  show(){
    console.log(this.name)
  }

}
/*
Functions as Values :
==========================
Just like numbers, strings, booleans, etc., functions are values. 

We can pass functions around like any other
 data. We can pass a function as an argument to another function:
*/

const execute = (someFunction) => someFunction()
execute(() => alert('Executed'))

var sum=function(){
  //logic
}


var dummy=function(x,y){
  return x*y
}
//Function with parameters: es6
const multiply = (x) => (x,y)=> x*y

multiply(5)(20)
//100


/*
A Functional stateless components is “pure” component
which only transform their props into HTML and call 
callback props on user interaction.

So easy to test and simple to understand and debug.

Example: FSLC - Pure functions/components
*/
function MyInput({ title, value, onValueChange }) {
  return (
    <div>
      <label>{title}</label>
      <input type="text" value={value} onChange={onValueChange} />
    </div>
  );
}

/*
Higher-Order Functions:  HOF
-------------------------
Higher-order functions are defined as functions that
 accept a function as an argument.

Eg. map   
it is a function that loops  over and applies a function 
to every element in an array. 

For example, you can square an array of numbers like so:
*/
/*
const square = (x) => x * x;

[1, 2, 3].map(square)
//=> [ 1, 4, 9 ]

//We can write our own map:
const HeroList = (heroes) => (
  <ul>
    {map((hero) => (
      <li key={hero}>{hero}</li>
    ), heroes)}
  </ul>
)

<HeroList heroes=[
  "Wonder Woman",
  "Black Widow",
  "Spider Man",
  "Storm",
  "Deadpool"
]/>

*/
/*=> (
  <ul>
    <li>Wonder Woman</li>
    <li>Black Widow</li>
    <li>Spider Man</li>
    <li>Storm</li>
    <li>Deadpool</li>
  </ul>
)*/

/*
Higher-Order Components (HOC)
------------------------------------
In React, any function that returns JSX is known as a 
Stateless Functional Component, or Functional Component . 


What is HOC?
A Higher-Order Component is a function that accepts a 
Component as an argument and returns a Component. 

*/

/*
//A basic Functional Component looks like this:
export const Title = (props) => 
                       <h1><div>{props.data}</div>
                          {props.children}
                      </h1>

<Title data="murthy">
  <div>HOC for React</div>
  <p>Testing HOC</p>
</Title>
------------------------------------------




//You can also return stateful component (HOC)
//-------------------------------------------
const withGists = (PassedComponent,) =>
  class WithGists extends React.Component {
    state = {
      gists: []
    }
    componentDidMount() {
      fetch("https://api.github.com/gists/public
      
      /")
      .then((r) => r.json())
      .then((gists) => this.setState({
        gists: gists
      }))
    }
 render() {
      return (
        <PassedComponent
          {...this.props}
          gists={this.state.gists}
        />
      )
    }
  }

const Gists = ({ gists }) => (
  <pre>{JSON.stringify(gists, null, 2)}</pre>
)

const GistsList = withGists(Gists)
<GistsList />

//=> Before api request finishes:
// <Gists gists={[]} />
// 

//=> After api request finishes:
// <Gists gists={[
//  { /* … */ 
//  { /* … */ },
//  { /* … */ }
// ]} />   

