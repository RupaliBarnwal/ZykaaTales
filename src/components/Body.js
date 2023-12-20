import RestroCard from "./RestroCard";
// import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


const Body = () => {
    const [restroList, setRestroList]= useState([]);
    const [filteredRestro, setfilteredRestro]= useState([]);

    const [searchText, setsearchText]= useState("");
    //console.log(resList);
    useEffect(()=>{
      fetchData();
     }, []);
     const fetchData= async ()=>{
      const data= await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6072861&lng=77.2933104&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json= await data.json();
      console.log(json);
      console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setRestroList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setfilteredRestro(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
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
                <RestroCard key={restrorant.info.id} resData={restrorant}/>
                ))}
        </div>
      </div>
    );
  };

  export default Body;