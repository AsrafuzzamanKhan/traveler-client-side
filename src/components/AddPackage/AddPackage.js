import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddPackage.css'

const AddPackage = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // fetch('http://localhost:5000/addPackage', {
        //     method: "POST",
        //     headers: {
        //         "content-type": "application/json"
        //     },
        //     body: JSON.stringify(data)
        // })

        axios.post('http://localhost:5000/addPackage', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Successfully Added');
                    reset();
                }
            })
        console.log(data)
    };
    return (
        <div>

            <div className="addPackages">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input {...register("title", { required: true })} placeholder="Title" />

                    <input {...register("cost", { required: true })} placeholder="Cost" />

                    <input type="number" {...register("people", { required: true })} placeholder="People" />

                    <input {...register("days", { required: true })} placeholder="Days" />
                    <input {...register("image", { required: true })} placeholder="Image" />

                    <input type="submit" />
                </form>
            </div>

        </div>
    );
};

export default AddPackage;