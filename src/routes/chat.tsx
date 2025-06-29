import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";

type Mensajes = {
  autor: "agente" | "usuario";
  texto: string;
};

type Chats = {
  chatId: string;
  titulo: string;
  contenido: Mensajes[];
};

const chatBiblico: Chats = {
  chatId: "chat-001",
  titulo: "Consulta sobre versículos",
  contenido: [
    { autor: "usuario", texto: "¿Qué dice Juan 3:16?" },
    {
      autor: "agente",
      texto:
        "Juan 3:16 dice: 'Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito...'",
    },
    { autor: "usuario", texto: "¿Hay algún versículo sobre el miedo?" },
    {
      autor: "agente",
      texto:
        "Sí, 2 Timoteo 1:7 dice: 'Porque no nos ha dado Dios espíritu de cobardía, sino de poder, de amor y de dominio propio.'",
    },
  ],
};

const chatTeologia: Chats = {
  chatId: "chat-002",
  titulo: "Dudas teológicas",
  contenido: [
    {
      autor: "agente",
      texto: "Bienvenido como te puedo ayudar hoy?",
    },
    { autor: "usuario", texto: "¿Qué es la Trinidad?" },
    {
      autor: "agente",
      texto:
        "La Trinidad es la doctrina cristiana que enseña que Dios es uno en esencia y tres en personas: Padre, Hijo y Espíritu Santo.",
    },
    {
      autor: "usuario",
      texto:
        "¿Jesús es Dios o solo un profeta? La Trinidad es la doctrina cristiana que enseña que Dios es uno en esencia y tres en personas: Padre, Hijo y Espíritu Santo.",
    },
    {
      autor: "agente",
      texto:
        "En la fe cristiana, Jesús es Dios encarnado, el Hijo de Dios, y también el Salvador del mundo.",
    },
  ],
};
const historial: Chats[] = [chatBiblico, chatTeologia];
export const Route = createFileRoute("/chat")({
  component: RouteComponent,
});
function RouteComponent() {
  return (
    <div className="grid grid-cols-3 ">
      {/* History */}
      <div className="space-y-1 h-screen overflow-y-auto">
        <h3 className="text-blue-400 font-bold"> Chat History</h3>
        {historial.map((chat) => (
          <div>
            <Button
              variant={"ghost"}
              key={chat.chatId}
              className=" flex justify-start p-0 w-36 hover:bg-amber-100"
            >
              <h1 className="p-1 truncate"> {chat.titulo}</h1>
            </Button>
          </div>
        ))}
      </div>
      {/* Messages */}
      <div className="col-span-2 h-screen overflow-y-auto">
        {chatTeologia.contenido.map((mensaje) => (
          <div className="">
            {mensaje.autor === "agente" ? (
              <div className="">{mensaje.texto}</div>
            ) : (
              <div className="bg-blue-300 rounded-2xl max-w-lg ml-80 px-4 py-2">
                <p className="font-semibold text-sm"> {mensaje.texto}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
