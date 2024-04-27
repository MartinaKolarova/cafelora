import './Header.css';

/*Na stránce použijte komponenty Header a Footer. Komponentu Header bude potřeba upravit, protože na stránce s objednávkou se hlavička zobrazuje bez hlavního menu. Do komponenty Header tedy přidejte prop s názvem showMenu s výchozí hodnotou true. Pokud bude showMenu mít hodnotu false, komponenta Header zobrazí hlavičku pouze s odkazem na hlavní stránku, jak je navrženo v zadání projektu v souboru order.jsx.*/

export const Header = ({ showMenu = true }) => {
  if (showMenu) {
    return (
      <header classID="header">
        <div className="header__content container">
          <div className="site-logo"></div>

          <div className="navigation">
            <button className="nav-btn"></button>
            <nav className="rollout-nav nav-closed">
              <a href="#home">domů</a>
              <a href="#menu">menu</a>
              <a href="#gallery">galerie</a>
              <a href="#contact">kontakt</a>
            </nav>
          </div>
        </div>
      </header>
    );
  } else {
    return (
      <header classID="header">
        <div className="header__content container">
          <div className="site-logo"></div>

          <div className="navigation">
            <button className="nav-btn"></button>
            <nav className="rollout-nav nav-closed">
              <a href="#home">domů</a>
            </nav>
          </div>
        </div>
      </header>
    );
  }
};
