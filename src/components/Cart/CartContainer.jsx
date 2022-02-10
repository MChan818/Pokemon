import {useContext} from "react";
import { PokeCartContext } from "../PokeCartContext/PokeCartContext";
import CartList from "./CartList";
import './Cart.css'
import { NavLink } from "react-router-dom";

export const CartContainer = () =>{
    const {PokeCart, TotalPrice} = useContext(PokeCartContext);
    
    return(
        <>
        {PokeCart.length === 0 ? (
            <section className="empty-cart-container">
                <div className='empty-cart empty-cart-txt-center'>
                    <p>Parece que por aquí no hay nada...</p>
                    <p>Agreguemos algo al carrito!</p>
                    <NavLink to={'/pokeballs'}>
                        <button className="btn btn-primary">Volver a la tienda</button>
                    </NavLink>
                </div>
            </section>
        ):(
            <>
                <CartList pokemons = {PokeCart}/>   
                <div className="total-container">
                    <p className="total-txt">Total: ${TotalPrice}</p>
                </div>
            </>
        )}

        {PokeCart.length >= 1 ? (
        <NavLink to={'/checkout'}>
            <section className="buy-btn-container">
                <button className="btn btn-primary buy-btn">Comprar</button>
            </section>
        </NavLink>
        ):(
        <></>//No se muestra nada
        )}
        </>
    );
}