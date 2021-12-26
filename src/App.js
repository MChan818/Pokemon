import './App.css';
import { PokeContainer } from './components/Container/PokemonContainer';
import {NavBar} from './components/NavBar/Navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <br></br>
        <PokeContainer/>
    </div>
  );
}

export default App;
