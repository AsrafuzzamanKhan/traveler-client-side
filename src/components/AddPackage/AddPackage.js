import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddPackage.css';
import img from '../../images/addtour/add.jpg';

const AddPackage = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    // axios.post('https://arcane-tundra-73847.herokuapp.com/addPackage', data)
    axios
      .post(
        'https://traveler-server-site-production.up.railway.app/addPackage',
        data
      )
      .then((res) => {
        if (res.data.insertedId) {
          alert('Successfully Added');
          reset();
        }
      });
    console.log(data);
  };
  return (
    <div>
      <h1 className="text-center heading-color">ADD TOUR PACKAGE</h1>
      <div className="container">
        <div className="row d-flex justify-content-center  align-items-center my-3">
          <div className="col-lg-6 col-sm-12">
            <img className="img-fluid" src={img} alt="" />
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="addPackages border shadow p-5">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register('title', { required: true })}
                  placeholder="Title"
                />

                <input
                  {...register('cost', { required: true })}
                  placeholder="Cost"
                />

                <input
                  type="number"
                  {...register('people', { required: true })}
                  placeholder="People"
                />

                <input
                  {...register('days', { required: true })}
                  placeholder="Days"
                />
                <input
                  {...register('description', { required: true })}
                  placeholder="Description"
                />
                <input
                  {...register('image', { required: true })}
                  placeholder="Image"
                />

                {/* <input type="submit" /> */}
                <button className="btn btn-success w-50" type="submit">
                  Add Tour Package
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPackage;
