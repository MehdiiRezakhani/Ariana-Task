import React,{useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
//redux
import {addData} from '../redux/data/dataAction';
const AddList = () => {
    const dispatch = useDispatch();
    const state = useSelector(state=> state)
    const [name,setName] = useState('')
    const dataHandeler = ( ) => {
        dispatch(addData(name))
    }
    return (
            <div>
                <input type='text' value={name} onChange={event => setName(event.target.value)}/>
                <button onClick={dataHandeler}>Send</button>
                {console.log(state)}
            </div>
    );
};

export default AddList;