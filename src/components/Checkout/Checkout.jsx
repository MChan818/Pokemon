import {Button, Form } from "react-bootstrap";
import { useState, useContext } from "react";
import { PokeCartContext } from "../PokeCartContext/PokeCartContext";
import { getFirestore } from "../../firebase";
import { NavLink , withRouter} from "react-router-dom";
import './Checkout.css'

const Checkout = () =>{
    const {PokeCart, TotalPrice, EmptyCart, setOrderID} = useContext(PokeCartContext);
    const [mail, setMail] = useState("");
    const [mail2, setMail2] = useState("");
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [num, setNum] = useState("");
    
    const handleSubmit = (event) => {
        event.preventDefault();
        this.props.history.push('/complete');
      }
    
    const auth = () =>{
        if(mail !== mail2){
            alert('Los emails no coinciden');
            return false;
        }
        if((name && lastname && num && mail && mail2) === ""){
            alert('Debe rellenar todos los campos')
            return false;
        }
        else
        console.log("Success")
        return true;
    }
    
    const buy = () =>{
        if(auth() === false){
            return;
        }
        else{
            //Como se guarda la orden en la db
            let orden = {
                buyer: {Name:name, LastName:lastname, Mail: mail, phone: num},
                items: {PokeCart},
                total: {TotalPrice},
            };
            const db = getFirestore();
            const orders = db.collection("orders");
            //Guardamos la id para mostrarlo en Complete.jsx (como numero de comprobante)
            orders.add(orden).then(({id}) =>{
                setOrderID(id);
            }).catch((error)=>{
                console.log("Error", error);
            }).finally(()=>{
                console.log("La compra se realizo con exito")
            });
            EmptyCart();
        }
    }
    
    
    return(
        <section className="form-container">
            <Form onSubmit={handleSubmit}>
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
            <NavLink to={'/complete'}>
                <Button variant="primary" type="submit" onClick={() => {buy()}}>
                    Terminar mi compra
                </Button>
            </NavLink>
            </Form>
        </section>
    );
}

export default withRouter(Checkout);