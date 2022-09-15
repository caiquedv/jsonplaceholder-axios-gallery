import { useRoutes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Albums } from "../pages/Albums";
import { Photo } from "../pages/Photo";

export const MainRoutes = () => {
    return useRoutes([
        {path: '/jsonplaceholder-axios-gallery/', element: <Home />},
        {path: '/jsonplaceholder-axios-gallery/albums/:slug', element: <Albums />},
        {path: '/jsonplaceholder-axios-gallery/photos/:slug', element: <Photo />},
    ]);
}