import { useEffect, useRef, useState } from "react";

export const EmojiModal = ({ setIsOpen }) => {
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
        <div className=" absolute">
            <div
                ref={modalRef}
                className={`absolute bottom-2 bg-zinc-800 p-4 rounded-lg shadow-lg transform transition-opacity duration-300 w-40 ${
                    isVisible ? "opacity-100" : "opacity-0"
                }`}
            >
                <p className="text-white text-center font-semibold">
                    Esto viene en la proxima versión
                </p>
            </div>
        </div>
    );
};
