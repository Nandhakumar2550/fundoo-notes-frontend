import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Navbar() {

    const { token, logout } = useAuth();

    const navigate = useNavigate();

    const handleLogout = () => {

        logout();

        navigate("/");

    };

    return (

        <nav
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "15px 30px",
                backgroundColor: "#f5f5f5",
                borderBottom: "1px solid #ddd"
            }}
        >

            <h2>Fundoo Notes</h2>

            <div>

                {!token ? (
                    <>
                        <Link to="/">Login</Link>{" | "}
                        <Link to="/register">Register</Link>
                    </>
                ) : (
                    <>
                        <Link to="/dashboard">Dashboard</Link>{" | "}

                        <button
                            onClick={handleLogout}
                            style={{
                                marginLeft: "10px",
                                cursor: "pointer"
                            }}
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