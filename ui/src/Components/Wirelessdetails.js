import React, { useEffect, useState } from "react";
import "../CSS/wiredetails.css";
import axios from "axios";

import { useParams } from "react-router";
import StripeCheckout from "react-stripe-checkout";

const Wirelessdetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [image, setImage] = useState({});

  const detail = async () => {
    try {
      const res = await axios.get("https://noise-clone-x12u.vercel.app/wireless");

      const NewData = res.data.find((item) => item.id === parseInt(id));
      setData(NewData);
      setImage(NewData.imgd);
    } catch (error) {
      console.log(error.message);
    }
  };

  const Handletoken = (token, addresses) => {
    console.log({ token, addresses });
  };

  useEffect(() => {
    detail();
  }, []);
  return (
    <>
      <div className="detail-container bg-black">
        <div className="row ">
          <div className="col-md-6 bg-black">
            <div
              id="carouselExampleControls"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={image.img1} class="imaged" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={image.img2} class=" imaged" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={image.img3} class="imaged" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={image.img4} class="imaged" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={image.img5} class="imaged" alt="..." />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="section2 col-md-6 bg-black">
            <h1 className="named ">{data.name}</h1>

            <div className="description text-white">{data.para}</div>

            <h2 className="priced ">{data.price}</h2>

            <StripeCheckout
              className="stripe"
              stripeKey="pk_test_51LjJ0VSGNl7X5midzL6ljcNd13hkqzi5wCLzBXshP8VuL62tGhcS0ZCsJIPHIRfYpxN3qjHogMQ4flx5sLzSxYDE00t2xo9Oha"
              token={Handletoken}
              billingAddress
              shippingAddress
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Wirelessdetails;
