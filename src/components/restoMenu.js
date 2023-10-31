import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import { useParams } from "react-router-dom";
import { useState } from "react";

    const RestaurantMenu = () => {
 
      const { resId } = useParams();
      const dummy = "Dummy Data";
      const resinfo = useRestaurantMenu(resId);
      const [showIndex, setShowIndex] = useState(0);
    
    if (resinfo === null) return <Shimmer />;
    
  
 const { name, cuisines, costForTwoMessage } =
    resinfo?.cards[0]?.card?.card?.info;

      const categories = resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
        //console.log( categories);
  return (
    <div className="text-center">
        <h1 className=" font-bold my-10 text-2xl">{name}</h1>
      <p className=" font-bold text-lg">{cuisines.join(",")} - {costForTwoMessage}</p>
     {/* categories accordians */}
      {categories.map((category, index) => (
        // { controlled components }
        <RestaurantCategory
          key={category?.card?.card?.tittle}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={()=> setShowIndex(index)}
        />
     ) )}
    </div>
  );
};

  

export default RestaurantMenu;