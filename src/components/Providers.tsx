"use client";

import { FC, ReactNode } from "react";
import { ThemeProvider } from "next-themes";

type ProvidersProps = {
	children: ReactNode;
};

const Providers: FC<ProvidersProps> = ({ children }) => {
	return (
		<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
			{children}
		</ThemeProvider>
	);
};

export default Providers;
