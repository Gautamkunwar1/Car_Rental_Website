import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import type { JSX } from "react";

function Footer():JSX.Element {
    return (
        <>
            <div className="bg-gradient-to-tr from-blue-300 via-blue-600 to-blue-300 text-white">
                <div className="text-center text-2xl font-bold pt-5">Car Rental-Drive Away</div>
                <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 max-w-[768px]:grid-cols-3 mx-auto pt-10 place-items-center pb-5 cursor-pointer">
                    <div>
                        <h1 className="text-xl font-bold">Company</h1>
                        <p>About us</p>
                        <p>Our Offerings</p>
                        <p>Newsroom</p>
                        <p>Investors</p>
                    </div>

                    <div>
                        <h1 className="text-xl font-bold">Products</h1>
                        <p>About us</p>
                        <p>Our Offerings</p>
                        <p>Newsroom</p>
                        <p>Investors</p>
                    </div>

                    <div>
                        <h1 className="text-xl font-bold">Global </h1>
                        <p>About us</p>
                        <p>Our Offerings</p>
                        <p>Newsroom</p>
                        <p>Investors</p>
                    </div>

                    <div>
                        <h1 className="text-xl font-bold">Travel</h1>
                        <p>About us</p>
                        <p>Our Offerings</p>
                        <p>Newsroom</p>
                        <div className="flex gap-1.5 text-lg">
                            <FaFacebookSquare />
                            <FaInstagramSquare />
                            <FaXTwitter />
                            <FaLinkedin />
                            <FaPinterest />
                        </div>
                    </div>
                </div>
                <hr></hr>
                <p className="text-center p-1">2025 &copy; Car Rental Website</p>
            </div>
        </>
    );
}

export default Footer;
