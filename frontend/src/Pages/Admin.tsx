import { type JSX } from 'react'
import { FaCar, FaRupeeSign } from "react-icons/fa";
import { MdCarRental, MdEventAvailable } from "react-icons/md";
import CardDashboard from '../components/DashboardCard'
import type{ cardDashboard } from '../components/DashboardCard';
import CarBookingBarChart from '../components/AdminBarChart';


function Admin():JSX.Element {
    const cards:cardDashboard[] = [
        { id: "revenue",symbol:<FaRupeeSign />, head: "Total Revenue", detail: "₹8,450", growth:"5% this month" },
        { id: "bookings",symbol:<FaCar />, head: "Total Bookings", detail: "15",growth:"20% this month"  },
        { id: "rent",symbol:<MdCarRental />, head: "Rented Cars", detail: "20",growth:"15% this month" },
        { id: "available",symbol:<MdEventAvailable />, head: "Available Cars", detail: "45",growth:"5% this quarter"  },
    ];
    return (
        <> 
            <div className="flex flex-col w-[75vw] h-[89vh] bg-[#cad9f371]">
                <div className='flex gap-4 p-4 mt-4'>
                {
                cards.map((item)=>{
                    return(
                        <CardDashboard key={item.id} symbol={item.symbol} head={item.head} detail={item.detail} growth={item.growth}/>
                    )
                })
            }
            </div>
            <CarBookingBarChart/>
        </div>
            
            
        </>
    )
}

export default Admin
