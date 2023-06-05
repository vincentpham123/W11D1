import { useState } from "react";
const Form=()=>{
    const [user,setUser] = useState({
        name: "",
        email: "",
        phone: "",
        phonetype: "",
        instructor: "",
        bio: "",
        newsletter: ""
    });
    const [errors,setErrors] = useState([]);
    const validate = () => {
        let errors = [];
        if(user.name.length == 0){
            errors.push("Name can't be blank");
        }
        let regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if(!regex.test(user.email)){
            errors.push("Invalid email address")
        }
        if(user.email.length == 0){
            errors.push("Email can't be blank");
        }
        if(!/^[2-9]\d{2}-\d{3}-\d{4}$/.test(user.phone)){
            errors.push("Invalid phone format")
        }
        else{
            if(!user.phonetype){
                errors.push("Select Phone Type");
            }
        }
        if(user.bio.length > 280){
            errors.push("Over character limit");
        }
    }

    return(
        <>
        <h1>Registration Form</h1>

        <form>
            <label>Name
                <input type='text' value=''></input>
            </label>
            <br></br>
            <label>Email
                <input type='text' value=''></input>
            </label>
            <br></br>
            <label>Phone Number
                <input type='text' value=''></input>
            </label>
            <br></br>
            <label for='phone-select'>Staff</label>
            <select name='phone' id='phone-select'>
                <option value=''>Select One</option>
                <option value='Home'>Home</option>
                <option value='Mobile'>Mobile</option>
                <option value='Work'>Work</option>
            </select>
            <br></br>
            <label>Instructor
            <input type='radio' value='Instructor' name='staff'></input>
            Student
            <input type='radio' value='Student'name='staff'></input>
            </label>
            <br></br>
            <label>Bio
                <textarea id='bio' name='bio' rows='5' cols='33'></textarea>
            </label>

            <br></br>
            <label>Email Notifications?
                <input type='checkbox' name='email' id='email'></input>
            </label>
            <br></br>
            <button>Submit</button>
        </form>
        </>
    )
}
export default Form;