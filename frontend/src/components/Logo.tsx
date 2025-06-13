import type { JSX } from "react";
import LogoImage from "../assets/Logo.png"
import { Link } from "react-router-dom";

interface Size{
    height:number,
    width:number,
}
function Logo({height,width}:Size):JSX.Element{
    return(
        <>
        <Link to="/"><img src={LogoImage} alt="Logo" height={height} width={width}/></Link>
        </>
    )
}
export default Logo;