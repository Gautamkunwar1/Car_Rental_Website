import { useEffect, useState, type JSX } from "react";
import TableRow from "./DynamicTd";
import { FaTrashAlt } from "react-icons/fa";

interface User {
    _id: string;
    name: string;
    email: string;
    createdAt: string;
}

export default function UserTable():JSX.Element{
    const tableHeader = ["UserId", "UserName", "Email", "Created", "Action"];
    const [tableRowData, setTableRowData] = useState<User[]>([]);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch("/api/users/allUser", {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                const response = await res.json()
                const users: User[] = response.data;
                console.log(users)
                setTableRowData(users)
            } catch (error) {
                console.error("Failed to fetch users",error)
            }
        }
        fetchUser()
    },[])

    function handleClick(e:React.MouseEvent<HTMLButtonElement>){
        console.log(e.currentTarget.parentElement?.parentElement?.firstElementChild);
    }
    return (
        <table className="border-collapse border border-blue-500 w-[95%] mx-auto mt-5">
            <thead>
                <tr className="text-center bg-gray-100">
                    {tableHeader.map((head,index)=>(
                        <th key={index} className="border border-blue-400 px-4 py-2">{head}</th>
                    ))}
                </tr>
            </thead>

            <tbody className="bg-[#cad9f371] shadow-xl">
                {tableRowData.map((row)=>(
                    <TableRow
                    key={row._id} 
                    td1={row._id}
                    td2={row.name}
                    td3={row.email}
                    td4={new Date(row.createdAt).toLocaleDateString()}
                    td5={
                    <span className="cursor-pointer flex justify-center text-xl" onClick={handleClick}> <FaTrashAlt/></span>
                }/>
                ))}
            </tbody>
        </table>
    )
}