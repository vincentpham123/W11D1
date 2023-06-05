
const Form=()=>{
    
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