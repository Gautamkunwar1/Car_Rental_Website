import { FaFileExport } from "react-icons/fa6";
import CarTable from '../components/CarTable'

function AllCarList() {
    return (
        <>
            <div className='flex justify-between bg-blue-400 p-5 pl-10 text-white '>
                <h1 className="text-xl font-bold" >All Car List</h1>
                <span className="cursor-pointer flex items-center gap-3">Export to excel<FaFileExport /></span>
            </div>
            
            <CarTable/>
        </>
    )
}

export default AllCarList
