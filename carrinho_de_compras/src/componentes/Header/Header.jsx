import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import "./Header.css"
import CarrinhoBotao from '../CarrinhoBotao/CarrinhoBotao';

function Header() {
    return (
        <header className='header'>
            <div className='container'>
                <SearchBar/>
                <CarrinhoBotao/>
            </div>
        </header>
    )
}

export default Header
