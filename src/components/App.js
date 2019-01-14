import React, { Component } from "react";
import Greet from './Greet';

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isExcited: true
		}
	}

	componentDidMount() {

	}

	onKeyDown = (event) => {
		// FILL IN YOUR CODE HERE
	}

	render() {
		return (
			<div id="app">
				<Greet text="henlo"/>
				<Greet text="goodbye"/>
				<Greet text="quack"/>
			</div>
		);
	}
}

export default App;