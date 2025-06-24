import { useState, type JSX } from "react";
import { useNavigate } from "react-router-dom";
import { validateRentalForm, type Errors, type FormData } from "../utils/rentalFormValidation";

function RentalForm(): JSX.Element {
    const [formData, setFormData] = useState<FormData>({
        fname: "",
        lname: "",
        phone: 0,
        passenger: 0,
        vehicleName: "",
        pickupDate: "",
        pickuptime: "",
        days: 0,
        dl: null,
        check : false,
    });

    const [errors, setErrors] = useState<Errors>({});
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type, files,checked } = e.target as HTMLInputElement;

        if (type === "file") {
            setFormData((prev) => ({ ...prev, [name]: files ? files[0] : null }));
        }else if(type === "checkbox"){
            setFormData((prev)=>({...prev, [name]: checked}))
        }
        else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const validateErrors = validateRentalForm(formData);
        setErrors(validateErrors);

        if (Object.keys(validateErrors).length === 0) {
            console.log("Form submitted successfully");
            setFormData({
                fname: "",
                lname: "",
                phone: 0,
                passenger: 0,
                vehicleName: "",
                pickupDate: "",
                pickuptime: "",
                days: 0,
                dl: null,
                check:false,
            });
            navigate("/rentalCart");
        }
    };

    return (
        <div
            style={{ backgroundImage: `url(src/assets/toyota.jpg)` }}
            className="min-h-screen bg-center bg-cover text-white py-8 px-4 md:px-10">
            <form
                className="bg-[#2480e9d7] max-w-4xl mx-auto p-6 shadow-2xl rounded"
                onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <div>
                        <label htmlFor="fname">First Name:</label>
                        <input
                            type="text"
                            name="fname"
                            id="fname"
                            value={formData.fname}
                            onChange={handleChange}
                            placeholder="Enter first name"
                            className="bg-white w-full text-black p-2 rounded outline-0"/>
                        <span className="text-red-800">{errors.fname}</span>
                    </div>
                    <div>
                        <label htmlFor="lname">Last Name:</label>
                        <input
                            type="text"
                            name="lname"
                            id="lname"
                            value={formData.lname}
                            onChange={handleChange}
                            placeholder="Enter last name"
                            className="bg-white w-full text-black p-2 rounded outline-0"/>
                        <span className="text-red-800">{errors.lname}</span>
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="phone">Phone Number:</label>
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-white w-full p-2 text-black rounded outline-0"
                        placeholder="Enter your phone number"/>
                    <span className="text-red-800">{errors.phone}</span>
                </div>

                <div className="mb-4">
                    <label htmlFor="passenger">Number of Passengers:</label>
                    <input
                        type="number"
                        name="passenger"
                        id="passenger"
                        value={formData.passenger}
                        onChange={handleChange}
                        className="bg-white w-full p-2 text-black rounded outline-0"
                        placeholder="Total passengers"/>
                    <span className="text-red-800">{errors.passenger}</span>
                </div>

                <div className="mb-4">
                    <label htmlFor="vehicleName">Vehicle Name:</label>
                    <select
                        name="vehicleName"
                        id="vehicleName"
                        value={formData.vehicleName}
                        onChange={handleChange}
                        className="bg-white w-full text-black p-2 rounded outline-0">
                        <option value="">Choose Vehicle</option>
                        <option value="scorpio">Mahindra Scropio</option>
                        <option value="creta">Hyundai Creta</option>
                        <option value="harrier">Tata Harrier</option>
                        <option value="thar">Mahindra Thar Rox</option>
                        <option value="swift">Maruti Suzuki Swift</option>
                        <option value="seltos">Kia Seltos</option>
                    </select>
                    <span className="text-red-800">{errors.vehicleName}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <div>
                        <label htmlFor="pickupDate">Pickup Date:</label>
                        <input
                            type="date"
                            name="pickupDate"
                            id="pickupDate"
                            value={formData.pickupDate}
                            onChange={handleChange}
                            className="bg-white w-full text-black p-2 rounded outline-0"/>
                        <span className="text-red-800">{errors.pickupDate}</span>
                    </div>
                    <div>
                        <label htmlFor="pickuptime">Pickup Time:</label>
                        <input
                            type="time"
                            name="pickuptime"
                            id="pickuptime"
                            value={formData.pickuptime}
                            onChange={handleChange}
                            className="bg-white w-full text-black p-2 rounded outline-0"/>
                        <span className="text-red-800">{errors.pickupTime}</span>
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="days">For how many days do you need?</label>
                    <input
                        type="number"
                        name="days"
                        id="days"
                        value={formData.days}
                        onChange={handleChange}
                        className="bg-white w-full p-2 text-black rounded outline-0"
                        placeholder="Total number of days"/>
                    <span className="text-red-800">{errors.days}</span>
                </div>

                <div className="mb-4">
                    <label htmlFor="dl">Upload DL:</label>
                    <input
                        type="file"
                        name="dl"
                        onChange={handleChange}
                        className="bg-white p-2 text-black w-full rounded outline-0"/>
                    <span className="text-red-800">{errors.dl}</span>
                </div>

                <div className="flex items-center gap-2 mb-4">
                    <input type="checkbox" id="check" name="check" checked={formData.check} onChange={handleChange}/>
                    <label htmlFor="check">I agree to all terms and conditions</label>
                    <span className="text-red-800">{errors.check}</span>
                </div>

                <input
                    type="submit"
                    value="Submit"
                    className="bg-green-500 p-2 text-white font-bold hover:bg-green-700 cursor-pointer w-full rounded"/>
            </form>
        </div>
    );
}

export default RentalForm;
