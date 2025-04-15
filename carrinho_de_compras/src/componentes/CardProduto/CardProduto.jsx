import React, { useContext } from 'react';
import { FaCartPlus } from "react-icons/fa";
import "./CardProduto.css";
import propTypes from "prop-types";
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';

function ProductCard({ data }) {
    // Pegando as propriedades corretas conforme o banco de dados mockado
    const { name, description, price, image } = data || {};  

    const { cartItems, setCartItems } = useContext(AppContext);  

    // Verificação caso alguma propriedade esteja ausente
    if (!name || !image || price === undefined) {
        return <div>Erro: Produto inválido</div>;
    }

    const handleAddCart = () => {
        const updatedCartItems = [...cartItems, data];
        setCartItems(updatedCartItems);
    };

    return (
        <section className='product-card'>
            <img 
                src={image} 
                alt={name} 
                className='card__image' 
            />

            <div className='card__infos'>
                <h2 className='card__price'>{formatCurrency(price, "BRL")}</h2>
                <h2 className='card__title'>{name}</h2>
                <p className='card__description'>{description}</p>
            </div>

            <button onClick={handleAddCart} type='button' className='button__add-cart'>
                <FaCartPlus />
            </button>
        </section>
    );
}

export default ProductCard;

// Ajuste nas PropTypes conforme o novo formato dos dados
ProductCard.propTypes = {
    data: propTypes.shape({
        name: propTypes.string.isRequired,
        description: propTypes.string.isRequired,
        price: propTypes.number.isRequired,
        image: propTypes.string.isRequired,
    }).isRequired,
};
