import { getAgeInSeconds } from "@/utils/ageInSeconds";
import { redis } from "@/utils/db";

export async function GET(req: Request) {
	try {
		const params = new URLSearchParams(req.url);

		const searchParams = new URLSearchParams(
			req.url.substring(req.url.indexOf("?"))
		);
		const month = searchParams.get("month");
		const day = searchParams.get("day");
		const year = searchParams.get("year");

		//headers
		const api_key = req.headers.get("api_key");
		const api_secret = req.headers.get("api_secret");

		if (!api_key || !api_secret) {
			return new Response(
				JSON.stringify({
					success: false,
					message: "Unauthorized",
				}),
				{
					status: 400,
					statusText: "Bad Request",
				}
			);
		}

		const verifyAuthorization = await redis.get(`api-key-${api_secret}`);

		if ((verifyAuthorization as string) !== api_key) {
			return new Response(
				JSON.stringify({
					success: false,
					message: "Unauthorized",
				}),
				{
					status: 400,
					statusText: "Bad Request",
				}
			);
		}

		//logic
		const ageinseconds = getAgeInSeconds(
			parseInt(year as string),
			parseInt(month as string),
			parseInt(day as string)
		);

		return new Response(
			JSON.stringify({
				success: true,
				message: "Successfully calculated age in seconds",
				ageInSeconds: ageinseconds,
			}),
			{
				status: 200,
				statusText: "OK",
			}
		);
	} catch (error) {
		return new Response(
			JSON.stringify({
				success: false,
				message: "Something went wrong, please try again later",
				cause: error,
			}),
			{
				status: 500,
				statusText: "Internal Server Error",
			}
		);
	}
}
