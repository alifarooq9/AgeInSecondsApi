import { cn } from "@/utils/classNames";
import Link from "next/link";
import { buttonVariants } from "@/ui/Button";
import ThemeSwitcher from "./ThemeSwitcher";
import { getServerAuthSession } from "@/utils/auth";
import SignOutButton from "./SignOutButton";

const Header = async () => {
	//current session
	const session = await getServerAuthSession();

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
						{session ? (
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
									<SignOutButton />
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
