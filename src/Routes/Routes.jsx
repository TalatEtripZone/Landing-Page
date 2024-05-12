import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import SignIn from "../components/Shared/SignIn/SignIn";
import SignUp from "../components/Shared/SignUp/SignUp";
import Home from "../components/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);
