import React from "react";
import './Item.css'


export function Pokemon({pokemon}){
    return(
        <div class="menu-item-container">
                <h5 class="center">{pokemon.name}</h5>
                <h5 class="center">{pokemon.height}</h5>
        </div>
    )
    
}

export default Pokemon;