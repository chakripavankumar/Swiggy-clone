import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearcart } from "../utils/cartSlice";
import ItemList from "./itemList";



const Cart = () => {
    const CartItems = useSelector((store) => store.cart.items);
    console.log(CartItems);
    const dispath = useDispatch();
    const handleClearCart = () => {
        dispath(clearcart())
    }

    return (
        <div className="text-center m-5 p-5">
            <h1 className="font-bold text-2xl"> Cart</h1>
        
            <div className="w-6/12 m-auto"> 
                <button className="bg-black text-white p-2 m-2 rounded-lg" onClick={handleClearCart}>Clearcart</button>
                {CartItems}
                <ItemList items={CartItems}/>
            </div>
            </div>
        
    );
}
export default Cart;