import React from 'react';
import Banner from '../../components/home/Banner';
import WhatWeOffer from '../../components/whatweoffer/WhatWeOffer';
import WhoWeAre from '../../components/whoweare/WhoWeAre';

const Home: React.FC = () => {
   return (
        <>
            <Banner />
            <WhatWeOffer />
            <WhoWeAre />
        </>
    );
}

export default Home;
