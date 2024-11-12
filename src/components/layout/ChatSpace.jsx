export const ChatSpace = ({ messages, lastMessageRef, typingStatus }) => {
    return (
        <div className=" flex flex-col justify-end p-4 pb-1">
            <div className="space-y-2">
                {messages.map((message) =>
                    message.name === localStorage.getItem("userName") ? (
                        <div
                            key={message.id}
                            className="flex flex-col items-end mr-4"
                        >
                            <div className="bg-white p-2 rounded-xl rounded-tr-none min-w-20">
                                <p className="font-bold">Vos</p>
                                <p className="font-semibold">{message.text}</p>
                            </div>
                        </div>
                    ) : (
                        <div
                            key={message.id}
                            className="flex flex-col items-start"
                        >
                            <div className="bg-cyan-300 p-2 rounded-xl rounded-tl-none min-w-20">
                                <p className="font-bold">{message.name}</p>
                                <p className="font-semibold">{message.text}</p>
                            </div>
                        </div>
                    )
                )}
                {typingStatus && (
                    <div className="flex flex-col items-start">
                        <div className="bg-cyan-300 p-2 rounded-xl rounded-tl-none min-w-10 justify-center flex">
                            <p className="font-bold animate-bounce">...</p>
                        </div>
                    </div>
                )}
                <div ref={lastMessageRef} />
            </div>
        </div>
    );
};
