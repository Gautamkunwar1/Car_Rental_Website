import type { JSX } from "react";
import { CiSearch } from "react-icons/ci";

export default function SearchBox(): JSX.Element {
    return (
        <div className="lg:ml-8 flex justify-between items-center bg-white rounded-sm max-[1230px]:mr-5 max-[568px]:hidden">
            <input
                type="text"
                className="rounded-md p-1.5 outline-none w-[80%]"
                name="searchBox"
                placeholder="Search Here"
            />
            <CiSearch size={18} className="mr-1" />
        </div>
    );
}
