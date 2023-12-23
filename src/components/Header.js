
import {LOGO_URL} from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  // let btnName="Login";
  const[btnName, setbtnName]=useState(["LogIn"])

  const onlineStatus= useOnlineStatus();
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL} />
        </div>
        <div className="nav-links">
          <ul>
             <li>Online Status :{onlineStatus ? "🟢": "🔴"}</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/">Cart</Link></li>
            <button className="login" onClick={()=>{
              btnName === "LogIn"? setbtnName("LogOut"):setbtnName("LogIn")
            }}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;