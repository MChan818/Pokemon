import {NavBar} from './components/NavBar/Navbar.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PokeContainer } from './components/Container/PokemonContainer';
import PokeInfoContainer from './components/PokeInfoContainer/PokeInfoContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { PokeCartProvider } from './components/PokeCartContext/PokeCartContext.jsx';
import { Home } from './components/Home/Home.jsx';

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
            <Route exact path = "/pokedex">
              <PokeContainer/>
            </Route>
            <Route exact path = "/pokedex/:PokeID" component={PokeInfoContainer}>
              <PokeInfoContainer/>
            </Route>
          </Switch>
      </BrowserRouter>
    </PokeCartProvider>
  );
}

export default App;
