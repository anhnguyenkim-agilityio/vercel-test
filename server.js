// JSON Server module
const jsonServer = require("json-server");
const fs = require('fs')
var data = {
  "product": [
    {
      "name": "Big Potatos",
      "price": 14.99,
      "imgURL": "https://github.com/ThanhNgan110/javascript-training/assets/94752353/f9abd041-860e-46ce-b6c2-a11543da8cba",
      "amount": 1,
      "productId": "1",
      "id": "de35"
    }]}
fs.writeFileSync("/tmp/db.json", JSON.stringify(data));

const server = jsonServer.create();

//const db = JSON.parse(fs.readFileSync(path.join(__dirname, 'db.json')))
//const router = jsonServer.router(db);
const router = jsonServer.router("/tmp/db.json");

const middlewares = jsonServer.defaults();

server.use(middlewares);
// Add this before server.use(router)
server.use(
	// Add custom route here if needed
	jsonServer.rewriter({
		"/api/*": "/$1",
	})
);
server.use(router);
server.listen(3000, () => {
	console.log("JSON Server is running");
});

// Export the Server API
module.exports = server;
