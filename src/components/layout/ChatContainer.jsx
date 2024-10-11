import PropTypes from "prop-types";

export function ChatContainer({ children }) {
  return <div className="flex flex-col flex-grow">{children}</div>;
}

ChatContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
