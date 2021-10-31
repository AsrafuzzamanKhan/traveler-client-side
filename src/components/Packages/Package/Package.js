import React from 'react';
import { Link } from 'react-router-dom';
import "./Package.css"

const Package = (props) => {
    const { _id, title, image, days, cost, people, description } = props.pack;
    return (
        <div>

            <div className="col h-100">
                <div className="card h-100 ">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">Days: {days}</p>
                        <p className="card-text">Cost: {cost} </p>
                        <p className="card-text">people:{people}</p>
                        <p className="card-text">{description}</p>
                    </div>

                    <div className="card-footer border-0 bg-white">
                        <Link to={`/packageDetails/${_id}`}> <small className="text-muted "><button className="btn btn-success w-100">Book Now</button></small></Link>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Package;