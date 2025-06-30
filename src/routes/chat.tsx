import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";

import { v4 as uuidv4 } from "uuid";

type Mensajes = {
  autor: "agente" | "usuario";
  texto: string;
};
export const Route = createFileRoute("/chat")({
  component: RouteComponent,
});
export default function RouteComponent() {
  const [mensajes, setMensajes] = useState<Mensajes[]>([
    {
      autor: "agente",
      texto:
        "Hi, I'm TheoBot. I'm here to guide you with faith-based insights and help you explore your theological questions with care 🙏",
    },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const sessionId = useRef(uuidv4());

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [mensajes]);

  const enviarMensaje = async () => {
    if (!input.trim()) return;

    setMensajes((prev) => [...prev, { autor: "usuario", texto: input }]);
    const mensajeEnviar = input;
    setInput("");

    try {
      const res = await fetch("https://theobot-backend.onrender.com/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: mensajeEnviar,
          sessionId: sessionId.current,
        }),
      });

      const data = await res.json();

      if (data.reply && data.reply.length > 0) {
        const respuestaAgente = data.reply.join(" ");
        setMensajes((prev) => [
          ...prev,
          { autor: "agente", texto: respuestaAgente },
        ]);
      } else {
        setMensajes((prev) => [
          ...prev,
          { autor: "agente", texto: "No hay respuesta del agente." },
        ]);
      }
    } catch (error) {
      setMensajes((prev) => [
        ...prev,
        { autor: "agente", texto: "Error al comunicarse con el servidor." },
      ]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      enviarMensaje();
    }
  };

  return (
    <div className="grid grid-cols-3 md:grid-cols-3 h-[800px]">
      <div className="space-y-1 h-96 overflow-y-auto border-r p-2">
        <h3 className="text-blue-400 font-bold mb-4">Chat History</h3>
        <h1> Future Implementation Coming soon 🙌</h1>
      </div>

      <div className="col-span-2 flex flex-col p-4 h-full">
        <div
          className="flex-1 overflow-y-auto mb-4 px-2 space-y-3"
          style={{ scrollbarWidth: "thin" }}
        >
          {mensajes.map((mensaje, idx) => (
            <div key={idx} className="w-full flex">
              {mensaje.autor === "usuario" ? (
                <div className="ml-auto bg-blue-300 rounded-2xl max-w-lg px-4 py-2">
                  <p className="font-semibold text-sm whitespace-pre-wrap">
                    {mensaje.texto}
                  </p>
                </div>
              ) : (
                <div className="mr-auto bg-gray-200 rounded-2xl max-w-lg px-4 py-2">
                  <p className="text-sm whitespace-pre-wrap">{mensaje.texto}</p>
                </div>
              )}
            </div>
          ))}
          <div ref={scrollRef} />
        </div>

        <div className="flex space-x-2">
          <textarea
            rows={2}
            className="flex-grow resize-none rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Escribe tu mensaje..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <Button onClick={enviarMensaje} className="whitespace-nowrap">
            Enviar
          </Button>
        </div>
      </div>
    </div>
  );
}
