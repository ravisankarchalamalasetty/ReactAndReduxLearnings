import React from 'react';
import './App.css';

import {Footer} from './components/Footer'
import {Header} from './components/Header'
import Dashboard from './components/Dashboard'
function App() {
  return (
    <div className="App">
       <Header title="ProcessMap" />
           <Dashboard/>
       <Footer/> 
    </div>
  );
}
export default App;
