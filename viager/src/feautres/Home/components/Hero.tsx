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
            Simulateur de vente en viager
          </span>{" "}
          en viager
        </h1>
        <p className="hero__text text">
        Obtenez une estimation précise de votre viager. 
        Reconnu par les professionnels, vous obtiendrez un résultat immédiat 
        et fiable pour réaliser vos projets.

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
