import { cn } from "@/utils/classNames";
import { forwardRef, InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
	({ className, ...props }, ref) => {
		return (
			<input
				className={cn(
					"border border-default rounded-lg bg-transparent px-4 w-full max-w-sm py-2",
					className
				)}
				{...props}
				ref={ref}
			/>
		);
	}
);

Input.displayName = "Input";

export { Input };
