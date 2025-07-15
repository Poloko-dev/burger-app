import TopBread from '../Layers/TopBread';
import BaseBread from '../Layers/BaseBread';
import Tomato from '../Layers/Tomato';
import Meat from '../Layers/Meat';
import Lettuce from '../Layers/Lettuce';

interface Props {
  layers: string[];
}

function BurgerDisplay({ layers }: Props) {
  const renderLayer = (type: string, index: number) => {
    switch (type) {
      case 'Tomato':
        return <Tomato key={index} />;
      case 'Meat':
        return <Meat key={index} />;
      case 'Lettuce':
        return <Lettuce key={index} />;
      default:
        return null;
    }
  };

  return (
    <div style={{ marginTop: 20, textAlign: 'center' }}>
      <TopBread />
      {layers.map((layer, i) => renderLayer(layer, i))}
      <BaseBread />
    </div>
  );
}

export default BurgerDisplay;
