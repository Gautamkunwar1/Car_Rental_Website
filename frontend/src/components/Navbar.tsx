import { useState, type JSX } from "react"
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "./Logo";
import SearchBox from "./Searchbox";
import { Link } from "react-router-dom";

interface NavLink{
    name: string;
    to: string;
}

const isAdmin: boolean = true;

function Navbar():JSX.Element {
    const navLinks:NavLink[] = [
        {name:"Home",to:"/"},
        {name:"About",to:"/about"},
        {name:"Services",to:"/services"},
        {name:"Blog", to:"/blog"},
        {name:"Contact",to:"/contact"},
        {name:"Rental Cart",to:"/rentalCart"}
    ]
    
const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false);
    const toggleHamburger = ():void=>{
        setHamburgerOpen((prev)=>!prev)
    }
return (
    <nav className="backdrop-blur bg-blue-700/30 xl:flex justify-around items-center sticky z-10 top-0">

        <div className="flex justify-between items-center">
            <div className="block min-[740px]:hidden pl-5 text-white cursor-pointer" onClick={toggleHamburger} >
                    <RxHamburgerMenu size={30} />
                </div>
                    <div className="pt-1">
                    <Logo height={50} width={200} />
                    </div>
                    <SearchBox />
        </div>
        
        <div>
                <ul className={`min-[740px]:flex min-[740px]:pl-5 gap-6.5 pt-2 max-[722px]:bg-blue-400  text-white font-medium absolute  w-full min-[740px]:static h-screen min-[740px]:h-[50%] min-[740px]:pb-4 max-[740px]:pl-5 ${hamburgerOpen ? 'block' : 'hidden'}`}>
                    {navLinks.map((Item) => (
                        <li key={Item.name} className="xl:hover:text-yellow-300 hover:font-bold cursor-pointer">
                            <Link to={Item.to}>{Item.name}</Link>
                        </li>
                    ))}
                    <li className="xl:hover:text-yellow-300 hover:font-bold cursor-pointer"><Link to="/login">Login/Logout</Link></li>
                </ul>
            </div>
    </nav>
)
}

export default Navbar
