import { useEffect, useState, type JSX } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import TableRow from "./DynamicTd";
import DeleteModel from "./DeleteModel";
import EditModel from "./EditModel";


export interface Car {
    carNo: string,
    name: string,
    desc: string,
    rent: number,
    image: string,
    seats: number,
    _id?: number,
}

function CarTable(): JSX.Element {
    const tableHeader = ["CarName", "CarNumber", "Rent", "Seats", "Description", "Image-URL", "Action"];
    const [tableRowData, setTableRowData] = useState<Car[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [isDelModalOpen, setIsDelModalOpen] = useState<boolean>(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
    const [refresh, setRefresh] = useState<boolean>(false);
    const [selectedCar, setSelectedCar] = useState<Car | null>(null);
    const [editedCar, setEditedCar] = useState({})


    useEffect(() => {
        const fetchCar = async () => {
            try {
                const res = await fetch(`/api/car/allCars?page=${currentPage}`, {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                const response = await res.json();
                const { cars, totalPages, currentPage: serverPage } = response.data;
                // console.log(cars,totalPages)
                setTableRowData(cars);
                setTotalPages(totalPages);
                setCurrentPage(currentPage);
            } catch (error) {
                console.error("Failed to fetch cars data", error)
            }
        }
        fetchCar()
    }, [currentPage, refresh])

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage((prev) => prev - 1)
    }

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage((prev) => prev + 1)
    }

    const openDeleteModel = (car: Car) => {
        setSelectedCar(car);
        setIsDelModalOpen(true)
    }

    const openEditModel = (car: Car) => {
        setIsEditModalOpen(true);
        setEditedCar(car);
    }
    const handleDeleteClick = async (row: any) => {
        const carId = row._id;
        if (!selectedCar) return;

        try {
            const res = await fetch(`/api/car/deleteCar/${carId}`, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json"
                }
            })
            if (res.ok) {
                setRefresh(prev => !prev);
                setIsDelModalOpen(false);
                setSelectedCar(null);
                console.log("Car deleted successfully")
            }
        } catch (error) {
            console.error("Error:", error)
        }
    }

    const handleEditClick = async (updatedCar: Car) => {
        const carId = updatedCar._id;
        if (!carId) return;

        try {
            const res = await fetch(`/api/car/editCar/${carId}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(updatedCar),
            });
            if (res.ok) {
                setRefresh((prev) => !prev);
                setIsEditModalOpen(false);
                setSelectedCar(null);
                setEditedCar({});
                console.log("Car Edited successfully");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <>
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
                                        <span onClick={() => openEditModel(row)}><FiEdit /></span>
                                        <span onClick={() => openDeleteModel(row)}><FaTrashAlt /></span>
                                    </div>
                                } />
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-end mr-5 items-center gap-4 mt-1 mb-2">
                <button className="px-4 py-2 bg-blue-400 text-white disabled:opacity-50 cursor-pointer" onClick={handlePrev}
                    disabled={currentPage === 1}>Prev</button>
                <span>Page {currentPage} of {totalPages}</span>
                <button className="px-4 py-2 bg-blue-400 text-white disabled:opacity-50 cursor-pointer" onClick={handleNext}
                    disabled={currentPage === totalPages}>Next</button>
            </div>

            <DeleteModel isOpen={isDelModalOpen} onClose={() => setIsDelModalOpen(false)} onConfirm={() => handleDeleteClick(selectedCar)}
                message={`Are you sure you want to delete "${selectedCar?.name}"?`} />

            {isEditModalOpen && <EditModel isOpen={isEditModalOpen}
                editedCar={editedCar} setIsEditModelOpen={setIsEditModalOpen} onUpdate={handleEditClick} />}
        </>
    )
}

export default CarTable
