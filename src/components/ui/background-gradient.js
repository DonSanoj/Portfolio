import React from "react";

export function BackgroundGradient({
    children,
    className,
    containerClassName,
    animate = true,
}) {
    const variants = {
        initial: {
            backgroundPosition: "0 50%",
        },
        animate: {
            backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
        },
    };
    return (
        <div className={`relative p-[4px] group ${containerClassName}`}>
            <div
                style={{
                    backgroundSize: animate ? "400% 400%" : undefined,
                }}
                className={`absolute inset-0 z-[1] opacity-60 group-hover:opacity-100 blur-xl transition duration-500 will-change-transform ${animate ? "motion-div" : ""
                    }`}
            />
            <div
                style={{
                    backgroundSize: animate ? "400% 400%" : undefined,
                }}
                className={`absolute inset-0 z-[1] will-change-transform ${animate ? "motion-div" : ""
                    }`}
            />

            <div className={`relative z-10 ${className}`}>{children}</div> 
        </div>
    );
}