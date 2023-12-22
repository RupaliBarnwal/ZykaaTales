import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const{resId}=useParams();
    //resId=608586

    const [resInfo, setResInfo]=useState(null);
    useEffect (()=>{
        fetchMenu();
    }, []);

    const fetchMenu= async ()=>{
        const data= await fetch (MENU_URL+resId)
    const json= await data.json();
    // console.log(json);
    // console.log(json?.data?.cards[0]?.card?.card?.info);
    setResInfo(json.data);
};
if (resInfo === null) return <Shimmer/>;
const {name,cuisines, areaName,avgRating,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info;

const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
console.log(itemCards);

  return  (
    <div className="Menu">
      <h1>{name}</h1>
      <p>
      {cuisines.join(",")}-{costForTwoMessage}
      {areaName}
      {avgRating} ⭐
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
            <li key={item.card.info.id}>
                {item.card.info.name}-{"Rs."}
                {item.card.info.price/100 || item.card.info.defaultPrice/100}
            </li>
            
        ))}
        </ul>
      
    </div>
  )
}

export default RestaurantMenu
