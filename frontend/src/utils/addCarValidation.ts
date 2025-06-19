import type{ Car } from "../components/CarTable"
export type Errors = {
    name?:string,
    carNo?:string,
    rent?:string,
    seats?:string,
    desc?:string,
    image?:string
}

export function validateCarForm(data:Car):Errors{
    const errors:Errors = {};
    const carNoRegex:RegExp = /^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$/;
    if(!data.name.trim() || data.name.length<4){
        errors.name = "Provide a valid name";
    }

    if(!data.carNo.trim())  errors.carNo = "Car Number is required";
    if(!carNoRegex.test(data.carNo) || data.carNo.length!==10) errors.carNo = "Provide a valid Car Number of length 10";

    if(!data.rent) errors.rent= "Rent field cannot sent to be empty";
    if(!data.seats) errors.seats= "Seats field cannot sent to be empty";

    if(!data.image) errors.image= "Image Url field can't be sent empty";

    if(!data.desc){
        errors.desc= "Description is required"
    }
    else if(data.desc.length <20 && data.desc.length>100){
        errors.desc = "Description is of 20-100 words";
    }

    return errors;
}