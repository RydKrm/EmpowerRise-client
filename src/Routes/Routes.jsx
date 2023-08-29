import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/LogIn/LogIn";
import Registration from "../Pages/Registration/Registration";
import EditCategory from "../Pages/Admin/AddCategory/EditCategory";
import AddDonation from "../Pages/Donation/AddDonation/AddDonation";
import AddBlog from "../Pages/User/AddBlog/AddBlog";
import DonationContainer from "../Pages/Donation/Donation/DonationContainer";
import Blogs from "../Pages/Home/Blogs/Blogs";
import BlogsDetails from "../Pages/User/BlogsDetails/BlogsDetails";
import AddFund from "../Pages/Fund/AddFund/AddFund";
import FundContainer from "../Pages/Fund/Fund/FundContainer";




  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "registration",
          element: <Registration />,
        },
        {
          path:'addCategory',
          element: <EditCategory/>
        },{
          path:'addDonation',
          element:<AddDonation/>
        },{
          path:'Donation',
          element:<DonationContainer/>
        },{
          path:'addBlog',
          element: <AddBlog/>
        },{
          path:'blogs',
          element: <Blogs/>
        },{
          path:'blogs/:id',
          element: <BlogsDetails/>
        },{
          path:'addFund',
          element:<AddFund/>
        },{
          path:'fund',
          element:<FundContainer/>
        }

      ],
    },
  ]);