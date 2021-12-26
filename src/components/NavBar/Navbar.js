import React from 'react';

import './Navbar.css'

export const NavBar = () =>{
    return(
        <nav className="my_menu index-menu-right">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="menu.html">Menu</a></li>
                <li><a href="nosotros.html">Nosotros</a></li>
                <li><a href="contacto.html">Contactanos</a></li>
                <li><a href="horarios.html">Horarios</a></li>                        
            </ul>
        </nav>
    )
}

export default NavBar;