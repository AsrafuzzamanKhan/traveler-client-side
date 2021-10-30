import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Package from '../Package/Package';

const Packages = () => {

    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])
    return (
        <div>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        packages.map(pack => <Package
                            key={pack._id}
                            pack={pack}
                        ></Package>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Packages;