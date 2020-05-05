import React, { Component } from 'react'
import { Form, Button, Label, Segment } from 'semantic-ui-react'

export default class EditSnakeModel extends Component {
	constructor(props) {
		super(props)
		this.state ={
			species:'',
			family:'',
			habitat:'',
			average_size:'',
			venomous:'',
			description:'',
			picture:'',
			added_by:''
		}
	}

	render () {

		return (
			<Segment>
				<h3>Edit the Snake Info</h3>
				<Form>
					<Form.Input 
						type="text"
						name="description"
						value={this.state.description}
						placeholder="Enter new description"
					/>
					 <Form.Input 
			            type="text"
			            name="picture"
			            value={this.state.picture}
			            placeholder="Enter a new picture"
			          />
			    	<Button type='Submit'>complete changes</Button>
			    </Form>
			</Segment>
		)
	}
}