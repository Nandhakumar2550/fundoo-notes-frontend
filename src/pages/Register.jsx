import { useState } from "react";
import { registerUser } from "../services/authService";
import { toast } from "react-toastify";

function Register(){

    const [user,setUser]=useState({

        firstName:"",
        lastName:"",
        email:"",
        password:""

    });
    const [loading, setLoading] = useState(false);

    const handleChange=(e)=>{

        setUser({

            ...user,

            [e.target.name]:e.target.value

        });

    };

    const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

        await registerUser(formData);

        toast.success("Registration Successful");

        navigate("/");

    } catch (error) {

        toast.error("Registration Failed");

    } finally {

        setLoading(false);

    }

};
    return(

        <form onSubmit={handleSubmit}>

            <input
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
            />

            <br/>

            <input
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
            />

            <br/>

            <input
                name="email"
                placeholder="Email"
                onChange={handleChange}
            />

            <br/>

            <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
            />

            <br/>

           <button type="submit" disabled={loading}>

    {

        loading

        ?

        "Registering..."

        :

        "Register"

    }

</button>

        </form>

    );

}

export default Register;