import React, { useContext } from "react";
import "./CartItem.css";
import PropTypes from "prop-types";
import formatCurrency from "../../utils/formatCurrency";
import AppContext from "../../context/AppContext";
import { BsCartDashFill } from "react-icons/bs";

function CartItem({ data }) {
    const { cartItems, setCartItems } = useContext(AppContext);
    const { id, name, description, price, image } = data;  

    const handleRemoveItem = () => {
        const updatedItems = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedItems);
    };

    return (
        <section className="cart-item">
            {image ? (
                <img src={image} alt={`Imagem do produto ${name}`} className="cart-item-imagem" />
            ) : (
                <img src="/imagens/default.png" alt="imagem padrão" className="cart-item-imagem" />
            )}

            <div className="cart-item-content">
                <h3 className="cart-item-title">{name}</h3>
                <p className="cart-item-description">{description}</p> {/* Exibindo a descrição */}
                <h3 className="cart-item-price">{formatCurrency(price, "BRL")}</h3>

                <button type="button" className="button__remove-item" onClick={handleRemoveItem}>
                    <BsCartDashFill />
                </button>
            </div>
        </section>
    );
}

CartItem.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,  
    }).isRequired,
};

export default CartItem;
