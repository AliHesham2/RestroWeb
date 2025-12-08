import React from 'react';
import LoginCard from '@/features/adminAuth/components/LoginCard';

export const metadata = {
    title: 'Admin Login | RestoWeb',
};

const AdminLoginPage = () => {
    return (
        // Outer Container
        <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden">

            {/* Background Image Section */}
            <div className="absolute inset-0 z-0">
                <img
                    className="h-full w-full object-cover"
                    data-alt="A warmly lit restaurant interior with patrons sitting at tables."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUrjbNi7ARGq8MHcZnwdZRD6w22g0QhOULh-mf5bL8q36i55b8nxHmVQYwYQIb3FpQrJ1eSTzvqBlyaYfiLpaB66T1Dnfn8pHw96gBwL6HIJQmpxvrO06T45EzgDsvtBKUEkgKGaLfZAmLmgMzfkPl447Qh3LnZGX6Rg69-djxWj-LM7wt-Kl4wBmMKdO8-N2QLA-fAD1xC1_UUfEKnZ0xMCuAL2eUk1Ofzu3G4LO6R3lHL9dn5o_fr5ZUPzKlToHyaTMkh2W7mXM"
                    alt="Background"
                />
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex h-full grow flex-col">
                <div className="flex flex-1 items-center justify-center p-4">
                    <LoginCard />
                </div>
            </div>
        </div>
    );
};

export default AdminLoginPage;
