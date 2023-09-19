import { useEffect, useState } from 'react';
import useUserInfo from '../../../../CustomHooks/useUserInfo/useUserInfo';
import axios from 'axios';

const UserProfile = () => {
   const {name,email,userId,photoURL,phoneNumber,address,role} = useUserInfo();
   const [userInfo,setUserInfo] = useState({});

   useEffect(()=>{
    axios.post('http://localhost:5000/getUserInfo',{userId})
    .then(res=>setUserInfo(res.data))
    .catch(err=>console.error(err));
   },[userId])

console.log("user info ",userInfo)

    return (
        <>
         <div className="flex flex-col ms-10 mt-10">
           <img src={photoURL} className='w-32 h-32 rounded-full ' alt="User Image" /> 
           <div className='mt-5 ms-5'>
            <p>{name}</p>
           <p>{email}</p>
          {userInfo.fundPost>0 && <p>Make {userInfo.fundPost} Fund Post</p>  } 
          {userInfo.fundPost>0 && <p>Make {userInfo.donationPost} Donation Post</p> }
          {phoneNumber && <p> Phone Number : {phoneNumber}</p>}
          {role && <p> Role : {role}</p>}
          {address && <p> Address : {address}</p>}
           </div>
            
          </div>   
        </>
    );
};

export default UserProfile;