import Status from "@/lib/http";

export default function handler(req, res) {
	console.log("req", req);
	res.status(Status.HTTP_OK).json({
		status: Status.HTTP_OK,
		message: Status[Status.HTTP_OK],
	});
}
