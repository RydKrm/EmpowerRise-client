import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../../Context/DataContext';
import axios from 'axios';
import DropDown from '../../../components/DropDown/DropDown';
import DonationTopMenu from './DonationTopMenu';

const Donation = () => {
    const {state,dispatch} = useContext(DataContext);
    //state
    const [data,setData] = useState([]);
   
    useEffect(()=>{
        console.log("state => ",state);
        if(state.type){
        axios.post('http://localhost:5000/mainData',state)
        .then(res=>setData(res.data))
        .catch(err=>console.log(err));
        }
    },[state]);
    useEffect(()=>{
        dispatch({type:'SET_TYPE',payload:'donation'});
    },[])

    return (
        <div>
            <DonationTopMenu/>
        </div>
    );
};

export default Donation;