import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header></Header>
    <main>
      <Banner></Banner>

      <section className="gallery">
        <div className="container">
          <div className="gallery__content">
            <h2>Nově otevřeno!</h2>
            <div className="gallery__cols">
              <p className="gallery__col">
                Máte chuť na trochu nostalgie? Rádi vás u nás uvidíme. Atmosféra
                podniku Vás pohltí a přivede do uvolněné nálady.
              </p>
              <p className="gallery__col">
                V přízemí Cafe Lóra se nachází nově vystavěný bar a restaurant,
                kde Vám nabízíme koktejly z nově navržené řady "Cocktails &amp;
                Desires". V suterénu najdete music club se světelnou disco
                podlahou, barem, VIP loungem, a hrají tam ti nejlepší DJ's!
              </p>
              <p className="gallery__col">
                Jsme podnik pro všechny generace. Součástí kavárny je dětský
                koutek, který zabaví vaše ratolesti abyste si mohli v klidu
                vychutnat šálek Vaší oblíbené kávy.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h2>Kde nás najdete</h2>
          <div className="contact">
            <div className="contact__address">
              Na Mýtě 240 <br />
              514 03 Byšky nad Jizerou <br />
              Tel: +420 775 334 427
            </div>
            <table className="contact__hours">
              <tr>
                <td>Pondělí</td>
                <td>ZAVŘENO</td>
              </tr>
              <tr>
                <td>Úterý</td>
                <td>11:00 - 22:00</td>
              </tr>
              <tr>
                <td>Středa</td>
                <td>11:00 - 22:00</td>
              </tr>
              <tr>
                <td>Čtvrtek</td>
                <td>11:00 - 22:00</td>
              </tr>
              <tr>
                <td>Sobota</td>
                <td>9:00 - 02:00</td>
              </tr>
              <tr>
                <td>Neděle</td>
                <td>9:00 - 02:00</td>
              </tr>
            </table>
            <img className="contact__map" src="./img/map.png" />
          </div>
        </div>
      </section>
    </main>

    <footer>
      <div className="container">
        <div className="footer__content">
          Café Lóra je tréningový projekt v rámci Czechitas kurzu JavaScript 2
        </div>
      </div>
    </footer>
  </div>,
);
