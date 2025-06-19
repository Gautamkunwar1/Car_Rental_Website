import { useEffect, useState, type JSX } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import TableRow from "./DynamicTd";


export interface Car {
    carNo: string,
    name: string,
    desc: string,
    rent: number,
    image: string,
    seats:number,
}

function CarTable(): JSX.Element {
    const tableHeader = ["CarName", "CarNumber", "Rent", "Seats" ,"Description", "Image-URL",  "Action"];
    const [tableRowData, setTableRowData] = useState<Car[]>([]);

    useEffect(() => {
        const fetchCar = async () => {
            try {
                const res = await fetch("/api/car/allCars", {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                const response = await res.json();
                const cars: Car[] = response.data;
                setTableRowData(cars)
            } catch (error) {
                console.error("Failed to fetch cars data", error)
            }
        }
        fetchCar()
    }, [])
    return (
        <div className="w-[75vw] overflow-x-auto">
            <table className="border-collapse border border-blue-500  mx-3 mt-5">
                <thead>
                    <tr className="text-center bg-gray-100">
                        {tableHeader.map((head, index) => (
                            <th key={index} className="border border-blue-400 px-4 py-2 min-w-[200px]">{head}</th>
                        ))}
                    </tr>
                </thead>

                <tbody className="bg-[#cad9f371] shadow-xl">
                    {tableRowData.map((row, index) => (
                        <TableRow
                            key={index}
                            td1={row.name} td2={row.carNo}
                            td3={row.rent} td4={row.seats}
                            td5={row.desc} td6={row.image}
                            td7={
                                <div className="flex justify-center items-center gap-3 cursor-pointer text-lg">
                                    <span><FiEdit /></span>
                                    <span><FaTrashAlt /></span>
                                </div>
                            } />
                    ))}
                </tbody>
            </table>
        </div>

    )
}

export default CarTable
