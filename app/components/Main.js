// ============= GLOBAL VARIABLES =============
	import React from "react";
	import {Link} from "react-router";

// ============= MAIN PROCESSES =============
	export default class Main extends React.Component {
		render() {
			return (

				<div>

					{/* NAVBAR */}
					<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
					  <Link to="/" className="navbar-brand">Article Scrubber</Link>
					  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					    <span className="navbar-toggler-icon"></span>
					  </button>

					  <div className="collapse navbar-collapse" id="navbarSupportedContent">
					    <ul className="navbar-nav mr-auto">
					      <li className="nav-item">
					        <Link to="/search" className="nav-link">Search</Link>
					      </li>
					      <li className="nav-item">
					        <Link to="/saved" className="nav-link">Saved</Link>
					      </li>
					    </ul>
					  </div>
					</nav>

					<div className="container">

						{/* JUMBOTRON */}
						<div className="jumbotron text-center">
						  <h1 className="display-4">New York Times Article Scrubber</h1>
						  <p className="lead">Search for and annotate articles of interest!</p>
						</div>

						{this.props.children}
					</div>
				</div>
			);
		}
	}