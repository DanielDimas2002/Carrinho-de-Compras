import React from "react";
import { FaCartPlus } from "react-icons/fa";

import "./CarrinhoBotao.css"

function CarrinhoBotao(){
    return(
        <button type="button" className="cart__button">
            <FaCartPlus/>
            <span className="cart-status">10</span>
        </button>
    )
}
export default CarrinhoBotao