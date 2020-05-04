import React, { Component } from 'react'
import { Form, Button, Label } from 'semantic-ui-react'
import '../index.css'


export default class LoginRegisterForm extends Component {
	constructor() {
		super()
		this.state = {
			email:'',
			username:'',
			passsord:'',
			action: 'Login'
		}
	}

	switchForm = () => {
		if(this.state.action === "Login") {
			this.setState({action: 'Register'})
			console.log('switched from login to register');
		} else {
			this.setState({action: 'Login'})
			console.log('switched from regeister to login');
		}
	}
	render() {
		return (
			<React.Fragment>
			<h2> {this.state.action} here </h2>
				<Form>
				{
					this.state.action === "Register"
					&&
					<React.Fragment>
						<Label>Username:</Label>
						<Form.Input
							type='text'
							name='username'
							placeholder="Enter Username"
							value={this.state.username}
						/>
					</React.Fragment>
				}
					<Label>Email</Label>
					<Form.Input
						type='text'
						name='email'
						placeholder="Enter Email Address"
						value={this.state.email}
					/>
					<Label>Password</Label>
					<Form.Input
						type='text'
						name='password'
						placeholder="Enter Password"
						value={this.state.password}
					/>
					<Button type='submit'>
					{this.state.action === "Login" ? "Log in" : "Register"}
					</Button>
				</Form>
				{
					this.state.action === 'Login'
					?
					<p> 
						If you need an account you can sign up <span className='fake-link' onClick={this.switchForm}>Here</span>
					</p>
					:
					<p>
						Already have an account? log in <span className='fake-link' onClick={this.swicthForm}>Here</span>
					</p>
				}

				
			</React.Fragment>
		)
	}
}