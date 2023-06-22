import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import AuthLayout from "./pages/layouts/AuthLayout";
import Signup from "./pages/Signup";

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
    ],
  },
]);
