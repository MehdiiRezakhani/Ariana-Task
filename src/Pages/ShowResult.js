import React,{useState} from 'react';
import { useSelector } from 'react-redux';
import {v4} from 'uuid'
import 'chart.js/auto';
const ShowResult = () => {
    const state = useSelector(state => state.usersData);

    const ageCounts = {};
    const skillsCounts = {};
    state.map(x => ageCounts[x.age] = (ageCounts[x.age] || 0) + 1);
    state.map(x => skillsCounts[x.skills] = (skillsCounts[x.skills] || 0) + 1);
    console.log(skillsCounts)

    return (
        <div>
        </div>
    );
};

export default ShowResult;
