import React from "react";
import { NavLink } from "react-router-dom";  
const Navbar = () => {
  return (
    <>
      <nav>
        <div>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact Us
          </NavLink>
        </div>
      </nav>
    </>
  );
};
  
export default Navbar;