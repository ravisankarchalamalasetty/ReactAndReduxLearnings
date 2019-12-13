import React from 'react'
export default class Noncontext extends React.Component{
    state={
        name:'Murthy',
        salary:5000,
        job:'Engineer'
    }
    render(){
        return (
            <div>
                <p>I am Main App</p>
                <Person name={this.state.name}/>

                
            </div>
        )
    }
}

class Person extends React.Component{
    render(){
        return (
            <div>
                <p>Hi! I am {this.props.name}</p>
                <Family name={this.state.name}/>
            </div>
        )
    }
}

const Family=()=>{
    return(
        <div>
            < Person/>
        </div>
    )
}