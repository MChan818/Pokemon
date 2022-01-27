import { createContext, useState } from "react";

export const PokeCartContext = createContext();

export const PokeCartProvider = ({children}) => {
    const [PokeCart, SetPokeCart] = useState([]);


    const AddToCart = (pokemon, cantidad) =>{
        if(cantidad === 0){
            alert("No se puede agregar 0 de este Pokemon");
            return;
        }
        if(PokeCart.find(name => name.name === pokemon.name) !== undefined){//Verifico si existe el pokemon en el carrito
            let index = PokeCart.findIndex(name => name.name === pokemon.name) //Ubico el index del pokemon
            PokeCart[index].quantity += cantidad; //Agrego 1 a la cantidad en vez de agregar un duplicado
            console.log(PokeCart) //Chequeo
            return;
        }
        else
            SetPokeCart([...PokeCart, {name:pokemon.name, quantity:cantidad}]);
    }
    return(
        <PokeCartContext.Provider value={{PokeCart, SetPokeCart, AddToCart}}>
            {children}
        </PokeCartContext.Provider>
    )

}
