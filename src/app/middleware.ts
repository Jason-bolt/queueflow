// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import auth from "./utils/firebase";

export async function middleware(req: NextRequest) {
  const user = auth?.currentUser;
  if (user) {
    // User is authenticated, proceed to the requested page
    return NextResponse.next();
  }
  // Redirect to login if not authenticated
  return NextResponse.redirect(new URL("/login", req.url));
}

export const config = {
  matcher: ["/dashboard/:path*"], // Protected routes
};
