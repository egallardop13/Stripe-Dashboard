import React from "react";
import Dashboard from "./components/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Customers from "./components/Customers";
import Invoices from "./components/Invoices";
import Products from "./components/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      { path: "/customers", element: <Customers /> },
      { path: "/invoices", element: <Invoices /> },
      { path: "/products", element: <Products /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
