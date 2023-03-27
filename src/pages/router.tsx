import { BrowserRouter, redirect, Route, Routes } from "react-router-dom";
import { Header } from "../components";
import { CartProvider } from "../hooks/cart.context";

import routes, { IRoute } from './pageRoutes';

const Router = () => {
    const pageRoutes = routes.map(({ path, title, element }: IRoute) => {
        return <Route key={title} path={`/${path}`} element={element} />;
    });

    return (
        <BrowserRouter>
            <CartProvider>
                <Header />
                <Routes>
                    {pageRoutes}
                </Routes>
            </CartProvider>
        </BrowserRouter>
    );
};

export default Router;