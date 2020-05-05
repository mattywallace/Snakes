import React, { Component } from 'react'
import { Form, Button, Label, Segment } from 'semantic-ui-react'

export default class NewSnakeForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			species:'',
			family:'',
			average_size:'',
			venomous:'',
			description:'',
			picture:'',
			added_by:''
		}
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = (event) => {
	event.preventDefault()
	this.props.createSnake(this.state)
}
	render() {
		return (
		<Segment>
			<h3> Add a new Snake:</h3>
			<Form onSubmit={this.handleSubmit}>
				<Label>Species</Label>
				<Form.Input
					type='text'
					name='species'
					value={this.state.species}
					placeholder='Enter a species'
					onChange={this.handleChange}
				/>
				<Label>Family</Label>
				<Form.Input
					type='text'
					name='family'
					value={this.state.family}
					placeholder='Enter a family'
					onChange={this.handleChange}
				/>
				<Label>Average size</Label>
				<Form.Input
					type='text'
					name='average_size'
					value={this.state.average_size}
					placeholder='Enter the size im meters'
					onChange={this.handleChange}
				/>
				<Label>Venomous</Label>
				<Form.Input
					type='text'
					name='venomous'
					value={this.state.venomous}
					placeholder='Enter Yes if venomous: No if not'
					onChange={this.handleChange}
				/>
				<Label>Description</Label>
				<Form.Input
					type='text'
					name='description'
					value={this.state.description}
					placeholder='Enter a description'
					onChange={this.handleChange}
				/>
				<Label>picture</Label>
				<Form.Input
					type='text'
					name='picture'
					value={this.state.picture}
					placeholder='Enter image of snake'
					onChange={this.handleChange}
				/>
				<Label>Added By</Label>
				<Form.Input
					type='text'
					name='added_by'
					value={this.state.added_by}
					placeholder='Enter your name'
					onChange={this.handleChange}
				/>
			<Button type='Submit'>Create Snake</Button>
			</Form>
		</Segment>

		)
	}

}





