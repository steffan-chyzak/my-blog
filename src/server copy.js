import express from "express";
import bodyParser from "body-parser";

//npx babel-node src/server.js    to run server.
// ctrl c  will stop the server
// install node demon via   npm install --save-dev nodemon
// then run   npx nodemon --exec npx babel-node src/server.js   we are telling nodemon to run whatever command we put after the --exec. This refreshes the server when our files change.

// Test data below to run locally if you're not running it in a database remotely.
// const articlesInfo = {
// 	"learn-react": {
// 		upvotes: 0,
// 		comments: [],
// 	},
// 	"learn-node": {
// 		upvotes: 0,
// 		comments: [],
// 	},
// 	"my-thoughts-on-resumes": {
// 		upvotes: 0,
// 		comments: [],
// 	},
// };

const app = express();

app.use(bodyParser.json());

app.post("/api/articles/:name/upvote", (req, res) => {
	const articleName = req.params.name;

	articlesInfo[articleName].upvotes += 1;
	res.status(200).send(`${articleName} now has ${articlesInfo[articleName].upvotes} upvotes!`);
});

app.post("/api/articles/:name/add-comment", (req, res) => {
	const { username, text } = req.body;
	const articleName = req.params.name;

	articlesInfo[articleName].comments.push({ username, text });
	res.status(200).send(articlesInfo[articleName]);
});

// Testing server end points demo
// app.get("/hello", (req, res) => res.send("Hello!"));
// app.get("/hello/:name", (req, res) => res.send(`Hello ${req.params.name}!`));
// app.post("/hello", (req, res) => res.send(`Hello ${req.body.name}!`));

app.listen(8000, () => console.log("Listening on port 8000"));
