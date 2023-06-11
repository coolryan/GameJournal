import React from "react";

const Footer = () => {
	return (
		<div className="box_footer">
	        <h1>Game Journal</h1>
	        <div className="footer_container">
	          <div className="footer_row">
	            <div className="footer_column">
	              <p className="footer_heading">About Us</p>
	              <a className="footer_link" href="#">Aim</a>
	              <a className="footer_link" href="#">Vision</a>
	              <a className="footer_link" href="#">Testimonials</a>
	            </div>
	            <div className="footer_column">
	              <p className="footer_heading">Services</p>
	              <a className="footer_link" href="#">Writing</a>
	              <a className="footer_link" href="#">Coding</a>
	            </div>
	            <div className="footer_column">
	              <p className="footer_heading">Contact Us</p>
	              <a className="footer_link" href="#">Ryan Setaruddin</a>
	            </div>
	            <div className="footer_column">
	              <p className="footer_heading">Social Media</p>
	              <a className="footer_link" href="https://www.linkedin.com/in/ryan-setaruddin/">
	                <i><span>LinkedIn</span></i>
	              </a>
	              <a className="footer_link" href="https://github.com/coolryan/GameJournal">
	                <i><span>GitHub</span></i>
	              </a>
	            </div>
	          </div>
	        </div>
      	</div>
	)
};

export default Footer;