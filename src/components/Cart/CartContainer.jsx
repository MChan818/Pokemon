import { useEffect , useContext, useState} from "react";
import { PokeCartContext } from "../PokeCartContext/PokeCartContext";
import CartList from "./CartList";
import './Cart.css'
import { NavLink } from "react-router-dom";

export const CartContainer = () =>{
    const {PokeCart} = useContext(PokeCartContext);
    const [Cart, setCart] = useState([]);

    useEffect(() =>{
        setCart(PokeCart);
    },[PokeCart])

    console.log(PokeCart)
    console.log(Cart)
    return(
        <>
        {PokeCart.length === 0 ? (
            <section className="empty-cart-container">
                <div className="empty-cart empty-cart-txt-center">
                        <p>Parece que por aquí no hay nada...</p>
                        <p>Agreguemos algo al carrito!</p>
                        <NavLink to={'/pokedex'}>
                        <button className="btn btn-primary">Volver a la tienda</button>
                        </NavLink>
                </div>
            </section>
        ):(
            <CartList pokemons = {Cart}/>
        )}
        </>
    );
}