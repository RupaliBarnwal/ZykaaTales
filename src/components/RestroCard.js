import {CDN_URL} from "../utils/constants";

const RestroCard = (props) => {
    // const {resName, cuisine}=props;
    const { resData } = props;
    const {cloudinaryImageId,name, cuisines,avgRating} =resData?.info
    return (
      <div className="rescard" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="res-logo"
          src={CDN_URL +cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating}⭐</h4>
      </div>
    );
  };

  export default RestroCard;