import { cn } from "@/utils/classNames";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";

const buttonVariants = cva(
	"inline-flex items-center focus-default justify-center rounded-lg text-sm  disabled:opacity-50 disabled:pointer-events-none",
	{
		variants: {
			variant: {
				default:
					"bg-background font-semibold text-slate-50 dark:text-background dark:bg-slate-50 hover:opacity-90 transition-opacity",
				ghost: "bg-transparent text-background dark:text-slate-50 hover:bg-background/10 dark:hover:bg-slate-50/10 transition-colors",
				secondary:
					"bg-background/10 text-background dark:text-slate-50 dark:bg-slate-50/10 transition-colors hover:bg-background/20 dark:hover:bg-slate-50/20",
			},
			size: { sm: "px-3 py-1.5", md: "px-4 py-2", lg: "px-6 py-3" },
		},
		defaultVariants: {
			variant: "default",
			size: "md",
		},
	}
);

export interface ButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, ...props }, ref) => {
		return (
			<button
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);
Button.displayName = "Button";

export { Button, buttonVariants };
