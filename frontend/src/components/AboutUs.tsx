import type { JSX } from "react";

function AboutUs():JSX.Element {
    return (
        <>
        <h1 className="text-center font-bold text-3xl m-5 text-gray-500 underline">About Us</h1>
            <div className="lg:flex w-[95%] mx-auto bg-blue-100 text-gray-600 mt-5 mb-10">
                {/* ImageBox */}
                <div className="w-full md-w-full">
                    <img src="src/assets/about.jpg" alt="can't load"  />
                </div>

                {/* TextBox */}
                <div>
                    <p className="text-md pt-1 font-medium pl-5 leading-7 pr-3 text-justify ">
                        Welcome to CarRental.com, your go-to destination for seamless and hassle-free car booking. Whether you need a
                        car for daily commutes, business trips, weekend getaways, or long road trips, we provide a wide range of
                        well-maintained vehicles to suit your needs.
                        <br />
                        <h2 className="text-xl font-bold">Why Choose Us?</h2>
                        ✅ Easy Booking Process – Select your car, choose your dates, and confirm your booking in just a few clicks. <br />
                        ✅ Affordable & Transparent Pricing – No hidden fees—just budget-friendly rental options. <br />
                        ✅ Wide Range of Vehicles – From compact cars to luxury rides, we have something for everyone. <br />
                        ✅ Flexible Rental Options – Book for hours, days, or weeks as per your convenience. <br />
                        ✅ Safe & Well-Maintained Cars – Regularly serviced vehicles for a smooth driving experience. <br />
                        ✅ 24/7 Customer Support – We’re here to assist you whenever you need us. <br />
                        
                        At Booking.com, we make traveling easier, more comfortable, and stress-free. Book your ride today and enjoy the
                        journey!
                    </p>
                </div>
            </div>
        </>
    );
}

export default AboutUs;
