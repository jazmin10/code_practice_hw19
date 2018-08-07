// ============= GLOBAL VARIABLES =============
	// Import modules
	import React from "react";
	import helpers from "./utils/helpers.js";
	import {Link} from "react-router";

// ============= MAIN PROCESSES =============
	// Creating Results component
	export default class Results extends React.Component {

		constructor(props) {
			super(props);

			this.state = {
				articles: []
			};
		}

		componentDidMount() {
			helpers.savedArticles().then((response) => {
				this.setState({articles: response});
			});
		}

		render() {
			return (
				<div className="card">
				  <div className="card-header text-center">
				    Saved Articles
				  </div>
				  <div className="card-body">
				    {
				    	this.state.articles.map((currArticle, i) => {
				    		return (
				    			<div className="card" key={i}>
									  <div className="card-body">
									    <h5><Link to={currArticle.url}>{currArticle.title}</Link></h5>
									    <p>Date Saved: {currArticle.date}</p>
									    <button
									    	value={currArticle._id} 
									    	className="btn btn-danger"
									    	onClick={this.handleClick}
									    >Delete</button>
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