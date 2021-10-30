import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const SinglePackage = () => {
    const { id } = useParams()
    const [singlePack, setSinglepack] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/packageDetails/${id}`)
            .then(res => res.json())
            .then(data => setSinglepack(data))
    }, [id])
    // const singleItem = singlePack.filter(single => single._id == id);
    // console.log(singleItem)
    return (
        <div className="container">


            <div className="row m-2 g-3 mb-5">
                <div className="col-lg-6 col-sm-12">

                    <img src={singlePack.image} alt="" />
                </div>
                <div className="col-lg-6 col-sm-12">
                    <h4>{singlePack.title}</h4>
                    <p>Cost: {singlePack.cost}</p>
                    <p>People: {singlePack.people}</p>
                    <p>Days: {singlePack.days}</p>

                    <Link to='/booking'><button className="btn btn-success">Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SinglePackage;