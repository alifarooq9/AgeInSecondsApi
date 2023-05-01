"use client";

import { cn } from "@/utils/classNames";
import Link from "next/link";
import { Button, buttonVariants } from "@/ui/Button";
import ThemeSwitcher from "./ThemeSwitcher";
import { FC, useState } from "react";
import { signOut, useSession } from "next-auth/react";

const Header: FC = () => {
	//current session
	const { status } = useSession();

	//sign out loading state
	const [isSigningOut, setIsSigningOut] = useState<boolean>(false);

	//handle sign out
	const handleSignOut = async () => {
		setIsSigningOut(true);

		try {
			await signOut({ callbackUrl: "/" });
		} catch (error) {
			console.log(error);
		} finally {
			setIsSigningOut(false);
		}
	};

	return (
		<header className="h-16 z-40 sticky top-0 bg-slate-50 dark:bg-background flex justify-center items-center w-full border-b border-default">
			<div className="component-style-default max-w-7xl flex justify-between items-center">
				<Link
					href="/"
					className="flex items-center space-x-2 focus-default"
				>
					<svg viewBox="0 0 100 100" className="w-8 h-8">
						<circle
							cx="50"
							cy="50"
							r="40"
							className="fill-current text-background dark:text-slate-50"
						/>
					</svg>
					<span className="text-base font-bold tracking-wide">
						Age In Seconds API
					</span>
				</Link>

				<nav>
					<ul className="flex items-center">
						<ThemeSwitcher />

						<li>
							<Link
								href="/docs"
								className={cn(
									buttonVariants({ variant: "ghost" })
								)}
							>
								Documentation
							</Link>
						</li>
						{status === "authenticated" ? (
							<>
								<li>
									<Link
										href="/dashboard"
										className={cn(
											buttonVariants({ variant: "ghost" })
										)}
									>
										Dashboard
									</Link>
								</li>
								<li className="ml-3">
									<Button
										isLoading={isSigningOut}
										onClick={handleSignOut}
									>
										<span>Sign out</span>
									</Button>
								</li>
							</>
						) : (
							<li>
								<Link
									href="/login"
									className={cn(
										buttonVariants({ className: "ml-3" })
									)}
								>
									Login
								</Link>
							</li>
						)}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
