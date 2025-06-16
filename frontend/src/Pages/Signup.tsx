import { useState, type JSX } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { validateForm, type Errors, type FormData } from "../utils/signupValidation";
import useAuthStore from "../store/AuthStore";


function Signup():JSX.Element{
    const [formData,setFormData] = useState <FormData>({
        name :"",
        email:"",
        password:"",
        cpassword:""
    })
    const [errors,setErrors] = useState<Errors>({});
    const[showPassword,setShowPassword] = useState<boolean> (false);
    const[cShowPassword,cSetShowPassword] = useState<boolean>(false);

    const signup = useAuthStore((state)=>state.signup);

    function handleChange(e:React.ChangeEvent<HTMLInputElement>):void{
        const{name,value}= e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    async function handleSubmit(e:React.FormEvent<HTMLFormElement>):Promise<void>{
        e.preventDefault();
        const validateErrors = validateForm(formData);
        setErrors(validateErrors);

        if(Object.keys(validateErrors).length === 0){
            const{email,password,name} = formData;
            await signup({name,email,password,confirmPassword:formData.cpassword})
            setFormData({
                name:"",
                email:"",
                password:"",
                cpassword:"",
            })
        }
    }


    return (
        <>
        <div className="bg-[url(src/assets/blueCar.jpg)] bg-center bg-no-repeat bg-cover flex justify-center items-center h-[75vh]">
                <form action="" className="flex justify-center items-center h-[90%] w-[40%] bg-[#20202063] border-1 shadow-2xl text-white" onSubmit={handleSubmit}>
                    <div className=" w-full p-7 mb-5 mt-5">

                        <label htmlFor="name">Name:</label>
                        <input type="text" className="bg-white p-1.5 pl-2 w-full mb-2 outline-0 text-black" name="name" id="name" placeholder="Enter name" value={formData.name} onChange={handleChange} />
                        <span className="text-red-500">{errors.name}</span><br />

                        <label htmlFor="email">Email:</label>
                        <input type="email" className="bg-white p-1.5 pl-2 w-full mb-2 outline-0 text-black" name="email" id="email" placeholder="Enter email" value={formData.email} onChange={handleChange} />
                        <span className="text-red-500">{errors.email}</span><br />

                        <label htmlFor="password">Password:</label>
                        <div className="flex justify-between items-center pr-4 mb-2 bg-white">
                        <input type={showPassword?"text":"password"} className="bg-white p-1.5 pl-2 w-full mb-2 outline-0 text-black" name="password" id="password" placeholder="Enter Password" value={formData.password} onChange={handleChange} />
                        <span className="text-gray-400 cursor-pointer opacity-50" onClick={() => setShowPassword(!showPassword)}>{showPassword?<FaEyeSlash />:<FaEye/>}</span>
                        </div>
                        <span className="text-red-500 ">{errors.password}</span>

                        <label htmlFor="Cpassword">Confirm Password:</label>
                        <div className="flex justify-between items-center bg-white pr-4 mb-2">
                        <input type={cShowPassword?"text":"password"} className="bg-white p-1.5 pl-2 w-full mb-2 outline-0 text-black" name="cpassword" id="cpassword" placeholder="Confirm Password" value={formData.cpassword} onChange={handleChange} />
                        <span className="text-gray-400 cursor-pointer opacity-50" onClick={()=>cSetShowPassword(!cShowPassword)}>{cShowPassword?<FaEyeSlash />:<FaEye/>}</span>
                        </div>
                        <span className="text-red-500">{errors.cpassword}</span>

                        <input type="submit" className="w-full bg-green-500 text-white font-bold mt-3 p-2 rounded-lg hover:bg-green-800 cursor-pointer"/>
                        <p className="text-center">Already have an account?<Link to="/login">Sign In</Link></p>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Signup