import { useRoutes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Albums } from "../pages/Albums";
import { Photo } from "../pages/Photo";

export const MainRoutes = () => {
    return useRoutes([
        {path: '/', element: <Home />},
        {path: '/albums/:slug', element: <Albums />},
        {path: '/photos/:slug', element: <Photo />},
    ]);
}