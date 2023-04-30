"use client";

import { FC } from "react";
import { useTheme } from "next-themes";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Button } from "@/ui/Button";
import { cn } from "@/utils/classNames";
import { Moon, Sun, Laptop2, ChevronDown } from "lucide-react";

const ThemeSwitcher: FC = () => {
	const { setTheme, theme } = useTheme();

	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild>
				<Button variant="ghost">
					<span>Theme</span>
					<ChevronDown className="w-4 h-4 ml-1 radix-state-open:rotate-180 radix-state-closed:rotate-0 transition-transform duration-300 ease-in-out" />
				</Button>
			</DropdownMenu.Trigger>

			<DropdownMenu.Portal>
				<DropdownMenu.Content
					forceMount
					align="end"
					className="bg-slate-50 w-40 z-50 space-y-1 dark:bg-background border rounded-xl p-2 border-default radix-state-open:animate-in radix-state-open:fade-in radix-state-open:slide-in-from-top-3 radix-state-closed:animate-out radix-state-closed:fade-out radix-state-closed:slide-out-to-top-3"
				>
					<DropdownMenu.Item asChild>
						<Button
							onClick={() => setTheme("dark")}
							variant="ghost"
							className={cn(
								"w-full justify-start items-center",
								theme === "dark" &&
									"bg-slate-200 dark:bg-slate-50/20"
							)}
						>
							<Moon className="h-4 w-4 mr-3" />
							<span>Dark</span>
						</Button>
					</DropdownMenu.Item>
					<DropdownMenu.Item asChild>
						<Button
							onClick={() => setTheme("light")}
							variant="ghost"
							className={cn(
								"w-full flex justify-start",
								theme === "light" &&
									"bg-slate-200 dark:bg-slate-50/20"
							)}
						>
							<Sun className="h-4 w-4 mr-3" />
							<span>Light</span>
						</Button>
					</DropdownMenu.Item>
					<DropdownMenu.Item asChild>
						<Button
							onClick={() => setTheme("system")}
							variant="ghost"
							className={cn(
								"w-full flex justify-start",
								theme === "system" &&
									"bg-slate-200 dark:bg-slate-50/20"
							)}
						>
							<Laptop2 className="h-4 w-4 mr-3" />
							<span>System</span>
						</Button>
					</DropdownMenu.Item>

					{/* <DropdownMenu.Arrow /> */}
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	);
};

export default ThemeSwitcher;
