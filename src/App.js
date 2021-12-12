import './App.css';
import {NavBar} from './components/NavBar/Navbar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer entrada='Cliente'/>
    </div>
  );
}

export default App;
