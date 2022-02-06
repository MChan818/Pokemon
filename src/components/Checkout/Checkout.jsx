import {Button, Form } from "react-bootstrap";
import { useState } from "react";
import './Checkout.css'

export const Checkout = () =>{
    const [mail, setMail] = useState("");
    const [mail2, setMail2] = useState("");
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [num, setNum] = useState("");

    const auth = () =>{
        if(mail !== mail2){
            alert('Los emails no coinciden');
        }
        if((name || lastname || num || mail || mail2) === ""){
            alert('Debe rellenar todos los campos')
        }
        else
            console.log('Success')
    }

    return(
        <section className="form-container">
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre:</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su Nombre" onChange={e=>setName(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su Apellido" onChange={e=>setLastname(e.target.value)} className="test"/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control type="tel" placeholder="Ingrese su Numero de telefono" onChange={e=>setNum(e.target.value)}/>
                    <Form.Text className="text-muted">
                    En caso de celular, omitir el número de área
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese su Email" onChange={e=>setMail(e.target.value)}/>
                    <Form.Text className="text-muted">
                    Nunca revelaremos su direccion a terceros
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Reingrese su Email" onChange={e=>setMail2(e.target.value)}/>
                    <Form.Text className="text-muted">
                    Ingrese de nuevo su dirección de correo
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit" onClick={auth}>
                    Terminar mi compra
                </Button>
            </Form>
        </section>
    );
}