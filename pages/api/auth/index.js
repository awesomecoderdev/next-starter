import Status from "@/lib/http";

export default function handler(req, res) {
	const { method, url, query, cookies, body } = req;

	if (method == "POST") {
		// const { status, message } = Status.create(body);
		res.status(Response.HTTP_OK).json({
			method,
			query,
			url,
			cookies,
			body,
		});
	}

	if (method == "GET") {
		res.status(Status.HTTP_OK).json({ method, query, url, cookies });
	}

	res.status(Status.HTTP_BAD_REQUEST).json({ method, query, url, cookies });
}
