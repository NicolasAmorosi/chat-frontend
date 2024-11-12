export function SidebarLink({ user }) {
    return (
        <div className=" bg-zinc-700 px-3 py-1 rounded-md">
            <p className=" text-white font-semibold">{user.username}</p>
        </div>
    );
}
