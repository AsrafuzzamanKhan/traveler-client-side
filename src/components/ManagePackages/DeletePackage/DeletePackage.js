import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const DeletePackage = () => {
  const [allPackage, setAllPackage] = useState([]);
  useEffect(() => {
    // fetch("https://arcane-tundra-73847.herokuapp.com/packages")
    fetch('https://traveler-server-site-production.up.railway.app/packages')
      .then((res) => res.json())
      .then((data) => setAllPackage(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm('Are you sure want to delete?');
    if (proceed) {
      // const url = `https://arcane-tundra-73847.herokuapp.com/${id}`;
      const url = `https://traveler-server-site-production.up.railway.app/packages/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            const remaining = allPackage.filter((pd) => pd._id !== id);
            setAllPackage(remaining);
          }
        });
    }
  };
  return (
    <div>
      <h1 className="heading-color">DELETE TOUR PACKAGE</h1>
      <div className="container table-responsive">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Image Link</th>
              <th>Cost</th>
              <th>People</th>
              <th>Days</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          {allPackage?.map((pd, index) => (
            <tbody>
              <tr>
                <td>{index + 1}</td>
                <td>{pd?.title}</td>
                <td>{pd?.image}</td>
                <td>{pd?.cost}</td>
                <td>{pd?.people}</td>
                <td>{pd?.days}</td>
                <td>{pd?.description}</td>

                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(pd._id)}
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

export default DeletePackage;
