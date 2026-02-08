import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Note: I need to install class-variance-authority as well, or just write it manually.
// For now, I'll write a simple version without cva to save an install, or install cva. 
// Actually, cva is standard. I'll include it in the install command next time or just use simple props.
// Let's use simple logic for now to avoid extra deps if not totally needed, but cva is cleaner.
// I'll stick to a simple implementation first.

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
    size?: "sm" | "md" | "lg" | "icon";
    colorScheme?: "emerald" | "pink" | "amber" | "sky" | "white";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", colorScheme = "emerald", ...props }, ref) => {

        const baseStyles = "inline-flex items-center justify-center rounded-3xl font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none hover:scale-105 active:scale-95";

        const variants = {
            primary: "shadow-lg hover:shadow-xl text-white",
            secondary: "bg-opacity-20 hover:bg-opacity-30",
            outline: "border-2 bg-transparent",
            ghost: "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800",
            link: "text-primary underline-offset-4 hover:underline",
        };

        const colorSchemes = {
            emerald: {
                primary: "bg-gradient-to-r from-brand-emerald to-brand-teal ring-brand-emerald",
                secondary: "bg-brand-emerald text-brand-emerald",
                outline: "border-brand-emerald text-brand-emerald hover:bg-brand-emerald hover:text-white",
            },
            pink: {
                primary: "bg-gradient-to-r from-brand-pink to-rose-500 ring-brand-pink",
                secondary: "bg-brand-pink text-brand-pink",
                outline: "border-brand-pink text-brand-pink hover:bg-brand-pink hover:text-white",
            },
            amber: {
                primary: "bg-gradient-to-r from-brand-amber to-orange-500 ring-brand-amber",
                secondary: "bg-brand-amber text-brand-amber",
                outline: "border-brand-amber text-brand-amber hover:bg-brand-amber hover:text-white",
            },
            sky: {
                primary: "bg-gradient-to-r from-brand-sky to-blue-500 ring-brand-sky",
                secondary: "bg-brand-sky text-brand-sky",
                outline: "border-brand-sky text-brand-sky hover:bg-brand-sky hover:text-white",
            },
            white: {
                primary: "bg-white text-gray-800 hover:bg-gray-50 ring-gray-200",
                secondary: "bg-white text-gray-800",
                outline: "border-white text-white hover:bg-white hover:text-gray-800",
            }
        };

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-11 px-6 text-base",
            lg: "h-14 px-8 text-lg",
            icon: "h-10 w-10",
        };

        // Construct class name safely.
        // If variant is primary, secondary, or outline, we use the colorScheme map.
        // Ghost and link usually don't depend as much on color scheme background, but for text they might.
        // Simplifying for the PRD needs.

        let colorClass = "";
        if (variant === 'primary' || variant === 'secondary' || variant === 'outline') {
            // @ts-ignore
            colorClass = colorSchemes[colorScheme]?.[variant] || "";
        } else if (variant === 'ghost') {
            // @ts-ignore
            colorClass = `text-${colorScheme}-600 hover:text-${colorScheme}-700 hover:bg-${colorScheme}-50`;
            if (colorScheme === 'white') colorClass = "text-white hover:bg-white/10";
        }

        return (
            <button
                ref={ref}
                className={cn(baseStyles, variants[variant], colorClass, sizes[size], className)}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
