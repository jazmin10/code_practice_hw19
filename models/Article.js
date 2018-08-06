// ============= GLOBAL VARIABLES =============
	// Import modules
	const mongoose = require("mongoose");

	let Schema = mongoose.Schema;

// ============= MAIN PROCESSES =============

	// Define Article schema
	let ArticleSchema = new Schema({
		title: {
			type: String,
			trim: true,
			required: true
		},
		date: {
			type: Date,
			required: true
		},
		url: {
			type: String,
			trim: true,
			required: true
		}
	});

	// Create Article model
	let Article = mongoose.model("Article", ArticleSchema);

	module.exports = Article;
