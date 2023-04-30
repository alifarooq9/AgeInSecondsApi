import { cn } from "@/utils/classNames";
import { cva, VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import {
	ButtonHTMLAttributes,
	cloneElement,
	forwardRef,
	Children,
} from "react";

const buttonVariants = cva(
	"flex justify-center items-center tracking-wider focus-default rounded-lg text-sm  disabled:opacity-60 disabled:pointer-events-none",
	{
		variants: {
			variant: {
				default:
					"bg-background font-semibold text-slate-50 dark:text-background dark:bg-slate-50 hover:opacity-90 transition-opacity",
				ghost: "bg-transparent text-background font-medium dark:text-slate-50 hover:bg-background/5 dark:hover:bg-slate-50/10 transition-colors",
				secondary:
					"bg-background/10 text-background font-medium dark:text-slate-50 dark:bg-slate-50/10 transition-colors hover:bg-background/20 dark:hover:bg-slate-50/20",
				border: "font-semibold border border-default text-background dark:text-slate-50 dark:bg-transparent transition-colors hover:bg-background/5 dark:hover:bg-slate-300/10",
			},
			size: {
				sm: "px-3 py-1.5",
				md: "px-4 py-2",
				lg: "px-6 py-3",
				xl: "px-8 py-3.5",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "md",
		},
	}
);

export interface ButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	isLoading?: boolean;
	loadingPlaceholder?: string;
	["data-state"]?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, ...props }, ref) => {
		const dataAttrValue = props["data-state"];

		return (
			<button
				className={cn(buttonVariants({ variant, size, className }))}
				disabled={props.isLoading}
				ref={ref}
				{...props}
			>
				{props.isLoading && (
					<Loader2 className="mr-1.5 h-4 w-4 animate-spin" />
				)}
				<span className="flex items-center">
					{props.loadingPlaceholder && props.isLoading
						? props.loadingPlaceholder
						: Children.map(props.children, (child) => {
								return cloneElement(child as any, {
									["data-state"]: dataAttrValue,
								});
						  })}
				</span>
			</button>
		);
	}
);
Button.displayName = "Button";

export { Button, buttonVariants };
