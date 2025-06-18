import { type JSX } from 'react'
import UserTable from '../components/UserTable'
function AllUserList(): JSX.Element {
    return (
        <div>
            <h1 className='bg-blue-400 p-5 pl-10 text-white text-xl font-bold'>All User List</h1>
            <UserTable/>
        </div>
    )
}

export default AllUserList
