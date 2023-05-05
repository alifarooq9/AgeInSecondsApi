"use client";

import { Button } from "@/ui/Button";
import { FC, useState } from "react";
import { Input } from "./ui/Input";

type Props = {
	apiKey?: string;
};

const ApiKey: FC<Props> = (props) => {
	//api key
	const [apikey, setApikey] = useState<string>(props.apiKey || "");

	//loading
	const [loading, setLoading] = useState<boolean>(false);

	//generate api key
	const generateApiKey = async () => {
		//generate api key
		setLoading(true);

		try {
			const response = await fetch("/api/generate-api-key", {
				method: "POST",
			});

			const data = await response.json();
			console.log(data);

			if (data.success) {
				setApikey(data.apiKey);
				return;
			}

			console.log(data);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="inline-flex w-full justify-center items-center space-x-4">
			<label className="whitespace-nowrap" htmlFor="api-key">
				Your Api Key:
			</label>
			<Input
				type="text"
				placeholder="Please generate your api key..."
				id="api-key"
				value={apikey}
			/>
			{apikey ? (
				<Button
					onClick={generateApiKey}
					type="button"
					isLoading={loading}
					size="md"
					variant="secondary"
				>
					<span>Copy</span>
				</Button>
			) : (
				<Button
					onClick={generateApiKey}
					type="button"
					isLoading={loading}
					size="md"
					variant="secondary"
				>
					<span>Generate</span>
				</Button>
			)}
		</div>
	);
};

export default ApiKey;
