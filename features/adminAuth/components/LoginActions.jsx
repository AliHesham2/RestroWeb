import React from 'react';
import { Loader2, Check } from 'lucide-react';

const LoginActions = ({ status, isValid }) => {
    const isLoading = status === 'loading';
    const isSuccess = status === 'success';

    return (
        <button
            type="submit"
            disabled={!isValid || isLoading || isSuccess}
            // Exact classes from line 74 of login.html
            className={`flex h-12 min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-5 text-base font-bold leading-normal tracking-[0.015em] text-slate-50 transition-colors hover:bg-primary/90 ${(!isValid || isLoading) ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
            <span className="truncate flex items-center gap-2">
                {isLoading ? (
                    <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span>Processing...</span>
                    </>
                ) : isSuccess ? (
                    <>
                        <Check className="h-5 w-5" />
                        <span>Success!</span>
                    </>
                ) : (
                    "Login"
                )}
            </span>
        </button>
    );
};

export default LoginActions;
