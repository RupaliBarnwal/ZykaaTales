import RestroCard from "./RestroCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";


const Body = () => {
    const [restroList, setRestroList]= useState(resList);
    //console.log(resList);
    useEffect(()=>{
      fetchData();
     }, []);
     const fetchData= async ()=>{
      const data= await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6072861&lng=77.2933104&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json= data.json();
      console.log(json);
     };
    return (
      <div className="body">
        <div className="filter">
            <button className="filter-btn" 
            onClick= {()=>{
               const filteredList= restroList.filter(
                (x)=>x.info.avgRating > 4
                );
                setRestroList(filteredList);
                //console.log("button")
            }}>Top Rated Restrorant</button>
        </div>
        <div className="rest-container">
          {
              restroList.map((restrorant)=>(
                <RestroCard key={restrorant.info.id} resData={restrorant}/>
                ))}
        </div>
      </div>
    );
  };

  export default Body;