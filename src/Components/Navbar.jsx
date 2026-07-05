import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

export default function Navbar() {

    let { theme, changeTheme } = useContext(ThemeContext);

    return (

        <nav
            style={{
                backgroundColor: theme === "dark" ? "#1e293b" : "#60a5fa",
                padding: "20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}
        >

            <h2 style={{ color: "white" }}>
                Hotel Search
            </h2>

            <div
                style={{
                    display: "flex",
                    gap: "25px",
                    alignItems: "center"
                }}
            >

                <NavLink
                    to="/"
                    style={{ color: "white", textDecoration: "none" }}
                >
                    Home
                </NavLink>

                <NavLink
                    to="/hotels"
                    style={{ color: "white", textDecoration: "none" }}
                >
                    Hotels
                </NavLink>
                <NavLink
                    to="/wishlist"
                    style={{ color: "white", textDecoration: "none" }}
                >
                    Wishlist
                </NavLink>
                <NavLink
                    to="/about"
                    style={{ color: "white", textDecoration: "none" }}
                >
                    About
                </NavLink>

                <NavLink
                    to="/contact"
                    style={{ color: "white", textDecoration: "none" }}
                >
                    Contact
                </NavLink>

                <button
                    onClick={changeTheme}
                    style={{
                        padding: "8px 15px",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }}
                >
                    {theme === "dark" ? "Light Mode" : "Dark Mode"}
                </button>

            </div>

        </nav>

    );

}