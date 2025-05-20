import React, { useState } from 'react';
import { Link } from 'react-router';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        photoURL: '',
        password: ''
    });

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);



    const validatePassword = (password) => {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const isLongEnough = password.length >= 6;

        if (!hasUpperCase) return "Password must contain at least one uppercase letter";
        if (!hasLowerCase) return "Password must contain at least one lowercase letter";
        if (!isLongEnough) return "Password must be at least 6 characters long";

        return "";
    };

    const handleRegister = (e) => {
        e.preventDefault();

        // Validate form
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";

        const passwordError = validatePassword(formData.password);
        if (passwordError) newErrors.password = passwordError;

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Form is valid, proceed with registration
        // console.log("Form submitted:", formData);
        // Add your registration logic here
    };

    return (
        <div className="flex min-h-screen">
            {/* Left side - Colored section */}
            <div className="hidden md:flex md:w-1/2 bg-emerald-600 flex-col justify-center items-center text-white p-10">
                <h1 className="text-4xl font-bold mb-6">Welcome to <br className='text-6xl font-bold mt-2' /> Plant Planet </h1>
                <p className="text-xl mb-8">Join our community today!</p>

            </div>

            {/* Right side - Registration form */}
            <div className="w-full md:w-1/2 flex justify-center items-center p-4 md:p-10">
                <div className="w-full max-w-md">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold mb-2">Create an Account</h2>
                        <p className="text-gray-600">Fill in the details to get started</p>
                    </div>

                    <form onSubmit={handleRegister} className="space-y-6">
                        {/* Name field */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"

                                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.name ? 'border-red-500 focus:ring-red-200' : 'focus:ring-emerald-200 border-gray-300'}`}
                                placeholder="Enter your full name"
                            />
                            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                        </div>

                        {/* Email field */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"

                                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-200' : 'focus:ring-emerald-200 border-gray-300'}`}
                                placeholder="Enter your email"
                            />
                            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                        </div>

                        {/* Photo URL field */}
                        <div>
                            <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700 mb-1">Photo URL</label>
                            <input
                                type="url"
                                id="photoURL"
                                name="photoURL"

                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-200"
                                placeholder="Enter photo URL (optional)"
                            />
                        </div>

                        {/* Password field */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"

                                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.password ? 'border-red-500 focus:ring-red-200' : 'focus:ring-emerald-200 border-gray-300'}`}
                                    placeholder="Create a password"
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600 cursor-pointer"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                            {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
                            <p className="mt-1 text-xs text-gray-500">
                                Password must contain uppercase, lowercase letters, and be at least 6 characters long.
                            </p>
                        </div>

                        {/* Submit button */}
                        <Link to='/'
                            type="submit"
                            className="w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 transition duration-300 font-medium border-b border-emerald-600"
                        >
                            Register
                        </Link>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-gray-600">
                            Already have an account? <Link to="/login" className="text-emerald-600 font-medium hover:underline">Sign in</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;