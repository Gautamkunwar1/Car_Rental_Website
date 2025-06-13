export type FormData = {
    name:string,
    email:string,
    password:string,
    cpassword:string
}

export type Errors = {
    name?:string,
    email?:string,
    password?:string,
    cpassword?:string,
}

export function validateForm(data :FormData):Errors{
    const errors :Errors = {};
    const emailRegex: RegExp = /^\S+@\S+\.\S+$/;
    const passwordRegx:RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/;
    if(!data.name.trim()){
        errors.name = "Name is required";
    }

    if(!data.email.trim()){
        errors.email = "Email is required";
    }else if(!emailRegex.test(data.email)){
        errors.email = "Invalid email address"
    }

    if(!data.password.trim() && data.password.length <6){
        errors.password = "Provide a valid password of length upto 5 characters";
    }else if(!passwordRegx.test(data.password)){
        errors.password = "Password must content atleast one upperCase letter, one number,and one special character";
    }

    if (data.cpassword !== data.password) {
            errors.cpassword = "Password do not match"
        }

        return errors;
}