import { useEffect, useState } from "react";
import SliderComponent from "../../../components/Slider";
import {
  TrouverDonnesParAgeCouple,
  trouverDonneesParAgePersonneSeul,
} from "../../../utils/FindDataViager";
import { tableauViagerSeulHomme } from "../../../data/viager-homme";
import tableauViagerSeulFemme from "../../../data/viager-femme";
import RadioGroupComponent from "../../../components/RadioComponent";
import { viagerCoupleData } from "../../../data/viager-couple";

export default function Simulateur() {
  //use states form the form
  const [ageMonsieur, setAgeMonsieur] = useState(70); // Homme de 70 ans
  const [ageMadame, setAgeMadame] = useState(70); // Femme de 70 ans
  const [valeurBien, setValeurBien] = useState(0); // Valeur initiale du bien à 0 euros
  const [bouquet, setBouquet] = useState(0); // Bouquet initialisé à 0 euros
  const [rente, setRente] = useState(0);
  const [esperanceVie, setEsperanceVie] = useState(80);
  const [valeurEconomique, setValeurEconomique] = useState(0);
    useState(0);
  const [couple, setCouple] = useState(true); // Mode couple activé par défaut
  const [homme, setHomme] = useState(false); // Désactivé car c'est un couple
  const [femme, setFemme] = useState(false); // Désactivé car c'est un couple
  const [erreur, setErreur] = useState(""); // Nouvelle variable pour gérer les erreurs

  const getNPfromAge = () => {
    if (homme) {
      let donneMonsieur = trouverDonneesParAgePersonneSeul(
        ageMonsieur,
        tableauViagerSeulHomme
      );
      return (
        valeurBien * ((donneMonsieur?.transactionsViageres?.NP || 0) / 100)
      );
    }
    if (femme) {
      let donneMadame = trouverDonneesParAgePersonneSeul(
        ageMadame,
        tableauViagerSeulFemme
      );
      return valeurBien * ((donneMadame?.transactionsViageres?.NP || 0) / 100);
    }
    if (couple) {
      let donnerCouple = TrouverDonnesParAgeCouple(
        ageMonsieur,
        ageMadame,
        viagerCoupleData
      );
      return valeurBien * ((donnerCouple?.transactionsViageres?.NP || 0) / 100);
    }
    return 0; // valeur par défaut
  };

  //on change slider accepts type and value
  const onChangeSlider = (type: string, value: number[]) => {
    switch (type) {
      case "ageMonsieur":
        setAgeMonsieur(value[0]);
        break;
      case "ageMadame":
        setAgeMadame(value[0]);
        break;
      case "valeurBien":
        setValeurBien(value[0]);

        break;
      case "bouquet":
        setBouquet(value[0]);
        break;
    }
  };

  useEffect(() => {
    setErreur(""); // Réinitialiser le message d'erreur à chaque changement

    if (homme && !couple) {
      console.log("homme");

      let donneMonsieur = trouverDonneesParAgePersonneSeul(
        ageMonsieur,
        tableauViagerSeulHomme
      );

      if (!donneMonsieur) {
        setErreur("Modifier l'écart d'âge");
        return;
      }

      if (donneMonsieur) {
        let calcul_one =
          valeurBien * (donneMonsieur.transactionsViageres.NP / 100);
        console.log(calcul_one);
        let calcul_two = calcul_one - bouquet;
        console.log(calcul_two);
        let calcul_three = calcul_two * (donneMonsieur.tauxDeRente / 100);
        console.log(calcul_three);
        setRente(Math.max(0, Math.ceil(calcul_three / 12)));
        setValeurEconomique(
          Math.ceil((valeurBien * donneMonsieur.transactionsViageres.NP) / 100)
        );
        console.log("Hehehe");
        console.log((valeurBien * donneMonsieur.transactionsViageres.NP) / 100);
        setEsperanceVie(Math.ceil(donneMonsieur.espVie));
      }
    }
    if (femme && !couple) {
      console.log("femme");

      let donneMadame = trouverDonneesParAgePersonneSeul(
        ageMadame,
        tableauViagerSeulFemme
      );

      if (!donneMadame) {
        setErreur("Modifier l'écart d'âge");
        return;
      }

      if (donneMadame) {
        console.log(donneMadame);
        let calcul_one =
          valeurBien * (donneMadame.transactionsViageres.NP / 100);
        console.log(calcul_one);
        let calcul_two = calcul_one - bouquet;
        console.log(calcul_two);
        let calcul_three = calcul_two * (donneMadame.tauxDeRente / 100);
        console.log(calcul_three);
        setRente(Math.max(0, Math.ceil(calcul_three / 12)));
        console.log(getNPfromAge());
        console.log(bouquet * 1.01);
        if (getNPfromAge() < bouquet * 1.01) {
          console.log("bouquet trop grand");
          setRente(0);
        }
        setValeurEconomique(
          Math.ceil((valeurBien * donneMadame.transactionsViageres.NP) / 100)
        );
        setEsperanceVie(Math.ceil(donneMadame.espVie));
      }
    }
    if (couple) {
      let donnerCouple = TrouverDonnesParAgeCouple(
        ageMonsieur,
        ageMadame,
        viagerCoupleData
      );
      if (!donnerCouple) {
        setErreur("Modifier l'écart d'âge");
        return;
      }

      if (donnerCouple) {
        console.log(donnerCouple);
        let calcul_one =
          valeurBien * (donnerCouple.transactionsViageres.NP / 100);
        console.log(calcul_one);
        let calcul_two = calcul_one - bouquet;
        console.log(calcul_two);
        let calcul_three = calcul_two * (donnerCouple.tauxDeRente / 100);
        console.log(calcul_three);
        setRente(Math.max(0, Math.ceil(calcul_three / 12)));
        setValeurEconomique(
          Math.ceil((valeurBien * donnerCouple.transactionsViageres.NP) / 100)
        );
        setEsperanceVie(Math.ceil(donnerCouple.espVie));
      }
    }
  }, [valeurBien, ageMonsieur, ageMadame, bouquet, couple, homme, femme]);

  return (
    <section className="simulateur" id="simulateur">
      <div className="simulateur__title title-xl">
        <h2>Calculatrice de vente en viager</h2>
      </div>
      <div className="simulateur__content margin-top-sm">
        <div className="simulateur__card__form card">
          <div className="simulateur__radios">
            {/* ------------------------------------ checkboxes ------------------- */}
            <div className="simulateur__radios__couple-or-not">
              <RadioGroupComponent
                label="Vous vivez en ?"
                options={["Couple", "Seul"]}
                onChange={(value) => {
                  if (value === "Couple") {
                    console.log("couple");
                    setCouple(true);
                  } else {
                    console.log("seul");
                    setCouple(false);
                    setHomme(true);
                  }
                }}
              />
            </div>
            {!couple && (
              <div className="simulateur__radios__man-or-women">
                <RadioGroupComponent
                  label="Vous etes ?"
                  options={["Monsieur", "Madame"]}
                  onChange={(value) => {
                    if (value === "Monsieur") {
                      console.log("homme");
                      setHomme(true);
                      setFemme(false);
                    } else {
                      setFemme(true);
                      setHomme(false);
                    }
                  }}
                />
              </div>
            )}
          </div>
          {/* ------------------------------------ form ------------------- */}

          <form className="simulateur__form margin-top-xs">
            {(homme || couple) && (
              <SliderComponent
                label="Age de Monsieur"
                min={60}
                max={100}
                step={1}
                initialValue={ageMonsieur}
                onChange={(value: number[]) =>
                  onChangeSlider("ageMonsieur", value)
                }
              />
            )}
            {(femme || couple) && (
              <SliderComponent
                label="Age de Madame"
                min={60}
                max={100}
                step={1}
                initialValue={ageMadame}
                onChange={(value: number[]) =>
                  onChangeSlider("ageMadame", value)
                }
              />
            )}
            <SliderComponent
              label="Valeur du bien"
              min={100000}
              max={2000000}
              step={10000}
              initialValue={valeurBien}
              onChange={(value: number[]) =>
                onChangeSlider("valeurBien", value)
              }
            />
            <SliderComponent
              label="Bouquet"
              min={0}
              max={500000}
              step={1000}
              initialValue={0}
              onChange={(value: number[]) => onChangeSlider("bouquet", value)}
            />
          </form>
        </div>
        {/* ------------------------------------ result ------------------- */}
        <div className="simulateur__card__result card card--brown">
          {erreur ? (
            <div className="simulateur__result__error">
              <h3 className="title-lg">{erreur}</h3>
            </div>
          ) : (
            <>
              <div className="simulateur__result">
                <h3 className="title-lg">Votre rente mensuelle sera</h3>
                <h2 className="title-lg title-lg--brown">{rente}€</h2>
              </div>
              <div className="simulateur__result__text margin-top-xs">
                <h3 className="title-sm">Esperance de vie theorique :</h3>
                <p className="text">{esperanceVie} ans</p>
              </div>
              <div className="simulateur__result__text margin-top-xs">
                <h3 className="title-sm">Valeur commerciale du bien :</h3>
                <p className="text">{valeurEconomique}€</p>
              </div>
              <div className="simulateur__result__text margin-top-xs">
                <h3 className="title-sm">Valeur du bien :</h3>
                <p className="text">{valeurBien}€</p>
              </div>
              <div className="simulateur__result__text margin-top-xs">
                <h3 className="title-sm">Bouquet souhaité :</h3>
                <p className="text">{bouquet}€</p>
              </div>
            </>
          )}
          <div className="simulateur__card__result__button">
            <a href="/contact" className="btn btn--brown">
              Plus d'informations
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
