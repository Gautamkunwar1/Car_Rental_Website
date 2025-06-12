import { useState, type JSX } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login():JSX.Element {
    const [userEmail,setUserEmail] = useState<string>("");
    const [password,setPassword] = useState<string>("");
    const [showPassword,setShowPassword] = useState<boolean>(false);
    return (
        <>
            <div className="bg-[url(src/assets/blueCar.jpg)] bg-center bg-no-repeat bg-cover flex justify-center items-center h-[70vh]">
                <form className="flex justify-center items-center h-[80%] w-[40%] bg-[#20202063] border-1 shadow-2xl text-white">
                    <div className="w-full p-7 mb-5 mt-5">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" placeholder="Enter Email" className="bg-white p-1.5 w-full mb-2 outline-0 text-black" value={userEmail} onChange={(e)=>setUserEmail(e.target.value)} required />

                        <label htmlFor="password">Password:</label>
                        <div className="flex justify-between items-center pr-4 mb-2 bg-white">
                            <input type={showPassword?"text":"password"} name="password" id="password" placeholder="Enter Password" className="bg-white p-1.5 w-full text-black outline-0" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                            <span
                                className="text-gray-500 cursor-pointer opacity-50 ml-2" onClick={()=>setShowPassword(!showPassword)}>
                                {showPassword ?<FaEyeSlash /> :<FaEye /> }
                            </span>
                        </div>

                        <input
                            type="submit"
                            value="Login"
                            className="w-full bg-green-500 text-white font-bold mt-5 p-2 rounded-lg hover:bg-green-800 cursor-pointer"
                        />
                        <p className="text-center mt-3">
                            Don't have an account?{" "}
                            <Link to="/signup" className="text-white ">Sign Up</Link>
                        </p>
                    </div>

                </form>
            </div>
        </>
    )
}

export default Login
