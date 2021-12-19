import React from "react";
import './Item.css'

export function Item({nombre, precio, descripcion,img}){
    return(
        <div class="menu-item-container">
            <img src={img} alt="generico" class="menu-img"/>
                <h5 class="center">{nombre}</h5>
                <p class="center">{descripcion}</p>
                <h5 class="center">${precio}</h5>
        </div>
    )
}

export default Item;