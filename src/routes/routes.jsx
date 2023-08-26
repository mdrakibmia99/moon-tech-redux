import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home";
import About from "../Pages/About";
import TopRated from "../Pages/TopRated";
import Cart from "../Pages/Cart";

export const routes = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/about",
          element: <About/>,
        },
        {
          path: "/top-rated",
          element: <TopRated/>,
        },
        {
          path: "/cart",
          element: <Cart/>,
        },
      ],
    },
  ]);