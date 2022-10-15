import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Packages.css';
import Package from '../Package/Package';

const Packages = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch('https://arcane-tundra-73847.herokuapp.com/packages')
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);
  return (
    <div>
      <h1 className="heading-color">POPULAR TOUR PACKAGES</h1>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
          {packages.map((pack) => (
            <Package key={pack._id} pack={pack}></Package>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;
