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
	render() {
		return (
		<Segment>
			<h3> Add a new Snake:</h3>
			<Form>
				<Label>Species</Label>
				<Form.Input
					type='text'
					name='species'
					value={this.state.species}
					placeholder='Enter a species'
				/>
				<Label>Family</Label>
				<Form.Input
					type='text'
					name='family'
					value={this.state.family}
					placeholder='Enter a family'
				/>
				<Label>Average size</Label>
				<Form.Input
					type='text'
					name='average_size'
					value={this.state.average_size}
					placeholder='Enter the size im meters'
				/>
				<Label>Venomous</Label>
				<Form.Input
					type='text'
					name='venomous'
					value={this.state.venomous}
					placeholder='Enter Yes if venomous: No if not'
				/>
				<Label>Description</Label>
				<Form.Input
					type='text'
					name='description'
					value={this.state.description}
					placeholder='Enter a description'
				/>
				<Label>picture</Label>
				<Form.Input
					type='text'
					name='picture'
					value={this.state.picture}
					placeholder='Enter image of snake'
				/>
				<Label>Added By</Label>
				<Form.Input
					type='text'
					name='added_by'
					value={this.state.added_by}
					placeholder='Enter your name'
				/>
			<Button type='Submit'>Create Snake</Button>
			</Form>
		</Segment>

		)
	}

}





