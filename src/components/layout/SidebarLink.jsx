import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export function SidebarLink({ chat }) {
  return (
    <Link to={`/chat/${chat.id}`} className="text-white">
      <div className=" flex flex-row w-full h-16 border-b border-zinc-600 items-center px-4 hover:bg-zinc-800 space-x-2">
        <div className="flex items-center justify-center rounded-full h-10 w-10 bg-slate-50 border-2 border-zinc-600 text-black font-semibold">
          {`${chat.name.charAt(0)}${chat.lastName.charAt(0)}`}
        </div>
        <p className=" font-semibold">
          {chat.name} {chat.lastName}
        </p>
      </div>
    </Link>
  );
}

SidebarLink.propTypes = {
  chat: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  }).isRequired,
};
