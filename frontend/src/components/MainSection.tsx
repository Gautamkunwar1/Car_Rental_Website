import type { JSX } from "react";
import { FaCheck } from "react-icons/fa";
import BookingInputBox from "./BookingInputBox";

export interface Details {
    imgUrl: string,
    heading: string,
    subheading: string,
    features: string[],
    desc?: string,
    showBookingBox: boolean;
    isHome?: boolean
}

export default function MainSection({ imgUrl, heading, subheading, features, desc,isHome, showBookingBox = true }: Details): JSX.Element {

    return (
        <div
            className={`bg-center bg-no-repeat bg-cover flex items-center justify-center ${!isHome ?  " h-[60vh]":"h-[85vh]"}`}
            style={{ backgroundImage: `url(${imgUrl})`, opacity: 0.7 }}>
            <div className="text-center">
                {/* Heading */}
                <h1
                    className={`lg:text-4xl md:text-2xl text-xl font-bold text-yellow-300 
                    ${isHome ? 'max-[650px]:hidden' : ''}`}>
                    {heading}
                </h1>

                <p className="text-center text-xl font-medium text-white">{desc}</p>

                {/* Features */}
                <p className="max-[980px]:hidden flex justify-center gap-3.5 text-xl text-white font-bold pt-2.5">
                    {features.map((feature: string, index: number) => (
                        <span key={index} className="flex items-center "><FaCheck /> {feature}</span>
                    ))}
                </p>

                {/* Subheading */}
                <h4 className="text-white text-xl font-bold pt-2">
                    {subheading}
                </h4>


                {/* Booking Input Box */}
                {showBookingBox && <BookingInputBox />}
            </div>
        </div>
    )
}