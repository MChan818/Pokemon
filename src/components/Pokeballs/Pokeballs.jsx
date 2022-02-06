import { Card } from "react-bootstrap";
import { PokeDetail } from "../PokeCount/PokeCount";
export const Pokeball = ({pokeball}) =>{
    return(
        <>
            {pokeball.name ? (
                <>
                    <Card style={{margin:"1vh"}}>
                        <Card.Body>
                            <Card.Title>{pokeball.name}</Card.Title>
                            <Card.Img src={pokeball.img} style={{width:"30vh", height:"30vh"}}/>
                            <Card.Text>Generacion: {pokeball.gen}</Card.Text>
                            <Card.Text>Ratio: {pokeball.ratio}</Card.Text>
                            <Card.Text>Precio: ${pokeball.price}</Card.Text>
                        </Card.Body>
                        <PokeDetail pokemon={pokeball}></PokeDetail>
                    </Card>
                </>
            ) : (
                <div className="menu-item-container">
                    <h5 className="center">No se pudo encontrar información de {pokeball.name}</h5>
                </div>
            )}
        </>
    )
}