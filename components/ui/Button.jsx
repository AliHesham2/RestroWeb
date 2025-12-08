"use client";

import React from "react";
import { motion } from "framer-motion";
import { Loader2, Check } from "lucide-react";
import { cn } from "@/lib/utils"; // Assuming a standard cn utility exists or will be created. I should create it if not.

// I will create the utility lib/utils.js first if it doesn't exist, but writing this file first is fine, I will just ensure to create utils next.

const Button = ({
    children,
    variant = "primary",
    size = "default",
    isLoading = false,
    isSuccess = false,
    className,
    disabled,
    ...props
}) => {
    const baseStyles =
        "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-95 transition-transform duration-100";

    const variants = {
        primary:
            "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
        secondary:
            "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500",
        destructive:
            "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
        ghost: "hover:bg-gray-100 text-gray-700",
        link: "text-blue-600 underline-offset-4 hover:underline",
    };

    const sizes = {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
        icon: "h-10 w-10",
    };

    return (
        <motion.button
            whileTap={{ scale: 0.98 }}
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            disabled={isLoading || isSuccess || disabled}
            {...props}
        >
            {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : isSuccess ? (
                <Check className="mr-2 h-4 w-4" />
            ) : null}
            {children}
        </motion.button>
    );
};

export default Button;
