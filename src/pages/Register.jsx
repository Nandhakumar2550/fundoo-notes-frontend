import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";
import { toast } from "react-toastify";

function Register() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        setLoading(true);

        try {

            await registerUser(user);

            toast.success("Registration Successful");

            navigate("/");

        } catch (error) {

            console.log(error);

            toast.error(
                error.response?.data?.message || "Registration Failed"
            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <form onSubmit={handleSubmit}>

            <input
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
                value={user.firstName}
            />

            <br />

            <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
                value={user.lastName}
            />

            <br />

            <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={user.email}
            />

            <br />

            <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                value={user.password}
            />

            <br />

            <button type="submit" disabled={loading}>
                {loading ? "Registering..." : "Register"}
            </button>

        </form>

    );

}

export default Register;