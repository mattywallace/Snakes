import React, { Component } from 'react';
import SnakeContainer from './SnakeContainer'
import LoginRegisterForm from './LoginRegisterForm'
import './App.css';


export default class App extends Component {
	constructor() {
		super()
		this.state = {
			loggedIn: false,
			loggedInUserEmail:''

		}
	}
	render() {
  	return (
   	 <div className="App">
   	 {
   	 	this.state.loggedIn
   	 	?
   	 	<SnakeContainer />
   	 	:
   	 	<LoginRegisterForm />
   	 }
    </div>
  );
 }
}





