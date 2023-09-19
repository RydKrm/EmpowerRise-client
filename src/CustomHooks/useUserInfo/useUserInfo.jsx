import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
const useUserInfo = ()=>{
   const { user } = useContext(AuthContext);
   const [userInfo,setUserInfo] = useState({});
     useEffect(()=>{ 
       if(user){  
    axios.post('http://localhost:5000/findUserByEmail',{'email':user?.email})
    .then(res=>{
        setUserInfo(res.data[0]);
    })
    .catch(err=>console.log(err));
       }
   },[user?.email]) 
   
    const name = userInfo.name; 
    const photoURL = userInfo.photoURL; 
    const email = userInfo.email;
    const userId = userInfo._id;
    const role = userInfo.role;
    let phoneNumber = null;
    if(userInfo.phoneNumber) phoneNumber = userInfo.phoneNumber;
    let address  = null;
    if(userInfo.address) address = userInfo.address;
    
  return {userId,email,name,photoURL,role,phoneNumber,address};
}
export default useUserInfo;