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


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                loader: () => fetch('http://localhost:3000/plants'),
                element: <Home />
            },
            {
                path: "/all-plants",
                loader: () => fetch('http://localhost:3000/plants'),
                element: <AllPlants />,
            },
            {
                path: "/plant-details/:id",
                loader: ({ params }) => fetch(`http://localhost:3000/plants/${params.id}`),
                element: <PlantDetails />
            },
            {
                path: "/my-plants",
                loader: () => fetch('http://localhost:3000/plants'),
                element: <PrivateRoute><MyPlants /></PrivateRoute>
            },
            {
                path: "/add-plant",
                element: <PrivateRoute><AddPlant /></PrivateRoute>
            },
            {
                path: "/update-plant/:id",
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