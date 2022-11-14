import React from 'react';
import {useSelector} from 'react-redux';
import 'chart.js/auto';

//Component
import AgeChart from '../Component/AgeChart'
import SkillsChart from '../Component/SkillsChart';

const ShowResult = () => {
    // load data from localStorage with redux
    const state = useSelector(state => state.usersData);
    
    //counting the number of ages and skills
    const ageData = {}
    const skillsData = {}
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
