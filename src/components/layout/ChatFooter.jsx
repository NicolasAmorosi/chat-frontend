import { useState } from "react";

import { Icon } from "../ui/Icon";
import { EmojiModal } from "../ui/EmojiModal";

export const ChatFooter = ({ socket }) => {
    const [message, setMessage] = useState("");
    const [isEmojiModalOpen, setIsEmojiModalOpen] = useState(false);

    const handleTyping = () =>
        socket.emit("typing", `${localStorage.getItem("userName")} is typing`);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (message.trim() && localStorage.getItem("userName")) {
            socket.emit("message", {
                text: message,
                name: localStorage.getItem("userName"),
                id: `${socket.id}${Math.random()}`,
                socketID: socket.id,
            });
        }
        setMessage("");
    };

    return (
        <div className="flex flex-row bg-zinc-900 pb-4 pr-4">
            <div className=" bg-zinc-800 w-full rounded-lg">
                <form
                    className="flex flex-row w-full space-x-2 px-2"
                    onSubmit={handleSendMessage}
                >
                    <button
                        type="button"
                        className=" my-2 border rounded-md px-1 bg-zinc-600 text-white border-zinc-600 hover:bg-zinc-700 hover:border-zinc-700"
                        onClick={() => setIsEmojiModalOpen(true)}
                    >
                        <Icon iconName="emoji" className="w-7 h-7" />
                    </button>
                    <input
                        type="text"
                        placeholder="Escriba su mensaje..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={handleTyping}
                        className="rounded-md p-2 w-full my-2 bg-zinc-600 text-white"
                    />
                    <button
                        type="submit"
                        className=" my-2 border rounded-md p-2 bg-zinc-600 text-white border-zinc-600 hover:bg-zinc-700 hover:border-zinc-700"
                    >
                        <Icon iconName="send" className="w-5 h-5" />
                    </button>
                </form>
            </div>
            {isEmojiModalOpen && <EmojiModal setIsOpen={setIsEmojiModalOpen} />}
        </div>
    );
};
