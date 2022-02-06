import React from "react";
import { Container } from "react-bootstrap";
import PokeballList from "./PokeballsList";
import { useContext } from "react";
import { PokeballContext } from "./PokeballContext";

export const PokeballsContainer = () =>{
    const {pokeballs} = useContext(PokeballContext);
    return(
        <>
        <Container>
            <h2>Pokéballs</h2>
            <p>Todos los datos de esta seccion se levantan utilizando <strong>FIREBASE</strong></p>
        </Container>
        <Container>
            <PokeballList pokeballs = {pokeballs}/>
        </Container>
    </>
    );


}