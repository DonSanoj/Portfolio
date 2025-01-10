
"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

import { FaHeart } from "react-icons/fa";
import { ImSpinner9 } from "react-icons/im";

const LikeButton = () => {
    const [likeCount, setLikeCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [clicked, setClicked] = useState(false);
    const [isRed, setIsRed] = useState(false); // Track if the heart is red

    useEffect(() => {
        const fetchLikes = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/like`);
                setLikeCount(response.data.count || 0);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching likes:", error);
            }
        };
        fetchLikes();
    }, []);

    const handleLike = async () => {
        try {
            setClicked(true);
            setIsRed(true); // Make the heart red after the first click
            setTimeout(() => setClicked(false), 400);

            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/like`);
            setLikeCount(response.data.count || likeCount + 1);
        } catch (error) {
            console.error("Error liking portfolio:", error);
        }
    };

    return (
        <div className="flex flex-row items-center justify-center space-x-2">
            <div>
                <h1 className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">
                    Like My Portfolio
                </h1>
            </div>
            <div className="flex items-center justify-center space-x-1">
                <div>
                    <button
                        onClick={handleLike}
                        className="flex flex-row space-x-1 cursor-pointer"
                    >
                        <div
                            className={`text-lg ${clicked ? "animate-pop" : ""
                                } ${isRed ? "text-red-500" : "text-white"}`}
                        >
                            <FaHeart />
                        </div>
                    </button>
                </div>
                <div className="text-gray-400">
                    {loading ? (
                        <ImSpinner9 className="animate-spin" />
                    ) : (
                        likeCount
                    )}
                </div>
            </div>
        </div>
    );
};

export default LikeButton;
