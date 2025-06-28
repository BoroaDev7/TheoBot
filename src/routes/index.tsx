import { Button } from "@/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <section className="bg-blue-300  rounded-sm h-96 flex flex-row text-center  items-center justify-center">
      <div className=" max-w-3xl text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Find Answers to Your Theological
          <br />
          <span className="block mt-2">Questions</span>
        </h1>
        <p className="mt-4 text-lg text-gray-100 font-bold">
          Explore the depths of Christian theology with our AI-powered chatbot.
          Get instant, reliable answers to your questions about faith,
          scripture, and more.
        </p>
        <Button variant={"secondary"} className="mt-6" asChild>
          <Link to="/chat">Start Chatting</Link>
        </Button>
      </div>
    </section>
  );
}
