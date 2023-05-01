const WebSocket = require("ws");
const Status = require("./lib/module/status");

const server = new WebSocket.Server({ port: 8080 });

server.on("connection", (socket, request) => {
	const authorization = String(request.url.substring(1)); // Get the dynamic slug from the URL
	const { client, method, url, headers } = request;
	const token = String(headers["sec-websocket-protocol"]);
	const Authorized = token === authorization;
	console.log("Authorized", Authorized);

	socket.on("message", (message) => {
		if (method == "GET" && Authorized) {
			socket.send(`Request ${Status.HTTP_ACCEPTED}`);
		}
		// console.log(`Received message from : ${message}`);
	});

	socket.on("close", () => {
		console.log(`Client disconnected from .`);
	});
});
