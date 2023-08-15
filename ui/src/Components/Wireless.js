import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "../CSS/Wireless.css";

const Wireless = () => {
  const [data, setData] = useState([]);

  const Wirelessdata = async () => {
    try {
      const res = await axios.get("https://noise-clone-x12u.vercel.app/wireless");

      setData(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    Wirelessdata();
  }, []);
  return (
    <>
      <div className="mardiv">
        <marquee loop scrollamount="15" className="marquee">
          Flat 50% OFF ON TWS
        </marquee>
      </div>
      <div className="wirediv">
        <h1 className="wireheading">Wireless Earbuds</h1>
      </div>
      <div className="wireless-container">
        <div className="row">
          {data.map((item, id) => {
            const { image, name, para1, price } = item;
            return (
              <>
                <div
                  className="col-md-4 mt-5 mx-auto d-flex justify-content-center"
                  key={id}
                  data-aos="zoom-in"
                >
                  <div className="card">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{name}</h5>
                      <p className="card-text">{para1}</p>
                      <p className="card-price">{price}</p>
                      <NavLink to={`/wire/${id}`}>
                        <button class="cta button ">
                          <span class="hover-underline-animation">
                            MORE DETAILS
                          </span>
                          <svg
                            viewBox="0 0 46 16"
                            height="10"
                            width="25"
                            xmlns="http://www.w3.org/2000/svg"
                            id="arrow-horizontal"
                          >
                            <path
                              transform="translate(30)"
                              d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                              data-name="Path 10"
                              id="Path_10"
                            ></path>
                          </svg>
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Wireless;
