import { NextResponse, NextRequest } from 'next/server';

export default function middleware(request: NextRequest) {
    let loggedin = request.cookies.get("token");
    const { pathname } = request.nextUrl;

    if (loggedin && (pathname === "/signup" || pathname === "/login")) {
        return NextResponse.redirect(new URL("/home", request.url));
    } else if (!loggedin && pathname !== "/" && pathname !== "/signup" && pathname !== "/login") {
        return NextResponse.redirect(new URL("/login", request.url));
    };
};

export const config = {
    matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};