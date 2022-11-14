import React,{useState} from 'react';
import { useSelector } from 'react-redux';
import {v4} from 'uuid'
import 'chart.js/auto';
import AgeChart from '../component/AgeChart'
import SkillsChart from '../component/SkillsChart';
const ShowResult = () => {
    const state = useSelector(state => state.usersData);

    const ageData = {};
    const skillsData = {};
    state.map(x => ageData[x.age] = (ageData[x.age] || 0) + 1);
    state.map(x => skillsData[x.skills] = (skillsData[x.skills] || 0) + 1);
    return (
        <div>
            <AgeChart ageData={ageData}/>
            <SkillsChart skillsData={skillsData}/>
        </div>
    );
};

export default ShowResult;
