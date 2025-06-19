import { useEffect, type JSX } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/AuthStore";

interface AdminRouteProps {
    children: JSX.Element;
}

export default function AdminRoute({ children }: AdminRouteProps) {
    const navigate = useNavigate()
    const user = useAuthStore((state) => state.user)

    useEffect(() => {
        if (!user) {
            navigate("/login");
        } else if (user.role !== "admin") {
            navigate("/");
        }
    }, [user, navigate]);

    if (!user || user.role !== "admin") return null;

    return children;
}