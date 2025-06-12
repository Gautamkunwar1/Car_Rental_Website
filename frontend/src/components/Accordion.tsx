import { useState, type JSX } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export interface AccordionProps {
    id: number;
    title: string;
    desc: string;
}

function Accordion({ title, desc }: AccordionProps): JSX.Element {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    function toggleAccordion(): void {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div className="w-[90%] h-[50px] mx-auto text-white pl-5 flex justify-between items-center pr-5 shadow-2xl mb-1 cursor-pointer bg-gradient-to-r from-blue-400 via-blue-400 to-blue-200"
                onClick={toggleAccordion}
            >

                <h1 className="font-medium cursor-pointer">{title}</h1>
                {isOpen ? <FaMinus /> : <FaPlus />}
            </div>

            {isOpen &&
                <div className="w-[90%] mx-auto pl-5 pb-3">
                    <p>{desc}</p>
                </div>}
        </>
    )
}
export default Accordion;