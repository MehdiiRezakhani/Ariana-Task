import React, {useState, useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';

//redux
import {addData} from '../redux/data/dataAction';

//style
import styles from '../Styles/dist/AddList.module.css';

const AddList = () => {
    const dispatch = useDispatch();
    const state = useSelector(state=> state.usersData)
    
    const [dataObj, setDataObj] = useState({name:"",age:"",skills:[]}) 
    const skillsRef = useRef(); 
    const [data, setData] = useState(state);

    const selectHandler = () => {
        let skills = [...skillsRef.current.options].filter(option => option.selected).map(option => option.value);
        setDataObj({...dataObj, skills:skills})
    } 

    const SendData = () => {
        data.push(dataObj)
        dispatch(addData(data))
        setDataObj({})
    }

    return (
            <div className={styles.AddList}>
                <div>
                    <p>Your Information</p>
                    <label htmlFor="name">Name</label>
                    <input 
                        id="name" 
                        type="text" 
                        value={dataObj.name}
                        onChange={event => setDataObj({...dataObj, name:event.target.value})}
                        placeholder='Your Name'
                    /><br/>
                    <label htmlFor="age">Age</label>
                    <input 
                        id='age' 
                        type="number"
                        value={dataObj.age}
                        onChange={event => setDataObj({...dataObj, age:event.target.value})} 
                        placeholder="Your Age" 
                    /><br/>
                    <label htmlFor='skills'>Skills</label>
                    <select 
                        id='skills' 
                        name="skills" 
                        // value={dataObj.skills} 
                        ref={skillsRef}
                        onChange={selectHandler}
                        data-mdb-clear-button="true"
                        multiple
                    >
                        <option value="HTML">HTML</option>
                        <option value="CSS">CSS</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="ReactJS">ReactJS</option>
                        <option value="NextJS">NextJS</option>
                        <option value="Redux">Redux</option>
                    </select>

                    {/* disabled the button when nothing is completed */}
                    {dataObj.name && dataObj.age && dataObj.skills 
                    ?<button onClick={() => SendData()} >Send</button>  
                    :<button onClick={() => SendData()} disabled>Send</button>
                    }

                </div>
            </div>
    );
};

export default AddList;