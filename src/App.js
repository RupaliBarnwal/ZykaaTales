import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";


// const Grocery = lazy(()=>{import("./components/Grocery")});
const Grocery = lazy(() => import('./components/Grocery'));

const Layout = () => {
  const [userName, setUserName]= useState()

  useEffect(()=>{
    const data={
      name:"Rupali Barnwal"
    }
    setUserName(data.name);
  }, [])

  return (
    //Context.Provider is used to update the default vaue of react context
    <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
      <div className="layout">
      <Header />
      <Outlet/>
    </div>
    </UserContext.Provider>
  );
};


const appRouter= createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      
      {
        path:"/grocery",
        element:(
          <Suspense fallback={<h1>Loading ....</h1>}>
          <Grocery />
          </Suspense>
        
        ),
        // element:<Grocery/>
      },
      {
        path:"/restaurant/:resId",
        element:<RestaurantMenu/>
      },
    ],
    errorElement:<Error/>
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
