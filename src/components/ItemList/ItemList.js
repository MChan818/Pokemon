import React, {useEffect, useState} from "react";
import imgejemplo from "./img/food1.jpg"
import Item from "../Item/Item";

const Menu = [
    {nombre:"Bife", precio:100, descripcion:"Ejemplo", img:{imgejemplo}},
    {nombre:"Asado", precio:200, descripcion:"Ejemplo", img:{imgejemplo}},
    {nombre:"Vacío", precio:300, descripcion:"Ejemplo", img:{imgejemplo}},
    {nombre:"Chinchulin", precio:400, descripcion:"Ejemplo", img:{imgejemplo}},
];

export function ItemList(){
    const [itemlist, setItemList] = useState([]);
    useEffect(() =>{
        const promiseItem = new Promise((resolve, reject)=>{
            resolve(Menu);
        });
        promiseItem.then((resolve) =>setItemList(resolve));
    }, []);

    return(
        <>
        {itemlist.map((Items) => {
            console.log(Items.img);
            return(
                <Item nombre = {Items.nombre} precio={Items.precio} descripcion={Items.descripcion} img = {Items.img}/>
                );
            })}
        </>
    );
};