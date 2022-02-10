import {NavBar} from './components/NavBar/Navbar.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PokeContainer } from './components/Container/PokemonContainer';
import PokeInfoContainer from './components/PokeInfoContainer/PokeInfoContainer';
import { PokeCartProvider } from './components/PokeCartContext/PokeCartContext.jsx';
import { Home } from './components/Home/Home.jsx';
import { TrainerContainer } from './components/TrainerContainer/TrainerContainer.jsx';
import { CartContainer } from './components/Cart/CartContainer.jsx';
import { PokeballsContainer } from './components/Pokeballs/PokeballsContainer.jsx';
import { PokeballProvider } from './components/Pokeballs/PokeballContext.jsx';
import Checkout from './components/Checkout/Checkout.jsx';
import Complete from './components/Complete/Complete.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  return (
    <PokeCartProvider>
    <BrowserRouter>
      {/* NavBar se mantiene en todas las paginas */}
        <NavBar/>
        <Switch>
          <Route exact path = "/">
            <Home/>
          </Route>

          <Route exact path = "/trainers">
            <TrainerContainer/>
          </Route>

          <Route exact path = "/pokedex">
            <PokeContainer/>
          </Route>

          <Route exact path = "/pokedex/:PokeID" component={PokeInfoContainer}>
            <PokeInfoContainer/>
          </Route>

          <Route exact path = "/complete">
            <Complete/>
          </Route>

          <PokeballProvider>
            <Route exact path = "/cart">
              <h3 className="cart-title">Carrito de compras</h3>
              <CartContainer/>
            </Route>
            <Route exact path = "/pokeballs">
              <PokeballsContainer/>
            </Route>
          <Route exact path = "/checkout">
            <Checkout/>
          </Route>
          </PokeballProvider>
          
        </Switch>
      </BrowserRouter>
    </PokeCartProvider>
  );
}

export default App;
