import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const MyBooking = () => {
    const { user } = useAuth();
    const { id } = useParams();

    const [myBooking, setMyBooking] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/myBookings/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyBooking(data));

    }, []);


    return (
        <div>
            <h1 className="heading-color">MY BOOKINGS</h1>
            <p>{id}</p>
            <p>{user.displayName}</p>
            <p>{user.booked}</p>
            <p></p>
            <h1>My All orders: {myBooking?.length}</h1>
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
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {
                        myBooking?.map((pd, index) =>
                        (
                            <tbody>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{pd?.displayName}</td>
                                    <td>{pd?.email}</td>
                                    <td>{pd?.booked}</td>
                                    <td>{pd?.address}</td>
                                    <td>{pd?.booked}</td>
                                    {/* <td>{pd?.status}</td> */}
                                    <td> <button className="btn btn-success"> Pending</button> </td>
                                    {/* <td><button onClick={() => handleDelete(pd._id)} className="btn btn-danger">Delete</button></td> */}
                                </tr>
                            </tbody>
                        ))
                    }



                </Table>
            </div>
        </div>
    );
};

export default MyBooking;