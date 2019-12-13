import React ,{Fragment} from 'react';
export default class UsingRefs extends React.Component {
   constructor(props) {
      super(props);		
      // props.x="hello"  not allowed as props are immutable
      this.state = {
         data: 'React'
      }      
   };
   updateState(e) {
      this.setState({data: e.target.value});
   }
   clearInput() {      
      alert(this.refs.myInput.value)
      this.setState({data: ''});
      this.refs.myInput.focus()
  
   }
   render() {
      return (
         <div>
            Name :<input value = {this.state.data} 
                onChange = {(e)=>this.updateState(e)} 
                ref = "myInput" id="txt1" />
           <br/>
           Password:<input type="text" ref="pwd"/>
            <button onClick = {(e)=>this.clearInput(e)}>CLEAR</button>
            <h4>{this.state.data}</h4> 
            <FragmentApp title="Testing Fragments"/>           
         </div>
      );
   }
}
const FragmentApp= (props) => ( 
   <Fragment>
     <p>I am Paragraph 1</p>
     <p>I am Paragraph 2</p>
     <h1>{props.title}</h1>
   </Fragment>
 )


// Another way
 class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  render() {
    return <input type="text" ref={this.inputRef} />;
     }
  componentDidMount() {
    this.inputRef.current.focus();
  }
}


/*
// Ref in Stateless functional component
const AddColorForm = ({onNewColor=f=>f}) => {
let _title, _color
const submit = e => {
e.preventDefault()
onNewColor(_title.value, _color.value)
_title.value = ''
_color.value = '#000000'
_title.focus()
}
return (
<form onSubmit={submit}>
<input ref={input => _title = input}
type="text"
placeholder="color title..." required/>
<input ref={input => _color = input}
type="color" required/>
<button>ADD</button>
</form>
)
}

*/

/*
ES6
let, const
Fat arrow operator
object destructuring
class
inheriance
template literal
for of (iterator)   not for-in

Promise (featch)
rest opertor vs spread ( ...state)
Module (import / export )

Default/optinal   - ES6
sum(x=1,y?=1){
  return x+y
}
sum(10)
*/