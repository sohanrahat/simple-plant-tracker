import React, { useState } from 'react';

const AddPlant = () => {
    const [formData, setFormData] = useState({
        image: '',
        plantName: '',
        category: '',
        description: '',
        careLevel: '',
        wateringFrequency: '',
        lastWateredDate: '',
        nextWateringDate: '',
        healthStatus: '',
        userEmail: '',
        userName: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic will be handled later
        console.log(formData);
    };

    return (
        <div className="max-w-4xl my-3 mx-auto p-6 bg-green-50">
            <h2 className="text-3xl font-bold text-center mb-8 text-green-800">Add a New Plant</h2>

            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md border-2 border-green-200">
                {/* Image URL Input */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-medium text-green-700">Plant Image URL</span>
                    </label>
                    <input
                        type="text"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        placeholder="Enter image URL"
                        className="input input-bordered w-full focus:border-green-500 focus:ring-green-500"
                        required
                    />
                </div>

                {/* Plant Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-medium text-green-700">Plant Name</span>
                    </label>
                    <input
                        type="text"
                        name="plantName"
                        value={formData.plantName}
                        onChange={handleChange}
                        placeholder="Enter plant name"
                        className="input input-bordered w-full focus:border-green-500"
                        required
                    />
                </div>

                {/* Category Dropdown */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-medium text-green-700">Category</span>
                    </label>
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="select select-bordered w-full focus:border-green-500 bg-green-50"
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
                        <span className="label-text font-medium text-green-700">Description</span>
                    </label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Enter plant description"
                        className="textarea textarea-bordered w-full h-24 focus:border-green-500 bg-green-50"
                        required
                    ></textarea>
                </div>

                {/* Care Level Dropdown */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-medium text-green-700">Care Level</span>
                    </label>
                    <select
                        name="careLevel"
                        value={formData.careLevel}
                        onChange={handleChange}
                        className="select select-bordered w-full focus:border-green-500 bg-green-50"
                        required
                    >
                        <option value="" disabled>Select care level</option>
                        <option value="easy" className="text-green-600">Easy</option>
                        <option value="moderate" className="text-yellow-600">Moderate</option>
                        <option value="difficult" className="text-red-600">Difficult</option>
                    </select>
                </div>

                {/* Watering Frequency */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-medium text-green-700">Watering Frequency</span>
                    </label>
                    <input
                        type="text"
                        name="wateringFrequency"
                        value={formData.wateringFrequency}
                        onChange={handleChange}
                        placeholder="e.g., every 3 days"
                        className="input input-bordered w-full focus:border-green-500 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Last Watered Date */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-medium text-green-700">Last Watered Date</span>
                    </label>
                    <input
                        type="date"
                        name="lastWateredDate"
                        value={formData.lastWateredDate}
                        onChange={handleChange}
                        className="input input-bordered w-full focus:border-green-500 bg-blue-50"
                        required
                    />
                </div>

                {/* Next Watering Date */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-medium text-green-700">Next Watering Date</span>
                    </label>
                    <input
                        type="date"
                        name="nextWateringDate"
                        value={formData.nextWateringDate}
                        onChange={handleChange}
                        className="input input-bordered w-full focus:border-green-500 bg-blue-50"
                        required
                    />
                </div>

                {/* Health Status */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-medium text-green-700">Health Status</span>
                    </label>
                    <input
                        type="text"
                        name="healthStatus"
                        value={formData.healthStatus}
                        onChange={handleChange}
                        placeholder="Enter plant health status"
                        className="input input-bordered w-full focus:border-green-500"
                        required
                    />
                </div>

                {/* User Email */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-medium text-green-700">User Email</span>
                    </label>
                    <input
                        type="email"
                        name="userEmail"
                        value={formData.userEmail}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="input input-bordered w-full focus:border-green-500"
                        required
                    />
                </div>

                {/* User Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-medium text-green-700">User Name</span>
                    </label>
                    <input
                        type="text"
                        name="userName"
                        value={formData.userName}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="input input-bordered w-full focus:border-green-500"
                        required
                    />
                </div>

                {/* Submit Button */}
                <div className="form-control mt-8">
                    <button type="submit" className="btn bg-green-600 hover:bg-green-700 text-white border-none w-full">Add Plant</button>
                </div>
            </form>
        </div>
    );
};

export default AddPlant;