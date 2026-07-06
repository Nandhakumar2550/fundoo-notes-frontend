import { useState } from "react";
import { loginUser } from "../services/authService";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";

function Login(){

    const navigate = useNavigate();

    const { login } = useAuth();

    const [user,setUser]=useState({

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

        const response = await loginUser(formData);

        login(response.token);

        toast.success("Login Successful");

        navigate("/dashboard");

    } catch (error) {

        toast.error("Login Failed");

    } finally {

        setLoading(false);

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

           <button type="submit" disabled={loading}>

    {

        loading

        ?

        "Logging In..."

        :

        "Login"

    }

</button>
        </form>

    );

}

export default Login;