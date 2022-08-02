import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="background_color d-flex flex-column w-full  ">
      <div className=" lists_footer">
        <ul className="lists_ul">
          <li>About us</li>
          <li>Press Release</li>
          <li>Terms of Service</li>
          <li>Privacy</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className=" lists_footer">
        <ul className="lists_ul">
          <li>Research</li>
          <li>Guide</li>
          <li>Blogs</li>
          <li>Our Success</li>
          <li>Our Story</li>
        </ul>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src="./assets/svgforum.svg"
          style={{ width: "200px", marginLeft: "10px" }}
          alt=""
        />
      </div>
    </div>
  );
};

export default Footer;
