import React, { Component } from 'react';

export  class Login extends Component {
    constructor(props){
        super(props)       
    }
    handleLogin(event){
        event.preventDefault() //this says dont go to browser event of making a server call
        alert("Thanks for submitting")
    // do some login logic here, and if successful:
   
        this.props.history.push(`/cars`)
       }
    render() {
        return (
            <div>            
                <h2>Login Form</h2>
                <form className="container bg-danger" 
                            onSubmit={(e)=>this.handleLogin(e)}>
                    User Name : <input type="text" value="Murthy" />
                    <br /><br />
                    Password : <input type="password" value="welcome" />
                    <br />
                    <input type="submit" className="btn btn-primary" 
                    value="Login"/>
                </form>
            </div>
        )
    }
}