import { useState } from "react";
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";

export default function QuestionResponse() {
  const [visibleAnswer, setVisibleAnswer] = useState<number | null>(null);

  const questions = [
    {
      text: "Qu’est-ce que le viager ?",
      answer:
        "La vente en viager est la première forme de retraite avant la création des caisses de retraites que nous connaissons, crées en 1945. Cette forme de vente immobilière est inscrite de le code civil depuis 1804 et fut son apparition en 876 avec Charles II, petit-fils de Charlemagne, qui l’autorise dans son royaume",
    },
    {
      text: "Quel est la différence en un viager occupé et un viager libre ?",
      answer:
        "Viager occupé : Le viager occupé permet de vendre une propriété tout en continuant à y résider. Le montant du bouquet, soit la somme perçue chez le notaire le jour de la vente, ainsi que les rentes mensuelles à vie, sont déterminés en fonction de la valeur du bien et de la durée d'occupation liée à l'espérance de vie des vendeurs (occupants).\n\nViager libre : Le viager libre permet de vendre une propriété tout en cédant immédiatement l'usage à l'acheteur. Le montant du bouquet, soit la somme perçue chez le notaire le jour de la vente, ainsi que les rentes mensuelles à vie, sont déterminés en fonction de la valeur du bien et de l’espérance de vie des vendeurs.",
    },
    {
      text: "Puis-je percevoir uniquement du capital (un bouquet) ?",
      answer:
        "La répartition d'un bouquet et d'une rente n'est pas obligatoire. Vous pouvez choisir uniquement un capital (le bouquet) ou une rente mensuelle à vie sans bouquet, selon vos projets personnels. Vous avez donc la liberté de recevoir uniquement un bouquet ou seulement une rente mensuelle à vie. Si vous choisissez l’option d’un bouquet plus une rente, ces deux éléments fonctionnant comme des vases communicants : un bouquet plus important réduit le montant de la rente mensuelle, tandis qu'une rente plus élevée diminue la valeur du bouquet.",
    },
    {
      text: "Que se passe t-il si l’acheteur ne paie plus la rente ?",
      answer:
        "Si l'acheteur ne paie plus la rente, il perd ses droits sur le bien après un délai de deux mois. La vente en viager est officialisée par un acte authentique signé chez le notaire. Lors de cette signature, une hypothèque légale est inscrite au bénéfice du vendeur, accompagnée d'une clause résolutoire. Cela permet au vendeur de récupérer le bien sans avoir à restituer le bouquet ni les rentes déjà versées. Bien que ce cas soit rare, cette clause figure dans l'acte pour garantir le paiement de la rente.",
    },
    {
      text: "Est-ce que mon/ma conjoint(e) peut bénéficier de la rente viagère après mon décès ?",
      answer:
        "Même si votre conjoint(e) n'est pas propriétaire, vous pouvez ajouter une clause de réversibilité de la rente dans l'acte de vente. Cela permet à votre conjoint(e) de continuer à percevoir la rente à vie après votre décès. Cette option équivaut à un viager sur deux têtes.",
    },
    {
      text: "À qui incombent les travaux d’entretien et la taxe foncière ?",
      answer:
        "Les grosses réparations (gros murs, voûtes, poutres, toitures, digues, et murs de soutènement ou de clôture en entier) sont à la charge du propriétaire (acquéreur), sauf si elles résultent d'un défaut d'entretien depuis la vente en viager, auquel cas l'usufruitier est également responsable. Les autres réparations d'entretien courant reviennent à l’occupant. C'est l'acheteur, en tant que nouveau propriétaire, qui paie la taxe foncière. Le notaire enregistre la transaction auprès des services fiscaux, qui adresse ensuite la taxe foncière à l'acheteur. Il est également courant que l’occupant rembourse la taxe d'enlèvement des ordures ménagères.",
    },
  ];

  return (
    <section className="question-response margin-top-sm">
      <div className="question-response__left">
        <h2 className="question-response__title title-xl">
          Questions fréquentes
        </h2>
      </div>
      <div className="question-response__right">
        {questions.map((question, index) => (
          <div key={index} className="question-response__right__item card">
            <div className="question-response__right__item__question">
              <p className="question-response__right__item__text title-sm">
                {question.text}
              </p>
              <div className="circle-cird-link">
                {visibleAnswer === index ? (
                  <FaArrowUp
                    className="question-response__right__item__icon"
                    onClick={() => setVisibleAnswer(null)}
                  />
                ) : (
                  <FaArrowDown
                    className="question-response__right__item__icon"
                    onClick={() => setVisibleAnswer(index)}
                  />
                )}
              </div>
            </div>
            {visibleAnswer === index && (
              <div className="question-response__right__item__response">
                {question.answer.split("\n").map((line, i) => (
                  <p key={i} className="text">
                    {line}
                    <br />
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
