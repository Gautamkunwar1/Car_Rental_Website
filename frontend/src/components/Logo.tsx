import type { JSX } from "react";
import LogoImage from "../assets/Logo.png"

interface Size{
    height:number,
    width:number,
}
function Logo({height,width}:Size):JSX.Element{
    return(
        <>
        <img src={LogoImage} alt="Logo" height={height} width={width}/>
        </>
    )
}
export default Logo;