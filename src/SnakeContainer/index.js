import React, { Component } from 'react'
import SnakeList from '../SnakeList'

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
			console.log('here is the data we got in getSnakes in SnakeContainer:');
			console.log(snakesJson);
		} catch (err) {
			console.error("error retrieving snake data err")
		}
	}
	render() {
		return(
			<React.Fragment>
				<h2> Snake Container </h2>
				<SnakeList />
			</React.Fragment>
		)
	}
}