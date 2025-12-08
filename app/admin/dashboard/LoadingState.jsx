import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingState = () => {
    return (
        <div className="flex h-[50vh] w-full items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
        </div>
    );
};

export default LoadingState;
