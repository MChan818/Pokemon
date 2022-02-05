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
            let newArr = [...PokeCart]; //Creo un array auxiliar y copio los datos de PokeCart
            newArr[index].quantity += cantidad; //Agrego 1 a la cantidad en vez de agregar un duplicado
            SetPokeCart(newArr);//Seteo PokeCart con los cambios
            return;
        }
        else{
            SetPokeCart([...PokeCart, {name:pokemon.name, quantity:cantidad}]);
        }
        
    }
    const RemoveFromCart = (pokemon) =>{
        const temp = PokeCart.filter(function(e){ //Filtro el array en un auxiliar para sacar el pokemon no deseado
            return e !== pokemon
        })
        SetPokeCart(temp); //Seteo PokeCart con los cambios
    }

    return(
        <PokeCartContext.Provider value={{PokeCart, SetPokeCart, AddToCart, RemoveFromCart}}>
            {children}
        </PokeCartContext.Provider>
    )

}
