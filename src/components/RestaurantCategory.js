import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory=(props)=>{
    // console.log(props.data.title)
    const [showItem, setShowItems]=useState(false);
    const handleOnClick=()=>{
        console.log("clicked")
        //setShowItems(true);
        setShowItems(!showItem) // or you can write   //showItem==true ? setShowItems(false):setShowItems(true) 
        
    };
    return (
        <div className="w-6/12 mx-auto my-4 shadow-lg bg-gray-100 p-4 ">
            <div className="flex justify-between cursor-pointer" onClick={handleOnClick}>
           <span className="font-bold text-lg" >{props.data.title} ({props.data.itemCards.length})</span> 
           <span>⬇</span>
        </div>
       {showItem &&  <ItemList items={props.data.itemCards}/>}
        </div>
    )

}

export default RestaurantCategory;