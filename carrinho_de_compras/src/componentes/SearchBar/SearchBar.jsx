import React, {useState, useContext } from "react";
import { FaSearch } from "react-icons/fa";

import fetchProducts from "../../api/fetchProducts"

import "./SearchBar.css"
import AppContext from "../../context/AppContext";


function SearchBar() {

    const {setProducts, setLoading} = useContext(AppContext)
    const [searchValue, setSearchValue ] = useState("");

    

    const handleSearch = async (event) =>{
        event.preventDefault()
        setLoading(true)
        const products = await  fetchProducts(searchValue)
        setProducts(products)
        setLoading(false)
        setSearchValue("")

    }

    return (
        <form className="search-bar" onSubmit={handleSearch}>
            <input
                type="search"
                value={searchValue}
                placeholder='Buscar Produtos'
                className='search__input'
                onChange={ ({target}) => setSearchValue(target.value)}
                required
            />
            <button type='submit' className='search__button'><FaSearch/></button>
        </form>

    )

}

export default SearchBar