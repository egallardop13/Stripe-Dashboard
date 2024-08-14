import React from "react";
import Dashboard from "./components/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Customers from "./components/Customers";
import Invoices from "./components/Invoices";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      { path: "/customers", element: <Customers /> },
      { path: "/invoices", element: <Invoices /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
