import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home";
import Category from "../../Pages/Category/Category/Category";
import News from "../../Pages/News/News/News";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Login/register/Register";
import PrivateRoute from "../privateRoute/PrivateRoute";
import TermsAndCondition from "../../Pages/TermsAndConditions/TermsAndCondition";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://bayannor-kantho-server-main.vercel.app/news')

            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://bayannor-kantho-server-main.vercel.app/category/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({ params }) => fetch(`https://bayannor-kantho-server-main.vercel.app/news/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <TermsAndCondition></TermsAndCondition>

            }



        ]
    }

]);