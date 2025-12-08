import { useState } from 'react';
import { useRouter } from 'next/navigation';
import adminAuthService from '../services/adminAuth.service';
import { setToken } from '@/utils/storage';

const useAdminAuth = () => {
    const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();

    const login = async (email, password) => {
        setStatus('loading');
        setErrorMessage('');

        try {
            const data = await adminAuthService.login(email, password);

            if (data.token) {
                setToken(data.token);
                setStatus('success');

                // Short delay to show success animation before redirecting
                setTimeout(() => {
                    router.push('/admin/dashboard');
                }, 1000);
            } else {
                throw new Error('No token received');
            }
        } catch (error) {
            setStatus('error');
            setErrorMessage(error.message);

            // Reset to idle after a delay to allow re-trying
            setTimeout(() => {
                setStatus('idle');
            }, 2000);
        }
    };

    return {
        login,
        status,
        errorMessage,
    };
};

export default useAdminAuth;
