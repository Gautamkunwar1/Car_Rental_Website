import type { JSX } from "react"
import MainSection from "../components/MainSection";
import AboutUs from "../components/AboutUs";
import PartnerBanner from "../components/PartnerBanner";
import type{ AboutInfoProps } from "../components/Features";
import Features from "../components/Features";

function AboutComponent():JSX.Element {
    const aboutData:AboutInfoProps[]=[
        {
            id:1,
            head:"Sustainability",
            desc:"we are committing to becoming a fully electric, zero-emission platform by 2040, with 100% of rides taking place in zero-emission vehicles, on public transit, or with micromobility. It is our responsibility as the largest mobility platform in the world to more aggressively tackle the challenge of climate change. We will do this by offering riders more ways to ride green, helping drivers go electric, making transparency a priority and partnering with NGOs and the private sector to help expedite a clean and just energy transition",
            imgUrl:"src/assets/Sustainability.jpg"
        },
        {
            id:2,
            head:"Safety",
            desc:" It is our responsibility as the largest mobility platform in the world to more aggressively tackle the challenge of climate change. We will do this by offering riders more ways to ride green, helping drivers go electric, making transparency a priority and partnering with NGOs and the private sector to help expedite a clean and just energy transition",
            imgUrl:"src/assets/safety.jpg",
            reverse:true,
        }
            
    ]

    const imageUrl:string = "src/assets/menCar.jpg";
    const heading: string = "About Us";
    const subheading: string = "Home >> About";
    const features: string[] = [];
    const desc :string = "Convenient, affordable car rentals with a wide range of vehicles and 24/7 support.";
    return (
        <>
            <MainSection imgUrl={imageUrl} heading={heading} subheading={subheading} features={features} desc={desc} isHome={false} showBookingBox={false}/>
            <AboutUs/>

            <h1 className="text-center mb-5 text-3xl font-bold underline text-gray-600">Our Core Vision</h1>
            {
                aboutData.map((item)=>{
                    return (
                        <Features key={item.id} head={item.head} desc={item.desc} imgUrl={item.imgUrl} reverse={item.reverse}/>
                    )
                })
            }
            <PartnerBanner/>
        </>
    )
}

export default AboutComponent;
