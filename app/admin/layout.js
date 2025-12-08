"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import { Work_Sans, Noto_Sans } from 'next/font/google';
import '../globals.css';

const workSans = Work_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-work-sans',
});

const notoSans = Noto_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-noto-sans',
});

const AdminLayout = ({ children }) => {
    const pathname = usePathname();
    const isLoginPage = pathname === '/admin/login' || pathname === '/admin';

    return (
        <html lang="en" suppressHydrationWarning className={`${workSans.variable} ${notoSans.variable}`}>
            <body className="font-display antialiased">
                <div className="min-h-screen bg-gray-50 text-gray-900 font-display">
                    {!isLoginPage && (
                        <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 hidden md:block z-10">
                            {/* Sidebar Placeholder */}
                            <div className="p-6">
                                <h2 className="text-xl font-bold">Admin Panel</h2>
                                <nav className="mt-6 space-y-2">
                                    <div className="p-2 text-blue-600 bg-blue-50 rounded-md">Dashboard</div>
                                    {/* Add more links here later */}
                                </nav>
                            </div>
                        </aside>
                    )}

                    <div className={`${!isLoginPage ? 'md:pl-64' : ''} min-h-screen transition-all duration-300`}>
                        {!isLoginPage && (
                            <header className="sticky top-0 z-20 w-full h-16 bg-white/80 backdrop-blur-md border-b border-gray-200 flex items-center justify-between px-6">
                                {/* Navbar Placeholder */}
                                <h1 className="font-semibold text-lg">Dashboard</h1>
                                <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
                            </header>
                        )}
                        <main className={`${!isLoginPage ? 'p-6' : ''} h-full`}>
                            {children}
                        </main>
                    </div>
                </div>
            </body>
        </html>
    );
};

export default AdminLayout;
