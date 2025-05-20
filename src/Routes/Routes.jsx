import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import MyPlants from "../Pages/MyPlants";
import AddPlant from "../Pages/AddPlant";
import AllPlants from "../Pages/AllPlants";
import PlantDetails from "../Pages/PlantDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/all-plants",
                element: <AllPlants />,
            },
            {
                path: "/plant-details/:id",
                element: <PlantDetails />
            },
            {
                path: "/my-plants",
                element: <MyPlants />
            },
            {
                path: "/add-plant",
                element: <AddPlant />
            },
            {
                path: "/update-plant/:id",
                element: <AddPlant />
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