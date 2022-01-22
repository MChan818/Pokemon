import { createContext, useState } from "react";

export const PokeCartContext = createContext();

export const PokeCartProvider = ({children}) => {
    const [PokeCart, SetPokeCart] = useState([]);


    const GetFromCart = ({pokemon}) =>{
        return PokeCart.find(obj => obj === pokemon.name);
    }

    const IsInCart = ({pokemon}) =>{
        return pokemon === undefined ? undefined : GetFromCart(pokemon) !== undefined;
    }

    const AddToCart = (pokemon) =>{
        if(IsInCart(pokemon && pokemon.name)){
            console.log("No se agregara el pokemon")
            return;
        }
        else
            SetPokeCart([...PokeCart, pokemon.name]);
    }
    return(
        <PokeCartContext.Provider value={{PokeCart, SetPokeCart, GetFromCart, AddToCart}}>
            {children}
        </PokeCartContext.Provider>
    )

}
