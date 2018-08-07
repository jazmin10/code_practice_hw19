// ============= GLOBAL VARIABLES =============
	// Import modules
	import React from "react";

// ============= MAIN PROCESSES =============
	// Creating Query component
	export default class Query extends React.Component {
		render() {
			return (
				<div className="card">
				  <div className="card-header text-center">
				    Search
				  </div>
				  <div className="card-body">
				    <form>
						  <div className="form-group">
						    <label for="topic">Topic</label>
						    <input
						    	type="text" 
						    	className="form-control" 
						    	id="topic"
						    />
						  </div>
						  <div className="form-group">
						    <label for="startYear">Start Year</label>
						    <input
						    	type="text" 
						    	className="form-control" 
						    	id="startYear"
						    />
						  </div>
						  <div className="form-group">
						    <label for="endYear">End Year</label>
						    <input
						    	type="text" 
						    	className="form-control" 
						    	id="endYear"
						    />
						  </div>
						  <button type="submit" className="btn btn-primary">Submit</button>
						</form>
				  </div>
				</div>
			);
		}
	}
