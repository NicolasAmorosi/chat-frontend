import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = ({ socket }) => {
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username.trim()) {
            localStorage.setItem("userName", username);
            socket.emit("newUser", { username, socketID: socket.id });
            navigate("/");
        }
    };

    return (
        <div className="flex items-center justify-center h-screen w-screen bg-zinc-900">
            <div className="flex flex-col bg-zinc-800 w-1/2 h-1/2 rounded-xl items-center justify-center text-white space-y-2">
                <form
                    className="flex flex-col text-center"
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleLogin();
                    }}
                >
                    <h1 className="text-4xl font-bold mb-4">Login</h1>
                    <p>Para comenzar a chatear escribí tu nombre de usuario</p>
                    <input
                        type="text"
                        className="border rounded-md p-2 w-96 my-2 bg-zinc-600 border-zinc-600"
                        placeholder="Nombre de usuario"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="border rounded-md p-2 bg-zinc-600 text-white border-zinc-600 font-semibold"
                    >
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    );
};
