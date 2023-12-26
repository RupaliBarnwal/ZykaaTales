
import {LOGO_URL} from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  // let btnName="Login";
  const[btnName, setbtnName]=useState(["LogIn"])

  const onlineStatus= useOnlineStatus();
    return (
      <div className="flex justify-between shadow-lg">
        <div className="logo-container">
          <img
            className="w-20 p-4"
            src={LOGO_URL} />
        </div>
        <div className="nav-links">
          <ul className="flex text-xl list-none">
            <li className="p-2 m-5">Online Status :{onlineStatus ? "🟢": "🔴"}</li>
            <li className="p-2 m-5"><Link to="/">Home</Link></li>
            <li className="p-2 m-5"><Link to="/about">About Us</Link></li>
            <li className="p-2 m-5"><Link to="/contact">Contact Us</Link></li>
            <li className="p-2 m-5"><Link to="/grocery">Grocery</Link></li>
            <li className="p-2 m-5"><Link to="/">Cart</Link></li>
            <button className="px-5 cursor-pointer" onClick={()=>{
              btnName === "LogIn"? setbtnName("LogOut"):setbtnName("LogIn")
            }}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;