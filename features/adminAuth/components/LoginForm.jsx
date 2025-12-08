"use client";

import React, { useState } from 'react';
import TextField from '@/components/ui/TextField';
import LoginActions from './LoginActions';
import useAdminAuth from '../hooks/useAdminAuth';
import { validateEmail, validatePassword } from '../utils/authValidation';
import { useAutoAnimateHook } from '@/components/animations/AutoAnimateHook';
import { User, Lock, Eye, EyeOff } from 'lucide-react';

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
            {/* Username Field - Matches lines 46-56 */}
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
                    // Using Lucide 'User' to match 'person' icon. Size 24px = 1.5rem approx text-2xl
                    startIcon={<User size={24} strokeWidth={1.5} />}
                />
            </div>

            {/* Password Field - Matches lines 57-72 */}
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
                    // Using Lucide 'Lock' to match 'lock' icon
                    startIcon={<Lock size={24} strokeWidth={1.5} />}
                    endIcon={showPassword ? <EyeOff size={24} strokeWidth={1.5} /> : <Eye size={24} strokeWidth={1.5} />}
                    onEndIconClick={() => setShowPassword(!showPassword)}
                />
            </div>

            <div className="mt-6 w-full">
                <p className="text-center text-sm font-normal leading-normal text-[#4c739a] dark:text-slate-400">
                    <a href="#" className="underline hover:text-primary dark:hover:text-primary/90">
                        Forgot Password?
                    </a>
                </p>
            </div>

            <div className="mt-8 w-full">
                {errorMessage && (
                    <div className="mb-4 text-center text-sm text-red-500 font-medium">
                        {errorMessage}
                    </div>
                )}
                <LoginActions status={status} isValid={isValid} />
            </div>
        </form>
    );
};

export default LoginForm;
