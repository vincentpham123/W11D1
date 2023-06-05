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
        if(user.bio.length > 10){
            errors.push("Over character limit");
        }
        return errors;
    }

    const handleChange=(field)=>{
        return  (event)=>{
            const newObject = Object.assign({},user,{[field]: event.target.value});

            setUser(newObject);
        }
    }   
    
    const handleSubmit = (event) =>{
        console.log('submit')
        event.preventDefault();
        let errors= validate();
        if(errors.length>0){
            setErrors(errors);
        }
    }

    const showErrors = () => {
        if(!errors.length) {
            return null
        } 
        return (
            <ul>
                {errors.map(err => <li>{err}</li>)}
            </ul>
        )
    }
    

    return(
        <>
        <h1>Registration Form</h1>
        {showErrors()}
        <form onSubmit={handleSubmit}>
            <label>Name
                <input type='text' value={user.name} onChange={handleChange('name')}></input>
            </label>
            <br></br>
            <label>Email
                <input type='text' value={user.email} onChange={handleChange('email')}></input>
            </label>
            <br></br>
            <label>Phone Number (xxx-xxx-xxxx)
                <input type='text' value={user.phone} onChange={handleChange('phone')}></input>
            </label>
            <br></br>
            <label htmlFor='phone-select'>Staff</label>
            <select name='phone' id='phone-select' value={user.phonetype} onChange={handleChange('phonetype')}>
                <option value=''>Select One</option>
                <option value='Home'>Home</option>
                <option value='Mobile'>Mobile</option>
                <option value='Work'>Work</option>
            </select>
            <br></br>
            <label>Instructor
            <input type='radio' name='staff' value={user.instructor} onChange={handleChange('instructor')}></input>
            Student
            <input type='radio' name='staff' value={user.instructor} onChange={handleChange('instructor')}></input>
            </label>
            <br></br>
            <label>Bio
                <textarea id='bio' name='bio' rows='5' cols='33'value={user.bio} onChange={handleChange('bio')}></textarea>
            </label>

            <br></br>
            <label>Email Notifications?
                <input type='checkbox' name='email' id='email' value={user.newsletter} onChange={handleChange('newsletter')} ></input>
            </label>
            <br></br>
            <button>Submit</button>
        </form>
        </>
    )
}
export default Form;