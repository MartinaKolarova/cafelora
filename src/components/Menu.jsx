import './Menu.css';
import { Drink } from './Drink';

/*Komponentě Menu přidejte prop s názvem drinks, skrz kterou komponentě předáme stažený seznam nápojů. Zobrazte tento seznam uvnitř prvku drinks-list za využití komponenty Drink.
 */

export const Menu = ({ drinks }) => {
  const drinksElement = drinks.map(({ id, name, ordered, layers, image }) => (
    <Drink
      key={id}
      id={id}
      name={name}
      ordered={ordered}
      layers={layers}
      image={image}
    />
  ));

  return (
    <section classID="menu" className="menu">
      <div className="container">
        <h2>Naše nabídka</h2>
        <p className="menu-intro">
          Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
        </p>
        <div className="drinks-list">{drinksElement}</div>
        <div className="order-detail">
          <a href="/order.html">Detail objednávky</a>
        </div>
      </div>
    </section>
  );
};
