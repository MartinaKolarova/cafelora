import './Drink.css';
import { Layer } from './Layer';

export const Drink = ({ name, image, layers }) => {
  const layerElements = layers.map((layer) => (
    <Layer key={layer.label} color={layer.color} label={layer.label} />
  ));
  return (
    <div className="drink">
      <div className="drink__product">
        <div className="drink__cup">
          <img src={'http://localhost:4000' + image} />
        </div>
        <div className="drink__info">
          <h3>{name}</h3>
          {layerElements}
        </div>
      </div>
      <form className="drink__controls">
        <input type="hidden" className="order-id" value="0" />
        <button className="order-btn">Objednat</button>
      </form>
    </div>
  );
};
