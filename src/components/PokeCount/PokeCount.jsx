import { useContext, useState} from "react";
import { NavLink } from "react-router-dom";
import { PokeCartContext } from "../PokeCartContext/PokeCartContext";
import "./PokeCount.css"

export const PokeDetail = ({pokemon}) =>{
    const {PokeCart, AddToCart} = useContext(PokeCartContext);
    const [contador, setContador] = useState(0);

    const btn_plus = () =>{
        setContador(prev => prev + 1);
    }
    const btn_min = () =>{
        if(contador === 0){
            alert("No se puede pedir menos de 0 Pokemon")
        }
        else
            setContador(prev => prev - 1);
    }
    const btn_clear = () =>{
        setContador(0);
    }
    
    console.log(contador);
    return(
        <section className="shopping-container">
            <div className="counter-container">
                <button onClick={btn_min} className="btn btn-primary counter-btn">
                    -
                </button>
                <p className="counter-display">{contador}</p>
                <button onClick={btn_plus} className="btn btn-primary counter-btn">
                    +
                </button>
            </div>
            <button className="btn btn-primary my_btn" onClick={() => {AddToCart(pokemon, contador);btn_clear()}}>
                Agregar Pokemon
            </button>

            {/* Verifico si tengo pokemones en el carrito, si tengo muestro el boton */}
            {PokeCart.length>0 ? (
                <NavLink to={'/cart'}>
                    <button className="btn btn-primary my_btn">
                        Terminar mi compra
                    </button>
                </NavLink>
            ) : (
                <></>
            )}
        </section>
    );
}