import { element } from "prop-types";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Category from "../../Pages/Category/Category";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:4000/category/${params.id}`)
            },
        ]
    }
])

export default router;