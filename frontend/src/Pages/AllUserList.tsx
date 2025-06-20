import { type JSX } from 'react'
import { FaFileExport } from "react-icons/fa6";
import UserTable from '../components/UserTable'
function AllUserList(): JSX.Element {
    return (
        <div>
            <div className='flex justify-between bg-blue-400 p-5 pl-10 text-white '>
                <h1 className="text-xl font-bold" >All User List</h1>
                <span className="cursor-pointer flex items-center gap-3">Export to excel<FaFileExport /></span>
            </div>
            <UserTable />
        </div>
    )
}

export default AllUserList
