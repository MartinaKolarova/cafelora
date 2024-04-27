import { render } from "@czechitas/render";
import "../global.css";
import "./index.css";
import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { Menu } from "../components/Menu";
import { Gallery } from "../components/Gallery";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

document.querySelector("#root").innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>
);

const menuSwitch = () => {
  const navElement = document.querySelector(".rollout-nav");
  navElement.classList.toggle("nav-closed");
};

document.querySelector(".nav-btn").addEventListener("click", menuSwitch);

document.querySelector(".rollout-nav").addEventListener("click", menuSwitch);
