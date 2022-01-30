import React from 'react';
import Cart from '@material-ui/icons/ShoppingCart.js'
import './Navbar.css'

export const NavBar = () =>{
    return(
        <header>
            <nav>
                <ul className='Navbar_ul'>
                    {/* Las clases LI y A para que no pise con otra etiqueta igual */}
                    <li className='Navbar_li'><a href="/" className='Navbar_a'>Inicio</a></li>
                    <li className='Navbar_li'><a href="/pokedex" className='Navbar_a'>Pokédex</a></li>
                    <li className='Navbar_li'><a href="/trainers" className='Navbar_a'>Trainers</a></li>
                </ul>
            </nav>
            <a href="/cart"><Cart className='Cart-Icon'/></a>
        </header>
    )
}

export default NavBar;