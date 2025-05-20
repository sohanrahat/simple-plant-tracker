const { createBrowserRouter } = require("react-router");
import Root from "../Layout/Root";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },

        ]

    }
])