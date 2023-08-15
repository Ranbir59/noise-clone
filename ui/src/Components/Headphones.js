import React, { useEffect, useState } from "react";
import axios from "axios";
import '../CSS/Headphones.css'
import { NavLink } from "react-router-dom";
// import Backdrop from "@mui/material/Backdrop";
// import CircularProgress from '@mui/material/CircularProgress';

const Headphones = () => {
  const [head, setHead] = useState([]);

  const headapi = async () => {
    try {
      const res = await axios.get("https://noise-clone-x12u.vercel.app/headphones");
      setHead(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(()=>{
    headapi()
  },[])
  return (
    <>
    
      <div className="headdiv">
        <h1 className="head">Headphones</h1>
      </div>
      <div className="head-container">
        <div className="row">
        
          {
            

            head.map((item)=>{
              const { image, name, para, price, id } = item;
                  return (
              <>
                <div
                  className="col-md-4 mt-5 mx-auto d-flex justify-content-center"
                  key={id} 
                >
                  <div className="card"  data-aos="zoom-in">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{name}</h5>
                      <p className="card-text">{para}</p>
                      <p className="card-price">{price}</p>

<NavLink to={`/headphone/${id}`}>


                      <button class="cta">
                        <span class="hover-underline-animation"> MORE DETAILS</span>
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
            })
          }
        </div>
      </div>
    </>
  );
};

export default Headphones;
