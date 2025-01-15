import React from "react";
import Image1 from "../../../public/viagerlink1.png";
import Image2 from "../../../public/viagerlink2.png";
import Image3 from "../../../public/Logo_Sud_Radio_2014.svg.png";
import Home_one from "../../../public/home-guide.jpg";
import Home_two from "../../../public/home-guide2.jpeg";
import NavigationBar from "../../layouts/Navigation";
import MoneyImage from "../../../public/Gold coins and banknotes 3d cartoon style icon.jpg";
import RocketImage from "../../../public/rocket.png";
import CalendarImage from "../../../public/calendar.jpg";
import PlusImage from "../../../public/plus-removebg-preview.png";
const ViagerGuide: React.FC = () => {
  return (
    <>
      <NavigationBar />
      <div className="viager-guide">
        {/* Première section avec les images */}
        <section className="viager-images">
          <h2 className="title-lg">Guide du viager</h2>
          <p className="viager-images__description title-sm">
            Les images ci-dessous sont des liens vers des vidéos explicatives :
          </p>{" "}
          {/* New Instruction Text */}
          <div className="images-section margin-top-md">
            <div className="image-item">
              <a
                href="https://www.youtube.com/watch?v=h6GCENqpR-w"
                target="_blank"
                rel="noopener noreferrer"
                title="Cliquez pour regarder la première vidéo sur le viager"
              >
                <img src={Image1} alt="Vue à la télé" className="image" />
              </a>
            </div>
            <div className="image-item">
              <a
                href="https://www.youtube.com/watch?v=mi5NxQHSe3w&t=77s"
                target="_blank"
                rel="noopener noreferrer"
                title="Cliquez pour regarder la deuxième vidéo sur le viager"
              >
                <img
                  src={Image2}
                  alt="Le viager occupé en image"
                  className="image"
                />
              </a>
            </div>
            <div className="image-item">
              <a
                href="https://www.youtube.com/watch?v=JBMjzaDDIwk&embeds_referring_euri=https%3A%2F%2Fwww.google.com%2F"
                target="_blank"
                rel="noopener noreferrer"
                title="Cliquez pour regarder la troisième vidéo sur le viager"
              >
                <img src={Image3} alt="Logo de Sud Radio" className="image" />
              </a>
            </div>
          </div>
        </section>

        {/* Deuxième section avec les définitions */}
        <section className="viager-definitions margin-top-md">
          <h2 className="title-lg">Définitions des termes propres au viager</h2>
          <ul className="margin-top-md">
            <li className="text">
              <strong>CREDIRENTIER</strong>: terme qui désigne le vendeur,
              personne qui perçoit la rente
            </li>
            <li className="text">
              <strong>DÉBIRENTIER</strong>: terme qui désigne l'acquéreur,
              personne débitrice de la rente
            </li>
            <li className="text">
              <strong>BOUQUET</strong>: capital versé par l'acquéreur au jour de
              la signature de l'acte authentique
            </li>
            <li className="text">
              <strong>RENTE</strong>: somme versée mensuellement au vendeur et
              qui est déterminée selon le bouquet versé et l'espérance de vie du
              ou des vendeurs
            </li>
            <li className="text">
              <strong>RÉVERSIBILITÉ</strong>: lorsque la rente porte sur
              plusieurs têtes, elle peut être réversible partiellement ou en
              totalité sur la tête du crédirentier survivant
            </li>
            <li className="text">
              <strong>INDEXATION</strong>: tous les ans, à date d'anniversaire
              de l'acte de vente, la rente est revalorisée selon un indice INSEE
              représentatif de l’inflation
            </li>
            <li className="text">
              <strong>DROIT D'USAGE ET D'HABITATION</strong>: droit que se
              réserve le ou les vendeurs à leur profit uniquement. Ils peuvent
              habiter le bien mais en aucun cas le mettre en location
            </li>
            <li className="text">
              <strong>USUFRUIT</strong>: droit d'utiliser un bien et d'en
              percevoir les revenus
            </li>
            <li className="text">
              <strong>LIBERATION ANTICIPÉE</strong>: dans le cadre d'une vente
              en viager avec réserve du droit d'usage et d'habitation, la rente
              est revalorisée si le vendeur souhaite libérer le bien par
              anticipation.
            </li>
          </ul>
        </section>

        {/* Troisième section avec les avantages */}
        <section className="viager-definitions margin-top-md">
          <h2 className="title-lg">Le Viager occupé en image</h2>
          <div className="viager-details margin-top-md">
            <div className="card guide-card">
              <img src={Home_one} alt="Home one" className="home-image" />
              <p className="title-sm">Je vends les murs de mon logement</p>
            </div>
            <div>
              <img src={PlusImage} alt="Plus" className="home-image" />
            </div>
            <div className="card guide-card">
              <img src={Home_two} alt="Home two" className="home-image" />
              <p className="title-sm">Je conserve mon occupation</p>
            </div>
          </div>
          <div className="viager-financials margin-top-md ">
            <div className="viager-financials__item">
              <img
                src={MoneyImage}
                alt="Money"
                className="viager-financials__item__icon"
              />
              <p className="viager-financials__text title-sm">
                Je perçois un bouquet à la signature de la vente
              </p>
            </div>
            <div className="viager-financials__item">
              <img
                src={CalendarImage}
                alt="Calendar"
                className="viager-financials__item__icon"
              />
              <p className="title-sm">Je perçois des rentes mensuelles à vie</p>
            </div>
            <div className="viager-financials__item">
              <img
                src={RocketImage}
                alt="Rocket"
                className="viager-financials__item__icon"
              />
              <p className="title-sm">
                Le bouquet et la rente sont calculés en fonction de mon
                espérance de vie, soit la durée de mon occupation
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ViagerGuide;
