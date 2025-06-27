import React, { useState, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router';
import { AuthContext } from '../Context/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Get form data directly from the form
        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');

        // Validate form
        const newErrors = {};

        if (!email.trim()) newErrors.email = "Email is required";
        if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid";
        if (!password) newErrors.password = "Password is required";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setLoading(false);
            return;
        }

        signIn(email, password)
            .then(result => {

                const userToStore = {
                    uid: result.user.uid,
                    email: result.user.email,
                    displayName: result.user.displayName,
                    photoURL: result.user.photoURL
                };
                localStorage.setItem('plantPlanetUser', JSON.stringify(userToStore));

                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful!',
                    text: 'Welcome back to Plant Planet!',
                    confirmButtonColor: '#059669'
                }).then(() => {
                    navigate(from, { replace: true });
                });
            })
            .catch(error => {
                // console.error("Login error:", error.message);
                setErrors({ submit: "Invalid email or password. Please try again." });
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handleGoogleSignIn = () => {
        setLoading(true);
        signInWithGoogle()
            .then(result => {

                const userToStore = {
                    uid: result.user.uid,
                    email: result.user.email,
                    displayName: result.user.displayName,
                    photoURL: result.user.photoURL || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"
                };

                localStorage.setItem('plantPlanetUser', JSON.stringify(userToStore));

                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful!',
                    text: 'Welcome to Plant Planet!',
                    confirmButtonColor: '#059669'
                }).then(() => {
                    navigate(from, { replace: true });
                });
            })
            .catch(error => {
                // console.error("Google login error:", error.message);
                setErrors({ submit: "Google sign-in failed. Please try again." });
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        // This container creates a card-like effect for the login page,
        // centered within the AuthLayout. The min-h-screen is removed
        // to prevent layout issues with the sticky Navbar.
        <div className="w-11/12 mx-auto flex my-10 rounded-lg shadow-lg overflow-hidden">
            {/* Left side - Colored section */}
            <div className="hidden md:flex md:w-1/2 bg-emerald-600 flex-col justify-center items-center text-white p-10">
                <h1 className="text-4xl font-bold mb-6">Welcome Back!</h1>
                <p className="text-xl mb-8">Sign in to your Plant Planet Account</p>
            </div>

            {/* Right side - Login form */}
            <div className="w-full md:w-1/2 flex justify-center items-center p-4 md:p-10">
                <div className="w-full max-w-md">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold mb-2">Sign In</h2>
                        <p className="text-gray-600">Welcome back to Plant Planet</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Email field */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-200' : 'focus:ring-emerald-200 border-gray-300'}`}
                                placeholder="Enter your email"
                                onChange={(e) => errors.email && setErrors({ ...errors, email: '' })}
                            />
                            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
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
                                    placeholder="Enter your password"
                                    onChange={(e) => errors.password && setErrors({ ...errors, password: '' })}
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                            {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
                        </div>

                        <div className="flex justify-end">
                            <a href="#" className="text-sm text-emerald-600 hover:underline">Forgot password?</a>
                        </div>

                        {/* Submit button */}
                        <button
                            type="submit"
                            className="w-full bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition duration-300 font-medium"
                            disabled={loading}
                        >
                            {loading ? "Signing In..." : "Sign In"}
                        </button>

                        {errors.submit && (
                            <p className="mt-2 text-center text-red-500">{errors.submit}</p>
                        )}
                    </form>

                    {/* Divider */}
                    <div className="my-6 flex items-center">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="px-4 text-gray-500 text-sm">OR</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>

                    {/* Google Sign-in */}
                    <button
                        onClick={handleGoogleSignIn}
                        className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition duration-300 font-medium"
                        disabled={loading}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px">
                            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                        </svg>
                        Sign in with Google
                    </button>

                    <div className="mt-6 text-center">
                        <p className="text-gray-600">
                            Don't have an account? <Link to="/register" className="text-emerald-600 font-medium hover:underline">Create one</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;