import React, { Component } from "react";

const person = [
	{
		id: 1,
		name: "Zubayer",
		age: 17,
	},
	{
		id: 2,
		name: "Mahmudul",
		age: 20,
	},
	{
		id: 3,
		name: "Rasel",
		age: 20,
	},
	{
		id: 4,
		name: "Najmul",
		age: 20,
	},
];

class Loop extends Component {
	render() {
		const output = person.map((person) => (
			<div key={person.id}  className="container my-5">
				<li> My Name is {person.name} </li>
				<li> My age is {person.age} </li>
			</div>
		));

		return (
			<>
				<ul>{output}</ul>
			</>
		);
	}
}

export default Loop;
