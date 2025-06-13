import type { JSX } from "react"
import MainSection from "../components/MainSection"
import type { CardDetail } from "../components/Card";
import Card from "../components/Card";

function Service(): JSX.Element {

    const cardItem:CardDetail[] = [
        {
            id: 1,
            imgUrl: "src/assets/maruti.jpg",
            title: "Maruti Suzuki(4 Seater)",
            head: "",
            desc: "Book your car effortlessly and travel with ease — whether it's a city drive or a road trip",
            btnText:"Rent Now",
            navigateTo:"/rentalForm"
        },
        {
            id: 2,
            imgUrl: "src/assets/toyota.jpg",
            title: "Toyata (7 Seater)",
            head: "",
            desc: "Your Way Choose from a variety of cars, rent with ease, and enjoy a smooth, hassle-free journey",
            btnText:"Rent Now",
            navigateTo:"/rentalForm"
        },
        {
            id: 3,
            imgUrl: "src/assets/bus.jpg",
            title: "Bus(18 Seater)",
            head: "",
            desc: "Select your car, confirm your reservation, and enjoy a seamless travel experience!",
            btnText:"Rent Now",
            navigateTo:"/rentalForm"
        },
        {
            id: 4,
            imgUrl: "src/assets/maruti.jpg",
            title: "Maruti Suzuki(4 Seater)",
            head: "",
            desc: "Book your car effortlessly and travel with ease — whether it's a city drive or a road trip",
            btnText:"Rent Now",
            navigateTo:"/rentalForm"
        },
        {
            id: 5,
            imgUrl: "src/assets/toyota.jpg",
            title: "Toyota (7 Seater)",
            head: "",
            desc: "Your Way Choose from a variety of cars, rent with ease, and enjoy a smooth, hassle-free journey",
            btnText:"Rent Now",
            navigateTo:"/rentalForm"
        },
        {
            id: 6,
            imgUrl: "src/assets/bus.jpg",
            title: "Bus (18 Seater)",
            head: "",
            desc: "Select your car, confirm your reservation, and enjoy a seamless travel experience!",
            btnText:"Rent Now",
            navigateTo:"/rentalForm"
        },
    ];

    const imageUrl: string = "src/assets/safety.jpg";
    const heading: string = "Our Services";
    const subheading: string = "Home >> Services";
    const features: string[] = [];
    const desc: string = "Your one-stop car rental service, offering convenient online bookings and a wide range of vehicles for every travel need.";

    return (
        <>
            <MainSection imgUrl={imageUrl} heading={heading} subheading={subheading} features={features} desc={desc} isHome={false} showBookingBox={false}/>

            <h1 className="text-center font-bold text-2xl my-2 text-gray-500">Available Car and Buses</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 max-[770px]:justify-items-center sm:grid-cols-2 text-center m-4 gap-2">
                {
                cardItem.map((item)=>{
                    return (<Card key ={item.id} title={item.title} head={item.head} desc={item.desc} btnText={item.btnText} imgUrl={item.imgUrl} navigateTo={item.navigateTo}/>)
                })
            }
            </div>
            
        </>
    )
}

export default Service
