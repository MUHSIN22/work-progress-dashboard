import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Individual from "../pages/Individual/Individual";
import Dashboard from "../pages/Dashboard/Dashboard";

export const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Dashboard />
            },
            {
                path: '/individual/:id',
                element: <Individual />
            }
        ]
    }
])