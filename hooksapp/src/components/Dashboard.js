import React, { Component } from 'react';

//import {MyComponent} from './LodableComponent'
//Stateful Functional Component
import Button from '../hooks/Hook1'
import DataLoader from '../hooks/DataFetch2'
export class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state={'name':'Murthy'}
  }
  render() {
    return (
      <div>
                   <Button></Button>
                   
      </div>
    );
  }
}
export default Dashboard




