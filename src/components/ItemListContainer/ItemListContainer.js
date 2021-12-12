import React from "react";

export function ItemListContainer({entrada}){
    return(
        <div>
            <p>Este es el prop:</p>
            <p>Hola,{entrada}</p>
        </div>
    )
}

export default ItemListContainer;