import type { JSX } from "react";
import { FaArrowUp } from "react-icons/fa";

export type cardDashboard = {
    id?:string,
    symbol:JSX.Element,
    head:string,
    detail:string|number,
    growth:number|string,
}

function CardDashboard({symbol,head,detail,growth}:cardDashboard){
    return(
        <>
        <div className="bg-blue-400 text-white flex items-center justify-around w-full h-28 hover:bg-blue-600">
            <div className="bg-blue-300 rounded-[50%] w-[30%] h-[50%] flex justify-center items-center text-black">
                <div className="text-2xl">{symbol}</div>
            </div>
            <div className="font-semibold text-lg">
                <h2>{head}</h2>
                <h4 className="text-right">{detail}</h4>
                <p className="text-sm text-right text-yellow-200 flex items-center"><FaArrowUp />{growth}</p>
            </div>
        </div>
        </>
    )
}
export default CardDashboard;