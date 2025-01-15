import one from "../../../../public/one.jpg";
import two from "../../../../public/two.jpg";
import three from "../../../../public/three.jpg";

export default function HowCalculIsDone() {
  return (
    <>
      <section className="how margin-top-sm">
        <h3 className="how__title title-xl">
          Comment le montant de la vente en viager est-il calculé avec L'Expert
          Viager
        </h3>
        <div className="how__content">
          <div className="how__content__item">
            <div className="how__content__item__image">
              <img
                src={one}
                alt="Vente en viager"
                className="how__content__item__image__img"
              />
            </div>
            <div className="how__content__item__content card card--brown margin-top-sm">
              <h4 className="how__content__item__title title-sm">
                Valeur vénale du bien
              </h4>
              <p className="how__content__item__text text">
                La première étape consiste à estimer la valeur vénale de votre
                bien, influencée par plusieurs critères tels que l'emplacement,
                la surface, le nombre de pièces, ou encore l'année de
                construction. Pour une estimation précise, vous pouvez utiliser
                des simulateurs en ligne comme Meilleursagents.com.
              </p>
            </div>
          </div>
          <div className="how__content__item ">
            <div className="how__content__item__image">
              <img
                src={two}
                alt="Vente en viager"
                className="how__content__item__image__img"
              />
            </div>
            <div className="how__content__item__content card card--brown">
              <h4 className="how__content__item__title title-sm">
                Durée d'occupation
              </h4>
              <p className="how__content__item__text text">
                La deuxième étape est d'évaluer votre occupation en fonction des
                tables d'espérance de vie. Par exemple, si votre espérance de
                vie est de 15 ans et que la valeur locative de votre logement est
                de 1 000 € par mois, le coût de votre occupation sera calculé
                ainsi : (1 000 € x 12 mois) x 15 ans = 180 000 € de décote.
              </p>
            </div>
          </div>
          <div className="how__content__item">
            <div className="how__content__item__image">
              <img
                src={three}
                alt="Vente en viager"
                className="how__content__item__image__img"
              />
            </div>
            <div className="how__content__item__content card card--brown">
              <h4 className="how__content__item__title title-sm">Valeur commerciale</h4>
              <p className="how__content__item__text text">
                La troisième étape consiste à établir la valeur commerciale de
                votre bien, qui correspond à la valeur vénale diminuée de la
                valeur de votre occupation. Par exemple, si votre bien est évalué
                à 300.000 €, nous déduisons la valeur de votre occupation pour
                obtenir la valeur commerciale : 300.000 € - 180.000 € = 120.000
                €. Une fois la valeur commerciale déterminée, il ne reste plus
                qu'à fixer le montant du bouquet souhaité, ce qui permettera de
                calculer le montant de la rente mensuelle
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
