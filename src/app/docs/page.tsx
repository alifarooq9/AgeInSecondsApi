import Highlight from "@/components/syntaxHighlighter";
import { FC } from "react";

const code = `async function getAgeInSeconds() {
	const response = await fetch(
		"https://ageinsec.alidotm.me/api/v1/get-age-in-seconds?month=1&day=1&year=2000",
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				api_key: "your-api-key-here",
				api_secret: "your-api-secret-here",
			},
		}
	);

	const data = await response.json();

	return data;
}`;

const Docs: FC = () => {
	return (
		<main className="flex-grow flex flex-col pb-32 pt-10 space-y-10 items-center justify-center component-style-default">
			<h1 className="font-bold text-5xl">Make a request</h1>
			<p className="text-background/60 dark:text-slate-50/50">
				/api/v1/get-age-in-seconds
			</p>

			<Highlight code={code} />
		</main>
	);
};

export default Docs;
