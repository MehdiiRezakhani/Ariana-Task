import React from 'react'
import {useSelector} from 'react-redux';
import {v4} from 'uuid'

//style
import styles from '../Styles/dist/DisplayList.module.css'

const DisplayList = () => {
    const state = useSelector(state => state.usersData)
    return (
        <div>
            {state ? 
                <div className={styles.DisplayList}>
                    <p>Latest Users Information</p>
                    <div>
                        {state.map(item => 
                            <div key={v4()}>
                                <p>Name : <span>{item.name}</span></p>
                                <p>Age : <span>{item.age}</span></p>
                                <p>skills : <span>{item.skills}</span></p>
                            </div>
                        )}
                    </div>
                </div> 
            : null}
        </div>
    );
};

export default DisplayList;