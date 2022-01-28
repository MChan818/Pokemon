import React from 'react';

import './Navbar.css'

export const NavBar = () =>{
    return(
        <nav className="my_menu_container">
            <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/pokedex">Pokédex</a></li>
                <li><a href="/trainers">Trainers</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;