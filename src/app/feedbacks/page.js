'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FloatingNavigationBox from '@/components/layout/FloatingNavigationBox';
import { SectionHeaders } from '@/components/layout/Hero';
import { BackgroundGradient } from '@/components/ui/background-gradient';
import { IoIosCloseCircle } from 'react-icons/io';

const Feedbacks = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [feedbackCount, setFeedbackCount] = useState(0);
    const [selectedFeedback, setSelectedFeedback] = useState(null);

    useEffect(() => {
        const fetchFeedbacks = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/feedback`);
                setFeedbacks(response.data.feedbacks || []);
                setFeedbackCount(response.data.feedbacks.length || 0);
            } catch (error) {
                console.error('Error fetching feedbacks:', error);
            }
        };

        fetchFeedbacks();
    }, []);

    useEffect(() => {
        document.title = `We have (${feedbackCount}) feedback(s)`;
    }, [feedbackCount]);

    const parseDate = (createdAt) => {
        if (!createdAt) return 'Date not available';

        if (createdAt._seconds !== undefined && createdAt._nanoseconds !== undefined) {
            const milliseconds = createdAt._seconds * 1000 + createdAt._nanoseconds / 1e6;
            return new Date(milliseconds).toLocaleString();
        }

        try {
            return new Date(createdAt).toLocaleString();
        } catch (error) {
            console.error('Error parsing date:', error);
            return 'Invalid Date';
        }
    };

    const openDetails = (feedback) => {
        setSelectedFeedback(feedback);
    };

    const closeDetails = () => {
        setSelectedFeedback(null);
    };

    const subHeader = 'What others are saying about me';

    return (
        <>
            <FloatingNavigationBox />

            <main className="h-full w-full bg-contain">
                <div className="flex flex-col items-center justify-center px-20 mt-[100px] z-[20]">
                    <SectionHeaders subHeader={subHeader} mainHeader={'Feedbacks'} />

                    {feedbacks.length > 0 ? (
                        <ul className="mt-4 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {feedbacks.map((feedback) => (
                                <li
                                    key={feedback.id}
                                    className="h-full w-full rounded-[22px] p-4 bg-white dark:bg-zinc-900 shadow-md overflow-hidden cursor-pointer"
                                    onClick={() => openDetails(feedback)}
                                >
                                    <BackgroundGradient className="h-full w-full">
                                        <div className="flex flex-col">
                                            <div className="flex flex-col">
                                                <h1
                                                    className="text-lg font-bold truncate max-w-[150px]"
                                                    title={feedback.name}
                                                >
                                                    {feedback.name}
                                                </h1>
                                                <h2 className="text-sm mt-1">({feedback.email})</h2>
                                            </div>
                                            <h2 className="text-sm text-[#939393] mt-1">{parseDate(feedback.createdAt)}</h2>
                                            <p
                                                className="text-base mt-3 line-clamp-3"
                                                style={{
                                                    display: '-webkit-box',
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden',
                                                    WebkitLineClamp: 3,
                                                }}
                                            >
                                                {feedback.message}
                                            </p>
                                        </div>
                                    </BackgroundGradient>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className=' h-screen items-center justify-center'>
                            <p>No feedbacks available at the moment.</p>
                        </div>
                    )}
                </div>

                {/* Modal for Feedback Details */}
                {selectedFeedback && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                        onClick={closeDetails}
                    >
                        <div
                            className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-6 max-w-lg w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="px-2 text-xl hover:text-[#eee] rounded-md float-right"
                                onClick={closeDetails}
                            >
                                <IoIosCloseCircle />
                            </button>

                            <div className="mt-4">
                                <h1 className="text-xl font-bold">{selectedFeedback.name}</h1>
                                <h2 className="text-md text-[#939393]">{selectedFeedback.email}</h2>
                                <h3 className="text-sm mb-2 mt-1 text-[#939393]">
                                    {parseDate(selectedFeedback.createdAt)}
                                </h3>
                                <p className="text-base">{selectedFeedback.message}</p>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </>
    );
};

export default Feedbacks;
