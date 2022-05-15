import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import PokemonsList from './components/PokemonsList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        
        <PokemonsList/>

      </BrowserRouter>

    </div>
  );
}

export default App;
