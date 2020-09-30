import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    // We'll go into the Hooks API later, for now, we are just using some code
    // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
    // This allows the component to check the route any time the user uses a link to navigate.
    //   const location = useLocation();

    return (
        <div className="navBar">
            <div className="headerBrand">
                <h1>MICHAEL LEE</h1>
            </div>
            <div className="headerMenu">
                <NavLink to="/" className="navItem"> Home </NavLink>
                <NavLink to="/portfolio" className="navItem"> Portfolio </NavLink>
                <NavLink to="/contact" className="navItem"> Contact </NavLink>
            </div>
        </div>
    );
}

export default Header;
