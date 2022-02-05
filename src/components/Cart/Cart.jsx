import { PokeCartContext } from "../PokeCartContext/PokeCartContext";
import { useContext} from "react";


export const Cart = (pokemon) =>{
    const {RemoveFromCart} = useContext(PokeCartContext);

    const capitalize = (s) => { //Mayuscula en la primera letra
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    return(
        <>
            <div className="cart-list-container">
                <div className="pokemon-txt-container">
                    <p className="cart-list-txt">{capitalize(pokemon.pokemon.name)} x {pokemon.pokemon.quantity}</p>
                </div>
                <button className="btn btn-primary remove-btn" onClick={() => RemoveFromCart(pokemon.pokemon)}>Remove</button>
            </div>
        </>
    );
}