import { SidebarLink } from "./SidebarLink";

export function Sidebar() {
  const chats = [
    { id: 1, name: "Joeh", lastName: "Doe" },
    { id: 2, name: "Jane", lastName: "Smith" },
    { id: 3, name: "John", lastName: "Brown" },
  ];

  return (
    <div className="flex flex-col h-screen w-96 bg-zinc-900 border-r border-zinc-600">
      <div className=" p-5">
        <h1 className="text-white font-bold text-xl">Chats</h1>
      </div>
      <div>
        {chats.map((chat) => (
          <div key={chat.id}>
            <SidebarLink chat={chat} />
          </div>
        ))}
      </div>
    </div>
  );
}
