import React, { Component } from 'react'
import SnakeList from '../SnakeList'
import NewSnakeForm from '../NewSnakeForm'
import EditSnakeModel from '../EditSnakeModel'

export default class SnakeContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			snakes:[],
			idOfSnakeToEdit: -1
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
	deleteSnake = async (idOfSnakeToDelete) => {
		const url = process.env.REACT_APP_API_URL +"/api/v1/snakes/" + idOfSnakeToDelete
		try {
			const deleteSnakeResponse = await fetch(url, {
				credentials: 'include',
				method: "DELETE"
			})
			console.log("deleteSnakeResponse");
			const deleteSnakeJson = await deleteSnakeResponse.json()
			if (deleteSnakeResponse.status === 200) {
				this.setState({
					snakes: this.state.snakes.filter(snake => snake.id != idOfSnakeToDelete)
				})
			}
		} catch (error) {
			console.error('error deleting snake');
			console.error(error);
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
	editSnake = (idOfSnakeToEdit) => {
		console.log(' you are tyrin gto edit this snake', idOfSnakeToEdit);
		this.setState({
			idOfSnakeToEdit: idOfSnakeToEdit
		})
	} 
	render() {
		return(
			<React.Fragment>
				<h2> Snake Container </h2>
				<SnakeList 
					snakes={this.state.snakes}
					deleteSnake={this.deleteSnake}
					editSnake={this.editSnake}
				/>
				{
					this.state.idOfSnakeToEdit != -1
					&&
					<EditSnakeModel
						snakeToEdit={this.state.snakes.find((snake) => snake.id === this.state.idOfSnakeToEdit)}
					/>
				}
				<NewSnakeForm createSnake={this.createSnake}/>
			</React.Fragment>
		)
	}
}