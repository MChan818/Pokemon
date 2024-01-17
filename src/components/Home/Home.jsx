import React from "react";
import './Home.css'
import logo from './img/logo.png'


export const Home = () => {

    return (
        <>
        <section className="fondo">
            <h1 className="home-title">Bienvenido a la Pokedex</h1>
            <img src={logo} alt="logo" className="logo"/>
        </section>
        </>
    );
}