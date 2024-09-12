import React, { useContext } from 'react';
import { FaCartPlus } from "react-icons/fa";
import "./CardProduto.css";
import propTypes from "prop-types";
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';

function ProductCard({ data }) {

    const { title, thumbnail, price } = data;

    const { cartItems, setCartItems } = useContext(AppContext);

    const handleAddCart = () => {
        
        const updatedCartItems = [...cartItems, data];
        setCartItems(updatedCartItems);
    };

    return (
        <section className='product-card'>

            {/* Corrigindo o erro no replace do link da imagem */}
            <img src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")} alt='produto' className='card__image' />

            <div className='card__infos'>
                <h2 className='card__price'>{formatCurrency(price, "BRL")}</h2>
                <h2 className='card__title'>{title}</h2>
            </div>

            <button onClick={handleAddCart} type='button' className='button__add-cart'>
                <FaCartPlus />
            </button>

        </section>
    );
}

export default ProductCard;

ProductCard.propTypes = {
    data: propTypes.shape({
        title: propTypes.string.isRequired,
        thumbnail: propTypes.string.isRequired,
        price: propTypes.number.isRequired,
    }).isRequired,
};
