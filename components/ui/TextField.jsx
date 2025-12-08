"use client";

import React from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { cn } from "@/lib/utils";

const TextField = React.forwardRef(({
    label,
    error,
    type = "text",
    className,
    id,
    startIcon,
    endIcon,
    onEndIconClick,
    ...props
}, ref) => {
    const [parent] = useAutoAnimate();

    return (
        <div ref={parent} className="w-full">
            <label className="flex flex-col">
                {label && (
                    <p className="pb-2 text-base font-medium leading-normal text-[#0d141b] dark:text-slate-200">
                        {label}
                    </p>
                )}

                <div className="relative flex w-full flex-1 items-stretch">
                    {startIcon && (
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-[#4c739a] dark:text-slate-400 flex items-center justify-center pointer-events-none">
                            {startIcon}
                        </span>
                    )}

                    <input
                        id={id}
                        type={type}
                        className={cn(
                            "form-input flex h-14 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-[#cfdbe7] dark:border-slate-700 bg-background-light dark:bg-slate-800 text-[#0d141b] dark:text-slate-50 placeholder:text-[#4c739a] dark:placeholder:text-slate-500 focus:border-primary focus:outline-0 focus:ring-0 text-base font-normal leading-normal",
                            startIcon ? "pl-12" : "pl-4",
                            endIcon ? "pr-12" : "pr-4",
                            error ? "border-red-500" : "", // Keep error state logic
                            className
                        )}
                        ref={ref}
                        {...props}
                    />

                    {endIcon && (
                        <div
                            onClick={onEndIconClick}
                            className={cn(
                                "absolute right-4 top-1/2 -translate-y-1/2 text-[#4c739a] dark:text-slate-400 flex items-center justify-center",
                                onEndIconClick ? "cursor-pointer" : "pointer-events-none"
                            )}
                        >
                            {endIcon}
                        </div>
                    )}
                </div>
            </label>

            {error && (
                <p className="text-sm text-red-500 mt-1">
                    {error}
                </p>
            )}
        </div>
    );
});

TextField.displayName = "TextField";

export default TextField;
