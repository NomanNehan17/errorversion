import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Favourites from './pages/Favourites'; 
//import Products from './pages/Products';
import Blog from './pages/Blog';
import FreeDeliveryPage from './pages/FreeDeliveryPage';
import './App.css';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from 'react-router-dom';
import Cart from './pages/Cart';
import { productsData } from './api/Api';
import Product from './components/Product.Jsx';
import Login from './pages/Login';

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => productsData(),
      },
      {
        path: '/favourites',
        element: <Favourites />,
      },
      {
        path: '/product/:id',
        element: <Product />,
      },

      /*{
        path: '/shop/',
        element: <Shop />,
      },
    */
      {
        path: '/free-delivery',
        element: <FreeDeliveryPage />,
      },
       
      {
        path: '/blog',
        element: <Blog />,
      },
       
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
