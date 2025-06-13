import { type JSX } from "react";
function RentalCart():JSX.Element{
    return (
        <>
        <div className="flex w-[60%] mx-auto mt-5 mb-5 shadow-2xl bg-[#deecf7]">
            <div className="w-full">
                <img src="src/assets/maruti.jpg" alt="" className="w-full"/>
            </div>
            <div className="w-full  p-5 text-center flex flex-col justify-center gap-y-1.5">
                <h1 className="text-xl font-semibold">Maruti Suzuki</h1>
                <p><span className="font-semibold">Pickup Date:</span>17/04/2025</p>
                <p><span className="font-semibold">Dropout Date:</span>19/04/2025</p>
                <p><span className="font-semibold">Amount:</span>4000</p>
            
            <div className="flex justify-center gap-4 mt-5">
            <button className="bg-red-500 p-1.5 text-white cursor-pointer font-semibold">Cancel Now</button>
            <button className="bg-green-400 p-1.5 text-white cursor-pointer font-semibold">Pay Now</button>
            </div>
            </div>
        </div>
        </>
    )
}
export default RentalCart;