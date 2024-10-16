import io from "socket.io-client";

// Inicializar la conexión con el backend
const socket = io("http://localhost:5000");

// Función para suscribirse a un chat
export const subscribeToChat = (chatId, onMessageReceived) => {
  socket.emit("subscribe", chatId);

  socket.on("new-message", (message) => {
    onMessageReceived(message);
  });

  return () => {
    socket.off("new-message");
  };
};

// Función para enviar un mensaje
export const sendMessage = (chatId, sender, content) => {
  socket.emit("send-message", chatId, sender, content);
};

// Función para obtener mensajes paginados desde el backend
export const getMessages = async (chatId, limit = 20, skip = 0) => {
  try {
    const response = await fetch(
      `http://localhost:5000/messages/${chatId}?limit=${limit}&skip=${skip}`
    );
    if (!response.ok) throw new Error("Error al cargar los mensajes");
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};
