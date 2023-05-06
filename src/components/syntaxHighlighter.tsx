"use client";

import { FC } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";

type Props = {
	code: string;
};

const Highlight: FC<Props> = (props) => {
	return (
		<div className="bg-[#1E1E1E] p-5 rounded-2xl">
			<SyntaxHighlighter language="javascript" style={vs2015}>
				{props.code}
			</SyntaxHighlighter>
		</div>
	);
};

export default Highlight;
