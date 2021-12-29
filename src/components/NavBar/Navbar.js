import React from 'react';

import './Navbar.css'

export const NavBar = () =>{
    return(
        <nav className="my_menu index-menu-right">
            <ul>
                <li><a href="/inicio">Inicio</a></li>
                <li><a href="/pokedex">Pokédex</a></li>
                <li><a href="/generations">Generaciones</a></li>                   
            </ul>
        </nav>
    )
}

export default NavBar;