import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { subscribeToChat, sendMessage, getMessages } from "../utils/Api";

export function Chat() {
  const { chatId } = useParams();

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [page, setPage] = useState(0);

  useEffect(() => {
    const unsubscribe = subscribeToChat(chatId, (message) => {
      setMessages((prev) => [message, ...prev]);
    });

    // Desuscribirse al desmontar el componente
    return () => {
      unsubscribe();
    };
  }, [chatId]);

  useEffect(() => {
    const loadMessages = async () => {
      const loadedMessages = await getMessages(chatId, 20, page * 20);
      setMessages((prev) => [...prev, ...loadedMessages]);
    };

    loadMessages();
  }, [chatId, page]);

  const handleSendMessage = () => {
    sendMessage(chatId, "Usuario", newMessage);
    setNewMessage("");
  };

  const handleLoadMore = () => setPage((prev) => prev + 1);

  return (
    <div className=" flex flex-col items-between grow">
      {/* Parte arriba */}
      <div>
        <div className="flex flex-col items-center justify-center w-full bg-zinc-800">
          <h1 className="text-4xl font-bold text-white">Chat {chatId}</h1>
        </div>
        <button onClick={handleLoadMore}>Cargar más</button>
      </div>

      {/* Parte abajo */}
      <div className=" flex flex-col h-full grow">
        {/* Mensajes */}
        <div className=" bg-slate-600 h-full">
          <p>chatspace</p>
          {messages.map((msg, index) => (
            <p key={index}>
              <strong>{msg.sender}:</strong> {msg.content}
            </p>
          ))}
        </div>
        <div className=" flex flex-row bg-red-700 w-full space-x-2 px-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full my-2"
          />
          <button
            className=" m-2 border rounded-md p-2"
            onClick={handleSendMessage}
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}
