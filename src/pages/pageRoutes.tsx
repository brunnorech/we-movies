import { Navigate } from "react-router-dom";

import { IRoute } from '../types';

import Cart from "./Cart";
import  Finish  from "./Finish";
import Home from "./Home";


export type { IRoute };

  const routes: IRoute[] = [
    {
        path: "*",
        title: "",
        element: <Navigate to={'/'} replace />,
    },
    {
      path: "",
      element: <Home />,
      title: "home"
    },
    {
      path: "cart",
      element: <Cart />,
      title: "cart"
    },
    {
      path: "finish",
      element: <Finish />,
      title: "finish"
    }
  ];

  export default routes;