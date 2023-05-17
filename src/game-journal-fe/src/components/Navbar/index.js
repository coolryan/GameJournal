import React from "react";
import { NavLink } from "react-router-dom";  
const Navbar = () => {
  return (
    <>
      <nav>
        <NavLink to="/" activeStyle>
          Home
        </NavLink>
        <NavLink to="/about" activeStyle>
          About
        </NavLink>
        <NavLink to="/contact" activeStyle>
          Contact
        </NavLink>
      </nav>
    </>
  );
};
  
export default Navbar;