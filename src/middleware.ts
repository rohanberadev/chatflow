import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
  "/account(.*)",
  "/analytics(.*)",
  "/automation(.*)",
  "/dashboard(.*)",
  "/settings(.*)",
  "/notifications(.*)",
]);

const isAuthRoute = createRouteMatcher(["/sign-up(.*)", "/sign-in(.*)"]);

const isPublicRoute = createRouteMatcher(["/"]);

export default clerkMiddleware(async (auth, request) => {
  const { userId } = await auth();

  if (isProtectedRoute(request) && !userId) {
    await auth.protect();
  }

  if ((isPublicRoute(request) || isAuthRoute(request)) && userId) {
    return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
