"use client";

import React from 'react';
import LoginForm from './LoginForm';
import MotionWrapper from '@/components/animations/MotionWrapper';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

const LoginCard = () => {
    return (
        <MotionWrapper className="flex w-full max-w-md flex-col items-center justify-center rounded-xl bg-background-light dark:bg-background-dark p-8 shadow-2xl sm:p-10 relative">
            <div className="absolute top-4 right-4">
                <ThemeToggle />
            </div>

            <div className="mb-8 flex flex-col items-center text-center">
                {/* Strict Match to HTML: restaurant_menu material symbol */}
                <span className="material-symbols-outlined !text-5xl text-primary mb-2">
                    restaurant_menu
                </span>

                <p className="text-3xl font-bold leading-tight tracking-tight text-[#0d141b] dark:text-slate-50">
                    Admin Portal
                </p>
                <p className="mt-2 text-base font-normal text-[#4c739a] dark:text-slate-400">
                    Welcome back, please log in to your account.
                </p>
            </div>

            <div className="w-full">
                <LoginForm />
            </div>
        </MotionWrapper>
    );
};

export default LoginCard;
