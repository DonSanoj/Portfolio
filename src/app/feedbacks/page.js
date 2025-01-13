'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Feedbacks = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [feedbackCount, setFeedbackCount] = useState(0);

    // Fetch feedbacks from the backend
    useEffect(() => {
        const fetchFeedbacks = async () => {
            try {
                const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/feedback`);
                // const response = await axios.post("http://localhost:5001/api/feedback");
                setFeedbacks(response.data.feedbacks || []);
                setFeedbackCount(response.data.feedbacks.length || 0);
            } catch (error) {
                console.error('Error fetching feedbacks:', error);
            }
        };

        fetchFeedbacks();
    }, []);

    // Update the document title with feedback count
    useEffect(() => {
        document.title = `We have (${feedbackCount}) feedback(s)`;
    }, [feedbackCount]);

    return (
        <div>
            <h2>Feedbacks</h2>
            {feedbacks.length > 0 ? (
                <ul>
                    {feedbacks.map((feedback) => (
                        <li key={feedback.id}>
                            <strong>{feedback.name}</strong> ({feedback.feedbackerStatus}): {feedback.message}
                            <br />
                            <small>
                                {feedback.createdAt
                                    ? new Date(feedback.createdAt.seconds * 1000).toLocaleString()
                                    : 'Date not available'}
                            </small>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No feedbacks available at the moment.</p>
            )}
        </div>
    );
};

export default Feedbacks;
