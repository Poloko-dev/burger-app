import { useState } from 'react';

interface Props {
  onSelect: (count: number) => void;
}

function LayerSelector({ onSelect }: Props) {
  const [count, setCount] = useState<number>(1);

  return (
    <div>
      <label>Choose number of layers: </label>
      <input
        type="number"
        min={1}
        max={10}
        value={count}
        onChange={(e) => setCount(parseInt(e.target.value))}
      />
      <button onClick={() => onSelect(count)}>Start</button>
    </div>
  );
}

export default LayerSelector;
