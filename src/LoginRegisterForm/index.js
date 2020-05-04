import React, { Component } from 'react'
import { Form, Button, Label } from 'semantic-ui-react'
import '../index.css'


export default class LoginRegisterForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			email:'',
			username:'',
			password:'',
			occupation: ''	
		}
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault()
		console.log(`You are trying to ${this.props.action.toLowerCase()} with the following credentials`)
		console.log(this.state);

		if (this.props.action === 'Register') {
			this.props.register(this.state)
		} else {
			this.props.login(this.state)
		}
	}
	render() {
		return (
			<React.Fragment>
			<h2> {this.props.action} here </h2>
				<Form onSubmit={this.handleSubmit}>
				{
					this.props.action === "Register"
					&&
					<React.Fragment>
						<Label>Username:</Label>
						<Form.Input
							type='text'
							name='username'
							placeholder="Enter Username"
							value={this.state.username}
							onChange={this.handleChange}
						/>
						<Label>Occupation</Label>
						<Form.Input
							type='text'
							name='occupation'
							placeholder="What do you do for a living?"
							value={this.state.occupation}
							onChange={this.handleChange}
						/>
					</React.Fragment>
				}
					<Label>Email</Label>
					<Form.Input
						type='email'
						name='email'
						placeholder="Enter Email Address"
						value={this.state.email}
						onChange={this.handleChange}
					/>
					<Label>Password</Label>
					<Form.Input
						type='password'
						name='password'
						placeholder="Enter Password"
						value={this.state.password}
						onChange={this.handleChange}
					/>
					<Button type='submit'>
					{this.props.action === "Login" ? "Log in" : "Register"}
					</Button>
				</Form>
				{
					this.props.action === 'Login'
					?
					<p> 
						If you need an account you can sign up <span className='fake-link' onClick={this.props.switchForm}>Here</span>
					</p>
					:
					<p>
						Already have an account? log in <span className='fake-link' onClick={this.props.switchForm}>Here</span>
					</p>
				}

			</React.Fragment>
		)
	}
}