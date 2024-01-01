import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory=({data,showItem,setShowIndex})=>{
    // console.log(props.data.title)
    // const [showItem, setShowItems]=useState(false);
    const handleOnClick=()=>{
        //setShowItems(!showItem) // or you can write   //showItem==true ? setShowItems(false):setShowItems(true) 
        setShowIndex();
    };
    return (
        <div className="w-6/12 mx-auto my-4 shadow-lg bg-gray-100 p-4 ">
            <div className="flex justify-between cursor-pointer" onClick={handleOnClick}>
           <span className="font-bold text-lg" >{data.title} ({data.itemCards.length})</span> 
           <span>⬇</span>
        </div>
       {showItem &&  <ItemList items={data.itemCards}/>}
        </div>
    )

}

export default RestaurantCategory;