import type { JSX } from "react";
import { Link } from "react-router-dom";


export interface CardDetail {
    id?:number,
    imgUrl: string;
    title: string;
    seats?:number,
    rent?:number,
    desc: string;
    btnText: string;
    navigateTo?:string,
}

function Card({ imgUrl, title, seats ,rent, desc, btnText }: CardDetail): JSX.Element {
    return (
        <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 m-3 border border-gray-200">
            {/* ImageBox */}
            <div className="overflow-hidden">
                <img
                    src={`${imgUrl}`}
                    alt="card image"
                    className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* TextBox */}
            <div className="p-5">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">{title}</h2>
                <div className="flex justify-center gap-4">
                    <h3 className="text-md  text-blue-600 mb-1">{rent?"Rent : ":""}{rent}</h3>
                    <p>{seats?"Seats : ":""}{seats}</p>
                </div>
                
                <p className="text-gray-600 mb-4">{desc}</p>

                <Link to =  "/rentalForm"> 
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-colors duration-200 w-full cursor-pointer">
                    {btnText}
                </button>
                </Link>
            </div>
        </div>
    );
}

export default Card;
