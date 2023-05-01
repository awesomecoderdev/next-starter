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
		if (!token || !authorization) {
			socket.send(
				JSON.stringify({
					status: Status.HTTP_BAD_REQUEST,
					message: Status[Status.HTTP_BAD_REQUEST],
				})
			);
		}

		if (!Authorized) {
			socket.send(
				JSON.stringify({
					status: Status.HTTP_UNAUTHORIZED,
					message: Status[Status.HTTP_UNAUTHORIZED],
				})
			);
		}

		if (method == "GET" && Authorized) {
			socket.send(`Request ${Status.HTTP_ACCEPTED}`);
		} else {
			socket.send(
				JSON.stringify({
					status: Status.HTTP_BAD_REQUEST,
					message: Status[Status.HTTP_BAD_REQUEST],
				})
			);
		}
	});

	socket.on("close", () => {
		console.log(`Client disconnected from .`);
	});
});
