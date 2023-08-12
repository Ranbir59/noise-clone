import React from "react";
import logo from "../Images/logo.png";
import "../CSS/Navbar.css"
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              <img className="logo" src={logo} alt="" />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-2 mb-lg-0 ">
                <li className="nav-item mx-3">
                  <NavLink style={({isActive})=>{return{color:isActive?'green':""}}} className="nav-link  " aria-current="page" to="/labs">
                    Noise Labs
                  </NavLink>
                </li>
                <li className="nav-item dropdown mx-3">
                  <a
               
                    className="nav-link "
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Products
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink  className="dropdown-item" to="/wire">
                        Wireless Earbuds
                      </NavLink>
                    </li>
                    <li>
                      <NavLink  className="dropdown-item" to="/headphone">
                        Headphones
                      </NavLink>
                    </li>
                    <li>
                      <NavLink  className="dropdown-item" to="/watch">
                        Smart Watches
                      </NavLink>
                    </li>
                  </ul>
                </li>
                {/* <li className="nav-item mx-3">
                  <NavLink style={({isActive})=>{return{color:isActive?'green':""}}} className="nav-link" to="/reviews">
                    Reviews
                  </NavLink>
                </li> */}
                <li className="nav-item mx-3">
                  <NavLink  style={({isActive})=>{return{color:isActive?'green':""}}} className="nav-link" to="/contact">
                    Contact Us
                  </NavLink>
                </li>
                <li className="search">
                  <i className="search  fa-solid fa-magnifying-glass my-3 mx-3"></i>
                </li>
                <li className="cart">
                  <i className="fa-solid fa-cart-plus my-3 mx-3"></i>
                </li>
                <li className="login">
                  <i className="fa-solid fa-user my-3 mx-3"></i>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
