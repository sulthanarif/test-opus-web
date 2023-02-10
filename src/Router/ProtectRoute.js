import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
    const user = localStorage.getItem("token");
    // let auth = user ? true : false;
    if (user) {
        return true;
    } else {
        return false;
    }
}

const ProtectRoute = (props) => {
    const x = useAuth()
    return x ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectRoute; 