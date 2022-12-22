import { Navigate } from "react-router-dom";

export function PrivateRoute({ children }) {
    var user = true ? true : false;

    return user ? children : <Navigate to="/signin" />;
}
