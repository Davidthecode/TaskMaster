import { NextResponse, NextRequest } from 'next/server';

export default function middleware(request: NextRequest) {
    let loggedin = request.cookies.get("token");
    const { pathname } = request.nextUrl;
    const links = ["/", "/signup", "/login", "/forgotpassword"];

    if (loggedin && (pathname === "/signup" || pathname === "/login")) {
        return NextResponse.redirect(new URL("/home", request.url));
    } else if (!loggedin && links.includes(pathname)) {
        return NextResponse.redirect(new URL("/login", request.url));
    };
};

export const config = {
    matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};