// ============= GLOBAL VARIABLES =============
	import React from "react";
	import Query from "./Query.js";
	import Results from "./Results.js";
	import helpers from "./utils/helpers.js";

// ============= MAIN PROCESSES =============

	// Creating Search component
	export default class Search extends React.Component {

		constructor(props) {
			super(props);

			this.state = {
				count: 5,
				topic: "",
				startYear: "",
				endYear: "",
				results: []
			};

			this.setQuery = this.setQuery.bind(this);
			this.runQuery = this.runQuery.bind(this);
			this.saveArticle = this.saveArticle.bind(this);
		}

		// When new search parameters are submitted, search for articles
		componentDidUpdate(prevProps, prevState) {

			// If the topic, start year, and end year change, then...
			if (prevState.topic !== this.state.topic
				|| prevState.startYear !== this.state.startYear
				|| prevState.endYear !== this.state.endYear) {

				// search for articles
				this.runQuery();
			}
		}

		// Grabs article search results
		runQuery() {

			// Make nyt api request and then...
			helpers.search(this.state.topic, this.state.startYear, this.state.endYear)
			.then((response) => {
				
				var resultsArr = [];

				for (let i = 0; i < this.state.count; i++) {
					resultsArr.push(response[i]);
				}

				// Set this.state.results to the top 5 article results
				this.setState({results: resultsArr});

			});
		}

		// Sets topic, startYear, and endYear based on form input
		setQuery(topic, startYear, endYear) {

			this.setState({
				topic: topic,
				startYear: startYear,
				endYear: endYear
			});
		}

		// Saves an article to the db
		saveArticle(index) {
			let article = this.state.results[index];

			let articleInfo = {
				title: article.headline.main,
				url: article.web_url,
				date: article.pub_date
			};

			helpers.save(articleInfo).then(() => {
				this.state.results.splice(index, 1);
				this.setState({ results: this.state.results });
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
						<Results results={this.state.results} saveArticle={this.saveArticle} />
					</div>
				);
			}
			
		}
	}