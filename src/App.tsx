import { useState } from 'react';
import LayerSelector from './components/LayerSelector';
import LayerInput from './components/LayerInput';
import BurgerDisplay from './components/BurgerDisplay';
import './App.css';

function App() {
  const [layerCount, setLayerCount] = useState<number>(0);
  const [ingredients, setIngredients] = useState<string[]>([]);

  const handleSetLayerCount = (count: number) => {
    setLayerCount(count);
    setIngredients(Array(count).fill(''));
  };

  const handleSetIngredient = (index: number, value: string) => {
    const updated = [...ingredients];
    updated[index] = value;
    setIngredients(updated);
  };

  return (
    <div className="container" style={{ padding: 20 }}>
      <h1>Burger Builder</h1>
      {layerCount === 0 ? (
        <LayerSelector onSelect={handleSetLayerCount} />
      ) : ingredients.includes('') ? (
        <LayerInput ingredients={ingredients} onSetIngredient={handleSetIngredient} />
      ) : (
        <BurgerDisplay layers={ingredients} />
      )}
    </div>
  );
}

export default App;

