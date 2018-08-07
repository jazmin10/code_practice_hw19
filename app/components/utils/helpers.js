// ============= GLOBAL VARIABLES =============
	// Import modules
	import axios from "axios";

// ============= MAIN PROCESSES =============
	let helpers = {
		// Makes NYT API request
		search: (topic, startYear, endYear) => {
			let key = "c72d1829061a47beb992c7a4b26251b8";
			let queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";

			queryUrl += `api-key=${key}`;
			queryUrl += `&q=${topic}`;

			// If a start year is available, add it to the search parameters
			if (startYear !== "") {
				queryUrl += `&begin_date=${startYear}`;
			}
			
			// If an end year is available, add it to the search parameters
			if (endYear !== "") {
				queryUrl += `&end_date=${endYear}`
			}

			return axios({
				url: queryUrl,
				method: "GET"
			}).then(function(results) {
				return results.data.response.docs;
			});
		}
	}

	export default helpers;