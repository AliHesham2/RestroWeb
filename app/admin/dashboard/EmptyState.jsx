import React from 'react';
import { Ghost } from 'lucide-react';
import CenterBox from '@/components/layout/CenterBox';

const EmptyState = ({ title = "No data found", description = "Get started by creating a new item.", action }) => {
    return (
        <div className="flex flex-col items-center justify-center p-8 text-center rounded-lg border-2 border-dashed border-gray-200 bg-gray-50/50 min-h-[400px]">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 mb-4">
                <Ghost className="h-10 w-10 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <p className="mt-2 text-sm text-gray-500 max-w-sm">{description}</p>
            {action && (
                <div className="mt-6">
                    {action}
                </div>
            )}
        </div>
    );
};

export default EmptyState;
