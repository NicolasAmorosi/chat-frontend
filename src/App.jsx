import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import socketIO from "socket.io-client";

import { Sidebar } from "./components/layout/Sidebar";
import { ChatContainer } from "./components/layout/ChatContainer";

import { WelcomePage } from "./pages/WelcomePage";
import { Chat } from "./pages/Chat";
import { Login } from "./pages/Login";

export default function App() {
    const navigate = useNavigate();

    const username = localStorage.getItem("userName");

    const socket = socketIO.connect("http://localhost:5000", {
        query: { username },
    });

    useEffect(() => {
        checkUser();
    }, []);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (username && event.key === "Escape") {
                navigate("/");
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [navigate]);

    const checkUser = () => {
        if (!username) {
            navigate("/login");
        }
    };

    return (
        <main className="flex flex-row w-screen h-screen">
            {location.pathname !== "/login" && <Sidebar socket={socket} />}
            <ChatContainer>
                <Routes>
                    <Route path="/" element={<WelcomePage />} />
                    <Route path="/chat" element={<Chat socket={socket} />} />
                    <Route path="/login" element={<Login socket={socket} />} />
                </Routes>
            </ChatContainer>
        </main>
    );
}
