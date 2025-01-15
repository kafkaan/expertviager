import { ViagerSeulInterface } from "../data/viager-homme";
import { ViagerCoupleInterface } from "../data/viager-couple";
function trouverDonneesParAgePersonneSeul(
  age: number,
  tableau: ViagerSeulInterface[]
): ViagerSeulInterface | undefined {
  return tableau.find((donnees) => donnees.age === age);
}

function TrouverDonnesParAgeCouple(
  ageMonsieur: number,
  ageMadame: number,
  tableau: ViagerCoupleInterface[]
): ViagerCoupleInterface | undefined {
  return tableau.find(
    (donnees) =>
      donnees["age-monsieur"] === ageMonsieur &&
      donnees["age-madame"] === ageMadame
  );
}

export { trouverDonneesParAgePersonneSeul, TrouverDonnesParAgeCouple };
