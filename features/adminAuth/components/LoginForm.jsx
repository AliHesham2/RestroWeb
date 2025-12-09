"use client";

import React, { useState } from 'react';
import TextField from '@/components/ui/TextField';
import LoginActions from './LoginActions';
import useAdminAuth from '../hooks/useAdminAuth';
import { validateEmail, validatePassword } from '../utils/authValidation';
import { useAutoAnimateHook } from '@/components/animations/AutoAnimateHook';

const LoginForm = () => {
    const { login, status, errorMessage } = useAdminAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const [parent] = useAutoAnimateHook();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const emailValid = validateEmail(email);
        const passwordValid = validatePassword(password);

        if (!emailValid || !passwordValid) {
            setErrors({
                email: emailValid ? '' : 'Invalid email address',
                password: passwordValid ? '' : 'Password must be at least 6 characters',
            });
            return;
        }

        setErrors({});
        await login(email, password);
    };

    const isValid = email.length > 0 && password.length > 0;

    return (
        <form onSubmit={handleSubmit} className="w-full" ref={parent}>
            {/* Username Field */}
            <div className="w-full">
                <TextField
                    id="email"
                    label="Username"
                    type="email"
                    placeholder="Enter your username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={errors.email}
                    disabled={status === 'loading' || status === 'success'}
                    startIcon={
                        <span className="material-symbols-outlined text-2xl text-[#4c739a] dark:text-slate-400">
                            person
                        </span>
                    }
                />
            </div>

            {/* Password Field */}
            <div className="mt-6 w-full">
                <TextField
                    id="password"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={errors.password}
                    disabled={status === 'loading' || status === 'success'}
                    startIcon={
                        <span className="material-symbols-outlined text-2xl text-[#4c739a] dark:text-slate-400">
                            lock
                        </span>
                    }
                    endIcon={
                        <span className="material-symbols-outlined">
                            {showPassword ? 'visibility_off' : 'visibility'}
                        </span>
                    }
                    onEndIconClick={() => setShowPassword(!showPassword)}
                />
            </div>

            <div className="mt-8 w-full">
                {errorMessage && (
                    <div className="mb-4 text-center text-sm text-red-500 font-medium">
                        {errorMessage}
                    </div>
                )}
                <LoginActions status={status} isValid={isValid} />
            </div>

            <div className="mt-6 w-full">
                <p className="text-center text-sm font-normal leading-normal text-[#4c739a] dark:text-slate-400">
                    <a href="#" className="underline hover:text-primary dark:hover:text-primary/90">
                        Forgot Password?
                    </a>
                </p>
            </div>
        </form>
    );
};

export default LoginForm;
