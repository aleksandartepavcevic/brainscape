import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  async function middleware(req) {
    const token = await getToken({ req });
    const isAuth = !!token;
    const isAuthPage =
      req.nextUrl.pathname.startsWith("/sign-in") ||
      req.nextUrl.pathname.startsWith("/sign-up");
    const isRootPage = req.nextUrl.pathname === "/";

    if (isRootPage) {
      if (!isAuth) return NextResponse.redirect(new URL("/sign-in", req.url));

      return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    if (isAuthPage) {
      if (isAuth) return NextResponse.redirect(new URL("/dashboard", req.url));

      return null;
    }

    if (!isAuth) {
      let callbackUrl = req.nextUrl.pathname;

      if (req.nextUrl.search) callbackUrl += req.nextUrl.search;

      return NextResponse.redirect(
        new URL(
          `/sign-in?callbackUrl=${encodeURIComponent(callbackUrl)}`,
          req.url
        )
      );
    }
  },
  {
    callbacks: {
      authorized() {
        return true;
      },
    },
  }
);

export const config = {
  matcher: ["/", "/dashboard/:path*", "/sign-in", "/sign-up"],
};
