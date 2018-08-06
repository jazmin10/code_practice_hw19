// ============= GLOBAL VARIABLES =============

	// Import modules
	const express = require("express");
	const bodyParser = require("body-parser");
	const mongoose = require("mongoose");

	mongoose.connect("mongodb://localhost/reactdb");
	const PORT = process.env.PORT || 3000;
	const app = express();
	const db = mongoose.connection;

	// Middleware
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.text());
	app.use(bodyParser.json({ type: "application/vnd.api+json" }));
	app.use(express.static("public"));

// ============= MAIN PROCESSES =============

	require("./routes/routing.js")(app);

	// If a database connection error occurs...
	db.on("error", (err) => {
		console.log("database error:", err);
	});

	// When the connection to the database is successful, start the server
	db.once("open", () => {
		app.listen(PORT, () => {
			console.log("app listening on PORT:", PORT);
		});
	});