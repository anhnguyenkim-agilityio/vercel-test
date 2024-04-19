// JSON Server module
const jsonServer = require("json-server");
const fs = require('fs')
var data ={
  "product": [
    {
      "name": "Big Potatos",
      "price": 14.99,
      "imgURL": "https://github.com/ThanhNgan110/javascript-training/assets/94752353/f9abd041-860e-46ce-b6c2-a11543da8cba",
      "amount": 1,
      "productId": "1"
    },
    {
      "name": "Chanise Cabbage",
      "price": 14.99,
      "imgURL": "https://github.com/ThanhNgan110/javascript-training/assets/94752353/4ebc8f93-5b4f-4095-95c0-2c76b89ace03",
      "amount": 1,
      "productId": "2"
    },
    {
      "name": "Ladies Finger",
      "price": 14.99,
      "imgURL": "https://github.com/ThanhNgan110/javascript-training/assets/94752353/e9c4b503-5515-4996-9d04-c1efe74a99b4",
      "amount": 1,
      "productId": "3"
    },
    {
      "name": "Eggplant",
      "price": 14.99,
      "imgURL": "https://github.com/ThanhNgan110/javascript-training/assets/94752353/698ed29d-34f8-4e4d-b852-4883fc58f118",
      "amount": 1,
      "productId": "4"
    },
    {
      "name": "Fresh Cauliflower",
      "price": 14.99,
      "imgURL": "https://github.com/ThanhNgan110/javascript-training/assets/94752353/6b64de59-632c-4b0e-b01e-804de9b37dc6",
      "amount": 1,
      "productId": "5"
    },
    {
      "name": "Green Apple",
      "price": 14.99,
      "imgURL": "https://github.com/ThanhNgan110/javascript-training/assets/94752353/88231d19-64de-495d-b98c-cc879e8bcaec",
      "amount": 1,
      "productId": "6"
    },
    {
      "name": "Green Capsicum",
      "price": 14.99,
      "imgURL": "https://github.com/ThanhNgan110/javascript-training/assets/94752353/dd268d2b-a265-410e-8389-1e9dafda1ba9",
      "amount": 1,
      "productId": "7"
    },
    {
      "name": "Green Chili",
      "price": 14.99,
      "imgURL": "https://github.com/ThanhNgan110/javascript-training/assets/94752353/a029793c-84b1-4746-9282-969561744c6c",
      "amount": 1,
      "productId": "8"
    },
    {
      "name": "Green Cucumber",
      "price": 14.99,
      "imgURL": "https://github.com/ThanhNgan110/javascript-training/assets/94752353/660cd2e1-7a25-47c9-89a0-c55928fcbfbe",
      "amount": 1,
      "productId": "9"
    },
    {
      "name": "Green Littuce",
      "price": 14.9,
      "imgURL": "https://github.com/ThanhNgan110/javascript-training/assets/94752353/2488fe46-b4de-4895-9c85-9d3849a9dae1",
      "amount": 1,
      "productId": "10"
    },
    {
      "name": "Ladies Finger",
      "price": 14.99,
      "imgURL": "https://github.com/ThanhNgan110/javascript-training/assets/94752353/da4e9596-97a5-45e0-b804-bbfdff0e92d4",
      "amount": 1,
      "productId": "11"
    },
    {
      "name": "Green Capsicum",
      "price": 14.99,
      "imgURL": "https://github.com/ThanhNgan110/javascript-training/assets/94752353/91e44832-16c1-4c2a-99e6-46ffcc70a9b5",
      "amount": 1,
      "productId": "12"
    },
    {
      "name": "Red Chili",
      "price": 14.99,
      "imgURL": "https://github.com/ThanhNgan110/javascript-training/assets/94752353/3a340fda-d1c5-4c3f-abf3-1b78ae8547cf",
      "amount": 1,
      "productId": "13"
    },
    {
      "name": "Red Tomato",
      "price": 14.99,
      "imgURL": "https://github.com/ThanhNgan110/javascript-training/assets/94752353/6938cd3e-1bb2-4568-8bf7-8e9b27b32418",
      "amount": 1,
      "productId": "14"
    },
    {
      "name": "Fresh Mango",
      "price": 14.99,
      "imgURL": "https://github.com/ThanhNgan110/javascript-training/assets/94752353/b0650966-5f62-4a0f-85bd-98a51ea78837",
      "amount": 1,
      "productId": "15"
    }
  ],
  "cart": [
    {
      "id": "4",
      "productId": "4",
      "name": "Eggplant",
      "price": 14.99,
      "amount": 4,
      "imgURL": "https://github.com/ThanhNgan110/javascript-training/assets/94752353/698ed29d-34f8-4e4d-b852-4883fc58f118"
    },
    {
      "id": "5",
      "productId": "2",
      "name": "Chanise Cabbage",
      "price": 14.99,
      "amount": 5,
      "imgURL": "https://github.com/ThanhNgan110/javascript-training/assets/94752353/4ebc8f93-5b4f-4095-95c0-2c76b89ace03"
    }
  ]
};
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
