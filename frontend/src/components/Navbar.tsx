import { useState, useEffect, type JSX } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "./Logo";
import SearchBox from "./Searchbox";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAuthStore from "../store/AuthStore";

interface NavLink {
    name: string;
    to: string;
}

function Navbar(): JSX.Element {
    const [activeTab, setActiveTab] = useState<null | string>(null);
    const { user, logout } = useAuthStore();
    const navigate = useNavigate();
    const location = useLocation();

    const baseNavLinks: NavLink[] = [
        { name: "Home", to: "/" },
        { name: "About", to: "/about" },
        { name: "Services", to: "/services" },
        { name: "Blog", to: "/blog" },
        { name: "Contact", to: "/contact" },
        { name: "Rental Cart", to: "/rentalCart" },
    ];

    const navLinks: NavLink[] = user
        ? baseNavLinks
        : [...baseNavLinks, { name: "Login", to: "/login" }];

    const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false);

    const toggleHamburger = (): void => {
        setHamburgerOpen((prev) => !prev);
    };

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    useEffect(() => {
        const current = navLinks.find((link) => link.to === location.pathname);
        setActiveTab(current?.name ?? null);
    }, [location.pathname]);

    return (
        <nav className="backdrop-blur bg-blue-700/30 xl:flex justify-around items-center sticky z-10 top-0">
            <div className="flex justify-between items-center">
                <div
                    className="block min-[740px]:hidden pl-5 text-white cursor-pointer"
                    onClick={toggleHamburger}
                >
                    <RxHamburgerMenu size={30} />
                </div>
                <div className="pt-1">
                    <Logo height={50} width={200} />
                </div>
                <SearchBox />
            </div>

            <div>
                <ul
                    className={`min-[740px]:flex min-[740px]:pl-5 gap-6.5 pt-2 max-[722px]:bg-blue-400 text-white font-medium absolute w-full min-[740px]:static h-screen min-[740px]:h-[50%] min-[740px]:pb-4 max-[740px]:pl-5 ${hamburgerOpen ? "block" : "hidden"
                        }`}
                >
                    {navLinks.map((Item) => (
                        <li
                            key={Item.name}
                            className={`xl:hover:text-yellow-300 hover:font-bold cursor-pointer ${activeTab === Item.name ? "text-yellow-200" : "text-white"
                                }`}
                        >
                            <Link to={Item.to} onClick={() => setActiveTab(Item.name)}>
                                {Item.name}
                            </Link>
                        </li>
                    ))}

                    {user && (
                        <li className="flex items-center font-semibold text-base hover:text-yellow-300 hover:font-bold cursor-pointer">
                            <span>Welcome, {user.name}</span>
                            <button onClick={handleLogout} className="cursor-pointer ml-2">
                                / Logout
                            </button>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
