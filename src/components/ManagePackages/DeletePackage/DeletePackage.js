import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const DeletePackage = () => {
    const [allPackage, setAllPackage] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/packages")
            .then(res => res.json())
            .then(data => setAllPackage(data))
    }, []);

    const handleDelete = id => {
        const url = `http://localhost:5000/packages/${id}`;
        fetch(url, {
            method: "DELETE",

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    alert('Are you want to delete?')
                    const remaining = allPackage.filter(pd => pd._id !== id);
                    setAllPackage(remaining);

                }

            })
    }
    return (
        <div>
            <h1>Delete Package</h1>
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Image Link</th>
                            <th>Cost</th>
                            <th>People</th>
                            <th>Days</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    {
                        allPackage?.map((pd, index) =>
                        (
                            <tbody>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{pd?.title}</td>
                                    <td>{pd?.image}</td>
                                    <td>{pd?.cost}</td>
                                    <td>{pd?.people}</td>
                                    <td>{pd?.days}</td>

                                    <td><button className="btn btn-danger"
                                        onClick={() => handleDelete(pd._id)}>Delete</button></td>
                                </tr>
                            </tbody>
                        ))
                    }



                </Table>
            </div>


        </div>
    );
};

export default DeletePackage;