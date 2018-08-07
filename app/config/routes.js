// ============= GLOBAL VARIABLES =============
	// Import modules
	import React from "react";
	import router, {Route, Router, hashHistory, IndexRoute} from "react-router";
	import Main from "../components/Main.js";
	import Search from "../components/Search.js";

// ============= MAIN PROCESSES =============
	export default (
		<Router history={hashHistory}>
			<Route path="/" component={Main}>
				<Route path="search" component={Search} />
				<IndexRoute component={Search} />
			</Route>
		</Router>
	);