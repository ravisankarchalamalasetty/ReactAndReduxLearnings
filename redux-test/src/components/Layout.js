import React from "react";
import Home from "./Home"
import Clock from "./clock";
export default class Layout extends React.Component{
	render(){	
		return(
			<div>
				 <h1>Murthy's Calculator</h1>
				 <Home/>
				 <Clock/>		
			</div>
		);
	}
}