import React from 'react';
import img from '../../images/error/error.jpg'
const NotFound = () => {
    return (
        <div>
            <h1 className="heading-color">PAGE NOT FOUND</h1>
            <div>
                <img className="img-fluid " src={img} alt="" />
            </div>
        </div>
    );
};

export default NotFound;