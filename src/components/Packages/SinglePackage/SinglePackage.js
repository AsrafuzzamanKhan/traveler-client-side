import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import './SinglePackage.css';

const SinglePackage = () => {
  const { id } = useParams();
  const [singlePack, setSinglepack] = useState({});
  useEffect(() => {
    // fetch(`https://arcane-tundra-73847.herokuapp.com/packageDetails/${id}`)
    fetch(`https://traveler-server-site.vercel.app/packageDetails/${id}`)
      .then((res) => res.json())
      .then((data) => setSinglepack(data));
  }, [id]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => {
    const booking = singlePack.title;
    data.booked = booking;
    data.status = 'Pending';
    const userEmail = `${user.email}`;
    data.loginEmail = userEmail;
    console.log(data.email);
    // fetch(`https://arcane-tundra-73847.herokuapp.com/booking`, {
    fetch(`https://traveler-server-site.vercel.app/booking`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.insertedId) {
          alert('Booking Processed successfully');
          reset();
        }
      });
  };
  return (
    <div>
      <div className="container">
        <div className="row m-2 g-3 mb-5">
          <div className="col-lg-6 col-sm-12">
            <img className="img-fluid" src={singlePack.image} alt="" />
          </div>
          <div className="col-lg-6 col-sm-12">
            <h4>{singlePack.title}</h4>
            <p>Cost: {singlePack.cost}</p>
            <p>People: {singlePack.people}</p>
            <p>Days: {singlePack.days}</p>
            <p>{singlePack.description}</p>
          </div>
        </div>
      </div>

      <div>
        <h1 className="heading-color">BOOK YOUR TOUR PACKAGE</h1>

        <div className="booking mb-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              defaultValue={user.displayName}
              {...register('name', { required: true })}
              placeholder="Name"
            />
            <input
              defaultValue={singlePack.title}
              {...register('title', { required: true })}
              placeholder="title"
            />

            <input
              defaultValue={user.email}
              type="email"
              {...register('email', { required: true })}
              placeholder="Email"
            />

            <input
              type="number"
              {...register('phone', { required: true })}
              placeholder="Phone number"
            />

            <input
              {...register('address', { required: true })}
              placeholder="Address"
            />
            <input
              {...register('city', { required: true })}
              placeholder="City"
            />
            {errors.email && <span>This field is required</span>}

            <button type="submit" className="btn btn-success">
              {' '}
              Submit{' '}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SinglePackage;
