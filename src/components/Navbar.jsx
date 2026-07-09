import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

import "../styles/Navbar.css";

function Navbar() {

    const { token, logout } = useAuth();

    const navigate = useNavigate();

    const handleLogout = () => {

        logout();

        navigate("/");

    };

    return (

        <nav className="navbar">

            <div className="logo">

                <span>📝</span>

                <h2>Fundoo Notes</h2>

            </div>

            <div className="nav-links">

                {!token ? (

                    <>

                        <Link to="/">Login</Link>

                        <Link to="/register">Register</Link>

                    </>

                ) : (

                    <>

                        <Link to="/dashboard">
                            Dashboard
                        </Link>

                        <button
                            className="logout-btn"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>

                    </>

                )}

            </div>

        </nav>

    );

}

export default Navbar;