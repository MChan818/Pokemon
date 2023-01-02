import * as React from "react";
import { PokeCartContext } from "../PokeCartContext/PokeCartContext";
import CartList from "./CartList";
import { NavLink } from "react-router-dom";
import './Cart.css'

export const CartContainer = () =>{
    const {PokeCart, TotalPrice} = React.useContext(PokeCartContext);

    React.useEffect(()=>{
        console.log(PokeCart)
    },[PokeCart])
    
    return(
        <>
        <h3 className="cart-title">Carrito de compras</h3>
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
            <section className="full-cart-container">
                <div className='full-cart'>
                    <CartList pokemons = {PokeCart}/>
                    <div className="total-container">
                        <p className="total-txt"><strong>Total: ${TotalPrice}</strong></p>
                    </div>
                    <NavLink to={'/checkout'}>
                        <section className="buy-btn-container">
                            <button className="btn btn-primary buy-btn">Comprar</button>
                        </section>
                    </NavLink>
                </div>
            </section>
            </>
        )}
        </>
    );
}