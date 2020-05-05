import React, { Component } from 'react';
import SnakeContainer from './SnakeContainer'
import LoginRegisterForm from './LoginRegisterForm'
import './App.css';
import Header from './Header'


export default class App extends Component {
	constructor() {
		super()
		this.state = {
			loggedIn: false,
			loggedInUserEmail:'',
			action: 'Login'
		}
	}
	
	switchForm = () => {
		if(this.state.action === "Login") {
			this.setState({action: 'Register'})
			console.log('switched from login to register');
		} else {
			this.setState({action: 'Login'})
			console.log('switched from register to login');
		}
	}
	
	register = async (registerInfo) => {
		const url = process.env.REACT_APP_API_URL + "/api/v1/users/register"
		console.log(url, 'this is the url');
		try{
			const registerResponse = await fetch(url, {
				credentials:'include',
				method: 'POST',
				body: JSON.stringify(registerInfo),
				headers: {
					'Content-Type': 'application/json'
				}

			})
			console.log(registerInfo);
			console.log('registerResponse', registerResponse);
			const registerJson = await registerResponse.json()
			console.log("registerJson", registerJson);
			if(registerResponse.status === 201) {
				this.setState({
					loggedIn: true,
					loggedInUserEmail: registerJson.data.email
				})
			}
		} catch (err) {
			console.log(registerInfo);
			console.error('Error tryin to register with API');
			console.error(err)
		}
	}

	
	login = async (loginInfo) => {
		const url = process.env.REACT_APP_API_URL + '/api/v1/users/login'
		try {
			const loginResponse = await fetch(url, {
				credentials:"include",
				method:'POST',
				body: JSON.stringify(loginInfo),
				headers: {
					'Content-Type': 'application/json'
				}
			})
			console.log("loginResponse", loginResponse);
			const loginJson = await loginResponse.json()
			console.log(loginJson, ' loginjson');
			if(loginResponse.status === 200) {
				this.setState({
					loggedIn: true,
					loggedInUserEmail: loginJson.data.email
				})
			}
		} catch(error){
			console.error('error trying to log in');
			console.error(error)
		}

	}
	
	
	logout = () => {
		console.log("logout");
	}

	
	render() {
  	return (
   	 <div className="App">
   	 {
   	 	this.state.loggedIn
   	 	?
   	 	<React.Fragment>
   	 		<Header logout={this.logout} />
   	 		<SnakeContainer />
   	 	</React.Fragment> 
   	 	:
   	 	<LoginRegisterForm
   	 		login={this.login}
   	 		register={this.register}
   	 		action={this.state.action}
   	 		switchForm={this.switchForm}
   	 	 />
   	 }
   		
    </div>
  );
 }
}





