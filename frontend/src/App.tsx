import type { JSX } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Admin from "./Pages/Admin";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import NotFoundPage from "./Pages/NotFoundPage";
import Service from "./Pages/Service";
import Signup from "./Pages/Signup";
import AdminRoute from "./Route/AdminRoute";
import UserRoute from "./Route/UserRoute";
import AdminInfo from "./components/AdminInfo";
import AdminSideBar from "./components/AdminSideBar";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import RentalCart from "./components/RentalCart";
import RentalForm from "./components/RentalForm";
import useAuthStore from "./store/AuthStore";
import AllUserList from "./Pages/AllUserList";
import AllCarList from "./Pages/AllCarList";
import AddCar from "./Pages/AddCar";
import MessageTable from "./components/MessageTable";

export default function App(): JSX.Element {
  const user = useAuthStore((state) => state.user);
  // const checkingAuth = useAuthStore((state)=>state.checkingAuth)
  const isAdmin = user?.role === 'admin';

  // if(checkingAuth) return <p>..loading</p>
  return (
    <BrowserRouter>
      {!isAdmin && <Navbar />}

      <div className={isAdmin ? "flex" : ""}>
        {isAdmin && <AdminSideBar />}
        <div>
          {isAdmin && <AdminInfo/>}
          <div>

    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected User Routes */}
      <Route path="/rentalCart"
            element={
              <UserRoute>
                <RentalCart />
              </UserRoute>
            }
          />
      <Route path="/rentalForm"
            element={
              <UserRoute>
                <RentalForm />
              </UserRoute>
            }
          />
      <Route path="/admin"
            element={
              <AdminRoute>
                <Admin />
              </AdminRoute>
            }
          />

      <Route path="/admin/clients"
            element={
              <AdminRoute><AllUserList /></AdminRoute>
            }
          />

      <Route path = "/admin/allcars" element={<AdminRoute><AllCarList/></AdminRoute>}/>
      <Route path = "/admin/addCar" element={<AdminRoute><AddCar/></AdminRoute>}/>
      <Route path = "/admin/messages" element={<AdminRoute><MessageTable/></AdminRoute>}/>
      <Route path="*" element={<NotFoundPage />} />
        </Routes>
          </div>
          
        </div>
        
      </div>

      {!isAdmin && <Footer />}
    </BrowserRouter>
  );
}
