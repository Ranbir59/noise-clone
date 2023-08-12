import React, { useEffect, useState } from "react";
import img1 from "../Images/c1.webp";
import img2 from "../Images/c2.webp";
import img3 from "../Images/c3.webp";
import banner1 from "../Images/banner1.png";
import ClipLoader from "react-spinners/ClipLoader";
import "../CSS/Home.css";

import { NavLink } from "react-router-dom";

const Home = () => {


  return (
    
    <>
    
      <div className="home-container">
        <div className="row">
          <div className="col-md-12">
            <figure>
              <img src={img2} alt="" className="imgh" />
            </figure>
          </div>
          <div className="row">
            <div className="col-md-12">
              <figure>
                <img className="banner1" src={banner1} alt="" />
              </figure>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h1 className="nlauch text-center">Best Sellers</h1>
              <hr className="hr text-center" />
            </div>
          </div>
          <div className=" row ">
            <div className="lauchr col-md-4">
              <div className="maindiv">
                <div class="lauch-container">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0997/6284/products/1.2_ca751812-6dc9-4c2d-a93b-dc8adde5249d_480x.png?v=1662515034"
                    class="lauchimg"
                    alt="..."
                  />
                  <div class="card-body">
                    <NavLink to="/wire">
                      <button class="learn-more">
                        <span class="circle" aria-hidden="true">
                          <span class="icon arrow"></span>
                        </span>
                        <span class="button-text">View More</span>
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="lauch-container">
                <img
                  src="https://cdn.shopify.com/s/files/1/0997/6284/products/render_1_480x.png?v=1655378752"
                  class="lauchimg"
                  alt="..."
                />
                <div class="card-body">
                  <NavLink to="/headphone">
                    <button class="learn-more">
                      <span class="circle" aria-hidden="true">
                        <span class="icon arrow"></span>
                      </span>
                      <span class="button-text">View More</span>
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="lauch-container ">
                <img
                  src="https://cdn.shopify.com/s/files/1/0997/6284/products/Side02_480x.png?v=1655378361"
                  class="lauchimg"
                  alt="..."
                />
                <div class="card-body ">
                  <NavLink to="/watch">
                    <button class="learn-more">
                      <span class="circle" aria-hidden="true">
                        <span class="icon arrow"></span>
                      </span>
                      <span class="button-text">View More</span>
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
