import React, { Component } from "react";
import Greet from './Greet';

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
            isExciting: false
        };
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({
			isExciting: !this.state.isExciting
			})
		}, 4000);
	}

	render() {
		return (
			<div id="app">
				<Greet text="henlo" isExciting={this.state.isExciting}/>
				<Greet text="goodbye" isExciting={this.state.isExciting}/>
				<Greet text="whee" isExciting={this.state.isExciting}/>
			</div>
		);
	}
}

export default App;