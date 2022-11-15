import React from 'react';

//component
import AddList from '../Component/AddList';
import DisplayList from '../Component/DisplayList';

const Home = () => {
    return (
        <div>
            <AddList/>
            <DisplayList/>
        </div>
    );
};

export default Home;