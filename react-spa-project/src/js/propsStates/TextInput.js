import React, {Component} from 'react'
import TextDisplay from './TextDisplay'

export default class TextInput extends Component{
	constructor(props){
		super(props)
		this.state={inputText:'Murthy'}				
	}
	handleChange(event){
		this.setState({
			inputText:event.target.value
		})
	}	
	render(){
	return	(
		<div>
		Company : <input type="text" id="txt"/>
		<input type="text" value="xyz"/>           
			<div>Enter Name</div>
			<input type="text" 
			          value={this.state.inputText}
					  onChange={this.handleChange.bind(this)}	/>
					  
			{this.state.inputText ? console.log("valid"):console.log("No data")}
	   
			{this.state.inputText 
				 ?<TextDisplay text={this.state.inputText}/>
				 :<TextDisplay text="Enter name please"/>
			}							
		</div>
		)	
	}
}//end
