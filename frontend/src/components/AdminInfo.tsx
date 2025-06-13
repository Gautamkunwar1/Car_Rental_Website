import { FaUserCircle } from "react-icons/fa";
import SearchBox from './Searchbox';
import type { JSX } from "react";

function AdminInfo():JSX.Element {
    return (
        <>
            <div className="flex justify-between items-start p-4 bg-[#0a60f371] w-[75vw]">
                <div className="w-[50vw] px-4  ">
                    <div className="w-full ">
                        <SearchBox />
                    </div>
                </div>
                <div className="flex items-center gap-3 text-lg">
                    <FaUserCircle />
                    <p className="font-semibold mr-2">Welcome admin! Gautam</p>
                </div>
            </div>
        </>
    )
}

export default AdminInfo
