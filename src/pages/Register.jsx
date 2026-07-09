import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";
import { toast } from "react-toastify";

import "../styles/Register.css";

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
                error.response?.data?.message ||
                "Registration Failed"
            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="register-container">

            <h2>Create Fundoo Account</h2>

            <p className="subtitle">
                Register to start managing your notes
            </p>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={user.firstName}
                    onChange={handleChange}
                    autoComplete="given-name"
                    required
                />

                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={user.lastName}
                    onChange={handleChange}
                    autoComplete="family-name"
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={user.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={handleChange}
                    autoComplete="new-password"
                    required
                />

                <button
                    type="submit"
                    disabled={loading}
                >
                    {loading ? "Registering..." : "Register"}
                </button>

            </form>

            <p className="login-link">
                Already have an account?{" "}
                <span onClick={() => navigate("/")}>
                    Login
                </span>
            </p>

        </div>

    );

}

export default Register;