import React,{useContext} from "react";
import { PokeCartContext } from "../PokeCartContext/PokeCartContext";
import './Cart.css'
import { NavLink } from "react-router-dom";

export const NavCartContainer = () =>{
    const {PokeCart, TotalPrice} = useContext(PokeCartContext);

    React.useEffect(()=>{
        console.log(PokeCart)
    },[PokeCart])

    return(
        <>
        {PokeCart.length === 0 ? (
            <section className="empty-cart-container-nav">
                <div className="nav-empty-cart-txt">
                    <p>Parece que por aquí no hay nada...</p>
                    <p>Agreguemos algo al carrito!</p>
                    <NavLink to={'/pokeballs'}>
                        <button className="btn btn-primary">Volver a la tienda</button>
                    </NavLink>
                </div>
            </section>
        ):(
            <section className="navcart-items-container">
                <ul className="navcart-itemlist-container">

                </ul>
                <th className="navcart-item-container" style={{borderBottom:'2px solid black'}}>
                    <div className="navcart-itemName">
                        <h5>Nombre</h5>
                    </div>
                    <div className="navcart-itemQuantity">
                        <h5>Cantidad</h5>
                    </div>
                    <div className="navcart-itemPrice">
                        <h5>Precio</h5>
                    </div>
                </th>
                {PokeCart ? (
                    <>
                    {PokeCart.map((e,index)=>{
                        return(
                            <li className="navcart-item-container" key={index}>
                                <div className="navcart-itemName">
                                    <h6>{e.name}</h6>
                                </div>
                                <div className="navcart-itemQuantity">
                                    <h6>x{e.quantity}</h6>
                                </div>
                                <div className="navcart-itemPrice">
                                    <h6>${e.price}</h6>
                                </div>
                            </li>
                        )
                    })}
                    </>
                ):(
                    <>
                    </>
                )}
                <div className="total-container">
                    <p className="total-txt">Total: ${TotalPrice}</p>
                </div>
            </section>
        )}
        </>
    );
}