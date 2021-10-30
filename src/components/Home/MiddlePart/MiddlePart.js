import React from 'react';
import middleimg from '../../../images/Middle/middle.png'
import './MiddlePart.css'
const MiddlePart = () => {
    return (
        <div className="background" >
            <div className="container">
                <div className="row d-flex justify-content-center  align-items-center">
                    <div className="col-lg-6 col-sm-12 p-3">
                        <img className="img-fluid w-75 mx-auto" src={middleimg} alt="" />
                    </div>
                    <div className="col-lg-6 col-sm-12 p-3">
                        <h1>GO TRAVEL. DISCOVER. REMEMBER US!!</h1>

                        <ul className="fw-bold">
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