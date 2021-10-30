import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useForm } from "react-hook-form";
import "./SinglePackage.css"

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


    // ------------------------------------


    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        const booking = singlePack.title;
        data.booked = booking;
        data.status = "Pending"
        console.log(data)
        fetch(`http://localhost:5000/booking`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.insertedId) {
                    alert('Booking Processed successfully');
                    reset();
                }
            })
    };
    return (
        <div className="container">


            <div className="row m-2 g-3 mb-5">
                <div className="col-lg-6 col-sm-12">

                    <img src={singlePack.image} alt="" />
                </div>
                <div className="col-lg-6 col-sm-12">
                    <h4>{singlePack.title}</h4>
                    <h4>{singlePack._id}</h4>
                    <p>Cost: {singlePack.cost}</p>
                    <p>People: {singlePack.people}</p>
                    <p>Days: {singlePack.days}</p>

                    <Link to='/booking'><button className="btn btn-success">Book Now</button></Link>
                </div>
            </div>

            <div>
                <h1>Booking</h1>

                <div className="booking">

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input defaultValue={user.displayName} {...register("name", { required: true })} placeholder="Name" />
                        <input defaultValue={singlePack.title} {...register("title", { required: true })} placeholder="title" />

                        <input defaultValue={user.email} type="email" {...register("email", { required: true })} placeholder="Email" />

                        <input type="number" {...register("phone", { required: true })} placeholder="Phone number" />

                        <input {...register("address", { required: true })} placeholder="Address" />
                        <input {...register("city", { required: true })} placeholder="City" />
                        {errors.email && <span>This field is required</span>}
                        <input type="submit" />
                        {/* <Link to="/booking"> <small className="text-muted "><button className="btn btn-success w-100 " type="submit">Book Now</button></small></Link> */}
                    </form>
                </div>

            </div>
        </div>
    );
};

export default SinglePackage;