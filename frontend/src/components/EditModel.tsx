import type React from "react";
import { useState } from "react";
import type { Car } from "./CarTable";

interface EditModelProps {
    isOpen: boolean;
    setIsEditModelOpen: React.Dispatch<React.SetStateAction<boolean>>;
    editedCar: any;
    onUpdate: (formData: Car, imageFile: File | null) => void;
}



function EditModel({ editedCar, setIsEditModelOpen, isOpen, onUpdate }: EditModelProps) {
    const [formData, setFormData] = useState<Car>({ ...editedCar });
    const [imageFile, setImageFile] = useState<File | null>(null);
    if (!isOpen) return null;

    function handleClose() {
        setIsEditModelOpen(false);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setImageFile(file);
    };
    const handleSubmit = () => {
        onUpdate(formData, imageFile)
    }
    return (
        <div className="min-h-screen flex items-center justify-center backdrop-blur-[5px]  absolute top-0 w-full left-0 z-100">
            <form className="p-6 shadow-2xl bg-[#c8dfe9]">
                <button type="button" onClick={handleClose} className="absolute top-15 right-62 text-gray-700 hover:text-gray-900 text-4xl font-bold  cursor-pointer">&times;</button>
                <label htmlFor="name">Car Name:</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Car name"
                    className="bg-white outline-0 w-full p-2 mb-1"
                    value={formData.name}
                    onChange={handleChange}
                />

                <label htmlFor="carNo">Car Number:</label>
                <input
                    type="text"
                    name="carNo"
                    id="carNo"
                    placeholder="Enter Car number"
                    className="bg-white outline-0 w-full p-2 mb-1"
                    value={formData.carNo}
                    onChange={handleChange}
                />

                <label htmlFor="desc">Description:</label>
                <textarea
                    name="desc"
                    id="desc"
                    placeholder="Enter Car Description"
                    className="bg-white outline-0 w-full p-2 mb-1"
                    value={formData.desc}
                    onChange={handleChange}
                ></textarea>

                <div className="flex gap-4">
                    <div className="w-1/2">
                        <label htmlFor="rent" className="block">Rent:</label>
                        <input
                            type="text"
                            id="rent"
                            name="rent"
                            placeholder="Enter rent"
                            className="bg-white outline-0 w-full p-2 mb-2"
                            value={formData.rent}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="w-1/2">
                        <label htmlFor="seats" className="block">Seats:</label>
                        <input
                            type="text"
                            id="seats"
                            name="seats"
                            placeholder="Enter number of seats"
                            className="bg-white outline-0 w-full p-2 mb-2"
                            value={formData.seats}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <label htmlFor="image">Image:</label>
                <input
                    type="file"
                    name="image"
                    id="image"
                    className="bg-white w-full p-3 text-gray-500"
                    onChange={handleFileChange}
                />
                {editedCar.image && (
                    <span className="text-gray-700">Previously Added : {editedCar.image}</span>
                )}
                <div>

                    <button type="button" className="w-full  bg-green-600 hover:bg-green-800 mt-5 text-white p-2 rounded-md cursor-pointer transition" onClick={handleSubmit}>Update</button>
                </div>
            </form>
        </div>
    )
}

export default EditModel
