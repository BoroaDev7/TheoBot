import { Navbar } from "@/components/Navbar";
import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto my-auto px-6 pt-16">
        <Outlet />
      </main>
    </>
  ),
});
