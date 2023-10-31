
import Card,{withPromotedLable} from "./Card.js";
import { FaSearch } from 'react-icons/fa';
import { HOMEPAGE_API } from "../utils/constants.js";
import Shimmer from "./Shimmer.js";
import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import{Flame} from "lucide-react"
const Body = () => {
   
    const [listOfRestrants, setListOfRestrants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [orgenaldata, setOrgenaldata] = useState([]);

    const RestaurantCardPromoted= withPromotedLable(Card)
   
  
    useEffect(() => {
        fetchdata()
    }, []);

    const fetchdata = async () => {
        const data = await fetch( HOMEPAGE_API  );
        let json_data = await data.json();
         
        json_data = json_data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestrants(json_data);
        setOrgenaldata(json_data);
    }
  
    
    function searchdata() {
        var filterdata = orgenaldata.filter((e) =>
            e.info.name.toLowerCase().includes
                (searchText.toLowerCase()));
        setListOfRestrants(filterdata);
    }
    return (
       listOfRestrants.length === 0 ? (
            <Shimmer />
        ) : (<div className="body">
            <div className="filter flex">
                <div className=" search  flex m-2 p-4">
                        <input 
                            type="text"
                            data_testid="SearchInput"
                            className="border border-solid  items-center m-3 rounded-lg"
                            value={searchText}
                            onChange={(e) => {
                                setSearchText(e.target.value)
                            }}
                        />
                        <button
                            className="px-4 py-2 bg-gray-100 m-3 flex items-center rounded-md"
                            onClick={() => searchdata()}
                        >
                            <Search className="ml-1"/>
                            Search 
                        </button>
                        <button className="px-4 py-2 bg-gray-100 m-3 flex items-center rounded-md"
                            onClick={() => {
                                const filteredList = listOfRestrants.filter(
                                    (res) => res.info.avgRatingString > 4
                                );
                                setListOfRestrants(filteredList)
                            }}
                        >
                            <Flame /> 
                            Top Rated Restaurants
                        </button>
                </div>
            </div>
            <div className=" flex flex-wrap">
                    {listOfRestrants.map((information) =>
                    (
                        <Link
                            key={information.info.id}
                            to={"/restaurants/" + information.info.id}
                        > 
                            {information.info.Promoted ? (
                                <RestaurantCardPromoted data={information} />
                            ) : (
                                <Card data={information} />
                            )}
                          
                        </Link>
                    ))}
            </div>
        </div>
        )
    );
}
  
export default Body; 
