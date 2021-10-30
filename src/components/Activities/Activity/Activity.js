import React from 'react';
import './Activity.css'

const Activity = (props) => {
    const { img, name, destination } = props.activity;
    return (
        <div>
            <div className="col">
                <div className="card h-100 p-2">
                    <img src={img} className="card-img-top w-50 mx-auto" alt="..." />
                    <div className="card-body mx-auto">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{destination}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Activity;