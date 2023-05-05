import { getServerAuthSession } from "@/utils/auth";
import { redirect } from "next/navigation";
import ApiKey from "@/components/ApiKey";
import { Key } from "lucide-react";
import { redis } from "@/utils/db";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

const Dashboard = async () => {
	//session
	const session = await getServerAuthSession();

	//redirect if not logged in
	if (!session) {
		redirect("/login");
	}

	//get api key
	const apiKey = await redis.get(`api-key-${session.user.id}`);

	return (
		<main className="flex-grow flex flex-col pb-32 pt-10 space-y-10 items-center justify-center component-style-default">
			<div className="flex flex-col justify-center items-center">
				<Key className="w-12 h-12" />
				<h1 className="font-bold mt-4 text-4xl">
					Generate your Api key
				</h1>
			</div>

			<div className="space-y-5">
				<ApiKey apiKey={apiKey as string} />

				<div className="inline-flex w-full justify-center items-center space-x-4">
					<label className="whitespace-nowrap" htmlFor="api-key">
						Your Api Secret:
					</label>
					<Input
						type="text"
						placeholder="Please generate your api key..."
						id="api-key"
						value={session.user.id}
					/>

					<Button type="button" size="md" variant="secondary">
						<span>Copy</span>
					</Button>
				</div>
			</div>
		</main>
	);
};

export default Dashboard;
