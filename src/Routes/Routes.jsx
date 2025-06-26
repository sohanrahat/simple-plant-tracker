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
            {
                path: "/my-plants",
                loader: () => fetch('https://ten-mango-server.vercel.app/plants'),
                element: <PrivateRoute><MyPlants /></PrivateRoute>
            },
            {
                path: "/add-plant",
                element: <PrivateRoute><AddPlant /></PrivateRoute>
            },
            {
                path: "/update-plant/:id",
                loader: ({ params }) => fetch(`https://ten-mango-server.vercel.app/plants/${params.id}`),
                element: <PrivateRoute><UpdatePlant /></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            }

        ]

    }
])

export default router; 