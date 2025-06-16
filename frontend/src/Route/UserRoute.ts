import { useEffect, type JSX } from "react";
import useAuthStore from "../store/AuthStore";
import { useNavigate } from "react-router-dom";

interface UserRouteProps {
    children: JSX.Element;
}

export default function UserRoute({ children }: UserRouteProps) {
    const navigate = useNavigate();
    const user = useAuthStore((state) => state.user);

    useEffect(() => {
        if (!user) {
            navigate("/login"); 
        }
    }, [user, navigate]);

    if (!user) return null; 

    return children;
}
