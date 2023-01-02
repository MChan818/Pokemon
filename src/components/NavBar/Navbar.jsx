import React from 'react';
import Cart from '@material-ui/icons/ShoppingCart.js'
import './Navbar.css'
import { NavCartContainer } from '../Cart/NavCartContainer';
import { NavLink } from 'react-router-dom';


export const NavBar = () =>{
    return(
        <header>
            <nav>
                <ul className='Navbar_ul'>
                    {/* Usamos NavLink en vez de <a> para que no haga un full refresh la pagina */}
                    <li className='Navbar_li'><NavLink to={'/'} className='Navbar_a'>Inicio</NavLink></li>
                    <li className='Navbar_li'><NavLink to={'/pokedex'} className='Navbar_a'>Pokédex</NavLink></li>
                    <li className='Navbar_li'><NavLink to={'/pokeballs'} className='Navbar_a'>Pokéballs</NavLink></li>
                    <li className='Navbar_li'><NavLink to={'/trainers'} className='Navbar_a'>Trainers</NavLink></li>
                </ul>
            </nav>
            <div className='dropdown'>
                <NavLink to={'/cart'}>
                    <Cart className='Cart-Icon'/>
                </NavLink>
                <div className='dropdown-content'>
                    <NavCartContainer/>
                </div>
            </div>
        </header>
    )
}

export default NavBar;