import React from 'react'
import {useSelector} from 'react-redux';

const DisplayList = () => {
    const state = useSelector(state => state.usersData)
    return (
        <div>
            {state.map(item => 
                <div>
                    <p>Name : <span>{item.name}</span></p>
                    <p>Age : <span>{item.age}</span></p>
                    <p>skills : <span>{item.skills}</span></p>
                </div>
            )}
        </div>
    );
};

export default DisplayList;