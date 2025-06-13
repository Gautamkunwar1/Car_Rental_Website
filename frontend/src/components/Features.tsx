import type { JSX } from "react";

export interface AboutInfoProps {
    id?: number;
    head: string;
    desc: string;
    imgUrl: string;
    reverse?: boolean;
}

function Features({ head, desc, imgUrl, reverse = false }: AboutInfoProps): JSX.Element {
    return (
        <div
            className={`flex flex-col md:flex-row shadow-2xl bg-blue-100 mb-7 mx-auto w-[95%] gap-5 
        ${reverse ? 'md:flex-row-reverse' : ''}`}
        >
            <div className="px-5 py-4 flex-1 text-gray-700 text-justify">
                <h1 className="text-2xl font-semibold pb-2">{head}</h1>
                <p className="pb-3">{desc}</p>
                <button className="bg-blue-400 p-2 hover:bg-blue-600 text-white font-bold cursor-pointer">
                    Learn More
                </button>
            </div>

            <div className="p-2 flex-1">
                <img
                    src={imgUrl}
                    alt={head}
                    className="w-full h-[80%] max-h-[400px] object-cover rounded"
                />
            </div>
        </div>
    );
}

export default Features;
