"use client";

import { FC, ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";

type ProvidersProps = {
	children: ReactNode;
};

const Providers: FC<ProvidersProps> = ({ children }) => {
	return (
		<SessionProvider>
			<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
				{children}
			</ThemeProvider>
		</SessionProvider>
	);
};

export default Providers;
