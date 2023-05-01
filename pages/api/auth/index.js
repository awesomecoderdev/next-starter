import Status from "@/lib/http";

export default function handler(req, res) {
	const { method, url, query, cookies, body } = req;

	if (method == "POST") {
		// const { status, message } = Status.create(body);
		res.status(Status.HTTP_OK).json({
			method,
			query,
			url,
			cookies,
			body,
		});
	}

	if (method == "GET") {
		// res.status(Status.HTTP_OK).json({ method, query, url, cookies });
		res.status(Status.HTTP_OK).json({
			success: true,
			status: 200,
			message: "Successfully Authorized.",
			data: null,
		});
	}

	res.status(Status.HTTP_BAD_REQUEST).json({ method, query, url, cookies });
}
