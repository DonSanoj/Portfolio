"use client";

import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";

export default function FloatingNavigationBox({ links }) {
    const [showNavBox, setShowNavBox] = useState(true);
    const [position, setPosition] = useState({ top: "400px", left: "1100px" });
    const [dragging, setDragging] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const handleMouseDown = (event) => {
        setDragging(true);
        setOffset({
            x: event.clientX - parseInt(position.left, 10),
            y: event.clientY - parseInt(position.top, 10),
        });
    };

    const handleMouseMove = (event) => {
        if (dragging) {
            setPosition({
                top: `${event.clientY - offset.y}px`,
                left: `${event.clientX - offset.x}px`,
            });
        }
    };

    const handleMouseUp = () => {
        setDragging(false);
    };

    React.useEffect(() => {
        if (dragging) {
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseup", handleMouseUp);
        } else {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        }

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [dragging]);

    return showNavBox ? (
        <div
            className={`fixed bg-[#18181b] opacity-80 rounded-lg shadow-lg p-4 z-50 grid grid-cols-2 gap-3 cursor-${dragging ? "grabbing" : "grab"
                } select-none`}
            style={{ top: position.top, left: position.left }}
            onMouseDown={handleMouseDown}
        >
            {links.map((link, index) => (
                <a
                    key={index}
                    href={link.href}
                    className="bg-[#2b2b2d] rounded-md p-3 text-center text-xl font-semibold flex items-center justify-center transition duration-200 hover:bg-gradient-to-r from-purple-500 to-orange-400"
                >
                    {link.label}
                </a>
            ))}
        </div>
    ) : null;
}
