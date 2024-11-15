import { useEffect, useState, useRef } from "react";

import { ChatFooter } from "../components/layout/ChatFooter";
import { ChatSpace } from "../components/layout/ChatSpace";
import { ChatTop } from "../components/layout/ChatTop";

// import { FooterChat } from "../components/layout/FooterChat.jsx";

export function Chat({ socket }) {
    const [messages, setMessages] = useState([]);
    const [typingStatus, setTypingStatus] = useState("");
    const lastMessageRef = useRef(null);

    useEffect(() => {
        socket.on("messageResponse", (data) =>
            setMessages([...messages, data])
        );
        setTypingStatus("");
    }, [socket, messages]);

    useEffect(() => {
        socket.on("typingResponse", (data) => setTypingStatus(data));
    }, [socket]);

    useEffect(() => {
        // scroll to bottom every time messages change
        lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className="relative flex flex-col grow h-full">
            {/* Parte arriba */}
            <div className="absolute top-0 w-full z-20">
                <ChatTop />
            </div>

            {/* Parte abajo */}
            <div className="flex flex-col grow mt-16 mb-16 overflow-y-auto bg-zinc-900">
                {/* Mensajes */}
                <ChatSpace
                    messages={messages}
                    lastMessageRef={lastMessageRef}
                    typingStatus={typingStatus}
                />
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 w-full z-10">
                <ChatFooter socket={socket} />
            </div>
        </div>
    );
}
