// ============= GLOBAL VARIABLES =============
	// Import modules
	import React from "react";

// ============= MAIN PROCESSES =============
	// Creating Results component
	export default class Results extends React.Component {
		constructor(props) {
			super(props);

			this.handleClick = this.handleClick.bind(this);
		}

		handleClick(event) {
			this.props.saveArticle(event.target.value);
		}

		render() {
			return (
				<div className="card">
				  <div className="card-header text-center">
				    Results
				  </div>
				  <div className="card-body">
				    {
				    	this.props.results.map((currArticle, i) => {
				    		return (
				    			<div className="card" key={i}>
									  <div className="card-body">
									    <h5>{currArticle.headline.main}</h5>
									    <button
									    	value={i} 
									    	className="btn btn-primary"
									    	onClick={this.handleClick}
									    >Save</button>
									  </div>
									</div>
				    		);
				    	})
				    }
				  </div>
				</div>
			);
		}
	}