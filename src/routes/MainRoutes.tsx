import { useRoutes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Albums } from "../pages/Albums";
import { Photo } from "../pages/Photo";

export const MainRoutes = () => {
    return useRoutes([
        {path: '/react_photo-gallery/', element: <Home />},
        {path: '/react_photo-gallery/albums/:slug', element: <Albums />},
        {path: '/react_photo-gallery/photos/:slug', element: <Photo />},
    ]);
}