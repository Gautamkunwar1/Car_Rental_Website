export type FormData={
    userName:string,
    lname?:string,
    phoneNo:number,
    passenger:number,
    vehicleName:string,
    pickupDate :string,
    pickupTime:string,
    days:number,
    dl:File|null,
    check?:boolean ,
}

export type Errors = {
    fname?:string,
    lname?:string,
    phone?:string,
    passenger?:string,
    vehicleName?:string,
    pickupDate?:string,
    pickupTime?:string,
    days?:string,
    dl?:string
    check?:string,
}

export function validateRentalForm(data:FormData):Errors{
    const errors:Errors ={};
    if(!data.userName.trim() || data.userName.length<4){
        errors.fname = "Insert a valid name";
    }

    if(!data.phoneNo || data.phoneNo.toString().length<10){
        errors.phone = "Provide a valid phone number";
    }
    if(!data.passenger || data.passenger<=0){
        errors.passenger = "Passenger detail is required";
    }
    if(!data.vehicleName.trim()){
        errors.vehicleName = "Vehicle name is required";
    }
    if(!data.pickupDate ){
        errors.pickupDate="Pickup Date field cannot be sent empty";
    }
    if(!data.pickupTime ){
        errors.pickupTime="Pickup Time field cannot be sent empty";
    }
    if(!data.days ||data.days>=10){
        errors.days = "No. of days should between[1-10]";
    }
    if(!data.dl){
        errors.dl ="Dl is required"
    }
    if(!data.check){
        errors.check = "Agree to terms and conditions"
    }
    return errors;
}