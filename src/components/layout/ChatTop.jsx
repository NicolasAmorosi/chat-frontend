import { useNavigate } from "react-router-dom";

export const ChatTop = () => {
    const navigate = useNavigate();

    const handleLeaveChat = () => {
        localStorage.removeItem("userName");
        navigate("/");
        window.location.reload();
    };

    return (
        <div className="w-full bg-zinc-900 pt-4 pr-4">
            <div className="bg-zinc-800 rounded-lg h-14 w-full px-4 flex flex-row items-center  justify-between">
                <p className="text-lg font-bold text-white">Sala de chat</p>
                <button
                    className=" text-white bg-red-700 p-1 rounded-md w-20"
                    onClick={handleLeaveChat}
                >
                    Salir
                </button>
            </div>
        </div>
    );
};
