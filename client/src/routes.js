import { HOME_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from "./utils/consts";
import Home from "./pages/Home";
import Auth from "./pages/Auth";

export const authRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTER_ROUTE,
        Component: Auth
    }
]
