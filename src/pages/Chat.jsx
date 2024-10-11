import { useParams } from "react-router-dom";

export function Chat() {
  const { chatId } = useParams();

  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-zinc-800">
      <h1 className="text-4xl font-bold text-white">Chat {chatId}</h1>
    </div>
  );
}
