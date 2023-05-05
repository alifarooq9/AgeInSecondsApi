import { getServerAuthSession } from "@/utils/auth";
import { redis } from "@/utils/db";
import { getServerSession } from "next-auth";

export async function POST(req: Request) {
	try {
		const session = await getServerAuthSession();

		const { generateApiKey } = await import("@/utils/api");

		const apiKey = generateApiKey();

		const saveApi = await redis.set(`api-key-${session?.user?.id}`, apiKey);

		return new Response(
			JSON.stringify({
				success: true,
				message: "API key generated successfully",
				apiKey,
				data: saveApi,
			}),
			{ status: 200, statusText: "OK" }
		);
	} catch (error) {
		return new Response(
			JSON.stringify({
				success: false,
				message: "Something went wrong, please try again later",
				cause: error,
			}),
			{ status: 500, statusText: "Internal Server Error" }
		);
	}
}
