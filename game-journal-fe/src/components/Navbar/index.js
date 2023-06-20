import React from "react";
import { NavLink } from "react-router-dom";

  // Adopt from https://www.makeuseof.com/responsive-navigation-bar-using-html-and-css/
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        {/*LOGO*/}
        <div class="logo">
          Game Journal
          {/*<img src="https://cdn4.iconfinder.com/data/icons/video-game-items-concepts-line-art/128/journal-book-ol-512.png" alt="Game Journal" />*/}
        </div>
          {/*NAVIGATION MENU*/}
        <ul className="nav-links">
          <input type="checkbox" id="checkbox_toggle" />
          <label for="checkbox_toggle" className="hamburger">&#9776;</label>

          <div class="menu">
            <NavLink to="/" activeStyle>
              Home
            </NavLink>
            <NavLink to="/about" activeStyle>
              About
            </NavLink>
            <NavLink to="/contact" activeStyle>
              Contact
            </NavLink>
          </div>
        </ul>
      </nav>
    </>
  );
};
  
export default Navbar;