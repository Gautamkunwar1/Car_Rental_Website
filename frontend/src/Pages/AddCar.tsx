import React, { useState, type JSX } from "react";
import type { Errors } from "../utils/addCarValidation";
import { validateCarForm } from "../utils/addCarValidation";

function AddCar(): JSX.Element {
    const [formData, setFormData] = useState({
        name: "",
        carNo: "",
        desc: "",
        rent: 0,
        seats: 0,
        image: null as File | null,
    });
    const [errors, setErrors] = useState<Errors>({});

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>): void {
        const file = e.target.files?.[0];
        if (file) {
            setFormData(prev => ({ ...prev, image: file }));
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validateErrors = validateCarForm(formData);
        setErrors(validateErrors);

        if (Object.keys(validateErrors).length === 0) {
            await addCar();
            setFormData({
                name: "",
                carNo: "",
                desc: "",
                rent: 0,
                seats: 0,
                image: null,
            });
        }
    };

    const addCar = async (): Promise<void> => {
        try {
            const data = new FormData();
            data.append("name", formData.name);
            data.append("carNo", formData.carNo);
            data.append("desc", formData.desc);
            data.append("rent", String(formData.rent));
            data.append("seats", String(formData.seats));
            if (formData.image) data.append("image", formData.image);

            const response = await fetch("/api/car/addCar", {
                method: "POST",
                body: data,
            });

            if (!response.ok) throw new Error("Api fetch process failed");

            const result = await response.json();
            console.log("Car added successfully", result);
        } catch (error) {
            console.error("Error during adding Car:", error);
        }
    };

    return (
        <div>
            <h1 className="text-center font-semibold text-2xl mt-3 mb-2">Add Car</h1>
            <div className="bg-blue-200 mx-auto w-[70vw]">
                <form className="p-6 shadow-2xl" onSubmit={handleSubmit}>
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
                    <span className="text-red-500">{errors.name}</span><br />

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
                    <span className="text-red-500">{errors.carNo}</span><br />

                    <label htmlFor="desc">Description:</label>
                    <textarea
                        name="desc"
                        id="desc"
                        placeholder="Enter Car Description"
                        className="bg-white outline-0 w-full p-2 mb-1"
                        value={formData.desc}
                        onChange={handleChange}
                    ></textarea>
                    <span className="text-red-500">{errors.desc}</span><br />

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
                            <span className="text-red-500">{errors.rent}</span><br />
                        </div>

                        <div className="w-1/2">
                            <label htmlFor="seats" className="block">Seats:</label>
                            <input
                                type="text"
                                id="seats"
                                name="seats"
                                placeholder="Enter number of seats"
                                value={formData.seats}
                                onChange={handleChange}
                                className="bg-white outline-0 w-full p-2 mb-2"
                            />
                            <span className="text-red-500">{errors.seats}</span><br />
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
                    <span className="text-red-500">{errors.image}</span><br />

                    <input
                        type="submit"
                        value="Submit"
                        className="w-full bg-[#7179eba4] hover:bg-[#7179eb] text-white p-2 mt-3 cursor-pointer"
                    />
                </form>
            </div>
        </div>
    );
}

export default AddCar;
