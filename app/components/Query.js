// ============= GLOBAL VARIABLES =============
	// Import modules
	import React from "react";

// ============= MAIN PROCESSES =============
	// Creating Query component
	export default class Query extends React.Component {
		constructor(props) {
			super(props);

			this.state = {
				topic: "",
				startYear: "",
				endYear: ""
			};

			this.handleChange = this.handleChange.bind(this);
			this.handleSubmit = this.handleSubmit.bind(this);
		}

		// Handles form change (triggered anytime there is a key change)
		handleChange(event) {
			let input = {};
			input[event.target.id] = event.target.value;
			this.setState(input);
		}

		// Handles form submission: sends input to Search component
		handleSubmit() {
			this.props.setQuery(this.state.topic, this.state.startYear, this.state.endYear);
		}

		render() {
			return (
				<div className="card">
				  <div className="card-header text-center">
				    Search
				  </div>
				  <div className="card-body">
				    <form onSubmit={this.handleSubmit}>
						  <div className="form-group">
						    <label htmlFor="topic">Topic</label>
						    <input
						    	type="text" 
						    	className="form-control" 
						    	id="topic"
						    	value={this.state.topic}
						    	onChange={this.handleChange}
						    />
						  </div>
						  <div className="form-group">
						    <label htmlFor="startYear">Start Year</label>
						    <input
						    	type="text" 
						    	className="form-control" 
						    	id="startYear"
						    	value={this.state.startYear}
						    	onChange={this.handleChange}
						    />
						  </div>
						  <div className="form-group">
						    <label htmlFor="endYear">End Year</label>
						    <input
						    	type="text" 
						    	className="form-control" 
						    	id="endYear"
						    	value={this.state.endYear}
						    	onChange={this.handleChange}
						    />
						  </div>
						  <button type="submit" className="btn btn-primary">Submit</button>
						</form>
				  </div>
				</div>
			);
		}
	}
