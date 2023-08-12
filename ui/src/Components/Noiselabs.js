import React from 'react'
import img from '../Images/lab1.webp'
import store from "../Images/store.png";
import app from '../Images/app.png'
import '../CSS/About.css'
const Noiselabs = () => {
  return (
    <>
     <div className="lab-container">
      <div className="row">
        <div className="section1 col-md-12">
          <figure>
            <img className='lab1' src={img} alt="" />
          </figure>
        </div>
        <div className="section2  row">
        <div className="col-md-6">
            <figure>
              <img className="app" src={app} alt="" />
            </figure>
          </div>
          <div className="  col-md-6 ">
            <h1 className="store">
              Our App is also Avialable on App Store & Play Store
            </h1>
            <a href="https://www.apple.com/in/app-store/">

            <figure>
              <img className="imgstore" src={store} alt="" />
            </figure>
            </a>
          </div>
        </div>
      </div>
     </div>
    </>
  )
}

export default Noiselabs
