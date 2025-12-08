import React from 'react';
import { cn } from '@/lib/utils';

const CenterBox = ({ children, className }) => {
    return (
        <div className={cn("flex min-h-screen w-full items-center justify-center p-4", className)}>
            <div className="w-full max-w-md space-y-8">
                {children}
            </div>
        </div>
    );
};

export default CenterBox;
