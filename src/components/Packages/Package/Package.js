import React from 'react';
import { Link } from 'react-router-dom';
import './Package.css';

const Package = (props) => {
  const { _id, title, image, days, cost, people, description } = props.pack;
  return (
    <div>
      <div className="col h-100 p-card">
        <div
          className="card h-100 "
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="pack-name">{title}</h5>
            <p className="card-text">
              <span className="p-details">Days:</span>
              {days}
            </p>
            <p className="card-text">
              <span className="p-details">Cost:</span>
              {cost}{' '}
            </p>
            <p className="card-text">
              {' '}
              <span className="p-details">People:</span>
              {people}
            </p>
            <p className="card-text card-detail">{description}</p>
          </div>

          <div className="card-footer border-0 bg-white">
            <Link to={`/packageDetails/${_id}`}>
              {' '}
              <small className="text-muted ">
                <button className="btn btn-success w-100 book-btn">
                  Book Now
                </button>
              </small>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;
