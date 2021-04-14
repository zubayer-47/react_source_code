import React from "react";
// import PropTypes from "prop-types";

class Input extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	//       date: new Date()
	//    }
	// }

	// state = {
	// 	date: new Date(),
	// };

	// handleClick = () => {
	// 	this.intervalID = setInterval(() => {
	// 		this.setState({
	// 			date: new Date(),
	// 		});
	// 	}, 1000);
	// };

	// stopClock = () => {
	//    clearInterval(this.intervalID)
	// }

	// componentDidMount() {
	//    this.intervalID = setInterval(() => {
	// 		this.setState({
	// 			date: new Date(),
	// 		});
	// 	}, 1000);
	// }

	// componentWillUnmount() {
	//    clearInterval(this.intervalID)
	// }

	// state = {
	// 	name: "",
   //    isChecked: false
	// };

	// handleChange = (event) => {
	// 	this.setState({
	// 		name: event.target.value,
	// 	});
	// };


   // handleCheckBox = event => {
   //    this.setState({
   //       isChecked: !this.state.isChecked
   //    })
   // }

	render() {
		return (
			<div className="container">
				<h1> Hello </h1>
				<input
					type="text"
					className="form-control"
					placeholder="name"
					value={this.state.name}
					onChange={this.handleChange}
				/>
				{this.state.name ? <h3>Welcome, {this.state.name} </h3> : null}

				<div>
					<input type="checkbox" onChange={this.handleCheckBox} /> Male
				</div>
				<button disabled={!this.state.isChecked}> send </button>
			</div>
		);
	}
}

// Input.defaultProps = {
// 	anotherName: "Zubayer",
// };

// Input.propTypes = {
// 	anotherName: PropTypes.string.isRequired,
// };

export default Input;
