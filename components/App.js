import React, { Component } from "react";
import Greet from 'Greet.js';

class App extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<Greet text="henlo"/>
			<Greet text="goodbye"/>
			<Greet text="whee"/>
		);
	}
}

export default App;