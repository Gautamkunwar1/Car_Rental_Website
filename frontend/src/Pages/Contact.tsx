import { useState, type JSX } from "react"
import { validateForm, type Errors, type FormData } from "../utils/contactFormValidation"

function Contact(): JSX.Element {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    })
    const [errors, setErrors] = useState<Errors>({})

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }


    function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        const validateErrors = validateForm(formData);
        setErrors(validateErrors);

        if (Object.keys(validateErrors).length === 0) {
            console.log("Form data is submitting")
        }
    }
    return (
        <>
            <div className="flex  ">
                <div className="w-[50%] p-5">
                    <img src="src/assets/contactus.jpg" alt="" />
                </div>
                <div className="w-[50%] flex justify-center items-center p-5">
                    <form action="" className="flex justify-center items-center w-full h-[100%] shadow-xl" onSubmit={handleSubmit}>
                        <div className=" w-full p-7 mb-5 mt-5">
                            <h1 className="text-center text-xl text-black font-semibold">Contact Us</h1>
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" id="name" placeholder="Enter Username" className="p-1.5 w-full mb-2 text-black bg-[#fdf7f7dc]" value={formData.name} onChange={handleChange} />
                            <span className="text-red-500">{errors.name}</span><br />

                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" id="email" placeholder="Enter your email" className="bg-[#fdf7f7dc] p-1.5 mb-2 w-full text-black" value={formData.email} onChange={handleChange} />
                            <span className="text-red-500">{errors.email}</span><br />

                            <label htmlFor="message">Message:</label>
                            <textarea name="message" id="message" className="bg-[#fdf7f7dc] w-full text-black pl-3" placeholder="Enter Message" value={formData.message} onChange={handleChange}></textarea>
                            <span className="text-red-500">{errors.message}</span><br />

                            <input type="submit" className="w-full bg-green-500 text-white font-bold mt-5 p-2 rounded-lg hover:bg-green-800 cursor-pointer" />

                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact
