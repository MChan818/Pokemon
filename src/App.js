import './App.css';
import { PokeContainer } from './components/Container/PokemonContainer';
import {NavBar} from './components/NavBar/Navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
// NOTA: "SWITCH" deja de existir en la V6.0 de react-router-dom, y es reemplazado por "Routes" (no route)
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PokeInfoContainer from './components/PokeInfoContainer/PokeInfoContainer';

function App() {
  return (
    // <div className="App">
    //     <NavBar/>
    //     <br></br>
    //     <PokeContainer/>
    // </div>
    <BrowserRouter>
    {/* NavBar se mantiene en todas las paginas */}
      <NavBar/>
      <Switch>
        <Route exact path = "/inicio">
          <h1>Inicio</h1>
        </Route>
        <Route exact path = "/pokedex">
          <PokeContainer/>
        </Route>
        <Route exact path = "/pokedex/:PokeID" component={PokeInfoContainer}>
          <PokeInfoContainer/>
        </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
