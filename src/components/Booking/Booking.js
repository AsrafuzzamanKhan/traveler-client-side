import React from 'react';
import useAuth from '../../hooks/useAuth';
import { useForm } from "react-hook-form";
import './Booking.css'

import { Link } from 'react-router-dom';

const Booking = () => {



    // const { id } = useParams()
    // const [booking, setBooking] = useState([]);
    // useEffect(() => {
    //     fetch(`http://localhost:5000/packageDetails/${id}`)
    //         .then(res => res.json())
    //         .then(data => setBooking(data))
    // }, []);



    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        fetch('http://localhost:5000/booking', {
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
        <div>
            <h1>Booking</h1>

            <div className="booking">

                <form onSubmit={handleSubmit(onSubmit)}>

                    <input defaultValue={user.displayName} {...register("name", { required: true })} placeholder="Name" />

                    <input defaultValue={user.email} type="email" {...register("email", { required: true })} placeholder="Email" />

                    <input type="number" {...register("phone", { required: true })} placeholder="Phone number" />

                    <input {...register("address", { required: true })} placeholder="Address" />
                    <input {...register("city", { required: true })} placeholder="City" />
                    {errors.email && <span>This field is required</span>}
                    {/* <input type="submit" /> */}
                    <Link to="/booking"> <small className="text-muted "><button className="btn btn-success w-100 " type="submit">Book Now</button></small></Link>
                </form>
            </div>

        </div>
    );
};

export default Booking;