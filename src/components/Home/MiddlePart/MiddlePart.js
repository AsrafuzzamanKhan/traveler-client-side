import React from 'react';
import middleImg from '../../../images/Middle/middle.png';
import './MiddlePart.css';
const MiddlePart = () => {
  return (
    <div className="background">
      <div className="container">
        <div className="row d-flex justify-content-center  align-items-center">
          <div
            className="col-lg-6 col-sm-12 p-3"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <img className="img-fluid w-75 mx-auto" src={middleImg} alt="" />
          </div>
          <div
            className="col-lg-6 col-sm-12 p-3 m-part"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <h1>GO TRAVEL. DISCOVER. REMEMBER US!!</h1>

            <ul className="fw-bold m-list">
              <li>Adventure</li>
              <li>Trekking</li>
              <li>Camp Fire</li>
              <li>Off Road</li>
              <li>Camping</li>
              <li>Exploring</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddlePart;
