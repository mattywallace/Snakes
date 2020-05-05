import React, { Component } from 'react'
import SnakeList from '../SnakeList'
import NewSnakeForm from '../NewSnakeForm'

export default class SnakeContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			snakes:[]
		}
	}
	
	componentDidMount(){
		this.getSnakes()
	}

	
	getSnakes = async () => {
		try {
			const url = process.env.REACT_APP_API_URL + "/api/v1/snakes/"
			const snakesResponse = await fetch(url, {
				credentials: 'include'
			})
			console.log('trying to fetch data form:');
			console.log(url);
			console.log('here is the response from the fetch call:');
			console.log(snakesResponse);
			const snakesJson = await snakesResponse.json()
			this.setState({
				snakes: snakesJson.data
			})
			console.log('here is the data we got in getSnakes in SnakeContainer:');
			console.log(snakesJson);
		} catch (err) {
			console.error("error retrieving snake data err")
		}
	}
	createSnake = async (snakeToAdd) => {
		console.log('here is the snake you are tyring to add');
		console.log(snakeToAdd);
		try {
			const url = process.env.REACT_APP_API_URL + "/api/v1/snakes/"
			const createSnakeResponse = await fetch(url, {
				credentials: 'include',
				method:'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(snakeToAdd)

			})
			const createSnakeJson = await createSnakeResponse.json()
			console.log(createSnakeJson);
			if(createSnakeResponse.status === 201) {
				this.setState({
					snakes: [...this.state.snakes, createSnakeJson.data]
				})
			}
		} catch(error) {
			console.error("error adding snake");
			console.error(error)
		}
	}
	
	render() {
		return(
			<React.Fragment>
				<h2> Snake Container </h2>
				<SnakeList snakes={this.state.snakes}/>
				<NewSnakeForm createSnake={this.createSnake}/>
			</React.Fragment>
		)
	}
}