import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div>
      <div className="container-fluid contact">
        <h2 className="fw-bold">Contact with us</h2>
      </div>
      <div className="row m-2 p-5 contact-container">
        <div className="col-lg-4 text-center">
          <div className="c-icon ">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <div>
            <h3>Location</h3>

            <p>Dhaka, Bangladesh</p>
          </div>
        </div>
        <div className="col-lg-4 text-center">
          <div className="c-icon ">
            <i className="far fa-envelope"></i>
          </div>
          <div>
            <h3>Gmail</h3>

            <p>traveller@gmail.com</p>
          </div>
        </div>
        <div className="col-lg-4 text-center">
          <div className="c-icon ">
            <i className="fas fa-phone-square-alt"></i>
          </div>
          <div>
            <h3>Phone</h3>

            <p>+88 0123456789</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
