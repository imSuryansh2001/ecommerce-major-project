import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
// Prayag Product
import Product from './pages/Product';

const router = createBrowserRouter([
	// Suryansh ------------------------------------
	{
		path: '/',
		element: <section>Home Page!</section>,
	},
	// Prayag ------------------------------------
	{
		path: '/product',
		element: (
			<section>
				{' '}
				<Product />{' '}
			</section>
		),

		children: [
			{
				path: ':id',
				element: <section>Single Product Detail Page!</section>,
			},
		],
	},
	// Molik ------------------------------------
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/cart',
		element: <section>Cart Page!</section>,
	},
	{
		path: '/checkout',
		element: <section>Checkout Page!</section>,
	},
]);

const App = () => {
    return (
        <section className="font-primary">
            <RouterProvider router={router} />
        </section>
    );
};

export default App;
