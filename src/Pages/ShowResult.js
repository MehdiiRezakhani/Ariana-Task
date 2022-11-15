import React from 'react';
import {useSelector} from 'react-redux';
import 'chart.js/auto';

//Component
import AgeChart from '../Component/AgeChart'
import SkillsChart from '../Component/SkillsChart';

//style 
import styles from '../Styles/dist/ShowResult.module.css';

const ShowResult = () => {
    // load data from localStorage with redux
    const state = useSelector(state => state.usersData);
    
    //counting the number of ages and skills
    const ageData = {}
    const skillsData = {}
    state.map(x => ageData[x.age] = (ageData[x.age] || 0) + 1);
    state.map(x => skillsData[x.skills] = (skillsData[x.skills] || 0) + 1);
    return (
        <div className={styles.ShowResult}>
            <h3>You can view the latest user information analysis result on these charts!</h3>
            <div>
                <h5>Age Analysis</h5>
                <AgeChart ageData={ageData}/>
            </div>
            <div>
                <h5>Skills Analysis</h5>
                <SkillsChart skillsData={skillsData}/>
            </div>
        </div>
    );
};

export default ShowResult;
