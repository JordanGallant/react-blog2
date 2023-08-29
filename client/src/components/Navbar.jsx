import React from "react";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="links">
          <Link className="link" to="/?cat=recipes">
            {" "}
            <h6>RECIPES</h6>{" "}
          </Link>
          <Link className="link" to="/?cat=food-science">
            {" "}
            <h6>FOOD SCIENCE</h6>{" "}
          </Link>
          <Link className="link" to="/?cat=projects">
            {" "}
            <h6>PROJECTS</h6>{" "}
          </Link>
          <Link className="link" to="/?cat=reviews">
            {" "}
            <h6>REVIEWS</h6>{" "}
          </Link>
          <Link className="link" to="/?cat=Trending">
            {" "}
            <h6>TRENDING</h6>{" "}
          </Link>

          <span>John</span>
          <span>Logout</span>
          <span className="write">
            <Link className = "link"to="/write"> Write</Link>
          </span>
        </div>
      </div>
    </div>
  );
};
