import { useParams } from "react-router-dom";
import { FooterChat } from "../components/ui/FooterChat.jsx";
import { Header } from "../components/layout/Header";

export function Chat() {
  const { chatId } = useParams();

  return (
    <div className=" flex flex-col items-between grow">
      <Header contacto={chatId} />

      <div className="flex flex-col items-center justify-center w-full h-full bg-zinc-800">
        <h1 className="text-4xl font-bold text-white">Chat {chatId}</h1>
      </div>
      <FooterChat />
    </div>
  );
}
