// ============= GLOBAL VARIABLES =============
	import React from 'react';

// ============= MAIN PROCESSES =============
	export default class Main extends React.Component {
		render() {
			return (
				<div className="container">

					{/* JUMBOTRON */}
					<div className="jumbotron text-center">
					  <h1 className="display-4">New York Times Article Scrubber</h1>
					  <p className="lead">Search for and annotate articles of interest!</p>
					</div>

					{this.props.children}
				</div>
			);
		}
	}