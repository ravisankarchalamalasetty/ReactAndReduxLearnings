import React from 'react'
export default class Login extends React.Component {
	constructor(props){
		super(props)
		this.state={ 
			form: { userName: 'Srirama', password: 'welcome'} 
		}
	}

onChange(event){
	this.state.form[event.target.name] = event.target.value;
	this.setState({form: this.state.form});
}

onSubmit(event) {
	event.preventDefault();
  alert(
   'Form submitted:'+ this.state.form.userName+' '+
		this.state.form.password);
  }
render(){	
	return (		
		<form className='demoForm' 
		   onSubmit={(e)=>this.onSubmit(e)}>
		<h3>Employee Form</h3>
		<TextBox name='userName'
			value={this.state.form.userName}
			onDataChange={(e)=>this.onChange(e)}/>
        <br/>
		<TextBox name='password'
			value={this.state.form.password}
			onDataChange={(e)=>this.onChange(e)}/>
       <br/>	
		<button className='btn btn-success'
			type='submit'>Login</button>
		</form>		
	);
  }
}

 const TextBox =(props)=>{	
		return (
			<input className='form-control'
				name={props.name}
				type='text'
				value={props.value}
				onChange={props.onDataChange}/>
		   );
		 }
	