import { useState, useEffect } from "react";

export function Sidebar({ socket }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        socket.on("newUserResponse", (data) => setUsers(data));
    }, [socket, users]);

    console.log(users);

    return (
        <div className="flex flex-col h-screen w-96 bg-zinc-900 p-4">
            <div className=" bg-zinc-800 h-full rounded-lg">
                <div className=" p-5">
                    <h1 className="text-white font-bold text-xl">
                        Usuarios en el chat
                    </h1>
                </div>
                <div className=" px-5 space-y-2">
                    {users.map((user) => (
                        <div
                            key={user.socketID}
                            className=" bg-zinc-700 px-3 py-1 rounded-md"
                        >
                            <p className=" text-white font-semibold">
                                {user.username}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
