
"use client";

import React, { useState } from "react";

import { FaHouse } from "react-icons/fa6";
import { IoAddCircle } from "react-icons/io5";
import { MdFeedback } from "react-icons/md";
import AddFeedback from "./AddFeedback";

export default function FloatingNavigationBox() {
    const [showNavBox, setShowNavBox] = useState(true);
    const [position, setPosition] = useState({ top: "400px", left: "1100px" });
    const [dragging, setDragging] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const [activeComponent, setActiveComponent] = useState(null);

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

    const handleNavClick = (component) => {
        setActiveComponent(component);
    };

    const renderActiveComponent = () => {
        if (activeComponent === "addFeedback") {
            return (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <AddFeedback setActiveComponent={setActiveComponent} />
                </div>
            );
        }
        return null;
    };

    return (
        <>
            {renderActiveComponent()}

            {showNavBox && (
                <div
                    className={`fixed bg-[#18181b] opacity-80 rounded-lg shadow-lg p-4 z-50 grid grid-cols-2 gap-3 cursor-${dragging ? "grabbing" : "grab"
                        } select-none`}
                    style={{ top: position.top, left: position.left }}
                    onMouseDown={handleMouseDown}
                >
                    <a
                        className="bg-[#2b2b2d] rounded-md p-3 text-center text-xl font-semibold flex items-center justify-center transition duration-200 hover:bg-gradient-to-r from-purple-500 to-orange-400"
                        // onClick={() => handleNavClick("home")}
                        href="/"
                    >
                        <FaHouse />
                    </a>
                    <button
                        className="bg-[#2b2b2d] rounded-md p-3 text-center text-xl font-semibold flex items-center justify-center transition duration-200 hover:bg-gradient-to-r from-purple-500 to-orange-400"
                        onClick={() => handleNavClick("addFeedback")}
                    >
                        <IoAddCircle />
                    </button>
                    <a
                        href="/feedbacks"
                        className="bg-[#2b2b2d] rounded-md p-3 text-center text-xl font-semibold flex items-center justify-center transition duration-200 hover:bg-gradient-to-r from-purple-500 to-orange-400"
                    >
                        <MdFeedback />
                    </a>
                </div>
            )}
        </>
    );
}
