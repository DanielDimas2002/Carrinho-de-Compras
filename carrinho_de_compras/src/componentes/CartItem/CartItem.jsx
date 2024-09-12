import React from "react";
import { BsCartDashFill } from "react-icons/bs";
import "./CartItem.css";
import PropTypes from "prop-types";   
import formatCurrency from "../../utils/formatCurrency";

function CartItem({ data }) {
    const {title, thumbnail, price} = data

  return (
    <section className="cart-item">
      <img src={thumbnail} alt="imagem do produto" className="cart-item-imagem" />

      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{formatCurrency(price, "BRL")}</h3>

        <button type="button" className="button__remove-item">
          <BsCartDashFill />
        </button>
      </div>
    </section>
  );
}

CartItem.propTypes = {
  data: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
