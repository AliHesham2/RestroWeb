import React from 'react';
import EmptyState from './EmptyState';

export const metadata = {
    title: 'Dashboard | RestoWeb Admin',
};

const DashboardPage = () => {
    // Logic to fetch data would go here. For phase 2, we just show empty state or welcome.

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-tight">Overview</h2>
            </div>

            {/* Example content area */}
            <EmptyState
                title="Welcome to your Dashboard"
                description="This is where you'll see your daily stats and activity."
            />
        </div>
    );
};

export default DashboardPage;
