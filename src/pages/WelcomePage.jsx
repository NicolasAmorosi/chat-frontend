import { useNavigate } from "react-router-dom";

import { Icon } from "../components/ui/Icon";

export function WelcomePage() {
    const navigate = useNavigate();

    const username = localStorage.getItem("userName");

    const handleNavigateToChat = () => {
        navigate("/chat");
    };

    return (
        <div className="flex flex-col items-center justify-center h-full w-full bg-zinc-900">
            <div className="flex flex-col items-center justify-center space-y-1">
                <Icon iconName="chat" className=" w-14 h-14" />
                <h1 className="text-4xl font-bold text-white">
                    Bienvenido {username}
                </h1>
                <p className="text-2xl font-bold text-white">
                    Esto es la AppChat!
                </p>
            </div>
            <button
                className=" bg-white px-4 py-2 rounded-md mt-5 font-semibold"
                onClick={handleNavigateToChat}
            >
                Ir al chat
            </button>
        </div>
    );
}
