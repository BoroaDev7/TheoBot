import { Button } from "@/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-centertext-center px-4">
      <div className="bg-white flex flex-col items-center p-8 rounded-xl shadow-md max-w-md w-full space-y-6">
        <div className="text-6xl">🔒</div>
        <h1 className="text-3xl font-bold text-blue-400">Login Coming Soon</h1>
        <p className="text-gray-600">
          This section is currently under development. Soon, you'll be able to
          sign in to access personalized features.
        </p>
        <Button
          className="bg-amber-100 hover:bg-cyan-500 text-blue-500  px-6 py-3 rounded-xl text-lg font-bold transition"
          asChild
        >
          <Link to="/">⬅️ Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}
