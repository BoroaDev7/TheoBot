import { Button } from "@/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <section className="bg-blue-300  rounded-sm h-96 flex flex-row text-center  items-center justify-center">
        <div className=" max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Find Answers to Your Theological
            <br />
            <span className="block mt-2">Questions</span>
          </h1>
          <p className="mt-4 text-lg text-gray-100 font-bold">
            Explore the depths of Christian theology with our AI-powered
            chatbot. Get instant, reliable answers to your questions about
            faith, scripture, and more.
          </p>
          <Button variant={"secondary"} className="mt-6" asChild>
            <Link to="/chat">Start Chatting</Link>
          </Button>
        </div>
      </section>
      <div className="bg-amber-100 mt-10 py-4 px-6 rounded-xl shadow text-center">
        <p className="text-lg font-medium italic text-gray-700 tracking-wide">
          "When I consider your heavens, the work of your fingers, the moon and
          the stars, which you have set in place, what is mankind that you are
          mindful of them, human beings that you care for them?" — Psalm 8:3-4
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 text-center">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-blue-600">
            📖 Verse Lookup
          </h3>
          <p>Get explanations for specific Bible verses instantly.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-blue-600">
            🧠 Theological Guidance
          </h3>
          <p>Understand complex doctrines like the Trinity or Grace.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-blue-600">
            💬 Always Available
          </h3>
          <p>Ask TheoBot anytime — day or night.</p>
        </div>
      </div>
    </>
  );
}
