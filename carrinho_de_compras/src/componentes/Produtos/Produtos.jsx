import React, { useState, useEffect } from "react";

import "./Produtos.css"
import fetchProducts from "../../api/fetchProducts";
import CardProdutos from "../CardProduto/CardProduto";

function Produtos() {

    const [products, setProducts] = useState([])

    useEffect(() => {

        fetchProducts("computador").then((response) => {
            setProducts(response)
        })
    }, [])

    return (
        <section className="produtos container">
            {
                products.map((products) => <CardProdutos key = {products.id} data = {products}/>)
            }
        </section>
    )

}

export default Produtos