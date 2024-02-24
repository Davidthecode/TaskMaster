import { NextResponse, NextRequest } from 'next/server';

export default function middleware(request: NextRequest) {
    let loggedin = request.cookies.get("token");
    const { pathname, searchParams } = request.nextUrl;

    const continueTo = searchParams.get('continueTo');
    
    if (loggedin) {
        if (continueTo) {
            return NextResponse.redirect(new URL(continueTo, request.url));
        };

        if (pathname === "/" || pathname === "/signup" || pathname.startsWith("/login") || pathname === "/forgotpassword") {
            return NextResponse.redirect(new URL("/home", request.url));
        };

    } else {
        if (pathname !== "/" && pathname !== "/signup" && pathname !== "/login" && pathname !== "/forgotpassword") {
            return NextResponse.redirect(new URL("/login", request.url));
        };
    };

    return NextResponse.next();
};

export const config = {
    matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};