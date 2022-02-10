import {useContext, useState} from "react";
import { NavLink } from "react-router-dom";
import { PokeCartContext } from "../PokeCartContext/PokeCartContext";
import Lottie from "react-lottie";
import Loader from '../Animations/loading.json'

import './Complete.css'

const Complete = () =>{
    const {OrderID} = useContext(PokeCartContext);
    const [Loading, setLoading] = useState(true);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Loader,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    setTimeout(() => {
        setLoading(false)
    }, 3000);

    return(
        <>
        {Loading === false ? (
            <section className="complete-container">
            <div className="complete-msg">
                <h2>Gracias por su compra!</h2>
                <p className="complete-txt">El número de orden es: <strong>{OrderID}</strong></p>
                <NavLink to={'/pokeballs'}>
                    <button className="btn btn-primary">Volver a la tienda</button>
                </NavLink>
            </div>
        </section>
            
        ):(
            <div className="loading-container">
            <Lottie 
              options={defaultOptions}
              height={400}
              width={400}
            />
          </div>
        )}
        </>
    );
}

export default Complete;