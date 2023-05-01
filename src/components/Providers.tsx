"use client";

import { FC, ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth/core/types";

type ProvidersProps = {
	children: ReactNode;
	session: Session | null;
};

const Providers: FC<ProvidersProps> = ({ children, session }) => {
	return (
		<SessionProvider session={session}>
			<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
				{children}
			</ThemeProvider>
		</SessionProvider>
	);
};

export default Providers;
