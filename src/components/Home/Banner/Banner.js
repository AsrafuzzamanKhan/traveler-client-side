import React from 'react';
import { Link } from 'react-router-dom';
import banner1 from '../../../images/Banner/banner1.jpg';
import banner2 from '../../../images/Banner/banner2.jpg';
import banner3 from '../../../images/Banner/banner3.jpg';
import './Banner.css';

const Banner = () => {
  return (
    <div>
      {/* <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={banner2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block mb-5 p-5">
                            <h1 className="fw-bold">TRAVELING AROUND THE WORLD</h1>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={banner1} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block mb-5 p-5">
                            <h1 className="fw-bold">EXPERIENCE THE NATURAL BEAUTY</h1>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={banner3} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block mb-5 p-5">
                            <h1 className="fw-bold">TRAVELING AROUND THE WORLD</h1>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div> */}

      <div className="banner-container">
        <h2>TRAVELING AROUND THE WORLD</h2>
        <Link to="/packages">
          {' '}
          <button>Visit Packages</button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
