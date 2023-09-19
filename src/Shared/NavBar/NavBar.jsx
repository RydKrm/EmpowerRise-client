import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import useUserInfo from "../../CustomHooks/useUserInfo/useUserInfo";
import axios from "axios";
const NavBar = () => {

    //declaration
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate()

    //state 
    const [notification,setNotification] = useState(0);
 
    //custom hook 
    const {userId,photoURL,role} = useUserInfo();
    console.log('role ',role)

    //effect 
   useEffect(()=>{
    axios.post('http://localhost:5000/countNotofication',{userId})
    .then(res=>setNotification(res.data.total))
    .catch(err=>console.log(err))
   },[userId])

    //function 
       const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
        navigate('/')
    } 

    return (
            <nav className="navbar bg-transparent "> 
                <div className="navbar-start max-w-6xl flex justify-center">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-transparent rounded-box w-52">
                        <li><Link to='dashboard/addCategory'>Add Category</Link></li>
                            <li ><Link to='Donation'> Donation</Link></li>
                            <li ><Link to='Fund'> Fund</Link></li>
                            <li><Link to='addBlog'>Add Blog</Link></li>
                            <li><Link to='docs'>Documentation</Link></li>
                            <li className="text-white"><Link to='blogs'>Blog</Link></li>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Empower Rise</Link>
                </div>

                <div className="navbar-center hidden lg:flex bg-transparent">
                    <ul className="menu menu-horizontal px-1 bg-transparent"> 
                    <li><Link to='dashboard/addCategory'>Add Category</Link></li>
                        <li><Link to='Donation'> Donation</Link></li>
                        <li><Link to='Fund'> Fund</Link></li>
                        <li><Link to='blogs'>Blog</Link></li>
                        <li><Link to='docs'>Documentation</Link></li>
                        <li><Link to='dashboard/userNotification'>Dashboard 
                        <div className="badge badge-primary">{notification}</div></Link></li>
                         {/* {role==='admin' && <li><Link to='dashboard/userProfile'>Dashboard 
                        <div className="badge badge-primary">{notification}</div></Link></li>}  */}
                    </ul>
                </div>
                <div className="navbar-end mr-4 lg:mr-20">
                    {
                        user ? <>
                            <div style={{
                                width: "25px",
                                height: "25px",
                                borderRadius: "50%", // This will create a circular shape
                                overflow: "hidden" // To clip the image within the circular container
                            }}>
                                <img
                                    src={photoURL}
                                    alt="User"
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            </div>
                            <button onClick={handleLogOut} className="btn btn-ghost btn-sm text-black">LogOut</button>
                        </> : <>
                            <li><Link to="/login">Login</Link></li>
                        </>
                    }
                </div>
            </nav>


        
    );
};

export default NavBar;