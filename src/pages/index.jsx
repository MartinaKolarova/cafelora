import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Menu } from '../components/Menu';
import { Gallery } from '../components/Gallery';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

const response = await fetch('http://localhost:4000/api/drinks');
const drinksData = await response.json();
const drinksList = drinksData.data;

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header showMenu={true} />
    <main>
      <Banner />
      <Menu drinks={drinksList} />

      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>,
);

const menuSwitch = () => {
  const navElement = document.querySelector('.rollout-nav');
  navElement.classList.toggle('nav-closed');
};

const showId = async (event) => {
  event.preventDefault();
  const actualId = event.target.dataset.id;

  const responseId = await fetch(
    `http://localhost:4000/api/drinks/${actualId}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([
        {
          op: 'replace',
          path: '/ordered',
          value: !drinksList[actualId].ordered,
        },
      ]),
    },
  );
  const responseBody = await responseId.json();
  window.location.reload();
};

document.querySelector('.nav-btn').addEventListener('click', menuSwitch);

document.querySelector('.rollout-nav').addEventListener('click', menuSwitch);

document.querySelectorAll('.drink__controls').forEach((button) => {
  button.addEventListener('submit', showId);
});
