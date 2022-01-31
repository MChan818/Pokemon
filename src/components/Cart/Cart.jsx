import { PokeCartContext } from "../PokeCartContext/PokeCartContext";
import { useContext} from "react";


export const Cart = (pokemon) =>{
    const {RemoveFromCart} = useContext(PokeCartContext);

    return(
        <>
            <div className="cart-list-container">
                <p className="cart-list-txt">{pokemon.pokemon.name} x {pokemon.pokemon.quantity}</p>
                <button className="btn btn-primary remove-btn" onClick={() => RemoveFromCart(pokemon.pokemon)}>Remove</button>
            </div>

        </>
    );
}