import React, { Component} from 'react';

import Header from './Header'
import Footer from './Footer'

export default class HomePage extends Component {
   render() {
    return (
            <div>
            <Header company="Murthy  IT Services"/>
            <h1>Welcome to the Murthy Website!</h1>   
            <Footer/>
            </div>
    
    );
  }
}


