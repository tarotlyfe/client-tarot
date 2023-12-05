import { Outlet } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import { useNavigate } from "react-router-dom";

const Layout = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    if (!user || user === null) {
        navigate('/')
    }
    return (
        <Outlet />
    )
}

export default Layout