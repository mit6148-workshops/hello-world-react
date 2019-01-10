import React, { Component } from "react";

class Greet extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		console.log(this.props.isExciting);
		return (
			<div>
				{this.props.text}{this.props.isExciting ? '!!!' : ''}
			</div>
		);
	}
}

export default Greet;