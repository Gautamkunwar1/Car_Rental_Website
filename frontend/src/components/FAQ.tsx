import type { JSX } from "react";
import Accordion from "./Accordion";
import type { AccordionProps } from "./Accordion";

function FAQ():JSX.Element {
    const accordionData:AccordionProps[]=[
        {
                id:1,
                title : "How do I book a rental car?",
                desc : "Simply choose your location, dates, and car type, then complete the booking online."
            },
            {
                id:2,
                title : "What documents do I need to rent a car?",
                desc : "A valid driver’s license and a credit/debit card are required at pickup."
            },
            {
                id:3,
                title : "Is there a minimum age to rent a car?",
                desc : "Yes, renters must be at least 21 years old (age may vary by location).  "
            },
            {
                id:4,
                title : "Can I cancel or modify my reservation?",
                desc : "Yes, reservations can be changed or canceled online, subject to the policy terms."
            },
            {
                id:5,
                title : "Are there any hidden fees?",
                desc : "No, all costs are clearly shown during booking—no hidden charges."
            },
    ]
    return (
        <>
            <div className="mb-10">
                <h1 className="text-center text-2xl font-bold mt-10 mb-5">Frequently Asked Questions (FAQs)</h1>
                {
                    accordionData.map((data)=>{
                            return <Accordion key={data.id} id={data.id} title={data.title} desc ={data.desc}/>
                        })
                    })
            </div>
        </>
    )
}

export default FAQ
