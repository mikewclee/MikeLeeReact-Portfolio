import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div className="navBar">
            <div className="headerBrand">
                <h1>MICHAEL LEE</h1>
            </div>
            <div className="headerMenu">
                <NavLink to="/" className="navItem"> Home  || </NavLink>
                <NavLink to="/about" className="navItem"> About  || </NavLink>
                <NavLink to="/portfolio" className="navItem"> Portfolio  || </NavLink>
                <NavLink to="/contact" className="navItem"> Contact </NavLink>
            </div>
        </div>
    );
}

export default Header;
