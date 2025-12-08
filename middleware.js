import { NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

const intlMiddleware = createMiddleware({
    locales: ['en', 'ar'],
    defaultLocale: 'en'
});

export function middleware(request) {
    const token = request.cookies.get('admin_auth_token')?.value;
    const { pathname } = request.nextUrl;

    // 1. Admin Routes Logic (Prioritized)
    if (pathname.startsWith('/admin')) {

        // Redirect /admin to /admin/login explicitly
        if (pathname === '/admin') {
            return NextResponse.redirect(new URL('/admin/login', request.url));
        }

        // Redirect to dashboard if logged in and trying to access login
        if (pathname === '/admin/login' && token) {
            return NextResponse.redirect(new URL('/admin/dashboard', request.url));
        }

        // Protect protected admin routes
        if (pathname !== '/admin/login' && !token) {
            return NextResponse.redirect(new URL('/admin/login', request.url));
        }

        // Allow access to admin pages (bypass next-intl)
        return NextResponse.next();
    }

    // 2. Next-Intl Logic (For non-admin routes)
    return intlMiddleware(request);
}

export const config = {
    // Matcher ignoring internal paths and static files
    matcher: ['/((?!api|_next|.*\\..*).*)', '/admin/:path*']
};
