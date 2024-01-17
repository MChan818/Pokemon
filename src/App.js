import {NavBar} from './components/NavBar/Navbar';
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
import CustomizedSnackbars from './components/Snackbars/Snackbars';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  return (
    <PokeCartProvider>
    <BrowserRouter>
      {/* NavBar se mantiene en todas las paginas */}
        <NavBar/>
        <CustomizedSnackbars/>
        <Switch>
          <Route exact path = "/ReactJS">
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

          <Route exact path = "/complete/:OrderID">
            <Complete/>
          </Route>

          <PokeballProvider>
            <Route exact path = "/cart">
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
