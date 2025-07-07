import { useEffect, useState, type JSX } from "react";
import Card from "../components/Card";
import MainSection from "../components/MainSection";

interface Card{
    _id:number,
    name:string,
    rent:number,
    seats:number,
    desc:string,
    image:string
}

function Service(): JSX.Element {
    const[cars,setCars] = useState([]);

    const imageUrl: string = "src/assets/safety.jpg";
    const heading: string = "Our Services";
    const subheading: string = "Home >> Services";
    const features: string[] = [];
    const desc: string = "Your one-stop car rental service, offering convenient online bookings and a wide range of vehicles for every travel need.";

    useEffect(()=>{
        const fetchCar = async()=>{
            try {
                const res = await fetch("/api/car/allCars",{
                    method:"GET",
                    headers:{
                        "Content-type":"application/json"
                    }
                })
                if(!res.ok) throw new Error("Failed to fetch Api");
                const response = await res.json();
                const cars = response.data.cars;
                setCars(cars);
                console.log(cars);
            } catch (error) {
                console.error("Error:",error)
            }
        }
        fetchCar();
    },[])
    return (
        <>
            <MainSection imgUrl={imageUrl} heading={heading} subheading={subheading} features={features} desc={desc} isHome={false} showBookingBox={false}/>

            <h1 className="text-center font-bold text-2xl my-2 text-gray-500">Available Car and Buses</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 max-[770px]:justify-items-center sm:grid-cols-2 text-center m-4 gap-2">
                {cars.map((car:Card)=>{
                    return <Card key={car._id} title={car.name} rent={car.rent} seats={car.seats} desc={car.desc} btnText="Rent Now" imgUrl={car.image}/>
})}
            </div>
            
        </>
    )
}

export default Service
