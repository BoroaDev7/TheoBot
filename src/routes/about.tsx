import { Button } from "@/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 text-gray-800">
      <h1 className="text-4xl font-bold text-blue-400">About TheoBot</h1>

      <p className="text-lg">
        <strong>TheoBot</strong> is your digital companion for exploring
        theological questions. Designed to answer inquiries about the Christian
        faith, Scripture, and doctrine, TheoBot offers reliable, accessible, and
        thoughtful responses to guide you on your spiritual journey.
      </p>

      <div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          ✨ What can TheoBot do?
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Answer questions about Bible verses</li>
          <li>
            Explain theological concepts like grace, salvation, or the Trinity
          </li>
          <li>Help you find Scripture related to your doubts</li>
          <li>Support your personal study with accurate information</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          🔍 How does it work?
        </h2>
        <p>
          TheoBot uses artificial intelligence and trustworthy theological data
          to provide real-time answers. While it offers helpful insights, it is
          not a substitute for deep biblical study or pastoral guidance.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          🙏 A companion in your walk of faith
        </h2>
        <p>
          Created with love and purpose by <strong>Juan Borjas</strong>, TheoBot
          is more than just a chatbot — it is a tool to inspire, uplift, and
          encourage believers to grow in their knowledge of God’s Word.
        </p>
      </div>

      <div className="text-center mt-6">
        <Button
          className="bg-blue-400 hover:bg-cyan-500 text-white px-6 py-3 rounded-xl text-lg font-semibold transition"
          asChild
        >
          <Link to="/chat"> 💬 Start a New Chat</Link>
        </Button>
      </div>
    </div>
  );
}
