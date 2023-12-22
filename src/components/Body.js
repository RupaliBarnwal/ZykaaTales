import RestroCard from "./RestroCard";
// import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { REST_LINK } from "../utils/constants";
import { Link } from "react-router-dom";


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

     
    return restroList.length==0  ? (<Shimmer/>) :(
      <div className="body">
        <div className="filter">
          <div className="search">
            <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                setsearchText(e.target.value);
            }}  />
            <button className="search" onClick={()=>{
              // console.log(searchText);
              //setsearchText("");
              const filteredRestro = restroList.filter(
                (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestro(filteredRestro);
            }}>Search</button>
          </div>
            <button className="filter-btn" 
            onClick= {()=>{
               const filteredList= restroList.filter(
                (x)=>x.info.avgRating > 4
                );
                setfilteredRestro(filteredList);
                //console.log("button")
            }}>Top Rated Restrorant</button>
        </div>
        <div className="rest-container">
          {
              filteredRestro.map((restrorant)=>(
                <Link key={restrorant.info.id} to={"/Restaurant/"+ restrorant.info.id}><RestroCard  resData={restrorant}/></Link>
                ))}
        </div>
      </div>
    );
  };

  export default Body;