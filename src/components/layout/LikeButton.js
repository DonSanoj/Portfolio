"use client";

import axios from 'axios';
import React, { useEffect, useState } from 'react'

const LikeButton = () => {

    const [likeCount, setLikeCount] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLikes = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/like`);
                setLikeCount(response.data.count || 0);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching likes:', error);
            }
        };
        fetchLikes();
    }, []);

    const handleLike = async () => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/like`);
            setLikeCount(response.data.count || likeCount + 1);
        } catch (error) {
            console.error('Error liking portfolio:', error);
        }
    };

    return (

        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h1>
                Like My Portfolio
            </h1>
            <button
                onClick={handleLike}
                style={{ fontSize: '24px', cursor: 'pointer', padding: '10px 20px', border: '1px solid #ccc', borderRadius: '5px' }}
            >
                Like {loading ? 'Loading...' : likeCount}
            </button>
        </div>
    );
};

export default LikeButton