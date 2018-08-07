// ============= GLOBAL VARIABLES =============
	import React from "react";
	import Query from "./Query.js";
	import Results from "./Results.js";

// ============= MAIN PROCESSES =============
	export default class Search extends React.Component {

		constructor(props) {
			super(props);

			this.state = {
				topic: "",
				startYear: "",
				endYear: "",
				results: []
			};
		}

		render() {
			{
				if (this.state.results.length === 0) {
					return (
						<Query />
					);
				}

				return (
					<div>
						<Query />
						<br />
						<Results />
					</div>
				);
			}
			
		}
	}