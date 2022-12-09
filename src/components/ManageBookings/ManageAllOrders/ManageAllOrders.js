import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const ManageAllOrders = () => {
  const [manageOrders, setManageOrders] = useState([]);
  const { user } = useAuth();
  const handleUpdate = (id) => {
    // const url = `https://arcane-tundra-73847.herokuapp.com/manageAllBooking/${id}`;
    const url = `https://traveler-server-site.vercel.app/manageAllBooking/${id}`;
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    });
  };

  useEffect(() => {
    // fetch('https://arcane-tundra-73847.herokuapp.com/booking')
    fetch('https://traveler-server-site.vercel.app/booking')
      .then((res) => res.json())
      .then((data) => setManageOrders(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm('Are you sure want to delete?');
    if (proceed) {
      // fetch(`https://arcane-tundra-73847.herokuapp.com/manageAllBooking/${id}`, {
      fetch(`https://traveler-server-site.vercel.app/manageAllBooking/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = manageOrders.filter((order) => order._id !== id);
            setManageOrders(remaining);
          }
          // console.log(data);
        });
    }
  };

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

              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          {manageOrders?.map((pd, index) => (
            <tbody key={pd._id}>
              <tr>
                <td>{index + 1}</td>
                <td>{pd?.name}</td>
                <td>{pd?.email}</td>
                <td>{pd?.phone}</td>
                <td>{pd?.address}</td>
                <td>{pd?.booked}</td>

                {/* <td> <button onClick={() => handleStatus(pd.status)} className="btn btn-success"> Pending</button> </td> */}
                <td>
                  {pd?.status === 'Pending' ? (
                    <button
                      onClick={() => handleUpdate(pd._id)}
                      className="btn btn-warning"
                    >
                      Pending
                    </button>
                  ) : (
                    <button className="btn btn-success">Approved</button>
                  )}{' '}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(pd._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default ManageAllOrders;
