import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageAllOrders = () => {
    const [manageOrders, setManageOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/booking')
            .then(res => res.json())
            .then(data => setManageOrders(data))
    }, []);


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure want to delete?');
        if (proceed) {
            fetch(`http://localhost:5000/manageAllBooking/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = manageOrders.filter(order => order._id !== id);
                        setManageOrders(remaining)
                    }
                    // console.log(data);

                })
        }
    }

    return (
        <div>

            <h1 className=" heading-color">MANAGE ALL ORDERS </h1>
            <div className=" container table-responsive ">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Booking place</th>
                            <th>Login user</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {
                        manageOrders?.map((pd, index) =>
                        (
                            <tbody>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{pd?.name}</td>
                                    <td>{pd?.email}</td>
                                    <td>{pd?.phone}</td>
                                    <td>{pd?.address}</td>
                                    <td>{pd?.booked}</td>
                                    <td>{pd?.loginEmail}</td>
                                    {/* <td>{pd?.status}</td> */}
                                    <td> <button className="btn btn-success"> Pending</button> </td>
                                    <td><button onClick={() => handleDelete(pd._id)} className="btn btn-danger">Delete</button></td>
                                </tr>
                            </tbody>
                        ))
                    }



                </Table>
            </div>
        </div>
    );
};

export default ManageAllOrders;