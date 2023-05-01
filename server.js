const WebSocket = require("ws");

const server = new WebSocket.Server({ port: 8080 });

server.on("connection", (socket, request) => {
	const authorization = request.url.substring(1); // Get the dynamic slug from the URL
	const { client, method, url, headers } = request;
	const token = String(headers["sec-websocket-protocol"]);

	if (token == authorization) {
		console.log("Authorized");
		// console.log({
		// 	token,
		// 	headers,
		// });
	} else {
		console.log("Unauthorized");
	}

	socket.on("message", (message) => {
		console.log(`Received message from : ${message}`);

		// Handle the message based on the specified route
		// ...

		// Send a message back to the client
		socket.send(`Received message: ${message}`);
	});

	socket.on("close", () => {
		console.log(`Client disconnected from .`);
	});
});
