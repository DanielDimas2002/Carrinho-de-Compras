import React, { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";

import "./CarrinhoBotao.css"
import AppContext from "../../context/AppContext";

function CarrinhoBotao(){

    const {cartItems, isCartVisible, setIsCartVisible} = useContext(AppContext)

    return(
        <button type="button" className="cart__button" onClick={() => setIsCartVisible(!isCartVisible)}>
            <FaCartPlus/>
            {cartItems.length > 0 && <span className="cart-status">{cartItems.length}</span>}
        </button>
    )
}
export default CarrinhoBotao