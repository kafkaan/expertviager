import React from "react";
import FranceMap from "../../../public/map-removebg.png";
import NavigationBar from "../../layouts/Navigation";

const ViagerServices: React.FC = () => {
  return (
    <>
      <NavigationBar />
      <div className="viager-services">
        {/* Section Services */}
        <section className="services-section">
          <h2 className="title-xl">Services</h2>
          <p className="services-section__description text">
            Lorsque vous vendez en viager, vous n'avez rien à payer !
          </p>
          <ul className="services-section__list text">
            <li className="text">
              Les honoraires des professionnels sont à la charge des acquéreurs
            </li>
            <li className="text">Les frais de notaire sont aussi à la charge des acquéreurs</li>
          </ul>
        </section>

        {/* Section Carte de France */}
        <section className="main__container">
          <section className="map-section">
            <img src={FranceMap} alt="Carte de France" className="map-section__map" />
          </section>

          {/* Section Lien de Simulation */}
          <section className="simulation-section">
            <p className="simulation-section__text text">
              Recevoir une simulation offerte et sans engagement <br />
              <a href="/contact" className="simulation-section__link">
                Lien formulaire contact
              </a>
            </p>
          </section>
        </section>
      </div>
    </>
  );
};

export default ViagerServices;
