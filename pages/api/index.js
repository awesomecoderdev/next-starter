import Status from "@/lib/http";

export default function handler(req, res) {
	res.status(Status.HTTP_OK).json({
		status: Status.HTTP_OK,
		message: Status[Status.HTTP_OK],
	});
}
