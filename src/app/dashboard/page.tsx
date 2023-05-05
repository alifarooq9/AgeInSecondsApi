import { getServerAuthSession } from "@/utils/auth";
import { redirect } from "next/navigation";
import ApiKey from "@/components/ApiKey";
import { Key } from "lucide-react";

const Dashboard = async () => {
	//session
	const session = await getServerAuthSession();

	//redirect if not logged in
	if (!session) {
		redirect("/login");
	}

	return (
		<main className="flex-grow flex flex-col pb-32 pt-10 space-y-10 items-center justify-center component-style-default">
			<div className="flex flex-col justify-center items-center">
				<Key className="w-12 h-12" />
				<h1 className="font-bold mt-4 text-4xl">
					Generate your Api key
				</h1>
			</div>

			<ApiKey />
		</main>
	);
};

export default Dashboard;
