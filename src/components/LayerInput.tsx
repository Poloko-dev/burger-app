import '../App.css';
interface Props {
  ingredients: string[];
  onSetIngredient: (index: number, value: string) => void;
}

const options = ['Tomato', 'Meat', 'Lettuce'];

function LayerInput({ ingredients, onSetIngredient }: Props) {
  return (
    <div className="ingredient-selector">
      <h2>Select Ingredients</h2>
      {ingredients.map((_, index) => (
        <div key={index}>
          <label>Layer {index + 1}: </label>
          <select onChange={(e) => onSetIngredient(index, e.target.value)}>
            <option value="">-- Select --</option>
            {options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
}

export default LayerInput;
