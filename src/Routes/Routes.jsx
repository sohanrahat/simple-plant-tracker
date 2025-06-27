import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import MyPlants from "../Pages/MyPlants";
import AddPlant from "../Pages/AddPlant";
import UpdatePlant from "../Pages/UpdatePlant";
import AllPlants from "../Pages/AllPlants";
import PlantDetails from "../Pages/PlantDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "../Context/PrivateRoute";
import AuthLayout from "../Layout/AuthLayout";
import DashboardLayout from "../Dashboard/DashLayout";
import AboutUs from "../Pages/AboutUs";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                loader: () => fetch('https://ten-mango-server.vercel.app/plants'),
                element: <Home />
            },
            {
                path: "/all-plants",
                loader: () => fetch('https://ten-mango-server.vercel.app/plants'),
                element: <AllPlants />,
            },
            {
                path: "/about-us",
                element: <AboutUs />
            },
            {
                path: "/plant-details/:id",
                loader: ({ params }) => fetch(`https://ten-mango-server.vercel.app/plants/${params.id}`),
                element: <PlantDetails />
            },
        ]

    },
    {
        element: <AuthLayout />,
        children: [
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
            {
                path: "my-plants", // /dashboard/my-plants
                loader: () => fetch('https://ten-mango-server.vercel.app/plants'),
                element: <MyPlants />
            },
            {
                path: "add-plant", // /dashboard/add-plant
                element: <AddPlant />
            },
            {
                path: "update-plant/:id", // /dashboard/update-plant/:id
                loader: ({ params }) => fetch(`https://ten-mango-server.vercel.app/plants/${params.id}`),
                element: <UpdatePlant />
            },
            {
                path: "add-product", // /dashboard/add-product
                element: <div>Add Product Page (Placeholder)</div> // Replace with actual component
            },
            {
                path: "my-products", // /dashboard/my-products
                element: <div>My Products Page (Placeholder)</div> // Replace with actual component
            }
        ]
    }
])

export default router; 