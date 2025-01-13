'use client';

import React, { useState } from 'react';
import { BackgroundGradient } from '../ui/background-gradient';
import { IoIosCloseCircle } from "react-icons/io";
import { toast } from 'react-toastify';
import axios from 'axios';

const AddFeedback = ({ setActiveComponent }) => {

    const [formData, setFormData] = useState({
        feedbackerStatus: '',
        name: '',
        email: '',
        message: '',
    });

    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    }

    const handleFeedbackSubmit = async (e) => {
        e.preventDefault();

        const { feedbackerStatus, name, email, message } = formData;

        if (!feedbackerStatus || !name || !email || !message) {
            toast.error('Please fill all the fields!');
            return;
        }

        if (!isChecked) {
            toast.error('Please agree to the terms and conditions!');
            return;
        }

        try {
            // Send feedback data to the backend
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/feedback`, {
            // const response = await axios.post("http://localhost:5001/api/feedback", {
                feedbackerStatus,
                name,
                email,
                message,
            });

            if (response.data.success) {
                toast.success('Feedback submitted successfully!');
                setFormData({
                    feedbackerStatus: '',
                    name: '',
                    email: '',
                    message: '',
                });
                setIsChecked(false);
                setActiveComponent(null);
            } else {
                toast.error('Failed to submit feedback. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting feedback:', error);
            toast.error('An error occurred while submitting feedback.');
        }
    };

    return (
        <BackgroundGradient className="h-full w-full mt-5 sm:w-96 rounded-[22px] p-4 sm:p-4 bg-white dark:bg-zinc-900 z-50">
            <div className="flex flex-row justify-between">
                <p className="text-base sm:text-lg text-gray-400 mt-4">
                    Give your feedback!
                </p>
                <button
                    className="px-2 bg-[#2b2b2d] text-xl hover:text-[#eee] rounded-md"
                    onClick={() => setActiveComponent(null)}
                >
                    <IoIosCloseCircle />
                </button>
            </div>

            <div className="mt-3 w-full p-3">
                <form onSubmit={handleFeedbackSubmit}>
                    <select
                        name="feedbackerStatus"
                        value={formData.feedbackerStatus}
                        onChange={handleChange}
                        className="mt-2 mb-3 text-white dark:bg-zinc-800 rounded-xl border-none p-2 w-full"
                    >
                        <option value="" disabled>
                            Select Feedbacker Status
                        </option>
                        <option value="colleague">Colleague Feedbacker</option>
                        <option value="external">External Feedbacker</option>
                    </select>

                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        className="mb-3 text-white dark:bg-zinc-800 rounded-xl border-none p-2 w-full"
                    />

                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="mb-3 text-white dark:bg-zinc-800 rounded-xl border-none p-2 w-full"
                    />

                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Type here..."
                        className="h-12 max-h-16 min-h-12 overflow-x-hidden mb-3 text-white dark:bg-zinc-800 rounded-xl border-none p-2 w-full"
                    ></textarea>

                    <div className=' flex items-center mb-4'>
                        <input
                            type='checkbox'
                            id='terms'
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                            className="mr-2 text-white dark:bg-zinc-800 rounded border-none"
                        />
                        <label htmlFor='terms' className='text-white dark:text-gray-400'>
                            I agree to the terms and conditions
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="hover:bg-gradient-to-r from-purple-500 to-orange-400 text-white rounded-full text-semibold px-8 py-2 w-56 dark:bg-zinc-800"
                    >
                        Submit Feedback
                    </button>
                </form>
            </div>
        </BackgroundGradient>
    );
};

export default AddFeedback;
