import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "secondary" | "outline" | "destuctive";
    colorScheme?: "emerald" | "pink" | "amber" | "sky" | "purple";
}

function Badge({ className, variant = "default", colorScheme = "amber", ...props }: BadgeProps) {

    const baseStyles = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";

    const variants = {
        default: "border-transparent text-white shadow hover:bg-opacity-80",
        secondary: "border-transparent hover:bg-opacity-80",
        outline: "text-foreground",
        destuctive: "border-transparent bg-red-500 text-white hover:bg-red-600",
    };

    const colorSchemes = {
        emerald: {
            default: "bg-brand-emerald",
            secondary: "bg-brand-emerald/10 text-brand-emerald",
            outline: "border-brand-emerald text-brand-emerald",
        },
        pink: {
            default: "bg-brand-pink",
            secondary: "bg-brand-pink/10 text-brand-pink",
            outline: "border-brand-pink text-brand-pink",
        },
        amber: {
            default: "bg-brand-amber",
            secondary: "bg-brand-amber/10 text-brand-amber",
            outline: "border-brand-amber text-brand-amber",
        },
        sky: {
            default: "bg-brand-sky",
            secondary: "bg-brand-sky/10 text-brand-sky",
            outline: "border-brand-sky text-brand-sky",
        },
        purple: {
            default: "bg-brand-purple",
            secondary: "bg-brand-purple/10 text-brand-purple",
            outline: "border-brand-purple text-brand-purple",
        },
    };

    let colorClass = "";
    if (variant !== 'destuctive' && variant !== 'outline') {
        // @ts-ignore
        colorClass = colorSchemes[colorScheme]?.[variant] || "";
    } else if (variant === 'outline') {
        // @ts-ignore
        colorClass = colorSchemes[colorScheme]?.outline || "";
    }

    return (
        <div className={cn(baseStyles, variants[variant], colorClass, className)} {...props} />
    );
}

export { Badge };
