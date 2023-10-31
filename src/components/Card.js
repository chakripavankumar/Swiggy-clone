import{CDN_URL} from "../utils/constants"

const Card = (props) => {
  var { name, locality, areaName, costForTwo, cloudinaryImageId, cuisines, avgRating } = props?.data.info;
  //console.log(props.data.info);
  
  return (
    
    <div className="m-4 p-4 w-[250px] rounded-sm bg-gray-100 hover:bg-gray-200">
      <img className="rounded-lg" 
        alt="loading"
        src={ CDN_URL
          +
        cloudinaryImageId
      }
      />
      <h3 className="font-bold py-4 text-lg"> {name}</h3>
             <p>{cuisines.join(", ")}</p>
             <span>{costForTwo}{avgRating} Rating</span>
      <p>{areaName},{locality}</p>
      
         </div>
  );
};
export const withPromotedLable = (RestaurantMenu) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <RestaurantMenu {...props} />
      </div>
    );
  };

};

export default Card;
