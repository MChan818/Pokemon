import { createContext, useState } from "react";

export const PokeCartContext = createContext();

export const PokeCartProvider = ({children}) => {
    const [PokeCart, SetPokeCart] = useState([]);


    const AddToCart = (pokemon) =>{
        if(PokeCart.find(name => name.name === pokemon.name) !== undefined){//Verifico si existe el pokemon en el carrito
            let index = PokeCart.findIndex(name => name.name === pokemon.name) //Ubico el index del pokemon
            PokeCart[index].quantity += 1; //Agrego 1 a la cantidad en vez de agregar un duplicado
            console.log(PokeCart) //Chequeo
            return;
        }
        else
            SetPokeCart([...PokeCart, {name:pokemon.name, quantity:1}]);
    }
    return(
        <PokeCartContext.Provider value={{PokeCart, SetPokeCart, AddToCart}}>
            {children}
        </PokeCartContext.Provider>
    )

}
