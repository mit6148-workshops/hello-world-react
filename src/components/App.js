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
		document.addEventListener('keydown', this.onKeyDown);
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

    onKeyDown = (event) => {
    	if (event.key === 'd') {
    		this.setState({
    			isExciting: !this.state.isExciting
    		})
    	}
    }
}

export default App;