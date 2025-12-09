"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }) {
    const { theme, setTheme } = useTheme();
    // Handling mounted state to prevent hydration mismatch
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null; // or a placeholder with the same dimensions
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors duration-300 hover:bg-slate-300 dark:hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark",
                className
            )}
        >
            {/* Exact HTML spans for icons */}
            <span className="material-symbols-outlined !block dark:!hidden">dark_mode</span>
            <span className="material-symbols-outlined !hidden dark:!block">light_mode</span>
        </button>
    );
}
