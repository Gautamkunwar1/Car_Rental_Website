import type { JSX } from "react"
import MainSection from "../components/MainSection";
import AboutUs from "../components/AboutUs";
import PartnerBanner from "../components/PartnerBanner";

function About():JSX.Element {
    const imageUrl:string = "src/assets/menCar.jpg";
    const heading: string = "About Us";
    const subheading: string = "Home >> About";
    const features: string[] = [];
    return (
        <>
            <MainSection imgUrl={imageUrl} heading={heading} subheading={subheading} features={features} showBookingBox={false}/>
            <AboutUs/>
            <PartnerBanner/>
        </>
    )
}

export default About
