import React from 'react'
import { Card, Button } from 'semantic-ui-react'


export default function SnakeList(props) {
	console.log("props in snakeList");
	console.log(props);
	const snakes = props.snakes.map(snake => {
		
		return(
			<Card key={snake.id} color={"black"}>
				<Card.Content textAlign={"center"}>
					<Card.Header>
						{snake.species}
					</Card.Header>
					<Card.Meta>
						{snake.picture}
					</Card.Meta>
					<Card.Meta>
						{snake.location},
						{snake.average_size}
					</Card.Meta>
					<Card.Description>
						{snake.description}
						{snake.added_by.username}
					</Card.Description>
				</Card.Content>
			</Card>

		)
	})

	return (
		<Card.Group centered={true}>
			{snakes}
		</Card.Group>
	)

}
					// <Button
					// 	basic
					// 	color='red'
					// 	onClick={ () => props.deleteSnake(snake.id) }
					// >
					// 	Delete {snake.species}
					// </Button>
					// <Button
					// 	basic
					// 	color='green'
					// 	onClick={ () => props.editSnake(snake.id) }
					// >
					// 	Edit {snake.species}
					// </Button>