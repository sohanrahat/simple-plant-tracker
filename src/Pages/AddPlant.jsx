import Swal from 'sweetalert2';
import React, { useState } from 'react';
import { useTheme } from '../Context/ThemeContext';

const AddPlant = () => {
    const { isDarkMode } = useTheme();

    const handleAddPlant = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const newPlant = Object.fromEntries(formData.entries());

        fetch('http://localhost:3000/plants', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPlant)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Plant Added Successfully!',
                        confirmButtonColor: '#059669'
                    })
                    form.reset();
                }
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong! Check console for details.',
                    confirmButtonColor: '#059669'
                });
            });
    };
    
    return (
        <div className={`max-w-4xl my-3 mx-auto p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-green-50'}`}>
            <h2 className={`text-3xl font-bold text-center mb-8 ${isDarkMode ? 'text-green-400' : 'text-green-800'}`}>Add a New Plant</h2>

            <form onSubmit={handleAddPlant} className={`space-y-6 p-8 rounded-lg shadow-md border-2 ${
                isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-green-200'
            }`}>
                {/* Plant Name */}
                <div className="form-control">
                    <label className="label">
                        <span className={`label-text font-medium ${isDarkMode ? 'text-green-400' : 'text-green-700'}`}>Plant Name</span>
                    </label>
                    <input
                        type="text"
                        name="plantName"
                        placeholder="Enter plant name"
                        className={`input input-bordered w-full focus:border-green-500 ${
                            isDarkMode ? 'bg-gray-600 text-white border-gray-500' : ''
                        }`}
                        required
                    />
                </div>

                {/* Image URL Input */}
                <div className="form-control">
                    <label className="label">
                        <span className={`label-text font-medium ${isDarkMode ? 'text-green-400' : 'text-green-700'}`}>Plant Image URL</span>
                    </label>
                    <input
                        type="text"
                        name="image"
                        placeholder="Enter image URL"
                        className={`input input-bordered w-full focus:border-green-500 ${
                            isDarkMode ? 'bg-gray-600 text-white border-gray-500' : ''
                        }`}
                        required
                    />
                </div>

                {/* Category Dropdown */}
                <div className="form-control">
                    <label className="label">
                        <span className={`label-text font-medium ${isDarkMode ? 'text-green-400' : 'text-green-700'}`}>Category</span>
                    </label>
                    <select
                        name="category"
                        className={`select select-bordered w-full focus:border-green-500 ${
                            isDarkMode ? 'bg-gray-600 text-white border-gray-500' : 'bg-green-50'
                        }`}
                        required
                    >
                        <option value="" disabled>Select a category</option>
                        <option value="succulent">Succulent</option>
                        <option value="fern">Fern</option>
                        <option value="flowering">Flowering</option>
                        <option value="tropical">Tropical</option>
                        <option value="cactus">Cactus</option>
                        <option value="vine">Vine</option>
                        <option value="herb">Herb</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                {/* Description */}
                <div className="form-control">
                    <label className="label">
                        <span className={`label-text font-medium ${isDarkMode ? 'text-green-400' : 'text-green-700'}`}>Description</span>
                    </label>
                    <textarea
                        name="description"
                        placeholder="Enter plant description"
                        className={`textarea textarea-bordered w-full h-24 focus:border-green-500 ${
                            isDarkMode ? 'bg-gray-600 text-white border-gray-500' : 'bg-green-50'
                        }`}
                        required
                    ></textarea>
                </div>

                {/* Care Level Dropdown */}
                <div className="form-control">
                    <label className="label">
                        <span className={`label-text font-medium ${isDarkMode ? 'text-green-400' : 'text-green-700'}`}>Care Level</span>
                    </label>
                    <select
                        name="careLevel"
                        className={`select select-bordered w-full focus:border-green-500 ${
                            isDarkMode ? 'bg-gray-600 text-white border-gray-500' : 'bg-green-50'
                        }`}
                        required
                    >
                        <option value="" disabled>Select care level</option>
                        <option value="easy" className={isDarkMode ? 'text-green-400' : 'text-green-600'}>Easy</option>
                        <option value="moderate" className={isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}>Moderate</option>
                        <option value="difficult" className={isDarkMode ? 'text-red-400' : 'text-red-600'}>Difficult</option>
                    </select>
                </div>

                {/* Watering Frequency */}
                <div className="form-control">
                    <label className="label">
                        <span className={`label-text font-medium ${isDarkMode ? 'text-green-400' : 'text-green-700'}`}>Watering Frequency</span>
                    </label>
                    <input
                        type="text"
                        name="wateringFrequency"
                        placeholder="e.g., every 3 days"
                        className={`input input-bordered w-full focus:border-green-500 ${
                            isDarkMode ? 'bg-gray-600 text-white border-gray-500' : ''
                        }`}
                        required
                    />
                </div>

                {/* Last Watered Date */}
                <div className="form-control">
                    <label className="label">
                        <span className={`label-text font-medium ${isDarkMode ? 'text-green-400' : 'text-green-700'}`}>Last Watered Date</span>
                    </label>
                    <input
                        type="date"
                        name="lastWateredDate"
                        className={`input input-bordered w-full focus:border-green-500 ${
                            isDarkMode ? 'bg-gray-600 text-white border-gray-500' : 'bg-blue-50'
                        }`}
                        required
                    />
                </div>

                {/* Next Watering Date */}
                <div className="form-control">
                    <label className="label">
                        <span className={`label-text font-medium ${isDarkMode ? 'text-green-400' : 'text-green-700'}`}>Next Watering Date</span>
                    </label>
                    <input
                        type="date"
                        name="nextWateringDate"
                        className={`input input-bordered w-full focus:border-green-500 ${
                            isDarkMode ? 'bg-gray-600 text-white border-gray-500' : 'bg-blue-50'
                        }`}
                        required
                    />
                </div>

                {/* Health Status */}
                <div className="form-control">
                    <label className="label">
                        <span className={`label-text font-medium ${isDarkMode ? 'text-green-400' : 'text-green-700'}`}>Health Status</span>
                    </label>
                    <input
                        type="text"
                        name="healthStatus"
                        placeholder="Enter plant health status"
                        className={`input input-bordered w-full focus:border-green-500 ${
                            isDarkMode ? 'bg-gray-600 text-white border-gray-500' : ''
                        }`}
                        required
                    />
                </div>

                {/* User Email */}
                <div className="form-control">
                    <label className="label">
                        <span className={`label-text font-medium ${isDarkMode ? 'text-green-400' : 'text-green-700'}`}>User Email</span>
                    </label>
                    <input
                        type="email"
                        name="userEmail"
                        placeholder="Enter your email"
                        className={`input input-bordered w-full focus:border-green-500 ${
                            isDarkMode ? 'bg-gray-600 text-white border-gray-500' : ''
                        }`}
                        required
                    />
                </div>

                {/* User Name */}
                <div className="form-control">
                    <label className="label">
                        <span className={`label-text font-medium ${isDarkMode ? 'text-green-400' : 'text-green-700'}`}>User Name</span>
                    </label>
                    <input
                        type="text"
                        name="userName"
                        placeholder="Enter your name"
                        className={`input input-bordered w-full focus:border-green-500 ${
                            isDarkMode ? 'bg-gray-600 text-white border-gray-500' : ''
                        }`}
                        required
                    />
                </div>

                {/* Submit Button */}
                <div className="form-control mt-8">
                    <button type="submit" className={`btn w-full border-none ${
                        isDarkMode ? 'bg-green-700 hover:bg-green-600' : 'bg-green-600 hover:bg-green-700'
                    } text-white`}>Add Plant</button>
                </div>
            </form>
        </div>
    );
};

export default AddPlant;