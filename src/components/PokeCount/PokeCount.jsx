import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { PokeCartContext } from "../PokeCartContext/PokeCartContext";

export const PokeDetail = ({pokemon}) =>{
    const {PokeCart} = useContext(PokeCartContext);

    return(
        <>
        {PokeCart.length>0 ? (
            <NavLink to={'/cart'}>
                <button className="btn btn-primary my_btn">
                    Terminar mi compra
                </button>
            </NavLink>
        ) : (
            <section>

            </section>
        )}
        </>
    );
}