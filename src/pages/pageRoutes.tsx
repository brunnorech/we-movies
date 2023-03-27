import { Navigate } from "react-router-dom";
import Cart from "./Cart";
import  Finish  from "./Finish";
import Home from "./Home";

export interface IRoute {
    title: string;
    path: string;
    element: JSX.Element;
    errorElement?: JSX.Element;
  }

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