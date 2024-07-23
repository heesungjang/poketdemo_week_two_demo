import './App.css';
import { useState } from 'react';
import TypesBar from './components/TypesBar';
import PokemonsContainer from './components/PokemonsContainer';

function App() {
  const [type, setType] = useState('ice');

  return (
    <div className='wrapper'>
      <h1 className='logo-pokemon'>포켓몬 도감</h1>

      <TypesBar toggleType={setType} />
      <PokemonsContainer type={type} />
    </div>
  );
}

export default App;
