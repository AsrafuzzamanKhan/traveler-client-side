import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageAllOrders = () => {
    const [manageOrders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/booking')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <div>
            <h1>hello</h1>
            <h1>My All orders: {manageOrders?.length}</h1>
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Booking place</th>
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
                                    <td>{pd?.status}</td>
                                    <td><button className="btn btn-danger">Delete</button></td>
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