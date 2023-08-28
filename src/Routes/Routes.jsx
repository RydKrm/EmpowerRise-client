import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/LogIn/LogIn";
import Registration from "../Pages/Registration/Registration";
import EditCategory from "../Pages/Admin/AddCategory/EditCategory";
import AddDonation from "../Pages/Donation/AddDonation/AddDonation";
import Donation from "../Pages/Donation/Donation/Donation";
import AddBlog from "../Pages/User/AddBlog/AddBlog";
import Blogs from "../Pages/Home/Blogs/Blogs";
import BlogsDetails from "../Pages/User/BlogsDetails/BlogsDetails";



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
          element:<Donation/>
        },
        {
          path:'addBlog',
          element: <AddBlog/>
        },
        {
          path:'blogs',
          element: <Blogs/>
        },
        {
          path:'blogs/:id',
          element: <BlogsDetails/>
        }

      ],
    },
  ]);