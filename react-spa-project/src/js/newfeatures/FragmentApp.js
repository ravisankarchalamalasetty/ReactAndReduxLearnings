// will error
/*
class Demo extends Component {
    render() {
      return <p>foo</p>
                <p>bar</p>
    }
  }
  */

  /*
// OK!
class Demo extends Component {
  render() {
    return (
      <div>
        <p>foo</p>
        <p>bar</p>
      </div>
    )
  }
}
  */

  // allowed in React 16
// but you'll get a warning about keys
/*
class Demo extends Component {
    render() {
      return [<p>foo</p>, <p>bar</p>]
    }
  }
*/
  //Above code allowed but 2 problems
 /*
  1. It breaks the JSX abstraction; it’s odd to now have a component 
  returning an array containing JSX elements. May  forget the commas 
  after each array item
   
  2. You have to add a key property to each element to avoid React 
     warnings, which can make the render function verbose and less easy 
     to follow.
     */

     //Fragments in React 16.2

     import React, { Fragment } from 'react'
     const FragmentApp= () => (
        <Fragment>
          <p>foo</p>
          <p>bar</p>
        </Fragment>
      )

/*
//Special Syntax
const App = (props) => (
  <>
    <p>foo</p>
    <p>bar</p>
  </>
)
*/