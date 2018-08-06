// ============= GLOBAL VARIABLES =============
	const Article = require("../models/Article.js");

// ============= FUNCTIONS =============
	let saveArticle = (request, response) => {

		let newArticle = new Article(request.body);

		newArticle.save((err, doc) => {
			if (err) throw err;

			response.json(doc);
		});
	};

	let grabArticles = (response) => {
		
		Article.find().exec((err, docs) => {
			if (err) throw err;

			response.json(docs);
		});
	};

	let deleteArticle = (request, response) => {
		console.log(request.params.id);

		Article.findByIdAndRemove(request.params.id, (err, doc) => {
			if (err) throw err;

			response.json(doc);
		});
	};	

// ============= MAIN PROCESSES =============
	module.exports = (app) => {

		// Grabs saved articles from the db
		app.get("/api/saved", (savedReq, savedResp) => {
			grabArticles(savedResp);
		});

		// Saves an article to the db
		app.post("/api/saved", (saveReq, saveResp) => {
			saveArticle(saveReq, saveResp);
		});

		// Deletes a saved article
		app.delete("/api/saved/:id", function(dltReq, dltResp) {
			deleteArticle(dltReq, dltResp);
		});
	};

