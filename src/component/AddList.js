import React, {useState, useRef, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
//redux
import {addData} from '../redux/data/dataAction';
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
        setDataObj({name:"",age:"",skills:[]})
    }
    console.log(state)
    return (
            <div>
                <div>
                    <label htmlFor="name">Name</label>
                    <input 
                        id="name" 
                        type="text" 
                        value={dataObj.name}
                        onChange={event => setDataObj({...dataObj, name:event.target.value})}
                        placeholder='Enter Your FullName'
                        required
                    /><br/>
                    
                    <label htmlFor="age">Age</label>
                    <input 
                        id='age' 
                        type="number"
                        value={dataObj.age}
                        onChange={event => setDataObj({...dataObj, age:event.target.value})} 
                        placeholder="Enter Your Age" 
                        required
                    /><br/>
                    <label htmlFor='skills'>Skills</label><br/>
                    <select 
                        name="skills" 
                        id='skills' 
                        placeholder='select your skills'
                        // value={dataObj.skills} 
                        ref={skillsRef}
                        onChange={selectHandler}
                        data-mdb-clear-button="true"
                        multiple={true}
                    >
                        <option>HTML</option>
                        <option value="CSS">CSS</option>
                        <option value="JS">JS</option>
                        <option value="ReactJS">ReactJS</option>
                    </select>
                    {dataObj.name && dataObj.age && dataObj.skills 
                    ? <button onClick={() => SendData()} >Send</button>  
                    : <button onClick={() => SendData()} disabled>Send</button>
                    }            
            </div>
            </div>
    );
};
export default AddList;