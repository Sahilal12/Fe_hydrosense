import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/homePage";
import AboutPage from "./pages/aboutPage";
import HidropediaPage from "./pages/hidropediaPage";
import ErrorPage from "./pages/404";
import ProductPage from "./pages/productPage";
import LoginPage from "./pages/loginPage";
import MonitoringPage from "./pages/monitoringPage";
import RegisterPage from "./pages/registerPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/hidropedia",
    element: <HidropediaPage />,
  },
  {
    path: "/monitoring",
    element: <MonitoringPage />,
  },
  {
    path: "/product",
    element: <ProductPage />,
  },
  {
    path: "/registerPage",
    element: <RegisterPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
