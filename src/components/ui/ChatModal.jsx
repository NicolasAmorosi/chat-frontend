import { useEffect, useRef, useState } from "react";

import { Icon } from "./Icon";

export const ChatModal = ({ setIsOpen }) => {
    const modalRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setIsVisible(false);
            setTimeout(() => setIsOpen(false), 300);
        }
    };

    useEffect(() => {
        setIsVisible(true);
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div
            className={`fixed inset-0 flex h-screen justify-end p-4 bg-black bg-opacity-50 transition-opacity duration-300 ${
                isVisible ? "opacity-100" : "opacity-0"
            }`}
        >
            <div
                ref={modalRef}
                className={`bg-zinc-800 w-96 h-full flex flex-col items-center relative rounded-lg transform transition-transform duration-300 ${
                    isVisible ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <button
                    className="absolute top-3 left-4"
                    onClick={() => {
                        setIsVisible(false);
                        setTimeout(() => setIsOpen(false), 300);
                    }}
                >
                    <Icon iconName="close" className="h-6 w-6" />
                </button>
                <div className="mt-20 w-72 space-y-6">
                    <div>
                        <p className="text-white text-lg font-bold text-center">
                            Que es la AppChat?
                        </p>
                        <p className="text-white text-justify">
                            AppChat es una aplicación de chat en tiempo real
                            desarrollada con React y Socket.io.
                        </p>
                    </div>
                    <div>
                        <p className="text-white text-lg font-bold text-center">
                            Que se hace aca?
                        </p>
                        <p className="text-white text-justify">
                            En AppChat podes chatear con cualquier persona que
                            este en la sala de chat, ninguno de los mensajes
                            quedan guardados. La idea es que puedas chatear de
                            manera anónima y segura.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
