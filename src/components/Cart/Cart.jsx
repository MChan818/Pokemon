import * as React from 'react';
import { PokeCartContext } from "../PokeCartContext/PokeCartContext";
import { useContext} from "react";

import './Cart.css'


export const Cart = (pokemon) =>{
    const {RemoveFromCart,TakeFromCart,AddFromCart,PokeCart} = useContext(PokeCartContext);

    const capitalize = (s) => { //Mayuscula en la primera letra
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    React.useEffect(()=>{
        console.log(PokeCart)
    },[PokeCart])
    
    return(
        <>
            <div className="cart-list-container">
                <div className='cart-list1'>
                    <p className="cart-list-txt">{capitalize(pokemon.pokemon.name)}</p>
                    <button className="btn btn-primary remove-btn" onClick={() => RemoveFromCart(pokemon.pokemon)}>Remove</button>
                </div>

                <div className='cart-list2'>
                    <div className='cart-counter-container'>
                        <button className="btn btn-primary cart-counter-btn" onClick={() => TakeFromCart(pokemon.pokemon)} style={{width:'40px'}}>
                            <h6>-</h6>
                        </button>
                        <p className="cart-list-txt">{pokemon.pokemon.quantity}</p>
                        <button className="btn btn-primary cart-counter-btn" onClick={() => AddFromCart(pokemon.pokemon)} style={{width:'40px'}}>
                            <h6>+</h6>
                        </button>
                    </div>
                </div>

                <div className='cart-list3'>
                    <p className="cart-list-txt">${pokemon.pokemon.price}</p>
                </div>
            </div>
        </>
    );
}