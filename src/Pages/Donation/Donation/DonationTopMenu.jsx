import {useEffect, useContext, useState} from 'react';
import axios from 'axios';
import DropDown from '../../../components/DropDown/DropDown';
import {DataContext} from '../../../Context/DataContext';

const DonationTopMenu = () => {
    const {dispatch} = useContext(DataContext);
    const [categoryList,setCategoryList] = useState([]);
        useEffect(()=>{
      axios.get('http://localhost:5000/getAllCategory')
      .then(res=>{
        setCategoryList(res.data);
      })
      .catch(err=>console.log(err));
    },[])

    const setStatus = (e)=>{
        dispatch({type:'SET_STATUS',payload:e.target.value})
    }
    const setCategory = (e)=>{
        dispatch({type:'SET_CATEGORY',payload:e.target.value});
    }
    const setSort = (e)=>{
        dispatch({type:'SORT_BY',payload:e.target.value})
    }
    
    const selectStatus = [
        {field:"unsuccessful",_id:1},
        {field:"successful",_id:2},
        {field:"processing",_id:3}
    ];

    const sortBy = [
        {_id:4,field:'newest'},
        {_id:5,field:'oldest'},
        {_id:6,field:'highToLow'},
        {_id:7,field:'lowToHigh'}

    ]

    const selectCategory =  categoryList.map(obj=>({
        field : obj.category,
        _id:obj._id,
    }));

    return (
        <div className="grid grid-cols-1 md:grid-cols-3  ">
                <div className="flex flex-row mx-4">
                    <p className='font-poppins mt-5 me-5 font-light'>By Status</p>
                    <DropDown List={selectStatus} handler={setStatus}/>
                </div>
                <div className="flex flex-row mx-4">
                    <p className='font-poppins mt-5 me-5 font-light'> Sort By</p>
                    <DropDown List={sortBy} handler={setSort}/>
                </div>
                <div className="flex flex-row mx-4">
                    <p className='font-poppins mt-5 me-5 font-light w-96'>Category</p>
                    <DropDown List={selectCategory} handler={setCategory}/>
                </div>
                
            </div>
    );
};

export default DonationTopMenu;