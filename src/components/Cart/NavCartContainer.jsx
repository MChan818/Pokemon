import {useContext} from "react";
import { PokeCartContext } from "../PokeCartContext/PokeCartContext";
import CartList from "./CartList";
import './Cart.css'
import { NavLink } from "react-router-dom";

export const NavCartContainer = () =>{
    const {PokeCart, TotalPrice} = useContext(PokeCartContext);

    return(
        <>
        {PokeCart.length === 0 ? (
            <section className="empty-cart-container-nav">
                <div className="nav-empty-cart-txt">
                    <p>Parece que por aquí no hay nada...</p>
                    <p>Agreguemos algo al carrito!</p>
                    <NavLink to={'/pokeballs'}>
                        <button className="btn btn-primary">Volver a la tienda</button>
                    </NavLink>
                </div>
            </section>
        ):(
            <section className="cart-container">
                <CartList pokemons = {PokeCart}/>
                <div className="total-container">
                    <p className="total-txt">Total: ${TotalPrice}</p>
                </div>
            </section>
        )}
        </>
    );
}