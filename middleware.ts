import { withAuth } from 'next-auth/middleware';

export default withAuth({
    callbacks: {
        authorized: ({ token, req }) => {
            if (req.nextUrl.pathname.startsWith('/login')) {
                return true;
            }

            return !!token;
        },
    },
});

export const config = { matcher: ['/', '/login'] };
