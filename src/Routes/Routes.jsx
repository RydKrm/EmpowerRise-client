import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import EditCategory from "../Pages/Admin/AddCategory/EditCategory";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },{
          path:'addCategory',
          element: <EditCategory/>
        }
      ],
    },
  ]);