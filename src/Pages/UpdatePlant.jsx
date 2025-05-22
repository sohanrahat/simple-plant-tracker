import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const UpdatePlant = () => {
    const navigate = useNavigate();
    const plant = useLoaderData();

    const handleUpdatePlant = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedPlant = Object.fromEntries(formData.entries());

        // send updatedPlant to the db 
        fetch(`http://localhost:3000/plants/${plant._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedPlant)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Plant Updated Successfully!',
                        text: 'Your plant information has been updated.',
                        confirmButtonColor: '#059669'
                    }).then(() => {
                        navigate('/my-plants');
                    });
                }

            })
            .catch(error => {
                // console.error('Error updating plant:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Update Failed',
                    text: 'Something went wrong! Please try again.',
                    confirmButtonColor: '#059669'
                });
            });


    };

    return (
        <div className="max-w-4xl my-3 mx-auto p-6 bg-green-50">
            <h2 className="text-3xl font-bold text-center mb-8 text-green-800">Update Plant</h2>

            <form onSubmit={handleUpdatePlant} className="space-y-6 bg-white p-8 rounded-lg shadow-md border-2 border-green-200">

                {/* Plant Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-medium text-green-700">Plant Name</span>
                    </label>
                    <input
                        type="text"
                        name="plantName"
                        defaultValue={plant?.plantName}
                        placeholder="Enter plant name"
                        className="input input-bordered w-full focus:border-green-500"
                        required
                    />
                </div>

                {/* Image URL Input */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-medium text-green-700">Plant Image URL</span>
                    </label>
                    <input
                        type="text"
                        name="image"
                        defaultValue={plant?.image}
                        placeholder="Enter image URL"
                        className="input input-bordered w-full focus:border-green-500 focus:ring-green-500"
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
                        defaultValue={plant?.category}
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
                        defaultValue={plant?.description}
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
                        defaultValue={plant?.careLevel}
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
                        defaultValue={plant?.wateringFrequency}
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
                        defaultValue={plant?.lastWateredDate}
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
                        defaultValue={plant?.nextWateringDate}
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
                        defaultValue={plant?.healthStatus}
                        placeholder="Enter plant health status"
                        className="input input-bordered w-full focus:border-green-500"
                        required
                    />
                </div>

                {/* User Email - Read Only */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-medium text-green-700">User Email</span>
                    </label>
                    <input
                        type="email"
                        name="userEmail"
                        defaultValue={plant?.userEmail}
                        className="input input-bordered w-full bg-gray-100"
                        readOnly
                    />
                </div>

                {/* User Name - Read Only */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-medium text-green-700">User Name</span>
                    </label>
                    <input
                        type="text"
                        name="userName"
                        defaultValue={plant?.userName}
                        className="input input-bordered w-full bg-gray-100"
                        readOnly
                    />
                </div>

                {/* Submit Button */}
                <div className="form-control mt-8">
                    <button type="submit" className="btn bg-green-600 hover:bg-green-700 text-white border-none w-full">Update Plant</button>
                </div>
            </form>
        </div>
    );
};

export default UpdatePlant;