import RestroCard from "./RestroCard";
// import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { REST_LINK } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
    const [restroList, setRestroList]= useState([]);
    const [filteredRestro, setfilteredRestro]= useState([]);

    const [searchText, setsearchText]= useState("");
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
      setRestroList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setfilteredRestro(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     };
     
     const onlineStatus= useOnlineStatus();
     if(onlineStatus === false) 
     return <h1>Looks like you are offline, please check your internet connection!!</h1>
     
    return restroList.length==0  ? (<Shimmer/>) :(
      <div className="body">
        <div className="flex">
          <div className="p-4 m-4">
            <input type="text" className="search-box border border-solid border-black" value={searchText} onChange={(e)=>{
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
        </div>
        <div className="flex flex-wrap px-12">
          {
              filteredRestro.map((restrorant)=>(
                <Link key={restrorant.info.id} to={"/Restaurant/"+ restrorant.info.id}><RestroCard  resData={restrorant}/></Link>
                ))}
        </div>
      </div>
    );
  };

  export default Body;