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

			this.setQuery = this.setQuery.bind(this);
		}

		setQuery(topic, startYear, endYear) {
			
			this.setState({
				topic: topic,
				startYear: startYear,
				endYear: endYear
			});
		}

		render() {
			{
				if (this.state.results.length === 0) {
					return (
						<Query setQuery={this.setQuery}/>
					);
				}

				return (
					<div>
						<Query setQuery={this.setQuery}/>
						<br />
						<Results />
					</div>
				);
			}
			
		}
	}