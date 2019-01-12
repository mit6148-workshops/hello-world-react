import React, { Component } from "react";
import Greet from './Greet';

class App extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {

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