import React, { Component } from 'react';


export default class Header extends Component {
  constructor(props){
    super(props)
  }  
  render() {
    return (
      <div >         
          <h1 className="bgblack">{this.props.company}</h1>          
       </div>
    );
  }
}
/*
If we do not pass company prop, default prop will be taken
*/
Header.defaultProps={
  company:"Murthy Infotek"
}
