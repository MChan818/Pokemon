import { createContext, useState } from "react";

export const PokeCartContext = createContext();

export const PokeCartProvider = ({children}) => {
    const [PokeCart, SetPokeCart] = useState([]);
    const [TotalPrice, setTotal] = useState(0);
    const [OrderID, setOrderID] = useState("");
    //State para las alertas (Snackbar)
    const [open, setOpen] = useState(false);
    //State para los msg de las alertas
    const [snackbarMsg, setSnackbarMsg] = useState("")
    //State para el estado de las alertas
    const [snackbarState, setSnackbarState] = useState("warning")
    
    const handleSnackbar = () =>{
        setOpen(true)
    }
    const closeSnackbar = () =>{
        setOpen(false)
    }
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
            setTotal(prev => prev + cantidad*pokemon.price);//Seteo el precio con los cambios

            setSnackbarState("success")
            setSnackbarMsg("Se agrego a tu carrito!")
            return handleSnackbar();
        }
        else{
            SetPokeCart([...PokeCart, {name:pokemon.name, quantity:cantidad, price:(pokemon.price*cantidad)}]);
            setTotal(prev=>prev+(pokemon.price*cantidad));

            setSnackbarState("success")
            setSnackbarMsg("Se agrego a tu carrito!")
            return handleSnackbar();
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
    const TakeFromCart = (pokemon) =>{
        if(pokemon.quantity === 1){
            return RemoveFromCart(pokemon)
        }
        if(PokeCart.find(name => name.name === pokemon.name) !== undefined){//Verifico si existe el pokemon en el carrito
            let index = PokeCart.findIndex(name => name.name === pokemon.name) //Ubico el index del pokemon
            let newArr = [...PokeCart]; //Creo un array auxiliar y copio los datos de PokeCart
            if(newArr[index].quantity === 1){
                RemoveFromCart(pokemon)
            }
            newArr[index].quantity -= 1; //Resto 1 a la cantidad en vez de agregar un duplicado
            newArr[index].price -= (pokemon.price/(pokemon.quantity+1)); //Actualizamos el precio
            SetPokeCart(newArr);//Seteo PokeCart con los cambios
            setTotal(prev => prev - (pokemon.price/(pokemon.quantity)));//Seteo el precio con los cambios
            return;
        } else{
            return;
        }
    }
    const AddFromCart = (pokemon) =>{
        if(PokeCart.find(name => name.name === pokemon.name) !== undefined){//Verifico si existe el pokemon en el carrito
            let index = PokeCart.findIndex(name => name.name === pokemon.name) //Ubico el index del pokemon
            let newArr = [...PokeCart]; //Creo un array auxiliar y copio los datos de PokeCart
            newArr[index].quantity += 1; //Resto 1 a la cantidad en vez de agregar un duplicado
            newArr[index].price += (pokemon.price/(pokemon.quantity-1)); //Actualizamos el precio
            SetPokeCart(newArr);//Seteo PokeCart con los cambios
            setTotal(prev => prev + (pokemon.price/(pokemon.quantity)));//Seteo el precio con los cambios
            return;
        } else{
            return;
        }
    }

    return(
        <PokeCartContext.Provider value={{
            PokeCart,TotalPrice, SetPokeCart,
                AddToCart, RemoveFromCart, EmptyCart,TakeFromCart,AddFromCart,
                OrderID, setOrderID, 
                closeSnackbar,handleSnackbar,setSnackbarMsg,setSnackbarState,open,snackbarMsg,snackbarState
            }}>
            {children}
        </PokeCartContext.Provider>
    )

}
