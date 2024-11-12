import { useState, useEffect } from "react";
import { SidebarLink } from "./SidebarLink";

export function Sidebar({ socket }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        socket.on("newUserResponse", (data) => {
            const updatedUsers = addCurrentUser(data);
            setUsers(updatedUsers);
        });
    }, [socket]);

    const addCurrentUser = (userList) => {
        const currentUser = localStorage.getItem("userName");
        if (
            currentUser &&
            !userList.some((user) => user.username === currentUser)
        ) {
            return [...userList, { id: socket.id, username: currentUser }];
        }
        return userList;
    };

    useEffect(() => {
        setUsers((prevUsers) => addCurrentUser(prevUsers));
    }, []);

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
                        <SidebarLink key={user.id} user={user} />
                    ))}
                </div>
            </div>
        </div>
    );
}
