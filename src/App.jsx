import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    // Suryansh ------------------------------------
    {
        path: "/",
        element: <section>Home Page!</section>,
    },
    // Prayag ------------------------------------
    {
        path: "/product",
        element: <section>Product Page!</section>,

        children: [
            {
                path: "/:id",
                element: <section>Single Product Detail Page!</section>,
            },
        ],
    },
    // Molik ------------------------------------
    {
        path: "/login",
        element: <section>Login Page!</section>,
    },
    {
        path: "/cart",
        element: <section>Cart Page!</section>,
    },
    {
        path: "/checkout",
        element: <section>Checkout Page!</section>,
    },
]);

const App = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default App;
