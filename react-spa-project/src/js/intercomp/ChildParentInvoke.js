import React from 'react';
//Parent component
export default class ChildParentInvoke extends React.Component {
   constructor(props) {    
      super(props)      
      this.state = {
         data: 'Initial data...'
      }
      //Better Practise
      //this.updateState = this.updateState.bind(this);
      //above line is not required if we use Fat arrow syntax 
   };
   // event handler in Parent
   updateState(event) {
      this.setState({data: event.target.value})   
      console.log(event.target.value)  
   }
   render() {
      return (
         <div>
           <h1 className='text-success'>Parent component</h1>
           <h2 className='text-danger bg-success'>
                    {this.state.data} </h2>
           <br/>
           <h2 >Child Component</h2> <br/>            
           <Content myDataProp = {this.state.data} 
               updateStateProp = {(event)=>this.updateState(event)}>
            </Content>         
            
            <ContentSibling data={this.state.data}></ContentSibling>
         </div>
      );
   }
}
//----------------------------------------------------------
//Child Component
const Content=(props)=>{
      return (
         <div>           
            <input type = "text" value = {props.myDataProp} 
               onChange = {props.updateStateProp} />               
                         
         </div>
      );
   }
 const ContentSibling=(props)=>{
    return (
       <div>
          <h4>{props.data}</h4>             
       </div>
    );
 }
//end