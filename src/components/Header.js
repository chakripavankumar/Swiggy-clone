import { useSelector } from "react-redux";
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { UserCircle } from "lucide-react";
const Header = () => {

    //subscribing to the store  using a selector
    const cartItems = useSelector((store) => store.cart.items)     
   

    return(
        <div className="flex justify-between bg-white-100 shadow-md mb-2">
            <div className="logo-container">
                <img className="w-56" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <Home/>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    
                   <ShoppingCart />
                    <li className="px-4  text-xl">
                         
                        <Link to="/cart">
                      ({cartItems.length})
                        </Link>
                    </li>
                   <UserCircle className="mx-3"/>
                    <li>
                         Login
                   </li>
                  
                    </ul>
            </div>
         
        </div>
    )
}
export default Header; 