import React from "react";
import NavigationBar from "../../layouts/Navigation";
import { Link } from "react-router-dom";

const ViagerExplanation: React.FC = () => {
  return (
    <>
      <NavigationBar />
      <div className="viager-explanation">
        {/* Video Section */}
        <section className="video-section">
          <h2 className="title-lg">Vidéo explicative : Le viager en 30 secondes</h2>
          <div className="video-container">
            <video controls className="video-player">
              <source src="/Le viager comment ça marche _ .mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la vidéo.
            </video>
            <p className="video-caption">Découvrez le fonctionnement du viager et ses avantages en quelques minutes.</p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="explanation-card">
          <h1 className="title-lg">Le viager : comment ça marche ?</h1>
          <p className="text">
            Le viager est un système de vente immobilière où un propriétaire vend son bien en échange
            d'un bouquet, une somme initiale perçue chez le notaire et d'une rente viagère, versée
            généralement jusqu'à son décès. L'acheteur, appelé "débirentier", paie ainsi un prix étalé dans
            le temps, tandis que le vendeur, le "crédirentier", peut continuer à occuper le bien s'il le
            souhaite (viager occupé) et percevoir des rentes à vie.
          </p>
          <Link to="/" className="btn btn--brown">Accéder au simulateur</Link>
        </section>

        

        {/* Avantages Section */}
        <section className="explanation-card">
          <h2 className="title-lg">Les avantages pour vendeurs et acheteurs</h2>
          
          <div className="advantages-container">
            <div className="advantages-column">
              <h3 className="title-md">Pour le vendeur (souvent retraité) :</h3>
              <ul className="text">
                <li>Revenus complémentaires : Bouquet et rente à vie pour améliorer son quotidien</li>
                <li>Maintien dans le logement : Possibilité de rester chez soi avec le viager occupé</li>
                <li>Protection du conjoint : Sécurisation des revenus en cas de décès</li>
                <li>Anticiper la succession : Donations équilibrées aux enfants</li>
                <li>Réaliser des projets : Financer des travaux, constituer de l'épargne, voyager...</li>
                <li>Fiscalité avantageuse : Exonération de plus-value sur le bouquet en résidence principale</li>
              </ul>
            </div>
            
            <div className="advantages-column">
              <h3 className="title-md">Pour l'acheteur :</h3>
              <ul className="text">
                <li>Prix avantageux : Bien vendu en dessous de sa valeur libre</li>
                <li>Crédit vendeur : Acquisition progressive sans crédit bancaire ni intérêt</li>
                <li>Investissement long terme : Constitution de patrimoine à son rythme</li>
                <li>Plus-value : Perspective de gain significatif à long terme</li>
                <li>Solidarité : Investissement responsable et vertueux</li>
                <li>Fiscalité avantageuse : Aucune fiscalité si ce n'est la taxe foncière</li>
              </ul>
            </div>
          </div>
          
          <Link to="/contact" className="btn btn--brown">Demandez conseil à un expert</Link>
        </section>

        {/* Types de Viager Section */}
        <section className="explanation-card">
          <h2 className="title-lg">Les 3 principales formes de viager</h2>
          
          <div className="viager-type">
            <h3 className="title-md">Viager occupé</h3>
            <p className="text">
            Le viager occupé permet au vendeur de continuer à vivre dans son logement tout en percevant une rente viagère de l'acheteur.
            L'acheteur ne pourra occuper le bien ou le louer qu'au décès du vendeur ou à la libération anticipée si le(s) vendeur(s) part en maison de retraite.
            En contrepartie, l'acheteur bénéficie d'un prix réduit lié à la décote d'occupation à vie.
            </p>
            
            <div className="comparison-table">
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th className="title-sm">Viager Occupé</th>
                    <th className="title-sm">Vente Classique</th>
                  </tr>
                </thead>
                <tbody className="text">
                  <tr >
                    <td>Occupation du bien</td>
                    <td>Le vendeur reste dans le logement jusqu'à son décès</td>
                    <td>Le vendeur libère le bien dès la vente</td>
                  </tr>
                  <tr>
                    <td>Prix du bien</td>
                    <td>Prix réduit, décote liée à l'espérance de vie</td>
                    <td>Prix du marché immobilier, sans décote</td>
                  </tr>
                  <tr>
                    <td>Paiement</td>
                    <td>Bouquet (somme initiale) + rente à vie</td>
                    <td>Paiement en une fois</td>
                  </tr>
                  <tr>
                    <td>Disponibilité du bien</td>
                    <td>L'acheteur ne peut occuper le bien qu'au décès du vendeur ou libération
                    volontaire</td>
                    <td>L'acheteur obtient le bien immédiatement</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="viager-type">
            <h3 className="title-md">Viager libre</h3>
            <p className="text">
              Le viager libre est un type de viager où le vendeur cède immédiatement la jouissance du bien
              à l'acheteur tout en percevant une rente viagère. Contrairement au viager occupé, l'acheteur
              peut occuper ou louer le logement dès la signature de l'acte de vente, sans décote liée au droit d'occupation.
            </p>
          </div>
          
          <div className="viager-type">
            <h3 className="title-md">Vente en nue-propriété</h3>
            <p className="text">
              La vente en nue-propriété consiste à vendre uniquement la propriété d'un bien, tandis que
              l'usufruit (droit d'usage et de jouissance) reste au vendeur. L'acheteur devient propriétaire, mais ne peut 
              occuper ou utiliser le bien qu'au décès du vendeur. C'est une vente en viager avec un bouquet uniquement.
            </p>
          </div>
          
          <div className="example-calculation">
            <h3 className="title-md">Exemple chiffré</h3>
            <p className="text">Pour un bien d'une valeur de 200 000 € avec un vendeur homme de 72 ans ayant une espérance de vie estimée à 16 ans :</p>
            
            <div className="calculation-comparison">
              <div className="calculation-box">
                <h4 className="title-sm">Viager Occupé</h4>
                <ul className="text">
                  <li>Décote : 47% (droit d'occupation + espérance de vie)</li>
                  <li>Prix du bien : 106 000 €</li>
                  <li>Bouquet : 20 000 €</li>
                  <li>Rente mensuelle : 448 €/mois</li>
                </ul>
              </div>
              
              <div className="calculation-box">
                <h4 className="title-sm">Viager Libre</h4>
                <ul className="text">
                  <li>Décote : 0% (pas de droit d'occupation)</li>
                  <li>Prix du bien : 200 000 €</li>
                  <li>Bouquet : 20 000 €</li>
                  <li>Rente mensuelle : 938 €/mois</li>
                </ul>
              </div>
            </div>
          </div>
          
          <Link to="/" className="btn btn--brown">Faire une simulation personnalisée</Link>
        </section>

        {/* Précautions Section */}
        <section className="explanation-card">
          <h2 className="title-lg">Précautions à prendre</h2>
          
          <div className="precautions-container">
            <div className="precautions-column">
              <h3 className="title-md">Pour le vendeur</h3>
              <ul className="text">
                <li>Évaluer le bien avec un professionnel</li>
                <li>Prévoir une clause d'indexation pour la rente</li>
                <li>Garantir la rente par acte notarié avec hypothèque légale</li>
                <li>Protéger le conjoint avec une clause de réversibilité</li>
                <li>Prévoir une clause de libération en cas de départ en maison de retraite</li>
                <li>Comprendre la fiscalité applicable</li>
                <li>Vérifier la solvabilité de l'acheteur</li>
              </ul>
            </div>
            
            <div className="precautions-column">
              <h3 className="title-md">Pour l'acheteur</h3>
              <ul className="text">
                <li>Évaluer la valeur libre du bien</li>
                <li>Vérifier l'état du bien et d'éventuels travaux</li>
                <li>Négocier la répartition des travaux (articles 606 et 605 du Code civil)</li>
                <li>Négocier les termes du contrat (indexation, taxes...)</li>
                <li>Comprendre les implications fiscales</li>
              </ul>
            </div>
          </div>
          
          <Link to="/contact" className="btn btn--brown">Obtenir des conseils personnalisés</Link>
        </section>

        {/* Mythes vs Réalités Section */}
        <section className="explanation-card">
          <h2 className="title-lg">Mythes vs Réalités</h2>
          
          <div className="myth-box">
            <h3 className="title-md">"Le viager est un pari sur la mort"</h3>
            <p className="text">
              Acheter en viager est un investissement à la fois rentable et solidaire, qui vous permet de
              préparer votre avenir tout en aidant des retraités à mieux vivre. Les tables d'espérance de vie
              offrent une prévision fiable à quelques années près. Si le vendeur décède plus tôt que prévu, 
              vous réalisez un gain supplémentaire ; s'il vit plus longtemps, la décote initiale due au droit 
              d'occupation vous assure de rester gagnant.
            </p>
          </div>
          
          <Link to="/simulateur" className="btn btn--brown">Accéder au calculateur viager</Link>
        </section>
      </div>
    </>
  );
};

export default ViagerExplanation;