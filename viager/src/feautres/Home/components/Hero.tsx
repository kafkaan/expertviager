import image from "../../../../public/hero.jpg";
export default function Hero() {

  const handleClickScrollToSimulateur = () => 
  {
    const simulateurSection = document.getElementById("simulateur")

    if(simulateurSection)
    {
      simulateurSection.scrollIntoView({behavior : "smooth"});
    }


  }

  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title title-xl">
          <span className="hero__title--highlight title-xl--highlight">
            Calculatrice de vente
          </span>{" "}
          en viager
        </h1>
        <p className="hero__text text">
        Évaluez le bouquet et de la rente viagère que vous pourriez
        obtenir. Conforme aux pratiques des notaires de France, notre calculatrice vous aide à
        construire votre projet de vente en viager.

        </p>
        <div className="hero__buttons">
          <a onClick={handleClickScrollToSimulateur} className="btn btn--brown">
            Commencer
          </a>
        </div>
      </div>

      <div className="hero__image">
        <img src={image} alt="Viager Simulateur" className="hero__image__img" />
      </div>
    </section>
  );
}
