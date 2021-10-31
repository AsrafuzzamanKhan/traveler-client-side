import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MyBooking = () => {
    const { user } = useAuth();


    const [myBooking, setMyBooking] = useState([]);
    useEffect(() => {
        const url = `https://arcane-tundra-73847.herokuapp.com/${user?.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyBooking(data)
            });

    }, [user.email]);
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure want to delete?');
        if (proceed) {
            fetch(`https://arcane-tundra-73847.herokuapp.com/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = myBooking.filter(order => order._id !== id);
                        setMyBooking(remaining)
                    }


                })
        }
    }

    return (
        <div>


            <h1 className="heading-color">MY BOOKINGS</h1>

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
                            <tbody
                                key={pd._id}
                            >
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{pd?.displayName}</td>
                                    <td>{pd?.email}</td>
                                    <td>{pd?.booked}</td>
                                    <td>{pd?.address}</td>
                                    <td>{pd?.booked}</td>
                                    <td>{pd?.status}</td>

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

export default MyBooking;