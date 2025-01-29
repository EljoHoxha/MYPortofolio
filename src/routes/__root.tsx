import {
  createRootRouteWithContext,
  Link,
  Outlet,
} from "@tanstack/react-router";
import { Analytics } from "@vercel/analytics/react";
export const Route = createRootRouteWithContext()({
  component: RootWrapper,
  notFoundComponent,
});

function RootWrapper() {
  return (
    <>
      <Outlet />
      <Analytics />
    </>
  );
}

function notFoundComponent() {
  return (
    <div className="flex items-center justify-center h-svh w-full">
      <div className="flex flex-col items-center gap-4">
        <div className="bg-slate-100 text-primary p-2 rounded-lg">
          {/* <LinkBreak size={40} /> */}
        </div>

        <h1>Page not found</h1>
        <Link to="/" className="btn btn-sm">
          Go back home
        </Link>
      </div>
    </div>
  );
}
