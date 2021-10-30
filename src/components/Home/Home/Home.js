import React from 'react';
import Activities from '../../Activities/Activities/Activities';
import Packages from '../../Packages/Packages/Packages';
import Banner from '../Banner/Banner';
import MiddlePart from '../MiddlePart/MiddlePart';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MiddlePart></MiddlePart>
            <Packages></Packages>
            <Activities></Activities>
        </div>
    );
};

export default Home;