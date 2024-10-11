import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import { Sidebar } from "./components/layout/Sidebar";
import { ChatContainer } from "./components/layout/ChatContainer";

import { WelcomePage } from "./pages/WelcomePage";
import { Chat } from "./pages/Chat";

export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        navigate("/");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [navigate]);

  return (
    <main className="flex flex-row w-screen h-screen">
      <Sidebar />
      <ChatContainer>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/chat/:chatId" element={<Chat />} />
        </Routes>
      </ChatContainer>
    </main>
  );
}
