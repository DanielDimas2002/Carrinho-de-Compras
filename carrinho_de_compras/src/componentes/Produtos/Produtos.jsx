import React, { useEffect, useContext } from "react";
import "./Produtos.css";
import fetchProducts from "../../api/fetchProducts";
import CardProdutos from "../CardProduto/CardProduto";
import Loading from "../Loading/Loading";
import AppContext from "../../context/AppContext";

function Produtos() {
    const { products, setProducts, loading, setLoading } = useContext(AppContext);
    
    useEffect(() => {
        fetchProducts("computador").then((response) => {
            console.log("Produtos carregados:", response);  
            setProducts(response);
            setLoading(false);
        });
    }, [setProducts, setLoading]);
     

    return (
        loading ? <Loading /> : 
        <section className="produtos container">
            {
                products.map((produto) => <CardProdutos key={produto.id} data={produto} />)
            }
        </section>
    );
}

export default Produtos;
