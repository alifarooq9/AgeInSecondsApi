import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/utils/classNames";
import { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
	return (
		<main className="flex-grow flex flex-col items-center justify-center component-style-default">
			<h1 className="font-bold text-7xl text-center container max-w-6xl leading-tight">
				An example app built using Next.js 13 server components.
			</h1>

			<p className="container mt-5 leading-relaxed max-w-3xl text-2xl text-background/60 dark:text-slate-500 text-center">
				This project retrieves your age in seconds from an API based on
				your date of birth. It&apos;s a useful tool for tracking time or
				estimating age.
			</p>

			<div className="mt-8 flex items-center space-x-4">
				<Link
					href="/login"
					className={cn(buttonVariants({ size: "xl" }))}
				>
					Get Started
				</Link>
				<Link
					href="/login"
					className={cn(
						buttonVariants({ size: "xl", variant: "border" })
					)}
				>
					Github
				</Link>
			</div>
		</main>
	);
};

export default Home;
