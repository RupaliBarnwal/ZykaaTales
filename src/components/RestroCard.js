import {CDN_URL} from "../utils/constants";

const RestroCard = (props) => {
    // const {resName, cuisine}=props;
    const { resData } = props;
    const {cloudinaryImageId,name, cuisines,avgRating} =resData?.info
    return (
      <div className="p-4 m-4 w-[250px] rounded-lg shadow-lg bg-gray-200 hover:cursor-pointer hover:bg-gray-300" >
        <img
          className="size-full h-40 rounded-lg"
          src={CDN_URL +cloudinaryImageId}
        />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4 className="overflow-hidden">{cuisines.join(",")}</h4>
        <h4>{avgRating}⭐</h4>
      </div>
    );
  };

  export const withPromotedLabel=(RestroCard)=>{    //Higher order Component
    return (props)=>{
      return (
        <div>
          <label className="absolute bg-red-600 text-white m-2 p-2 rounded-lg">Open</label>
          <RestroCard {...props}/>
        </div>
      );
    };
  };

  export default RestroCard;