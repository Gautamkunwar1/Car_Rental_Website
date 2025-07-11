import { useEffect, useState, type JSX } from "react";
import TableRow from "./DynamicTd";
import { FaTrashAlt } from "react-icons/fa";
import DeleteModel from "./DeleteModel";

interface User {
    _id: string;
    name: string;
    email: string;
    createdAt: string;
}

export default function UserTable(): JSX.Element {
    const tableHeader = ["UserId", "UserName", "Email", "Created", "Action"];
    const [tableRowData, setTableRowData] = useState<User[]>([]);
    const [refresh, setRefresh] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser,setSelectedUser] = useState<User|null>(null);
    const [currentPage,setCurrentPage] = useState<number>(1);
    const [totalPages,setTotalPages] = useState<number>(1);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch(`/api/users/allUser?page=${currentPage}`, {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                const response = await res.json()
                const {users,totalPages,currentPage:serverPage} = response.data
                setTableRowData(users);
                setCurrentPage(currentPage);
                setTotalPages(totalPages)
            } catch (error) {
                console.error("Failed to fetch users", error)
            }
        }
        fetchUser()
    }, [currentPage,refresh])

    const handlePrev = ()=>{
        if(currentPage >1) setCurrentPage((prev)=>prev-1)
    }

    const handleNext = ()=>{
        if(currentPage<totalPages) setCurrentPage((prev)=>prev+1)
    }

    const openDeleteModel = (user: User) => {
    setSelectedUser(user);
    setIsModalOpen(true);
    };

    async function handleClick(row: any) {
        const UserId = row._id;
        if(!selectedUser) return;

        try {
            const res = await fetch(`/api/users/deleteUser/${UserId}`, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json"
                }
            })
            if (res.ok) {
                setRefresh(prev => !prev);
                setIsModalOpen(false);
                setSelectedUser(null);
                console.log("user deleted successfully");

            }
        }
        catch (error) {
            console.error("Error:", error)
        }
    }

    return (
        <>
            <table className="border-collapse border border-blue-500 w-[95%] mx-auto mt-5">
                <thead>
                    <tr className="text-center bg-gray-100">
                        {tableHeader.map((head, index) => (
                            <th key={index} className="border border-blue-400 px-4 py-2">{head}</th>
                        ))}
                    </tr>
                </thead>

                <tbody className="bg-[#cad9f371] shadow-xl">
                    {tableRowData.map((row) => (
                        <TableRow
                            key={row._id}
                            td1={row._id}
                            td2={row.name}
                            td3={row.email}
                            td4={new Date(row.createdAt).toLocaleDateString()}
                            td5={
                                <span className="cursor-pointer flex justify-center text-xl" onClick={() => openDeleteModel(row)}> <FaTrashAlt /></span>
                            } />
                    ))}
                </tbody>
            </table>
            <div className="flex justify-end mr-5 items-center gap-4 mt-10">
                <button className="px-4 py-2 bg-blue-400 text-white disabled:opacity-50 cursor-pointer" onClick={handlePrev}
                    disabled={currentPage === 1}>Prev</button>
                <span>Page {currentPage} of {totalPages}</span>
                <button className="px-4 py-2 bg-blue-400 text-white disabled:opacity-50 cursor-pointer" onClick={handleNext}
                    disabled={currentPage === totalPages}>Next</button>
            </div>

            <DeleteModel isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onConfirm={()=>handleClick(selectedUser)}
                message={`Are you sure you want to delete "${selectedUser?.name}"?`}
            />
        </>
    )
}