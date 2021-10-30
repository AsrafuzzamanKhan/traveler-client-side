import React from 'react';
import { Link } from 'react-router-dom';

const Package = (props) => {
    const { _id, title, image, days, cost, people } = props.pack;
    return (
        <div>

            <div className="col">
                <div className="card h-100">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{days}</p>
                        <p className="card-text"> {cost} </p>
                        <p className="card-text">people:{people}</p>
                    </div>

                    <div className="card-footer">
                        <Link to={`/packageDetails/${_id}`}> <small className="text-muted "><button className="btn btn-success w-100">Book Now</button></small></Link>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Package;