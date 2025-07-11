export interface FormData{
    name:string,
    email:string,
    msg:string
}

export interface Errors{
    name?:string,
    email?:string,
    msg?:string
}

export function validateForm(data:FormData):Errors{
    const errors:Errors ={};

    const emailRegex:RegExp = /^\S+@\S+\.\S+$/;
    if(!data.name.trim() ||data.name.length<4){
        errors.name = "Provide a valid name of length 4"
    }

    if(!data.email.trim()){
        errors.email = "Email field can't sent to be empty"
    }
    if(!emailRegex.test(data.email)){
        errors.email = "provide a valid email"
    }

    if(!data.msg.trim()){
        errors.msg = "Message field can't sent to be empty"
    }

    return errors;
}