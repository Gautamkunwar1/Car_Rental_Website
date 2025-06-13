import type { JSX } from "react";

function PartnerBanner():JSX.Element {
    return (
        <>
            <h1 className='text-center text-3xl font-bold pl-5 mt-20'>Our Major  Partners</h1>
            <p className="text-center font-medium">Our Trusted Partners — Collaborating with industry leaders to provide exceptional car rental services and ensure the highest customer satisfaction.</p>

            <div className='flex flex-wrap lg:flex-nowrap justify-center lg:justify-around items-center mx-auto w-[95%] lg:w-[90%] rounded-lg shadow-2xl m-2 opacity-75 mt-5 mb-7  bg-blue-200 py-4 gap-4'>
                <div className='h-20 sm:h-24 md:h-28 lg:h-32 p-2'>
                    <img src="src/assets/logo/nbt.png" className='h-full w-auto object-contain' alt="NBT" />
                </div>
                <div className='h-20 sm:h-24 md:h-28 lg:h-32 p-2'>
                    <img src="src/assets/logo/walker.png" className='h-full w-auto object-contain' alt="Walker" />
                </div>
                <div className='h-20 sm:h-24 md:h-28 lg:h-32 p-2'>
                    <img src="src/assets/logo/rupa.png" className='h-full w-auto object-contain' alt="Rupa" />
                </div>
                <div className='h-20 sm:h-24 md:h-28 lg:h-32 p-2'>
                    <img src="src/assets/logo/assestplan.png" className='h-full w-auto object-contain' alt="Asset Plan" />
                </div>
                
                <div className='h-20 sm:h-24 md:h-28 lg:h-32 p-2'>
                    <img src="src/assets/logo/shri.png" className='h-full w-auto object-contain' alt="Shri" />
                </div>
            </div>
        </>
    )
}

export default PartnerBanner;