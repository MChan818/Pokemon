import { createContext, useState } from "react";

export const PokeCartContext = createContext();

export const PokeCartProvider = ({children}) => {
    const [PokeCart, SetPokeCart] = useState([]);
    const [TotalPrice, setTotal] = useState(0);
    const [OrderID, setOrderID] = useState("");
    
    const AddToCart = (pokemon, cantidad) =>{
        if(cantidad === 0){
            alert("No se puede agregar 0 de este Pokemon");
            return;
        }
        if(PokeCart.find(name => name.name === pokemon.name) !== undefined){//Verifico si existe el pokemon en el carrito
            let index = PokeCart.findIndex(name => name.name === pokemon.name) //Ubico el index del pokemon
            let newArr = [...PokeCart]; //Creo un array auxiliar y copio los datos de PokeCart
            newArr[index].quantity += cantidad; //Agrego "cantidad" a la cantidad en vez de agregar un duplicado
            newArr[index].price += cantidad*pokemon.price; //Actualizamos el precio
            SetPokeCart(newArr);//Seteo PokeCart con los cambios
            setTotal(newArr[index].price);//Seteo el precio con los cambios
            return;
        }
        else{
            SetPokeCart([...PokeCart, {name:pokemon.name, quantity:cantidad, price:(pokemon.price*cantidad)}]);
            setTotal(prev=>prev+(pokemon.price*cantidad));
        }
        
    }
    const RemoveFromCart = (pokemon) =>{
        const temp = PokeCart.filter(function(e){ //Filtro el array en un auxiliar para sacar el pokemon no deseado
            return e !== pokemon
        })
        SetPokeCart(temp); //Seteo PokeCart con los cambios
        setTotal(prev=>prev-(pokemon.price));//Actualizo el precio
    }
    const EmptyCart = () =>{
        SetPokeCart([]);//Vaciamos el carrito
        setTotal(0);//Vaciamos el precio
    }

    return(
        <PokeCartContext.Provider value={{PokeCart,TotalPrice, SetPokeCart, AddToCart, RemoveFromCart, EmptyCart, OrderID, setOrderID}}>
            {children}
        </PokeCartContext.Provider>
    )

}
