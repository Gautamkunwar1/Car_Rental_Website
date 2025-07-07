import type { JSX } from "react";
import MainSection from "../components/MainSection";
import Card from "./Card";
import FAQ from "./FAQ";
import PartnerBanner from "./PartnerBanner";

interface cardItems {
    id:number;
    imgUrl:string;
    btnText :string;
    head?: string;
    desc:string;
}

function Index(): JSX.Element {

    const cardItem:cardItems[] = [
        {
            id: 1,
            imgUrl: "src/assets/maruti.jpg",
            btnText: "Booking",
            head: "Book a Ride :",
            desc: "Book your car effortlessly and travel with ease — whether it's a city drive or a road trip",
        },
        {
            id: 2,
            imgUrl: "src/assets/toyota.jpg",
            btnText: "Rental",
            head: "Rent a Car  :",
            desc: "Your Way Choose from a variety of cars, rent with ease, and enjoy a smooth, hassle-free journey",
        },
        {
            id: 3,
            imgUrl: "src/assets/bus.jpg",
            btnText: "Reservation",
            head: "Reserve Your Ride Instantly  :",
            desc: "Select your car, confirm your reservation, and enjoy a seamless travel experience!",
        },
        {
            id: 4,
            imgUrl: "src/assets/maruti.jpg",
            btnText: "Booking",
            head: "Book a Ride :",
            desc: "Book your car effortlessly and travel with ease — whether it's a city drive or a road trip",
        },
        {
            id: 5,
            imgUrl: "src/assets/toyota.jpg",
            btnText: "Rental",
            head: "Rent a Bus :",
            desc: "Your Way Choose from a variety of cars, rent with ease, and enjoy a smooth, hassle-free journey",
        },
        {
            id: 6,
            imgUrl: "src/assets/bus.jpg",
            btnText: "Reservation",
            head: "Reserve Your Ride Instantly  :",
            desc: "Select your car, confirm your reservation, and enjoy a seamless travel experience!",
        },
    ];

    const imageUrl: string = "src/assets/blueCar.jpg";
    const heading: string = "Car Rental - Search, Compare & Save";
    const subheading: string = "Your Journey, Your Car, Your Way";
    const features: string[] = [
        "Free Cancellations on most bookings",
        "50+ locations.",
        "Customer support in 10+ languages.",
    ];

    return (
        <>
            <MainSection imgUrl={imageUrl} heading={heading} subheading={subheading} features={features}isHome={true} showBookingBox={true}/>
            <h1 className="text-center mt-4 text-2xl font-bold"> Our Services</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 max-[770px]:justify-items-center sm:grid-cols-2 text-center m-4 gap-2">
            {cardItem.map((card) => (
                <Card key={card.id} title="" imgUrl={card.imgUrl}  btnText={card.btnText} desc={card.desc} />
            ))}
            </div>

            < PartnerBanner/>
            <FAQ/>
        </>
    );
}

export default Index;
