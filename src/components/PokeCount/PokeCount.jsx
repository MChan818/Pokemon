import { useContext, useState} from "react";
import { PokeCartContext } from "../PokeCartContext/PokeCartContext";
import "./PokeCount.css"

export const PokeDetail = ({pokemon}) =>{
    const {AddToCart} = useContext(PokeCartContext);
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

    return(
        <section className="shopping-container">
            <div className="item-counter-container">
                <div className="item-counter">
                    <button onClick={btn_min} className="btn btn-primary counter-btn">
                        <h4>-</h4>
                    </button>
                    <p className="counter-display">{contador}</p>
                    <button onClick={btn_plus} className="btn btn-primary counter-btn">
                        <h4>+</h4>
                    </button>
                </div>
            </div>

            <div className="addToCart-container">
                <button className="btn btn-primary addToCart_btn" onClick={() => {AddToCart(pokemon, contador);btn_clear()}}>
                    Agregar al carrito
                </button>
            </div>
        </section>
    );
}