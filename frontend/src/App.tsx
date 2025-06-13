import { BrowserRouter,Routes,Route } from "react-router-dom";
import type { JSX } from "react";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import RentalCart from "./components/RentalCart";
import RentalForm from "./components/RentalForm";
import NotFoundPage from "./Pages/NotFoundPage";
import Admin from "./Pages/Admin";


export default function App():JSX.Element{
  
  return(
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rentalCart" element={<RentalCart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/rentalForm" element={<RentalForm />} />
        <Route path="*" element={<NotFoundPage />} />

        <Route path="/admin" element={<Admin />} />
  
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}