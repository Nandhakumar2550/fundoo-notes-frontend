import { useState } from "react";
import { loginUser } from "../services/authService";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Login(){

    const navigate = useNavigate();

    const { login } = useAuth();

    const [user,setUser]=useState({

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

            const response=await loginUser(user);

            login(response.token);

            alert(response.message);

            navigate("/dashboard");

        }

        catch(error){

            alert("Login Failed");

        }

    };

    return(

        <form onSubmit={handleSubmit}>

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

                Login

            </button>

        </form>

    );

}

export default Login;