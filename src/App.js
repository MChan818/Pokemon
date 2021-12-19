import './App.css';
import {NavBar} from './components/NavBar/Navbar.js';
import { ItemList } from './components/ItemList/ItemList';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <br></br>
        <ItemList/>
    </div>
  );
}

export default App;
