// ============= GLOBAL VARIABLES =============
	import React from "react";
	import Query from "./Query.js";
	import Results from "./Results.js";

// ============= MAIN PROCESSES =============
	export default class Search extends React.Component {
		render() {
			return (
				<div>
					<Query />
					<br />
					<Results />
				</div>
			);
		}
	}