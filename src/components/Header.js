
import {LOGO_URL} from "../utils/constants";
import { useState , useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  // let btnName="Login";
  const[btnName, setbtnName]=useState(["LogIn"])

  const {loggedInUser}= useContext(UserContext); /// React context
  console.log(loggedInUser);

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
            <li className="p-2 m-5"><Link to="/">{loggedInUser}</Link></li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;