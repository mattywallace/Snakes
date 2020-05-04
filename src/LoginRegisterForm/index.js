import React, { Component } from 'react'
import { Form, Button, Label } from 'semantic-ui-react'


export default class LoginRegisterForm extends Component {
	constructor() {
		super()
		this.state = {
			email:'',
			username:'',
			passsord:''
		}
	}
	render() {
		return (
			<React.Fragment>
				<Form>
					<Label>Username</Label>
					<Form.Input
						type='text'
						name='username'
						placeholder="Enter Username"
						value={this.state.username}
					/>
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
					<Button type='submit'>Log In</Button>
				</Form>
			</React.Fragment>
		)
	}
}