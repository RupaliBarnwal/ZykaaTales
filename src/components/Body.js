import RestroCard, {withPromotedLabel} from "./RestroCard";
// import resList from "../utils/mockData";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { REST_LINK } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Body = () => {
    const [restroList, setRestroList]= useState([]);
    const [filteredRestro, setfilteredRestro]= useState([]);

    const [searchText, setsearchText]= useState("");

    const RestaurantCardPromoted= withPromotedLabel(RestroCard);

    const {loggedInUser, setUserName}= useContext(UserContext);
    
    //console.log(resList);
    useEffect(()=>{
      fetchData();
     }, []);
     const fetchData= async ()=>{
      const data= await fetch ( REST_LINK
      );
      const json= await data.json();
      console.log(json);
      // console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)     
      setRestroList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setfilteredRestro(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     };
     
     const onlineStatus= useOnlineStatus();
     if(onlineStatus === false) 
     return <h1>Looks like you are offline, please check your internet connection!!</h1>
     
    return restroList.length==0  ? (<Shimmer/>) :(
      <div className="body">
        <div className="flex">
          <div className="p-4 m-4">
            <input type="text" className="search-box border border-solid border-black"
             value={searchText} onChange={(e)=>{
                setsearchText(e.target.value);
            }}  />
            <button className="px-4 py-0.5 bg-green-100" onClick={()=>{
              // console.log(searchText);
              //setsearchText("");
              const filteredRestro = restroList.filter(
                (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestro(filteredRestro);
            }}>Search</button>
          </div>
          <div className="p-4 m-4">
            <button className="px-4 py-0.5 bg-pink-100 rounded-lg" 
            onClick= {()=>{
               const filteredList= restroList.filter(
                (x)=>x.info.avgRating > 4
                );
                setfilteredRestro(filteredList);
                //console.log("button")
            }}>Top Rated Restrorant</button>
            </div>
            <div className="p-4 m-4">
              <label>UserName :</label>
            <input type="text" className="border border-black p-2" valse={loggedInUser}
            onChange={(e)=>{
              setUserName(e.target.value);
            }}/>
            </div>
        </div>
        <div className="flex flex-wrap px-12">
          {
              filteredRestro.map((restrorant)=>(
                <Link key={restrorant.info.id} to={"/Restaurant/"+ restrorant.info.id}>
                  {
                    restrorant.info.isOpen ? (<RestaurantCardPromoted resData={restrorant}/>
                     ):(
                     <RestroCard  resData={restrorant}/>
                  
                  )}
                  </Link>
                ))}
        </div>
      </div>
    );
  };

  export default Body;