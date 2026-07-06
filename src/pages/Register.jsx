import { useState } from "react";
import { registerUser } from "../services/authService";

function Register(){

    const [user,setUser]=useState({

        firstName:"",
        lastName:"",
        email:"",
        password:""

    });

    const handleChange=(e)=>{

        setUser({

            ...user,

            [e.target.name]:e.target.value

        });

    };

    const handleSubmit=async(e)=>{

        e.preventDefault();

        try{

            const response=await registerUser(user);

            alert(response.message);

        }

        catch(error){

            alert("Registration Failed");

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

            <button>

                Register

            </button>

        </form>

    );

}

export default Register;