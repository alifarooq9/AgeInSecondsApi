"use client";

import { Button } from "@/ui/Button";
import { FC, useState } from "react";
import { Input } from "./ui/Input";

const ApiKey: FC = () => {
	const apikey = "";

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
			<Button size="md" variant="secondary">
				<span>Generate</span>
			</Button>
		</div>
	);
};

export default ApiKey;
