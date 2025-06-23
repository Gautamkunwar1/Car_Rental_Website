import { useEffect, useState, type JSX } from "react";
import TableRow from "./DynamicTd";
import { FaFileExport } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import DeleteModel from "./DeleteModel";

interface Msg {
    _id: string;
    name: string;
    email: string;
    msg: string;
    createdAt: string;
}

function MessageTable(): JSX.Element {
    const tableHeader = ["UserName", "Email", "Message", "Date", "Action"];
    const [tableRowData, setTableRowData] = useState<Msg[]>([]);
    const [refresh, setRefresh] = useState<boolean>(false);
    const [selectedMsg, setSelectedMsg] = useState<Msg | null>(null);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    useEffect(() => {
        const allMsg = async () => {
            try {
                const res = await fetch("/api/msg/getAllMsg", {
                    method: "GET"
                });
                const response = await res.json();
                const messages: Msg[] = response.data;
                setTableRowData(messages);
            } catch (error) {
                console.error("Failed to fetch messages");
            }
        };
        allMsg();
    }, [refresh]);

    const openDeleteModel = (msg: Msg) => {
        setSelectedMsg(msg);
        setIsModalOpen(true);
    };

    const handleDelClick = async (msg: Msg | null) => {
        if (!msg || !msg._id) return;

        try {
            const res = await fetch(`/api/msg/deleteMsg/${msg._id}`, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json"
                }
            });
            if (res.ok) {
                setRefresh((prev) => !prev);
                setIsModalOpen(false);
                setSelectedMsg(null);
                console.log("Msg deleted successfully");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <>
        <div className="flex bg-blue-400 justify-center items-center text-white cursor-pointer ">
            <h1 className="p-5 text-lg  font-bold w-[80%]">All Message List</h1>
            <span className="cursor-pointer flex items-center gap-3">Export to excel<FaFileExport /></span>
        </div>
            <table className="border-collapse border border-blue-500 w-[95%] mx-auto mt-5">
                <thead>
                    <tr className="text-center bg-gray-100">
                        {tableHeader.map((head, index) => (
                            <th key={index} className="border border-blue-400 px-4 py-2">
                                {head}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-[#cad9f371] shadow-xl">
                    {tableRowData.map((row) => (
                        <TableRow
                            key={row._id}
                            td1={row.name}
                            td2={row.email}
                            td3={row.msg}
                            td4={row.createdAt ? new Date(row.createdAt).toLocaleDateString() : "N/A"}
                            td5={
                                <span className="cursor-pointer flex justify-center text-xl" onClick={() => openDeleteModel(row)}>
                                    <FaTrashAlt />
                                </span>
                            }
                        />
                    ))}
                </tbody>
            </table>

            <DeleteModel
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={() => handleDelClick(selectedMsg)}
                message={`Are you sure you want to delete ${selectedMsg?.name}'s msg?`}
            />
        </>
    );
}

export default MessageTable;
