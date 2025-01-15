export interface UsufruitEconomique {
  NP: number;
  Usuf: number;
}

export interface TransactionsViageres {
  NP: number;
  DtUs: number;
}

export interface ViagerCoupleInterface {
  "age-monsieur": number;
  "age-madame": number;
  espVie: number;
  usufruitEconomique: UsufruitEconomique;
  tauxDeRente: number;
  coefDeCapit: number;
  transactionsViageres: TransactionsViageres;
}

export const viagerCoupleData: ViagerCoupleInterface[] = [
  {
    "age-monsieur": 60,
    "age-madame": 40,
    espVie: 53.3,
    usufruitEconomique: {
      NP: 15.5,
      Usuf: 84.5,
    },
    tauxDeRente: 3.12,
    coefDeCapit: 32.0,
    transactionsViageres: {
      NP: 14,
      DtUs: 86.0,
    },
  },
  {
    "age-monsieur": 60,
    "age-madame": 41,
    espVie: 52.3,
    usufruitEconomique: {
      NP: 16.1,
      Usuf: 83.9,
    },
    tauxDeRente: 3.15,
    coefDeCapit: 31.7,
    transactionsViageres: {
      NP: 14,
      DtUs: 86.0,
    },
  },
  {
    "age-monsieur": 60,
    "age-madame": 42,
    espVie: 51.2,
    usufruitEconomique: {
      NP: 16.7,
      Usuf: 83.3,
    },
    tauxDeRente: 3.19,
    coefDeCapit: 31.3,
    transactionsViageres: {
      NP: 15.0,
      DtUs: 85.0,
    },
  },
  {
    "age-monsieur": 60,
    "age-madame": 43,
    espVie: 50.2,
    usufruitEconomique: {
      NP: 17.3,
      Usuf: 82.7,
    },
    tauxDeRente: 3.23,
    coefDeCapit: 31.0,
    transactionsViageres: {
      NP: 15.6,
      DtUs: 84.4,
    },
  },
  {
    "age-monsieur": 60,
    "age-madame": 44,
    espVie: 49.2,
    usufruitEconomique: {
      NP: 17.9,
      Usuf: 82.1,
    },
    tauxDeRente: 3.26,
    coefDeCapit: 30.6,
    transactionsViageres: {
      NP: 16.1,
      DtUs: 83.9,
    },
  },
  {
    "age-monsieur": 60,
    "age-madame": 45,
    espVie: 48.1,
    usufruitEconomique: {
      NP: 18.6,
      Usuf: 81.4,
    },
    tauxDeRente: 3.31,
    coefDeCapit: 30.2,
    transactionsViageres: {
      NP: 16.8,
      DtUs: 83.2,
    },
  },
  {
    "age-monsieur": 60,
    "age-madame": 46,
    espVie: 47.1,
    usufruitEconomique: {
      NP: 19.3,
      Usuf: 80.7,
    },
    tauxDeRente: 3.35,
    coefDeCapit: 29.9,
    transactionsViageres: {
      NP: 17.4,
      DtUs: 82.6,
    },
  },
  {
    "age-monsieur": 60,
    "age-madame": 47,
    espVie: 46.1,
    usufruitEconomique: {
      NP: 20.0,
      Usuf: 80.0,
    },
    tauxDeRente: 3.39,
    coefDeCapit: 29.5,
    transactionsViageres: {
      NP: 18.0,
      DtUs: 82.0,
    },
  },
  {
    "age-monsieur": 60,
    "age-madame": 48,
    espVie: 45.1,
    usufruitEconomique: {
      NP: 20.7,
      Usuf: 79.3,
    },
    tauxDeRente: 3.43,
    coefDeCapit: 29.1,
    transactionsViageres: {
      NP: 18.6,
      DtUs: 81.4,
    },
  },
  {
    "age-monsieur": 60,
    "age-madame": 49,
    espVie: 44.7,
    usufruitEconomique: {
      NP: 21.4,
      Usuf: 78.6,
    },
    tauxDeRente: 3.48,
    coefDeCapit: 28.8,
    transactionsViageres: {
      NP: 19.3,
      DtUs: 80.7,
    },
  },
  {
    "age-monsieur": 60,
    "age-madame": 50,
    espVie: 44.1,
    usufruitEconomique: {
      NP: 21.4,
      Usuf: 78.6,
    },
    tauxDeRente: 3.52,
    coefDeCapit: 28.4,
    transactionsViageres: {
      NP: 20.0,
      DtUs: 80.0,
    },
  },
  {
    "age-monsieur": 60,
    "age-madame": 51,
    espVie: 42.1,
    usufruitEconomique: {
      NP: 23.0,
      Usuf: 77.0,
    },
    tauxDeRente: 3.57,
    coefDeCapit: 28.0,
    transactionsViageres: {
      NP: 20.7,
      DtUs: 79.3,
    },
  },
  {
    "age-monsieur": 60,
    "age-madame": 52,
    espVie: 41.1,
    usufruitEconomique: {
      NP: 23.8,
      Usuf: 76.2,
    },
    tauxDeRente: 3.62,
    coefDeCapit: 27.6,
    transactionsViageres: {
      NP: 21.4,
      DtUs: 78.6,
    },
  },
  {
    "age-monsieur": 60,
    "age-madame": 53,
    espVie: 40.1,
    usufruitEconomique: {
      NP: 24.6,
      Usuf: 75.4,
    },
    tauxDeRente: 3.68,
    coefDeCapit: 27.2,
    transactionsViageres: {
      NP: 22.2,
      DtUs: 77.8,
    },
  },
  {
    "age-monsieur": 60,
    "age-madame": 54,
    espVie: 39.1,
    usufruitEconomique: {
      NP: 25.5,
      Usuf: 74.5,
    },
    tauxDeRente: 3.74,
    coefDeCapit: 26.8,
    transactionsViageres: {
      NP: 23.0,
      DtUs: 77.0,
    },
  },
  {
    "age-monsieur": 60,
    "age-madame": 55,
    espVie: 38.1,
    usufruitEconomique: {
      NP: 26.4,
      Usuf: 73.6,
    },
    tauxDeRente: 3.8,
    coefDeCapit: 26.4,
    transactionsViageres: {
      NP: 23.8,
      DtUs: 76.2,
    },
  },
  {
    "age-monsieur": 60,
    "age-madame": 56,
    espVie: 37.1,
    usufruitEconomique: {
      NP: 27.4,
      Usuf: 72.6,
    },
    tauxDeRente: 3.86,
    coefDeCapit: 25.9,
    transactionsViageres: {
      NP: 24.6,
      DtUs: 75.4,
    },
  },
  {
    "age-monsieur": 60,
    "age-madame": 57,
    espVie: 36.2,
    usufruitEconomique: {
      NP: 28.2,
      Usuf: 71.8,
    },
    tauxDeRente: 3.92,
    coefDeCapit: 25.5,
    transactionsViageres: {
      NP: 25.4,
      DtUs: 74.6,
    },
  },
  {
    "age-monsieur": 60,
    "age-madame": 58,
    espVie: 35.3,
    usufruitEconomique: {
      NP: 29.1,
      Usuf: 70.9,
    },
    tauxDeRente: 3.98,
    coefDeCapit: 25.1,
    transactionsViageres: {
      NP: 26.2,
      DtUs: 73.8,
    },
  },
  {
    "age-monsieur": 60,
    "age-madame": 60,
    espVie: 33.3,
    usufruitEconomique: {
      NP: 31.2,
      Usuf: 68.8,
    },
    tauxDeRente: 4.13,
    coefDeCapit: 24.2,
    transactionsViageres: {
      NP: 28.1,
      DtUs: 71.9,
    },
  },
  {
    "age-monsieur": 60,
    "age-madame": 61,
    espVie: 32.3,
    usufruitEconomique: {
      NP: 32.4,
      Usuf: 67.6,
    },
    tauxDeRente: 4.21,
    coefDeCapit: 23.7,
    transactionsViageres: {
      NP: 29.1,
      DtUs: 70.9,
    },
  },
  {
    "age-monsieur": 60,
    "age-madame": 62,
    espVie: 31.4,
    usufruitEconomique: {
      NP: 33.4,
      Usuf: 66.6,
    },
    tauxDeRente: 4.29,
    coefDeCapit: 23.3,
    transactionsViageres: {
      NP: 30,
      DtUs: 70,
    },
  },
  {
    "age-monsieur": 60,
    "age-madame": 63,
    espVie: 30.5,
    usufruitEconomique: {
      NP: 34.5,
      Usuf: 65.5,
    },
    tauxDeRente: 4.38,
    coefDeCapit: 22.9,
    transactionsViageres: {
      NP: 31.0,
      DtUs: 69.0,
    },
  },
  {
    "age-monsieur": 60,
    "age-madame": 64,
    espVie: 29.5,
    usufruitEconomique: {
      NP: 35.7,
      Usuf: 64.3,
    },
    tauxDeRente: 4.47,
    coefDeCapit: 22.4,
    transactionsViageres: {
      NP: 32.1,
      DtUs: 67.9,
    },
  },
  {
    "age-monsieur": 60,
    "age-madame": 65,
    espVie: 28.6,
    usufruitEconomique: {
      NP: 36.8,
      Usuf: 63.2,
    },
    tauxDeRente: 4.57,
    coefDeCapit: 21.9,
    transactionsViageres: {
      NP: 33.1,
      DtUs: 66.9,
    },
  },
  {
    "age-monsieur": 60,
    "age-madame": 66,
    espVie: 27.9,
    usufruitEconomique: {
      NP: 37.7,
      Usuf: 62.3,
    },
    tauxDeRente: 4.65,
    coefDeCapit: 21.5,
    transactionsViageres: {
      NP: 34.0,
      DtUs: 66.0,
    },
  },
  {
    "age-monsieur": 60,
    "age-madame": 67,
    espVie: 27.6,
    usufruitEconomique: {
      NP: 38.1,
      Usuf: 61.9,
    },
    tauxDeRente: 4.68,
    coefDeCapit: 21.4,
    transactionsViageres: {
      NP: 34.3,
      DtUs: 65.7,
    },
  },
  {
    "age-monsieur": 60,
    "age-madame": 68,
    espVie: 27.4,
    usufruitEconomique: {
      NP: 38.4,
      Usuf: 61.6,
    },
    tauxDeRente: 4.7,
    coefDeCapit: 21.3,
    transactionsViageres: {
      NP: 34.6,
      DtUs: 65.4,
    },
  },
  {
    "age-monsieur": 60,
    "age-madame": 69,
    espVie: 27.2,
    usufruitEconomique: {
      NP: 38.7,
      Usuf: 61.3,
    },
    tauxDeRente: 4.73,
    coefDeCapit: 21.2,
    transactionsViageres: {
      NP: 34.8,
      DtUs: 65.2,
    },
  },
  {
    "age-monsieur": 60,
    "age-madame": 70,
    espVie: 27.0,
    usufruitEconomique: {
      NP: 38.9,
      Usuf: 61.1,
    },
    tauxDeRente: 4.75,
    coefDeCapit: 21.0,
    transactionsViageres: {
      NP: 35.0,
      DtUs: 65.0,
    },
  },

  //--------------------------------- 61 ans ---------------------------------

  {
    "age-monsieur": 61,
    "age-madame": 41,
    espVie: 52.2,
    usufruitEconomique: {
      NP: 16.1,
      Usuf: 83.9,
    },
    tauxDeRente: 3.16,
    coefDeCapit: 37.7,
    transactionsViageres: {
      NP: 14.5,
      DtUs: 85.5,
    },
  },
  {
    "age-monsieur": 61,
    "age-madame": 42,
    espVie: 51.2,
    usufruitEconomique: {
      NP: 16.7,
      Usuf: 83.3,
    },
    tauxDeRente: 3.19,
    coefDeCapit: 31.3,
    transactionsViageres: {
      NP: 15.0,
      DtUs: 85.0,
    },
  },
  {
    "age-monsieur": 61,
    "age-madame": 43,
    espVie: 50.1,
    usufruitEconomique: {
      NP: 17.4,
      Usuf: 82.6,
    },
    tauxDeRente: 3.23,
    coefDeCapit: 31.0,
    transactionsViageres: {
      NP: 15.6,
      DtUs: 84.4,
    },
  },
  {
    "age-monsieur": 61,
    "age-madame": 44,
    espVie: 49.1,
    usufruitEconomique: {
      NP: 18.0,
      Usuf: 82.0,
    },
    tauxDeRente: 3.27,
    coefDeCapit: 30.6,
    transactionsViageres: {
      NP: 16.2,
      DtUs: 83.8,
    },
  },
  {
    "age-monsieur": 61,
    "age-madame": 45,
    espVie: 48.1,
    usufruitEconomique: {
      NP: 18.6,
      Usuf: 81.4,
    },
    tauxDeRente: 3.31,
    coefDeCapit: 30.2,
    transactionsViageres: {
      NP: 16.8,
      DtUs: 83.2,
    },
  },
  {
    "age-monsieur": 61,
    "age-madame": 46,
    espVie: 47.0,
    usufruitEconomique: {
      NP: 19.4,
      Usuf: 80.6,
    },
    tauxDeRente: 3.35,
    coefDeCapit: 29.8,
    transactionsViageres: {
      NP: 17.4,
      DtUs: 82.6,
    },
  },
  {
    "age-monsieur": 61,
    "age-madame": 47,
    espVie: 46.0,
    usufruitEconomique: {
      NP: 20.0,
      Usuf: 80.0,
    },
    tauxDeRente: 3.39,
    coefDeCapit: 29.5,
    transactionsViageres: {
      NP: 18.0,
      DtUs: 82.0,
    },
  },
  {
    "age-monsieur": 61,
    "age-madame": 48,
    espVie: 45.0,
    usufruitEconomique: {
      NP: 20.8,
      Usuf: 79.2,
    },
    tauxDeRente: 3.44,
    coefDeCapit: 29.1,
    transactionsViageres: {
      NP: 18.7,
      DtUs: 81.3,
    },
  },
  {
    "age-monsieur": 61,
    "age-madame": 49,
    espVie: 44.0,
    usufruitEconomique: {
      NP: 21.5,
      Usuf: 78.5,
    },
    tauxDeRente: 3.48,
    coefDeCapit: 28.7,
    transactionsViageres: {
      NP: 19.3,
      DtUs: 80.7,
    },
  },
  {
    "age-monsieur": 61,
    "age-madame": 50,
    espVie: 43.0,
    usufruitEconomique: {
      NP: 22.3,
      Usuf: 77.7,
    },
    tauxDeRente: 3.53,
    coefDeCapit: 28.3,
    transactionsViageres: {
      NP: 20.0,
      DtUs: 80.0,
    },
  },
  {
    "age-monsieur": 61,
    "age-madame": 51,
    espVie: 42.0,
    usufruitEconomique: {
      NP: 23.1,
      Usuf: 76.9,
    },
    tauxDeRente: 3.58,
    coefDeCapit: 28.0,
    transactionsViageres: {
      NP: 20.7,
      DtUs: 79.3,
    },
  },
  {
    "age-monsieur": 61,
    "age-madame": 52,
    espVie: 41.0,
    usufruitEconomique: {
      NP: 23.9,
      Usuf: 76.1,
    },
    tauxDeRente: 3.63,
    coefDeCapit: 27.6,
    transactionsViageres: {
      NP: 21.5,
      DtUs: 78.5,
    },
  },
  {
    "age-monsieur": 61,
    "age-madame": 53,
    espVie: 40.1,
    usufruitEconomique: {
      NP: 24.6,
      Usuf: 75.4,
    },
    tauxDeRente: 3.68,
    coefDeCapit: 27.2,
    transactionsViageres: {
      NP: 22.2,
      DtUs: 77.8,
    },
  },
  {
    "age-monsieur": 61,
    "age-madame": 54,
    espVie: 39.0,
    usufruitEconomique: {
      NP: 25.6,
      Usuf: 74.4,
    },
    tauxDeRente: 3.74,
    coefDeCapit: 26.7,
    transactionsViageres: {
      NP: 23.0,
      DtUs: 77.0,
    },
  },
  {
    "age-monsieur": 61,
    "age-madame": 55,
    espVie: 38.1,
    usufruitEconomique: {
      NP: 26.4,
      Usuf: 73.6,
    },
    tauxDeRente: 3.8,
    coefDeCapit: 26.4,
    transactionsViageres: {
      NP: 23.8,
      DtUs: 76.2,
    },
  },
  {
    "age-monsieur": 61,
    "age-madame": 56,
    espVie: 37.7,
    usufruitEconomique: {
      NP: 27.4,
      Usuf: 72.6,
    },
    tauxDeRente: 3.86,
    coefDeCapit: 25.9,
    transactionsViageres: {
      NP: 24.6,
      DtUs: 75.4,
    },
  },
  {
    "age-monsieur": 61,
    "age-madame": 57,
    espVie: 36.1,
    usufruitEconomique: {
      NP: 28.3,
      Usuf: 71.7,
    },
    tauxDeRente: 3.92,
    coefDeCapit: 25.5,
    transactionsViageres: {
      NP: 25.5,
      DtUs: 74.5,
    },
  },
  {
    "age-monsieur": 61,
    "age-madame": 58,
    espVie: 35.2,
    usufruitEconomique: {
      NP: 29.2,
      Usuf: 70.8,
    },
    tauxDeRente: 3.99,
    coefDeCapit: 25.1,
    transactionsViageres: {
      NP: 26.3,
      DtUs: 73.7,
    },
  },
  {
    "age-monsieur": 61,
    "age-madame": 59,
    espVie: 34.2,
    usufruitEconomique: {
      NP: 30.3,
      Usuf: 69.7,
    },
    tauxDeRente: 4.06,
    coefDeCapit: 24.6,
    transactionsViageres: {
      NP: 27.2,
      DtUs: 72.8,
    },
  },
  {
    "age-monsieur": 61,
    "age-madame": 60,
    espVie: 33.2,
    usufruitEconomique: {
      NP: 31.3,
      Usuf: 68.7,
    },
    tauxDeRente: 4.14,
    coefDeCapit: 24.2,
    transactionsViageres: {
      NP: 28.2,
      DtUs: 71.8,
    },
  },
  {
    "age-monsieur": 61,
    "age-madame": 61,
    espVie: 32.3,
    usufruitEconomique: {
      NP: 32.4,
      Usuf: 67.6,
    },
    tauxDeRente: 4.21,
    coefDeCapit: 23.7,
    transactionsViageres: {
      NP: 29.1,
      DtUs: 70.9,
    },
  },
  {
    "age-monsieur": 61,
    "age-madame": 62,
    espVie: 31.3,
    usufruitEconomique: {
      NP: 33.5,
      Usuf: 65.5,
    },
    tauxDeRente: 4.3,
    coefDeCapit: 23.3,
    transactionsViageres: {
      NP: 30.2,
      DtUs: 69.8,
    },
  },
  {
    "age-monsieur": 61,
    "age-madame": 63,
    espVie: 30.4,
    usufruitEconomique: {
      NP: 34.6,
      Usuf: 65.4,
    },
    tauxDeRente: 4.38,
    coefDeCapit: 22.8,
    transactionsViageres: {
      NP: 31.1,
      DtUs: 68.9,
    },
  },
  {
    "age-monsieur": 61,
    "age-madame": 64,
    espVie: 29.5,
    usufruitEconomique: {
      NP: 35.7,
      Usuf: 65.4,
    },
    tauxDeRente: 4.47,
    coefDeCapit: 22.4,
    transactionsViageres: {
      NP: 33.2,
      DtUs: 66.8,
    },
  },
  {
    "age-monsieur": 61,
    "age-madame": 65,
    espVie: 28.5,
    usufruitEconomique: {
      NP: 36.9,
      Usuf: 63.1,
    },
    tauxDeRente: 4.58,
    coefDeCapit: 21.8,
    transactionsViageres: {
      NP: 33.2,
      DtUs: 66.8,
    },
  },
  {
    "age-monsieur": 61,
    "age-madame": 66,
    espVie: 27.6,
    usufruitEconomique: {
      NP: 38.1,
      Usuf: 61.9,
    },
    tauxDeRente: 4.68,
    coefDeCapit: 21.4,
    transactionsViageres: {
      NP: 34.3,
      DtUs: 65.7,
    },
  },
  {
    "age-monsieur": 61,
    "age-madame": 67,
    espVie: 26.9,
    usufruitEconomique: {
      NP: 39.1,
      Usuf: 60.9,
    },
    tauxDeRente: 4.76,
    coefDeCapit: 21.0,
    transactionsViageres: {
      NP: 35.2,
      DtUs: 64.8,
    },
  },
  {
    "age-monsieur": 61,
    "age-madame": 68,
    espVie: 26.6,
    usufruitEconomique: {
      NP: 39.5,
      Usuf: 60.5,
    },
    tauxDeRente: 4.8,
    coefDeCapit: 20.8,
    transactionsViageres: {
      NP: 35.5,
      DtUs: 64.5,
    },
  },
  {
    "age-monsieur": 61,
    "age-madame": 69,
    espVie: 26.5,
    usufruitEconomique: {
      NP: 39.6,
      Usuf: 60.4,
    },
    tauxDeRente: 4.81,
    coefDeCapit: 20.8,
    transactionsViageres: {
      NP: 35.7,
      DtUs: 64.3,
    },
  },
  {
    "age-monsieur": 61,
    "age-madame": 70,
    espVie: 26.4,
    usufruitEconomique: {
      NP: 39.8,
      Usuf: 60.2,
    },
    tauxDeRente: 4.83,
    coefDeCapit: 20.7,
    transactionsViageres: {
      NP: 35.8,
      DtUs: 64.2,
    },
  },
  {
    "age-monsieur": 61,
    "age-madame": 71,
    espVie: 26.3,
    usufruitEconomique: {
      NP: 39.9,
      Usuf: 60.1,
    },
    tauxDeRente: 4.84,
    coefDeCapit: 20.7,
    transactionsViageres: {
      NP: 35.9,
      DtUs: 64.1,
    },
  },

  //--------------------------------- 62 ans ---------------------------------

  {
    "age-monsieur": 62,
    "age-madame": 42,
    espVie: 51.1,
    usufruitEconomique: {
      NP: 16.8,
      Usuf: 83.2,
    },
    tauxDeRente: 3.2,
    coefDeCapit: 31.3,
    transactionsViageres: {
      NP: 15.1,
      DtUs: 84.9,
    },
  },
  {
    "age-monsieur": 62,
    "age-madame": 43,
    espVie: 50.1,
    usufruitEconomique: {
      NP: 17.4,
      Usuf: 82.6,
    },
    tauxDeRente: 3.23,
    coefDeCapit: 31.0,
    transactionsViageres: {
      NP: 15.6,
      DtUs: 84.4,
    },
  },
  {
    "age-monsieur": 62,
    "age-madame": 44,
    espVie: 49.0,
    usufruitEconomique: {
      NP: 18.1,
      Usuf: 81.9,
    },
    tauxDeRente: 3.27,
    coefDeCapit: 30.6,
    transactionsViageres: {
      NP: 16.2,
      DtUs: 83.8,
    },
  },
  {
    "age-monsieur": 62,
    "age-madame": 45,
    espVie: 48.0,
    usufruitEconomique: {
      NP: 18.7,
      Usuf: 81.3,
    },
    tauxDeRente: 3.31,
    coefDeCapit: 30.2,
    transactionsViageres: {
      NP: 16.8,
      DtUs: 83.2,
    },
  },
  {
    "age-monsieur": 62,
    "age-madame": 46,
    espVie: 47.0,
    usufruitEconomique: {
      NP: 19.4,
      Usuf: 80.6,
    },
    tauxDeRente: 3.35,
    coefDeCapit: 29.8,
    transactionsViageres: {
      NP: 17.4,
      DtUs: 82.6,
    },
  },
  {
    "age-monsieur": 62,
    "age-madame": 47,
    espVie: 46.0,
    usufruitEconomique: {
      NP: 20.0,
      Usuf: 80.0,
    },
    tauxDeRente: 3.39,
    coefDeCapit: 29.5,
    transactionsViageres: {
      NP: 18.0,
      DtUs: 82.0,
    },
  },
  {
    "age-monsieur": 62,
    "age-madame": 48,
    espVie: 44.9,
    usufruitEconomique: {
      NP: 20.8,
      Usuf: 79.2,
    },
    tauxDeRente: 3.44,
    coefDeCapit: 29.1,
    transactionsViageres: {
      NP: 18.7,
      DtUs: 81.3,
    },
  },
  {
    "age-monsieur": 62,
    "age-madame": 49,
    espVie: 44.0,
    usufruitEconomique: {
      NP: 21.5,
      Usuf: 78.5,
    },
    tauxDeRente: 3.48,
    coefDeCapit: 28.7,
    transactionsViageres: {
      NP: 19.3,
      DtUs: 80.7,
    },
  },
  {
    "age-monsieur": 62,
    "age-madame": 50,
    espVie: 42.9,
    usufruitEconomique: {
      NP: 22.3,
      Usuf: 77.7,
    },
    tauxDeRente: 3.53,
    coefDeCapit: 28.3,
    transactionsViageres: {
      NP: 20.1,
      DtUs: 79.9,
    },
  },
  {
    "age-monsieur": 62,
    "age-madame": 51,
    espVie: 41.9,
    usufruitEconomique: {
      NP: 23.1,
      Usuf: 76.9,
    },
    tauxDeRente: 3.58,
    coefDeCapit: 27.9,
    transactionsViageres: {
      NP: 20.8,
      DtUs: 79.2,
    },
  },
  {
    "age-monsieur": 62,
    "age-madame": 52,
    espVie: 41.0,
    usufruitEconomique: {
      NP: 23.9,
      Usuf: 76.1,
    },
    tauxDeRente: 3.63,
    coefDeCapit: 27.6,
    transactionsViageres: {
      NP: 21.5,
      DtUs: 78.5,
    },
  },
  {
    "age-monsieur": 62,
    "age-madame": 53,
    espVie: 40.0,
    usufruitEconomique: {
      NP: 24.7,
      Usuf: 75.3,
    },
    tauxDeRente: 3.68,
    coefDeCapit: 27.7,
    transactionsViageres: {
      NP: 22.2,
      DtUs: 77.8,
    },
  },
  {
    "age-monsieur": 62,
    "age-madame": 54,
    espVie: 39.0,
    usufruitEconomique: {
      NP: 25.6,
      Usuf: 74.4,
    },
    tauxDeRente: 3.74,
    coefDeCapit: 26.7,
    transactionsViageres: {
      NP: 23.9,
      DtUs: 76.1,
    },
  },
  {
    "age-monsieur": 62,
    "age-madame": 55,
    espVie: 38.0,
    usufruitEconomique: {
      NP: 26.5,
      Usuf: 73.5,
    },
    tauxDeRente: 3.8,
    coefDeCapit: 26.3,
    transactionsViageres: {
      NP: 23.9,
      DtUs: 76.1,
    },
  },
  {
    "age-monsieur": 62,
    "age-madame": 56,
    espVie: 37.0,
    usufruitEconomique: {
      NP: 27.5,
      Usuf: 72.5,
    },
    tauxDeRente: 3.86,
    coefDeCapit: 25.9,
    transactionsViageres: {
      NP: 24.7,
      DtUs: 75.3,
    },
  },
  {
    "age-monsieur": 62,
    "age-madame": 57,
    espVie: 36.0,
    usufruitEconomique: {
      NP: 28.4,
      Usuf: 71.6,
    },
    tauxDeRente: 3.93,
    coefDeCapit: 25.4,
    transactionsViageres: {
      NP: 25.6,
      DtUs: 74.4,
    },
  },
  {
    "age-monsieur": 62,
    "age-madame": 58,
    espVie: 35.2,
    usufruitEconomique: {
      NP: 29.2,
      Usuf: 70.8,
    },
    tauxDeRente: 3.99,
    coefDeCapit: 25.1,
    transactionsViageres: {
      NP: 26.3,
      DtUs: 73.7,
    },
  },
  {
    "age-monsieur": 62,
    "age-madame": 59,
    espVie: 34.2,
    usufruitEconomique: {
      NP: 30.3,
      Usuf: 69.7,
    },
    tauxDeRente: 4.06,
    coefDeCapit: 24.6,
    transactionsViageres: {
      NP: 27.2,
      DtUs: 72.8,
    },
  },
  {
    "age-monsieur": 62,
    "age-madame": 60,
    espVie: 33.2,
    usufruitEconomique: {
      NP: 31.3,
      Usuf: 68.7,
    },
    tauxDeRente: 4.14,
    coefDeCapit: 24.2,
    transactionsViageres: {
      NP: 28.2,
      DtUs: 71.8,
    },
  },
  {
    "age-monsieur": 62,
    "age-madame": 61,
    espVie: 32.2,
    usufruitEconomique: {
      NP: 32.5,
      Usuf: 67.5,
    },
    tauxDeRente: 4.22,
    coefDeCapit: 23.7,
    transactionsViageres: {
      NP: 29.2,
      DtUs: 70.8,
    },
  },
  {
    "age-monsieur": 62,
    "age-madame": 62,
    espVie: 31.3,
    usufruitEconomique: {
      NP: 33.5,
      Usuf: 66.5,
    },
    tauxDeRente: 4.3,
    coefDeCapit: 23.3,
    transactionsViageres: {
      NP: 30.2,
      DtUs: 69.8,
    },
  },
  {
    "age-monsieur": 62,
    "age-madame": 63,
    espVie: 30.3,
    usufruitEconomique: {
      NP: 34.7,
      Usuf: 65.3,
    },
    tauxDeRente: 4.39,
    coefDeCapit: 22.8,
    transactionsViageres: {
      NP: 31.2,
      DtUs: 68.8,
    },
  },
  {
    "age-monsieur": 62,
    "age-madame": 64,
    espVie: 29.4,
    usufruitEconomique: {
      NP: 35.8,
      Usuf: 64.2,
    },
    tauxDeRente: 4.48,
    coefDeCapit: 22.3,
    transactionsViageres: {
      NP: 32.2,
      DtUs: 67.8,
    },
  },
  {
    "age-monsieur": 62,
    "age-madame": 65,
    espVie: 28.5,
    usufruitEconomique: {
      NP: 36.9,
      Usuf: 63.1,
    },
    tauxDeRente: 4.58,
    coefDeCapit: 21.8,
    transactionsViageres: {
      NP: 33.2,
      DtUs: 66.8,
    },
  },
  {
    "age-monsieur": 62,
    "age-madame": 66,
    espVie: 27.5,
    usufruitEconomique: {
      NP: 38.3,
      Usuf: 61.7,
    },
    tauxDeRente: 4.69,
    coefDeCapit: 21.3,
    transactionsViageres: {
      NP: 34.4,
      DtUs: 65.6,
    },
  },
  {
    "age-monsieur": 62,
    "age-madame": 67,
    espVie: 26.6,
    usufruitEconomique: {
      NP: 39.5,
      Usuf: 60.5,
    },
    tauxDeRente: 4.8,
    coefDeCapit: 20.8,
    transactionsViageres: {
      NP: 35.5,
      DtUs: 64.5,
    },
  },
  {
    "age-monsieur": 62,
    "age-madame": 68,
    espVie: 26.0,
    usufruitEconomique: {
      NP: 40.3,
      Usuf: 59.7,
    },
    tauxDeRente: 4.88,
    coefDeCapit: 20.5,
    transactionsViageres: {
      NP: 36.3,
      DtUs: 63.7,
    },
  },
  {
    "age-monsieur": 62,
    "age-madame": 69,
    espVie: 25.9,
    usufruitEconomique: {
      NP: 40.5,
      Usuf: 59.5,
    },
    tauxDeRente: 4.89,
    coefDeCapit: 20.4,
    transactionsViageres: {
      NP: 36.4,
      DtUs: 63.6,
    },
  },
  {
    "age-monsieur": 62,
    "age-madame": 70,
    espVie: 25.8,
    usufruitEconomique: {
      NP: 40.6,
      Usuf: 59.4,
    },
    tauxDeRente: 4.9,
    coefDeCapit: 20.4,
    transactionsViageres: {
      NP: 36.5,
      DtUs: 63.5,
    },
  },
  {
    "age-monsieur": 62,
    "age-madame": 71,
    espVie: 25.7,
    usufruitEconomique: {
      NP: 40.7,
      Usuf: 59.3,
    },
    tauxDeRente: 4.92,
    coefDeCapit: 20.3,
    transactionsViageres: {
      NP: 36.7,
      DtUs: 63.3,
    },
  },
  {
    "age-monsieur": 62,
    "age-madame": 72,
    espVie: 25.5,
    usufruitEconomique: {
      NP: 41.0,
      Usuf: 59.0,
    },
    tauxDeRente: 4.94,
    coefDeCapit: 20.2,
    transactionsViageres: {
      NP: 36.9,
      DtUs: 63.1,
    },
  },

  // --------------------- 63 ans ----------------------------

  {
    "age-monsieur": 63,
    "age-madame": 43,
    espVie: 49.4,
    usufruitEconomique: {
      NP: 17.8,
      Usuf: 82.2,
    },
    tauxDeRente: 3.26,
    coefDeCapit: 30.7,
    transactionsViageres: {
      NP: 16.0,
      DtUs: 84.0,
    },
  },
  {
    "age-monsieur": 63,
    "age-madame": 44,
    espVie: 48.3,
    usufruitEconomique: {
      NP: 18.5,
      Usuf: 81.5,
    },
    tauxDeRente: 3.3,
    coefDeCapit: 30.3,
    transactionsViageres: {
      NP: 16.6,
      DtUs: 83.4,
    },
  },
  {
    "age-monsieur": 63,
    "age-madame": 45,
    espVie: 47.3,
    usufruitEconomique: {
      NP: 19.2,
      Usuf: 80.8,
    },
    tauxDeRente: 3.34,
    coefDeCapit: 30.0,
    transactionsViageres: {
      NP: 17.2,
      DtUs: 82.8,
    },
  },
  {
    "age-monsieur": 63,
    "age-madame": 46,
    espVie: 46.3,
    usufruitEconomique: {
      NP: 19.8,
      Usuf: 80.2,
    },
    tauxDeRente: 3.38,
    coefDeCapit: 29.6,
    transactionsViageres: {
      NP: 17.9,
      DtUs: 82.1,
    },
  },
  {
    "age-monsieur": 63,
    "age-madame": 47,
    espVie: 45.3,
    usufruitEconomique: {
      NP: 20.5,
      Usuf: 79.5,
    },
    tauxDeRente: 3.42,
    coefDeCapit: 29.2,
    transactionsViageres: {
      NP: 18.5,
      DtUs: 81.5,
    },
  },
  {
    "age-monsieur": 63,
    "age-madame": 48,
    espVie: 44.3,
    usufruitEconomique: {
      NP: 21.3,
      Usuf: 78.7,
    },
    tauxDeRente: 3.47,
    coefDeCapit: 28.8,
    transactionsViageres: {
      NP: 19.1,
      DtUs: 80.9,
    },
  },
  {
    "age-monsieur": 63,
    "age-madame": 49,
    espVie: 43.3,
    usufruitEconomique: {
      NP: 22.0,
      Usuf: 78.0,
    },
    tauxDeRente: 3.51,
    coefDeCapit: 28.5,
    transactionsViageres: {
      NP: 19.8,
      DtUs: 80.2,
    },
  },
  {
    "age-monsieur": 63,
    "age-madame": 50,
    espVie: 42.3,
    usufruitEconomique: {
      NP: 22.8,
      Usuf: 77.2,
    },
    tauxDeRente: 3.56,
    coefDeCapit: 28.1,
    transactionsViageres: {
      NP: 20.5,
      DtUs: 79.5,
    },
  },
  {
    "age-monsieur": 63,
    "age-madame": 51,
    espVie: 41.3,
    usufruitEconomique: {
      NP: 23.6,
      Usuf: 76.4,
    },
    tauxDeRente: 3.61,
    coefDeCapit: 27.7,
    transactionsViageres: {
      NP: 21.3,
      DtUs: 78.7,
    },
  },
  {
    "age-monsieur": 63,
    "age-madame": 52,
    espVie: 40.3,
    usufruitEconomique: {
      NP: 24.5,
      Usuf: 75.5,
    },
    tauxDeRente: 3.67,
    coefDeCapit: 27.3,
    transactionsViageres: {
      NP: 22.0,
      DtUs: 78.0,
    },
  },
  {
    "age-monsieur": 63,
    "age-madame": 53,
    espVie: 39.4,
    usufruitEconomique: {
      NP: 25.2,
      Usuf: 74.8,
    },
    tauxDeRente: 3.72,
    coefDeCapit: 26.9,
    transactionsViageres: {
      NP: 22.7,
      DtUs: 77.3,
    },
  },
  {
    "age-monsieur": 63,
    "age-madame": 54,
    espVie: 38.3,
    usufruitEconomique: {
      NP: 26.2,
      Usuf: 73.8,
    },
    tauxDeRente: 3.78,
    coefDeCapit: 26.4,
    transactionsViageres: {
      NP: 23.6,
      DtUs: 76.4,
    },
  },
  {
    "age-monsieur": 63,
    "age-madame": 55,
    espVie: 37.4,
    usufruitEconomique: {
      NP: 27.1,
      Usuf: 72.9,
    },
    tauxDeRente: 3.84,
    coefDeCapit: 26.1,
    transactionsViageres: {
      NP: 24.4,
      DtUs: 75.6,
    },
  },
  {
    "age-monsieur": 63,
    "age-madame": 56,
    espVie: 36.4,
    usufruitEconomique: {
      NP: 28.0,
      Usuf: 72.0,
    },
    tauxDeRente: 3.9,
    coefDeCapit: 25.6,
    transactionsViageres: {
      NP: 25.2,
      DtUs: 74.8,
    },
  },
  {
    "age-monsieur": 63,
    "age-madame": 57,
    espVie: 35.5,
    usufruitEconomique: {
      NP: 28.9,
      Usuf: 71.1,
    },
    tauxDeRente: 3.97,
    coefDeCapit: 25.2,
    transactionsViageres: {
      NP: 26.0,
      DtUs: 74.0,
    },
  },
  {
    "age-monsieur": 63,
    "age-madame": 58,
    espVie: 34.6,
    usufruitEconomique: {
      NP: 29.9,
      Usuf: 70.1,
    },
    tauxDeRente: 4.03,
    coefDeCapit: 24.8,
    transactionsViageres: {
      NP: 26.9,
      DtUs: 73.1,
    },
  },
  {
    "age-monsieur": 63,
    "age-madame": 59,
    espVie: 33.6,
    usufruitEconomique: {
      NP: 30.9,
      Usuf: 69.1,
    },
    tauxDeRente: 4.11,
    coefDeCapit: 24.3,
    transactionsViageres: {
      NP: 27.8,
      DtUs: 72.2,
    },
  },
  {
    "age-monsieur": 63,
    "age-madame": 60,
    espVie: 32.6,
    usufruitEconomique: {
      NP: 32.0,
      Usuf: 68.0,
    },
    tauxDeRente: 4.19,
    coefDeCapit: 23.9,
    transactionsViageres: {
      NP: 28.8,
      DtUs: 71.2,
    },
  },
  {
    "age-monsieur": 63,
    "age-madame": 61,
    espVie: 31.7,
    usufruitEconomique: {
      NP: 33.0,
      Usuf: 67.0,
    },
    tauxDeRente: 4.27,
    coefDeCapit: 23.4,
    transactionsViageres: {
      NP: 29.7,
      DtUs: 70.3,
    },
  },
  {
    "age-monsieur": 63,
    "age-madame": 62,
    espVie: 30.7,
    usufruitEconomique: {
      NP: 34.2,
      Usuf: 65.8,
    },
    tauxDeRente: 4.36,
    coefDeCapit: 23.0,
    transactionsViageres: {
      NP: 30.8,
      DtUs: 69.2,
    },
  },
  {
    "age-monsieur": 63,
    "age-madame": 63,
    espVie: 29.8,
    usufruitEconomique: {
      NP: 35.3,
      Usuf: 64.7,
    },
    tauxDeRente: 4.44,
    coefDeCapit: 22.5,
    transactionsViageres: {
      NP: 31.8,
      DtUs: 68.2,
    },
  },
  {
    "age-monsieur": 63,
    "age-madame": 64,
    espVie: 28.9,
    usufruitEconomique: {
      NP: 36.4,
      Usuf: 63.6,
    },
    tauxDeRente: 4.54,
    coefDeCapit: 22.0,
    transactionsViageres: {
      NP: 32.8,
      DtUs: 67.2,
    },
  },
  {
    "age-monsieur": 63,
    "age-madame": 65,
    espVie: 27.9,
    usufruitEconomique: {
      NP: 37.7,
      Usuf: 62.3,
    },
    tauxDeRente: 4.65,
    coefDeCapit: 21.5,
    transactionsViageres: {
      NP: 34.0,
      DtUs: 66.0,
    },
  },
  {
    "age-monsieur": 63,
    "age-madame": 66,
    espVie: 27.0,
    usufruitEconomique: {
      NP: 38.9,
      Usuf: 61.1,
    },
    tauxDeRente: 4.75,
    coefDeCapit: 21.0,
    transactionsViageres: {
      NP: 35.0,
      DtUs: 65.0,
    },
  },
  {
    "age-monsieur": 63,
    "age-madame": 67,
    espVie: 26.1,
    usufruitEconomique: {
      NP: 40.2,
      Usuf: 59.8,
    },
    tauxDeRente: 4.86,
    coefDeCapit: 20.6,
    transactionsViageres: {
      NP: 36.2,
      DtUs: 63.8,
    },
  },
  {
    "age-monsieur": 63,
    "age-madame": 68,
    espVie: 25.2,
    usufruitEconomique: {
      NP: 41.5,
      Usuf: 58.5,
    },
    tauxDeRente: 4.99,
    coefDeCapit: 20.1,
    transactionsViageres: {
      NP: 37.3,
      DtUs: 62.7,
    },
  },
  {
    "age-monsieur": 63,
    "age-madame": 69,
    espVie: 24.9,
    usufruitEconomique: {
      NP: 41.9,
      Usuf: 58.1,
    },
    tauxDeRente: 5.03,
    coefDeCapit: 19.9,
    transactionsViageres: {
      NP: 37.7,
      DtUs: 62.3,
    },
  },
  {
    "age-monsieur": 63,
    "age-madame": 70,
    espVie: 24.8,
    usufruitEconomique: {
      NP: 42.0,
      Usuf: 58.0,
    },
    tauxDeRente: 5.04,
    coefDeCapit: 19.8,
    transactionsViageres: {
      NP: 37.8,
      DtUs: 62.2,
    },
  },
  {
    "age-monsieur": 63,
    "age-madame": 71,
    espVie: 24.7,
    usufruitEconomique: {
      NP: 42.2,
      Usuf: 57.8,
    },
    tauxDeRente: 5.06,
    coefDeCapit: 19.8,
    transactionsViageres: {
      NP: 38.0,
      DtUs: 62.0,
    },
  },
  {
    "age-monsieur": 63,
    "age-madame": 72,
    espVie: 24.6,
    usufruitEconomique: {
      NP: 42.3,
      Usuf: 57.7,
    },
    tauxDeRente: 5.07,
    coefDeCapit: 19.7,
    transactionsViageres: {
      NP: 38.1,
      DtUs: 61.9,
    },
  },
  {
    "age-monsieur": 63,
    "age-madame": 73,
    espVie: 24.5,
    usufruitEconomique: {
      NP: 42.5,
      Usuf: 57.5,
    },
    tauxDeRente: 5.09,
    coefDeCapit: 19.7,
    transactionsViageres: {
      NP: 38.2,
      DtUs: 61.8,
    },
  },
  // --------------------- 64 ans ----------------------------
  {
    "age-monsieur": 64,
    "age-madame": 44,
    espVie: 48.9,
    usufruitEconomique: {
      NP: 18.1,
      Usuf: 81.9,
    },
    tauxDeRente: 3.28,
    coefDeCapit: 30.5,
    transactionsViageres: {
      NP: 16.3,
      DtUs: 83.7,
    },
  },
  {
    "age-monsieur": 64,
    "age-madame": 45,
    espVie: 47.9,
    usufruitEconomique: {
      NP: 18.8,
      Usuf: 81.2,
    },
    tauxDeRente: 3.31,
    coefDeCapit: 30.2,
    transactionsViageres: {
      NP: 16.9,
      DtUs: 83.1,
    },
  },
  {
    "age-monsieur": 64,
    "age-madame": 46,
    espVie: 46.9,
    usufruitEconomique: {
      NP: 19.4,
      Usuf: 80.6,
    },
    tauxDeRente: 3.35,
    coefDeCapit: 29.8,
    transactionsViageres: {
      NP: 17.5,
      DtUs: 82.5,
    },
  },
  {
    "age-monsieur": 64,
    "age-madame": 47,
    espVie: 45.8,
    usufruitEconomique: {
      NP: 20.2,
      Usuf: 79.8,
    },
    tauxDeRente: 3.4,
    coefDeCapit: 29.4,
    transactionsViageres: {
      NP: 18.2,
      DtUs: 81.8,
    },
  },
  {
    "age-monsieur": 64,
    "age-madame": 48,
    espVie: 44.8,
    usufruitEconomique: {
      NP: 20.9,
      Usuf: 79.1,
    },
    tauxDeRente: 3.44,
    coefDeCapit: 29.0,
    transactionsViageres: {
      NP: 18.8,
      DtUs: 81.2,
    },
  },
  {
    "age-monsieur": 64,
    "age-madame": 49,
    espVie: 43.9,
    usufruitEconomique: {
      NP: 21.6,
      Usuf: 78.4,
    },
    tauxDeRente: 3.49,
    coefDeCapit: 28.7,
    transactionsViageres: {
      NP: 19.4,
      DtUs: 80.6,
    },
  },
  {
    "age-monsieur": 64,
    "age-madame": 50,
    espVie: 42.8,
    usufruitEconomique: {
      NP: 22.4,
      Usuf: 77.6,
    },
    tauxDeRente: 3.54,
    coefDeCapit: 28.3,
    transactionsViageres: {
      NP: 20.2,
      DtUs: 79.8,
    },
  },
  {
    "age-monsieur": 64,
    "age-madame": 51,
    espVie: 41.8,
    usufruitEconomique: {
      NP: 23.2,
      Usuf: 76.8,
    },
    tauxDeRente: 3.59,
    coefDeCapit: 27.9,
    transactionsViageres: {
      NP: 20.9,
      DtUs: 79.1,
    },
  },
  {
    "age-monsieur": 64,
    "age-madame": 52,
    espVie: 40.8,
    usufruitEconomique: {
      NP: 24.0,
      Usuf: 76.0,
    },
    tauxDeRente: 3.64,
    coefDeCapit: 27.5,
    transactionsViageres: {
      NP: 21.6,
      DtUs: 78.4,
    },
  },
  {
    "age-monsieur": 64,
    "age-madame": 53,
    espVie: 39.9,
    usufruitEconomique: {
      NP: 24.8,
      Usuf: 75.2,
    },
    tauxDeRente: 3.69,
    coefDeCapit: 27.5,
    transactionsViageres: {
      NP: 22.3,
      DtUs: 77.7,
    },
  },
  {
    "age-monsieur": 64,
    "age-madame": 54,
    espVie: 38.8,
    usufruitEconomique: {
      NP: 25.8,
      Usuf: 74.2,
    },
    tauxDeRente: 3.75,
    coefDeCapit: 26.6,
    transactionsViageres: {
      NP: 23.2,
      DtUs: 76.8,
    },
  },
  {
    "age-monsieur": 64,
    "age-madame": 55,
    espVie: 37.9,
    usufruitEconomique: {
      NP: 26.6,
      Usuf: 73.4,
    },
    tauxDeRente: 3.81,
    coefDeCapit: 26.3,
    transactionsViageres: {
      NP: 23.9,
      DtUs: 76.1,
    },
  },
  {
    "age-monsieur": 64,
    "age-madame": 56,
    espVie: 36.9,
    usufruitEconomique: {
      NP: 27.5,
      Usuf: 72.5,
    },
    tauxDeRente: 3.87,
    coefDeCapit: 25.8,
    transactionsViageres: {
      NP: 24.8,
      DtUs: 75.2,
    },
  },
  {
    "age-monsieur": 64,
    "age-madame": 57,
    espVie: 35.9,
    usufruitEconomique: {
      NP: 28.5,
      Usuf: 71.5,
    },
    tauxDeRente: 3.94,
    coefDeCapit: 25.4,
    transactionsViageres: {
      NP: 25.7,
      DtUs: 74.3,
    },
  },
  {
    "age-monsieur": 64,
    "age-madame": 58,
    espVie: 35.0,
    usufruitEconomique: {
      NP: 29.4,
      Usuf: 70.6,
    },
    tauxDeRente: 4.0,
    coefDeCapit: 25.0,
    transactionsViageres: {
      NP: 26.5,
      DtUs: 73.5,
    },
  },
  {
    "age-monsieur": 64,
    "age-madame": 59,
    espVie: 34.1,
    usufruitEconomique: {
      NP: 30.4,
      Usuf: 69.6,
    },
    tauxDeRente: 4.07,
    coefDeCapit: 24.6,
    transactionsViageres: {
      NP: 27.3,
      DtUs: 72.7,
    },
  },
  {
    "age-monsieur": 64,
    "age-madame": 60,
    espVie: 33.0,
    usufruitEconomique: {
      NP: 31.6,
      Usuf: 68.4,
    },
    tauxDeRente: 4.16,
    coefDeCapit: 24.1,
    transactionsViageres: {
      NP: 28.4,
      DtUs: 71.6,
    },
  },
  {
    "age-monsieur": 64,
    "age-madame": 61,
    espVie: 32.1,
    usufruitEconomique: {
      NP: 32.6,
      Usuf: 67.4,
    },
    tauxDeRente: 4.23,
    coefDeCapit: 23.6,
    transactionsViageres: {
      NP: 29.3,
      DtUs: 70.7,
    },
  },
  {
    "age-monsieur": 64,
    "age-madame": 62,
    espVie: 31.1,
    usufruitEconomique: {
      NP: 33.6,
      Usuf: 66.4,
    },
    tauxDeRente: 4.31,
    coefDeCapit: 23.2,
    transactionsViageres: {
      NP: 30.3,
      DtUs: 69.7,
    },
  },
  {
    "age-monsieur": 64,
    "age-madame": 63,
    espVie: 30.2,
    usufruitEconomique: {
      NP: 34.8,
      Usuf: 65.2,
    },
    tauxDeRente: 4.4,
    coefDeCapit: 22.7,
    transactionsViageres: {
      NP: 31.3,
      DtUs: 68.7,
    },
  },
  {
    "age-monsieur": 64,
    "age-madame": 64,
    espVie: 29.3,
    usufruitEconomique: {
      NP: 35.9,
      Usuf: 64.1,
    },
    tauxDeRente: 4.49,
    coefDeCapit: 22.3,
    transactionsViageres: {
      NP: 32.3,
      DtUs: 67.7,
    },
  },
  {
    "age-monsieur": 64,
    "age-madame": 65,
    espVie: 28.3,
    usufruitEconomique: {
      NP: 37.2,
      Usuf: 62.8,
    },
    tauxDeRente: 4.6,
    coefDeCapit: 21.7,
    transactionsViageres: {
      NP: 33.5,
      DtUs: 66.5,
    },
  },
  {
    "age-monsieur": 64,
    "age-madame": 66,
    espVie: 27.4,
    usufruitEconomique: {
      NP: 38.4,
      Usuf: 61.6,
    },
    tauxDeRente: 4.7,
    coefDeCapit: 21.3,
    transactionsViageres: {
      NP: 34.6,
      DtUs: 65.4,
    },
  },
  {
    "age-monsieur": 64,
    "age-madame": 67,
    espVie: 26.5,
    usufruitEconomique: {
      NP: 39.6,
      Usuf: 60.4,
    },
    tauxDeRente: 4.81,
    coefDeCapit: 20.8,
    transactionsViageres: {
      NP: 35.7,
      DtUs: 64.3,
    },
  },
  {
    "age-monsieur": 64,
    "age-madame": 68,
    espVie: 25.5,
    usufruitEconomique: {
      NP: 41.0,
      Usuf: 59.0,
    },
    tauxDeRente: 4.94,
    coefDeCapit: 20.2,
    transactionsViageres: {
      NP: 36.9,
      DtUs: 63.1,
    },
  },
  {
    "age-monsieur": 64,
    "age-madame": 69,
    espVie: 24.7,
    usufruitEconomique: {
      NP: 42.2,
      Usuf: 57.8,
    },
    tauxDeRente: 5.06,
    coefDeCapit: 19.8,
    transactionsViageres: {
      NP: 38.0,
      DtUs: 62.0,
    },
  },
  {
    "age-monsieur": 64,
    "age-madame": 70,
    espVie: 24.1,
    usufruitEconomique: {
      NP: 43.1,
      Usuf: 56.9,
    },
    tauxDeRente: 5.15,
    coefDeCapit: 19.4,
    transactionsViageres: {
      NP: 38.8,
      DtUs: 61.2,
    },
  },
  {
    "age-monsieur": 64,
    "age-madame": 71,
    espVie: 24.0,
    usufruitEconomique: {
      NP: 43.2,
      Usuf: 56.8,
    },
    tauxDeRente: 5.16,
    coefDeCapit: 19.4,
    transactionsViageres: {
      NP: 38.9,
      DtUs: 61.1,
    },
  },
  {
    "age-monsieur": 64,
    "age-madame": 72,
    espVie: 23.9,
    usufruitEconomique: {
      NP: 43.4,
      Usuf: 56.6,
    },
    tauxDeRente: 5.18,
    coefDeCapit: 19.3,
    transactionsViageres: {
      NP: 39.0,
      DtUs: 61.0,
    },
  },
  {
    "age-monsieur": 64,
    "age-madame": 73,
    espVie: 23.8,
    usufruitEconomique: {
      NP: 43.5,
      Usuf: 56.5,
    },
    tauxDeRente: 5.19,
    coefDeCapit: 19.3,
    transactionsViageres: {
      NP: 39.2,
      DtUs: 60.8,
    },
  },
  {
    "age-monsieur": 64,
    "age-madame": 74,
    espVie: 23.7,
    usufruitEconomique: {
      NP: 43.7,
      Usuf: 56.3,
    },
    tauxDeRente: 5.21,
    coefDeCapit: 19.2,
    transactionsViageres: {
      NP: 39.3,
      DtUs: 60.7,
    },
  },

  // --------------------- 65 ans ----------------------------
  {
    "age-monsieur": 65,
    "age-madame": 45,
    espVie: 47.8,
    usufruitEconomique: {
      NP: 18.8,
      Usuf: 81.2,
    },
    tauxDeRente: 3.32,
    coefDeCapit: 30.1,
    transactionsViageres: {
      NP: 16.9,
      DtUs: 83.1,
    },
  },
  {
    "age-monsieur": 65,
    "age-madame": 46,
    espVie: 46.8,
    usufruitEconomique: {
      NP: 19.5,
      Usuf: 80.5,
    },
    tauxDeRente: 3.36,
    coefDeCapit: 29.8,
    transactionsViageres: {
      NP: 17.5,
      DtUs: 82.5,
    },
  },
  {
    "age-monsieur": 65,
    "age-madame": 47,
    espVie: 45.8,
    usufruitEconomique: {
      NP: 20.2,
      Usuf: 79.8,
    },
    tauxDeRente: 3.4,
    coefDeCapit: 29.4,
    transactionsViageres: {
      NP: 18.2,
      DtUs: 81.8,
    },
  },
  {
    "age-monsieur": 65,
    "age-madame": 48,
    espVie: 44.8,
    usufruitEconomique: {
      NP: 20.9,
      Usuf: 79.1,
    },
    tauxDeRente: 3.44,
    coefDeCapit: 29.0,
    transactionsViageres: {
      NP: 18.8,
      DtUs: 81.2,
    },
  },
  {
    "age-monsieur": 65,
    "age-madame": 49,
    espVie: 43.8,
    usufruitEconomique: {
      NP: 21.6,
      Usuf: 78.4,
    },
    tauxDeRente: 3.49,
    coefDeCapit: 28.7,
    transactionsViageres: {
      NP: 19.5,
      DtUs: 80.5,
    },
  },
  {
    "age-monsieur": 65,
    "age-madame": 50,
    espVie: 42.8,
    usufruitEconomique: {
      NP: 22.4,
      Usuf: 77.6,
    },
    tauxDeRente: 3.54,
    coefDeCapit: 27.9,
    transactionsViageres: {
      NP: 20.2,
      DtUs: 79.8,
    },
  },
  {
    "age-monsieur": 65,
    "age-madame": 51,
    espVie: 41.8,
    usufruitEconomique: {
      NP: 23.2,
      Usuf: 76.8,
    },
    tauxDeRente: 3.59,
    coefDeCapit: 27.9,
    transactionsViageres: {
      NP: 20.9,
      DtUs: 79.1,
    },
  },
  {
    "age-monsieur": 65,
    "age-madame": 52,
    espVie: 40.8,
    usufruitEconomique: {
      NP: 24.0,
      Usuf: 76.0,
    },
    tauxDeRente: 3.64,
    coefDeCapit: 27.5,
    transactionsViageres: {
      NP: 21.6,
      DtUs: 78.4,
    },
  },
  {
    "age-monsieur": 65,
    "age-madame": 53,
    espVie: 39.8,
    usufruitEconomique: {
      NP: 24.9,
      Usuf: 75.1,
    },
    tauxDeRente: 3.7,
    coefDeCapit: 27.1,
    transactionsViageres: {
      NP: 22.4,
      DtUs: 77.6,
    },
  },
  {
    "age-monsieur": 65,
    "age-madame": 54,
    espVie: 38.8,
    usufruitEconomique: {
      NP: 25.8,
      Usuf: 74.2,
    },
    tauxDeRente: 3.75,
    coefDeCapit: 26.6,
    transactionsViageres: {
      NP: 23.2,
      DtUs: 76.8,
    },
  },
  {
    "age-monsieur": 65,
    "age-madame": 55,
    espVie: 37.8,
    usufruitEconomique: {
      NP: 26.7,
      Usuf: 73.3,
    },
    tauxDeRente: 3.81,
    coefDeCapit: 26.2,
    transactionsViageres: {
      NP: 24.0,
      DtUs: 76.0,
    },
  },
  {
    "age-monsieur": 65,
    "age-madame": 56,
    espVie: 36.8,
    usufruitEconomique: {
      NP: 27.6,
      Usuf: 72.4,
    },
    tauxDeRente: 3.88,
    coefDeCapit: 25.8,
    transactionsViageres: {
      NP: 24.9,
      DtUs: 75.1,
    },
  },
  {
    "age-monsieur": 65,
    "age-madame": 57,
    espVie: 35.9,
    usufruitEconomique: {
      NP: 28.5,
      Usuf: 71.5,
    },
    tauxDeRente: 3.94,
    coefDeCapit: 25.4,
    transactionsViageres: {
      NP: 25.7,
      DtUs: 74.3,
    },
  },
  {
    "age-monsieur": 65,
    "age-madame": 58,
    espVie: 35.0,
    usufruitEconomique: {
      NP: 29.4,
      Usuf: 70.6,
    },
    tauxDeRente: 4.0,
    coefDeCapit: 25.0,
    transactionsViageres: {
      NP: 26.5,
      DtUs: 73.5,
    },
  },
  {
    "age-monsieur": 65,
    "age-madame": 59,
    espVie: 34.0,
    usufruitEconomique: {
      NP: 30.5,
      Usuf: 69.5,
    },
    tauxDeRente: 4.08,
    coefDeCapit: 24.5,
    transactionsViageres: {
      NP: 27.4,
      DtUs: 72.6,
    },
  },
  {
    "age-monsieur": 65,
    "age-madame": 60,
    espVie: 33.0,
    usufruitEconomique: {
      NP: 31.6,
      Usuf: 68.4,
    },
    tauxDeRente: 4.16,
    coefDeCapit: 24.1,
    transactionsViageres: {
      NP: 28.4,
      DtUs: 71.6,
    },
  },
  {
    "age-monsieur": 65,
    "age-madame": 61,
    espVie: 32.0,
    usufruitEconomique: {
      NP: 32.7,
      Usuf: 67.3,
    },
    tauxDeRente: 4.24,
    coefDeCapit: 23.6,
    transactionsViageres: {
      NP: 29.4,
      DtUs: 70.6,
    },
  },
  {
    "age-monsieur": 65,
    "age-madame": 62,
    espVie: 31.1,
    usufruitEconomique: {
      NP: 33.7,
      Usuf: 66.3,
    },
    tauxDeRente: 4.32,
    coefDeCapit: 23.2,
    transactionsViageres: {
      NP: 30.4,
      DtUs: 69.6,
    },
  },
  {
    "age-monsieur": 65,
    "age-madame": 63,
    espVie: 30.1,
    usufruitEconomique: {
      NP: 34.9,
      Usuf: 65.1,
    },
    tauxDeRente: 4.41,
    coefDeCapit: 22.7,
    transactionsViageres: {
      NP: 31.4,
      DtUs: 68.6,
    },
  },
  {
    "age-monsieur": 65,
    "age-madame": 64,
    espVie: 29.2,
    usufruitEconomique: {
      NP: 36.1,
      Usuf: 63.9,
    },
    tauxDeRente: 4.5,
    coefDeCapit: 22.2,
    transactionsViageres: {
      NP: 32.4,
      DtUs: 67.6,
    },
  },
  {
    "age-monsieur": 65,
    "age-madame": 65,
    espVie: 28.3,
    usufruitEconomique: {
      NP: 37.2,
      Usuf: 62.8,
    },
    tauxDeRente: 4.6,
    coefDeCapit: 21.7,
    transactionsViageres: {
      NP: 33.5,
      DtUs: 66.5,
    },
  },
  {
    "age-monsieur": 65,
    "age-madame": 66,
    espVie: 27.3,
    usufruitEconomique: {
      NP: 38.5,
      Usuf: 61.5,
    },
    tauxDeRente: 4.72,
    coefDeCapit: 21.2,
    transactionsViageres: {
      NP: 34.7,
      DtUs: 65.3,
    },
  },
  {
    "age-monsieur": 65,
    "age-madame": 67,
    espVie: 26.5,
    usufruitEconomique: {
      NP: 39.6,
      Usuf: 60.4,
    },
    tauxDeRente: 4.81,
    coefDeCapit: 20.8,
    transactionsViageres: {
      NP: 35.7,
      DtUs: 64.3,
    },
  },
  {
    "age-monsieur": 65,
    "age-madame": 68,
    espVie: 25.5,
    usufruitEconomique: {
      NP: 41.0,
      Usuf: 59.0,
    },
    tauxDeRente: 4.94,
    coefDeCapit: 20.2,
    transactionsViageres: {
      NP: 36.9,
      DtUs: 63.1,
    },
  },
  {
    "age-monsieur": 65,
    "age-madame": 69,
    espVie: 24.7,
    usufruitEconomique: {
      NP: 42.2,
      Usuf: 57.8,
    },
    tauxDeRente: 5.06,
    coefDeCapit: 19.8,
    transactionsViageres: {
      NP: 38.0,
      DtUs: 62.0,
    },
  },
  {
    "age-monsieur": 65,
    "age-madame": 70,
    espVie: 23.6,
    usufruitEconomique: {
      NP: 43.8,
      Usuf: 56.2,
    },
    tauxDeRente: 5.22,
    coefDeCapit: 19.1,
    transactionsViageres: {
      NP: 39.5,
      DtUs: 60.5,
    },
  },
  {
    "age-monsieur": 65,
    "age-madame": 71,
    espVie: 23.3,
    usufruitEconomique: {
      NP: 44.3,
      Usuf: 55.7,
    },
    tauxDeRente: 5.27,
    coefDeCapit: 19.0,
    transactionsViageres: {
      NP: 39.9,
      DtUs: 60.1,
    },
  },
  {
    "age-monsieur": 65,
    "age-madame": 72,
    espVie: 23.2,
    usufruitEconomique: {
      NP: 44.5,
      Usuf: 55.5,
    },
    tauxDeRente: 5.29,
    coefDeCapit: 18.9,
    transactionsViageres: {
      NP: 40.0,
      DtUs: 60.0,
    },
  },
  {
    "age-monsieur": 65,
    "age-madame": 73,
    espVie: 23.1,
    usufruitEconomique: {
      NP: 44.6,
      Usuf: 55.4,
    },
    tauxDeRente: 5.31,
    coefDeCapit: 18.8,
    transactionsViageres: {
      NP: 40.2,
      DtUs: 59.8,
    },
  },
  {
    "age-monsieur": 65,
    "age-madame": 74,
    espVie: 23.0,
    usufruitEconomique: {
      NP: 44.8,
      Usuf: 55.2,
    },
    tauxDeRente: 5.32,
    coefDeCapit: 18.8,
    transactionsViageres: {
      NP: 40.3,
      DtUs: 59.7,
    },
  },
  {
    "age-monsieur": 65,
    "age-madame": 75,
    espVie: 22.9,
    usufruitEconomique: {
      NP: 44.9,
      Usuf: 55.1,
    },
    tauxDeRente: 5.34,
    coefDeCapit: 18.7,
    transactionsViageres: {
      NP: 40.4,
      DtUs: 59.6,
    },
  },

  // --------------------- 66 ans ----------------------------

  {
    "age-monsieur": 66,
    "age-madame": 46,
    espVie: 46.7,
    usufruitEconomique: {
      NP: 19.6,
      Usuf: 80.4,
    },
    tauxDeRente: 3.36,
    coefDeCapit: 29.7,
    transactionsViageres: {
      NP: 17.6,
      DtUs: 82.4,
    },
  },
  {
    "age-monsieur": 66,
    "age-madame": 47,
    espVie: 45.7,
    usufruitEconomique: {
      NP: 20.3,
      Usuf: 79.7,
    },
    tauxDeRente: 3.4,
    coefDeCapit: 29.4,
    transactionsViageres: {
      NP: 18.2,
      DtUs: 81.8,
    },
  },
  {
    "age-monsieur": 66,
    "age-madame": 48,
    espVie: 44.7,
    usufruitEconomique: {
      NP: 21.0,
      Usuf: 79.0,
    },
    tauxDeRente: 3.45,
    coefDeCapit: 29.0,
    transactionsViageres: {
      NP: 18.9,
      DtUs: 81.1,
    },
  },
  {
    "age-monsieur": 66,
    "age-madame": 49,
    espVie: 43.7,
    usufruitEconomique: {
      NP: 21.7,
      Usuf: 78.3,
    },
    tauxDeRente: 3.49,
    coefDeCapit: 28.6,
    transactionsViageres: {
      NP: 19.6,
      DtUs: 80.4,
    },
  },
  {
    "age-monsieur": 66,
    "age-madame": 50,
    espVie: 42.8,
    usufruitEconomique: {
      NP: 22.4,
      Usuf: 77.6,
    },
    tauxDeRente: 3.54,
    coefDeCapit: 28.3,
    transactionsViageres: {
      NP: 20.2,
      DtUs: 79.8,
    },
  },
  {
    "age-monsieur": 66,
    "age-madame": 51,
    espVie: 41.7,
    usufruitEconomique: {
      NP: 23.3,
      Usuf: 76.7,
    },
    tauxDeRente: 3.59,
    coefDeCapit: 27.8,
    transactionsViageres: {
      NP: 21.0,
      DtUs: 79.0,
    },
  },
  {
    "age-monsieur": 66,
    "age-madame": 52,
    espVie: 40.7,
    usufruitEconomique: {
      NP: 24.1,
      Usuf: 75.9,
    },
    tauxDeRente: 3.65,
    coefDeCapit: 27.4,
    transactionsViageres: {
      NP: 21.7,
      DtUs: 78.3,
    },
  },
  {
    "age-monsieur": 66,
    "age-madame": 53,
    espVie: 39.8,
    usufruitEconomique: {
      NP: 24.9,
      Usuf: 75.1,
    },
    tauxDeRente: 3.7,
    coefDeCapit: 27.1,
    transactionsViageres: {
      NP: 22.4,
      DtUs: 77.6,
    },
  },
  {
    "age-monsieur": 66,
    "age-madame": 54,
    espVie: 38.7,
    usufruitEconomique: {
      NP: 25.9,
      Usuf: 74.1,
    },
    tauxDeRente: 3.76,
    coefDeCapit: 26.6,
    transactionsViageres: {
      NP: 23.3,
      DtUs: 76.7,
    },
  },
  {
    "age-monsieur": 661,
    "age-madame": 55,
    espVie: 37.8,
    usufruitEconomique: {
      NP: 26.7,
      Usuf: 73.3,
    },
    tauxDeRente: 3.81,
    coefDeCapit: 26.2,
    transactionsViageres: {
      NP: 24.0,
      DtUs: 76.0,
    },
  },
  {
    "age-monsieur": 66,
    "age-madame": 56,
    espVie: 36.8,
    usufruitEconomique: {
      NP: 27.6,
      Usuf: 72.4,
    },
    tauxDeRente: 3.88,
    coefDeCapit: 25.8,
    transactionsViageres: {
      NP: 24.9,
      DtUs: 75.1,
    },
  },
  {
    "age-monsieur": 66,
    "age-madame": 57,
    espVie: 35.8,
    usufruitEconomique: {
      NP: 28.6,
      Usuf: 71.4,
    },
    tauxDeRente: 3.94,
    coefDeCapit: 24.9,
    transactionsViageres: {
      NP: 25.8,
      DtUs: 74.2,
    },
  },
  {
    "age-monsieur": 66,
    "age-madame": 58,
    espVie: 34.9,
    usufruitEconomique: {
      NP: 29.5,
      Usuf: 70.5,
    },
    tauxDeRente: 4.01,
    coefDeCapit: 24.9,
    transactionsViageres: {
      NP: 26.6,
      DtUs: 73.4,
    },
  },
  {
    "age-monsieur": 66,
    "age-madame": 59,
    espVie: 33.9,
    usufruitEconomique: {
      NP: 30.6,
      Usuf: 69.4,
    },
    tauxDeRente: 4.08,
    coefDeCapit: 24.5,
    transactionsViageres: {
      NP: 27.5,
      DtUs: 72.5,
    },
  },
  {
    "age-monsieur": 66,
    "age-madame": 60,
    espVie: 32.9,
    usufruitEconomique: {
      NP: 31.7,
      Usuf: 68.3,
    },
    tauxDeRente: 4.16,
    coefDeCapit: 24.0,
    transactionsViageres: {
      NP: 28.5,
      DtUs: 71.5,
    },
  },
  {
    "age-monsieur": 66,
    "age-madame": 61,
    espVie: 32.0,
    usufruitEconomique: {
      NP: 32.7,
      Usuf: 67.3,
    },
    tauxDeRente: 4.24,
    coefDeCapit: 23.6,
    transactionsViageres: {
      NP: 29.4,
      DtUs: 70.6,
    },
  },
  {
    "age-monsieur": 66,
    "age-madame": 62,
    espVie: 31.0,
    usufruitEconomique: {
      NP: 33.9,
      Usuf: 66.1,
    },
    tauxDeRente: 4.33,
    coefDeCapit: 23.1,
    transactionsViageres: {
      NP: 30.5,
      DtUs: 69.5,
    },
  },
  {
    "age-monsieur": 66,
    "age-madame": 63,
    espVie: 30.1,
    usufruitEconomique: {
      NP: 34.9,
      Usuf: 65.1,
    },
    tauxDeRente: 4.41,
    coefDeCapit: 22.7,
    transactionsViageres: {
      NP: 31.4,
      DtUs: 68.6,
    },
  },
  {
    "age-monsieur": 66,
    "age-madame": 64,
    espVie: 29.2,
    usufruitEconomique: {
      NP: 36.1,
      Usuf: 63.9,
    },
    tauxDeRente: 4.5,
    coefDeCapit: 22.2,
    transactionsViageres: {
      NP: 32.4,
      DtUs: 67.6,
    },
  },
  {
    "age-monsieur": 66,
    "age-madame": 65,
    espVie: 28.2,
    usufruitEconomique: {
      NP: 37.3,
      Usuf: 62.7,
    },
    tauxDeRente: 4.61,
    coefDeCapit: 21.7,
    transactionsViageres: {
      NP: 33.6,
      DtUs: 66.4,
    },
  },
  {
    "age-monsieur": 66,
    "age-madame": 66,
    espVie: 27.3,
    usufruitEconomique: {
      NP: 38.5,
      Usuf: 61.5,
    },
    tauxDeRente: 4.72,
    coefDeCapit: 21.2,
    transactionsViageres: {
      NP: 34.7,
      DtUs: 65.3,
    },
  },
  {
    "age-monsieur": 66,
    "age-madame": 67,
    espVie: 26.4,
    usufruitEconomique: {
      NP: 39.8,
      Usuf: 60.2,
    },
    tauxDeRente: 4.83,
    coefDeCapit: 20.7,
    transactionsViageres: {
      NP: 35.8,
      DtUs: 64.2,
    },
  },
  {
    "age-monsieur": 66,
    "age-madame": 68,
    espVie: 25.4,
    usufruitEconomique: {
      NP: 41.2,
      Usuf: 58.8,
    },
    tauxDeRente: 4.96,
    coefDeCapit: 20.2,
    transactionsViageres: {
      NP: 37.1,
      DtUs: 62.9,
    },
  },
  {
    "age-monsieur": 66,
    "age-madame": 69,
    espVie: 24.6,
    usufruitEconomique: {
      NP: 42.3,
      Usuf: 57.7,
    },
    tauxDeRente: 5.07,
    coefDeCapit: 19.7,
    transactionsViageres: {
      NP: 38.1,
      DtUs: 61.9,
    },
  },
  {
    "age-monsieur": 66,
    "age-madame": 70,
    espVie: 23.6,
    usufruitEconomique: {
      NP: 43.8,
      Usuf: 56.2,
    },
    tauxDeRente: 5.22,
    coefDeCapit: 19.1,
    transactionsViageres: {
      NP: 39.5,
      DtUs: 60.5,
    },
  },
  {
    "age-monsieur": 66,
    "age-madame": 71,
    espVie: 22.7,
    usufruitEconomique: {
      NP: 45.2,
      Usuf: 54.8,
    },
    tauxDeRente: 5.37,
    coefDeCapit: 18.6,
    transactionsViageres: {
      NP: 40.7,
      DtUs: 59.3,
    },
  },
  {
    "age-monsieur": 66,
    "age-madame": 72,
    espVie: 22.6,
    usufruitEconomique: {
      NP: 45.4,
      Usuf: 54.6,
    },
    tauxDeRente: 5.39,
    coefDeCapit: 18.6,
    transactionsViageres: {
      NP: 40.9,
      DtUs: 59.1,
    },
  },
  {
    "age-monsieur": 66,
    "age-madame": 73,
    espVie: 22.5,
    usufruitEconomique: {
      NP: 45.6,
      Usuf: 54.4,
    },
    tauxDeRente: 5.41,
    coefDeCapit: 18.5,
    transactionsViageres: {
      NP: 41.0,
      DtUs: 59.0,
    },
  },
  {
    "age-monsieur": 66,
    "age-madame": 74,
    espVie: 22.4,
    usufruitEconomique: {
      NP: 45.7,
      Usuf: 54.3,
    },
    tauxDeRente: 5.43,
    coefDeCapit: 18.4,
    transactionsViageres: {
      NP: 41.1,
      DtUs: 58.9,
    },
  },
  {
    "age-monsieur": 66,
    "age-madame": 75,
    espVie: 22.3,
    usufruitEconomique: {
      NP: 45.9,
      Usuf: 54.1,
    },
    tauxDeRente: 5.44,
    coefDeCapit: 18.4,
    transactionsViageres: {
      NP: 41.3,
      DtUs: 58.7,
    },
  },
  {
    "age-monsieur": 66,
    "age-madame": 76,
    espVie: 22.1,
    usufruitEconomique: {
      NP: 46.2,
      Usuf: 53.8,
    },
    tauxDeRente: 5.48,
    coefDeCapit: 18.2,
    transactionsViageres: {
      NP: 41.6,
      DtUs: 58.4,
    },
  },

  // --------------------- 67 ans ----------------------------
  {
    "age-monsieur": 67,
    "age-madame": 47,
    espVie: 45.7,
    usufruitEconomique: {
      NP: 20.3,
      Usuf: 79.7,
    },
    tauxDeRente: 3.4,
    coefDeCapit: 29.4,
    transactionsViageres: {
      NP: 18.2,
      DtUs: 81.8,
    },
  },

  {
    "age-monsieur": 67,
    "age-madame": 48,
    espVie: 44.7,
    usufruitEconomique: {
      NP: 21.0,
      Usuf: 79.0,
    },
    tauxDeRente: 3.45,
    coefDeCapit: 29.0,
    transactionsViageres: {
      NP: 18.9,
      DtUs: 81.1,
    },
  },

  {
    "age-monsieur": 67,
    "age-madame": 49,
    espVie: 43.7,
    usufruitEconomique: {
      NP: 21.7,
      Usuf: 78.3,
    },
    tauxDeRente: 3.49,
    coefDeCapit: 28.6,
    transactionsViageres: {
      NP: 19.6,
      DtUs: 80.4,
    },
  },
  {
    "age-monsieur": 67,
    "age-madame": 50,
    espVie: 42.6,
    usufruitEconomique: {
      NP: 22.6,
      Usuf: 77.4,
    },
    tauxDeRente: 3.55,
    coefDeCapit: 28.2,
    transactionsViageres: {
      NP: 20.3,
      DtUs: 79.7,
    },
  },
  {
    "age-monsieur": 67,
    "age-madame": 51,
    espVie: 41.6,
    usufruitEconomique: {
      NP: 23.4,
      Usuf: 76.6,
    },
    tauxDeRente: 3.6,
    coefDeCapit: 27.8,
    transactionsViageres: {
      NP: 21.0,
      DtUs: 79.0,
    },
  },
  {
    "age-monsieur": 67,
    "age-madame": 52,
    espVie: 40.7,
    usufruitEconomique: {
      NP: 24.1,
      Usuf: 75.9,
    },
    tauxDeRente: 3.65,
    coefDeCapit: 27.4,
    transactionsViageres: {
      NP: 21.7,
      DtUs: 78.3,
    },
  },
  {
    "age-monsieur": 67,
    "age-madame": 53,
    espVie: 39.7,
    usufruitEconomique: {
      NP: 25.0,
      Usuf: 75.0,
    },
    tauxDeRente: 3.7,
    coefDeCapit: 27.0,
    transactionsViageres: {
      NP: 22.5,
      DtUs: 77.5,
    },
  },
  {
    "age-monsieur": 67,
    "age-madame": 54,
    espVie: 38.7,
    usufruitEconomique: {
      NP: 25.9,
      Usuf: 74.1,
    },
    tauxDeRente: 3.76,
    coefDeCapit: 26.6,
    transactionsViageres: {
      NP: 23.3,
      DtUs: 76.7,
    },
  },
  {
    "age-monsieur": 67,
    "age-madame": 55,
    espVie: 37.7,
    usufruitEconomique: {
      NP: 26.8,
      Usuf: 73.2,
    },
    tauxDeRente: 3.82,
    coefDeCapit: 26.2,
    transactionsViageres: {
      NP: 24.1,
      DtUs: 75.9,
    },
  },
  {
    "age-monsieur": 67,
    "age-madame": 56,
    espVie: 36.7,
    usufruitEconomique: {
      NP: 27.7,
      Usuf: 72.3,
    },
    tauxDeRente: 3.88,
    coefDeCapit: 25.7,
    transactionsViageres: {
      NP: 25.0,
      DtUs: 75.0,
    },
  },
  {
    "age-monsieur": 67,
    "age-madame": 57,
    espVie: 35.8,
    usufruitEconomique: {
      NP: 28.6,
      Usuf: 71.4,
    },
    tauxDeRente: 3.94,
    coefDeCapit: 25.3,
    transactionsViageres: {
      NP: 25.8,
      DtUs: 74.2,
    },
  },
  {
    "age-monsieur": 67,
    "age-madame": 58,
    espVie: 34.9,
    usufruitEconomique: {
      NP: 29.5,
      Usuf: 70.5,
    },
    tauxDeRente: 4.01,
    coefDeCapit: 24.9,
    transactionsViageres: {
      NP: 26.6,
      DtUs: 73.4,
    },
  },
  {
    "age-monsieur": 67,
    "age-madame": 59,
    espVie: 33.9,
    usufruitEconomique: {
      NP: 30.6,
      Usuf: 69.4,
    },
    tauxDeRente: 4.08,
    coefDeCapit: 24.5,
    transactionsViageres: {
      NP: 27.5,
      DtUs: 72.5,
    },
  },
  {
    "age-monsieur": 67,
    "age-madame": 60,
    espVie: 32.9,
    usufruitEconomique: {
      NP: 31.7,
      Usuf: 68.3,
    },
    tauxDeRente: 4.16,
    coefDeCapit: 24.0,
    transactionsViageres: {
      NP: 28.5,
      DtUs: 71.5,
    },
  },
  {
    "age-monsieur": 67,
    "age-madame": 61,
    espVie: 31.9,
    usufruitEconomique: {
      NP: 32.8,
      Usuf: 67.2,
    },
    tauxDeRente: 4.25,
    coefDeCapit: 23.5,
    transactionsViageres: {
      NP: 29.5,
      DtUs: 70.5,
    },
  },
  {
    "age-monsieur": 67,
    "age-madame": 62,
    espVie: 31.0,
    usufruitEconomique: {
      NP: 33.9,
      Usuf: 66.1,
    },
    tauxDeRente: 4.33,
    coefDeCapit: 23.1,
    transactionsViageres: {
      NP: 30.5,
      DtUs: 69.5,
    },
  },
  {
    "age-monsieur": 67,
    "age-madame": 63,
    espVie: 30.0,
    usufruitEconomique: {
      NP: 35.1,
      Usuf: 64.9,
    },
    tauxDeRente: 4.42,
    coefDeCapit: 22.6,
    transactionsViageres: {
      NP: 31.6,
      DtUs: 68.4,
    },
  },
  {
    "age-monsieur": 67,
    "age-madame": 64,
    espVie: 29.1,
    usufruitEconomique: {
      NP: 36.2,
      Usuf: 63.8,
    },
    tauxDeRente: 4.51,
    coefDeCapit: 22.1,
    transactionsViageres: {
      NP: 32.6,
      DtUs: 67.4,
    },
  },
  {
    "age-monsieur": 67,
    "age-madame": 65,
    espVie: 28.2,
    usufruitEconomique: {
      NP: 37.3,
      Usuf: 62.7,
    },
    tauxDeRente: 4.61,
    coefDeCapit: 21.7,
    transactionsViageres: {
      NP: 33.6,
      DtUs: 66.4,
    },
  },
  {
    "age-monsieur": 67,
    "age-madame": 66,
    espVie: 27.1,
    usufruitEconomique: {
      NP: 38.8,
      Usuf: 61.2,
    },
    tauxDeRente: 4.74,
    coefDeCapit: 21.1,
    transactionsViageres: {
      NP: 34.9,
      DtUs: 65.1,
    },
  },
  {
    "age-monsieur": 67,
    "age-madame": 67,
    espVie: 26.3,
    usufruitEconomique: {
      NP: 39.9,
      Usuf: 60.1,
    },
    tauxDeRente: 4.84,
    coefDeCapit: 20.7,
    transactionsViageres: {
      NP: 35.9,
      DtUs: 64.1,
    },
  },
  {
    "age-monsieur": 67,
    "age-madame": 68,
    espVie: 25.4,
    usufruitEconomique: {
      NP: 41.2,
      Usuf: 58.8,
    },
    tauxDeRente: 4.96,
    coefDeCapit: 20.2,
    transactionsViageres: {
      NP: 37.1,
      DtUs: 62.9,
    },
  },
  {
    "age-monsieur": 67,
    "age-madame": 69,
    espVie: 24.5,
    usufruitEconomique: {
      NP: 42.5,
      Usuf: 57.5,
    },
    tauxDeRente: 5.09,
    coefDeCapit: 19.7,
    transactionsViageres: {
      NP: 38.2,
      DtUs: 61.8,
    },
  },
  {
    "age-monsieur": 67,
    "age-madame": 70,
    espVie: 23.5,
    usufruitEconomique: {
      NP: 44.0,
      Usuf: 56.0,
    },
    tauxDeRente: 5.24,
    coefDeCapit: 19.1,
    transactionsViageres: {
      NP: 39.6,
      DtUs: 60.4,
    },
  },
  {
    "age-monsieur": 67,
    "age-madame": 71,
    espVie: 22.6,
    usufruitEconomique: {
      NP: 45.4,
      Usuf: 54.6,
    },
    tauxDeRente: 5.39,
    coefDeCapit: 18.6,
    transactionsViageres: {
      NP: 40.9,
      DtUs: 59.1,
    },
  },
  {
    "age-monsieur": 67,
    "age-madame": 72,
    espVie: 21.8,
    usufruitEconomique: {
      NP: 46.7,
      Usuf: 53.3,
    },
    tauxDeRente: 5.53,
    coefDeCapit: 18.1,
    transactionsViageres: {
      NP: 42.0,
      DtUs: 58.0,
    },
  },
  {
    "age-monsieur": 67,
    "age-madame": 73,
    espVie: 21.6,
    usufruitEconomique: {
      NP: 47.0,
      Usuf: 53.0,
    },
    tauxDeRente: 5.57,
    coefDeCapit: 17.9,
    transactionsViageres: {
      NP: 42.3,
      DtUs: 57.7,
    },
  },
  {
    "age-monsieur": 67,
    "age-madame": 74,
    espVie: 21.5,
    usufruitEconomique: {
      NP: 47.2,
      Usuf: 52.8,
    },
    tauxDeRente: 5.59,
    coefDeCapit: 17.9,
    transactionsViageres: {
      NP: 42.5,
      DtUs: 57.5,
    },
  },
  {
    "age-monsieur": 67,
    "age-madame": 75,
    espVie: 21.4,
    usufruitEconomique: {
      NP: 47.3,
      Usuf: 52.7,
    },
    tauxDeRente: 5.61,
    coefDeCapit: 17.8,
    transactionsViageres: {
      NP: 42.6,
      DtUs: 57.4,
    },
  },
  {
    "age-monsieur": 67,
    "age-madame": 76,
    espVie: 21.3,
    usufruitEconomique: {
      NP: 47.5,
      Usuf: 52.5,
    },
    tauxDeRente: 5.63,
    coefDeCapit: 17.8,
    transactionsViageres: {
      NP: 42.8,
      DtUs: 57.2,
    },
  },
  {
    "age-monsieur": 67,
    "age-madame": 77,
    espVie: 21.2,
    usufruitEconomique: {
      NP: 47.7,
      Usuf: 52.3,
    },
    tauxDeRente: 5.65,
    coefDeCapit: 17.7,
    transactionsViageres: {
      NP: 42.9,
      DtUs: 57.1,
    },
  },

  // --------------------- 68 ans ----------------------------
  {
    "age-monsieur": 68,
    "age-madame": 48,
    espVie: 44.6,
    usufruitEconomique: {
      NP: 21.0,
      Usuf: 78.2,
    },
    tauxDeRente: 3.45,
    coefDeCapit: 29.0,
    transactionsViageres: {
      NP: 18.9,
      DtUs: 81.4,
    },
  },
  {
    "age-monsieur": 68,
    "age-madame": 49,
    espVie: 43.6,
    usufruitEconomique: {
      NP: 21.8,
      Usuf: 78.2,
    },
    tauxDeRente: 3.5,
    coefDeCapit: 28.6,
    transactionsViageres: {
      NP: 19.6,
      DtUs: 80.4,
    },
  },
  {
    "age-monsieur": 68,
    "age-madame": 50,
    espVie: 42.6,
    usufruitEconomique: {
      NP: 22.6,
      Usuf: 77.4,
    },
    tauxDeRente: 3.55,
    coefDeCapit: 28.2,
    transactionsViageres: {
      NP: 20.3,
      DtUs: 79.7,
    },
  },
  {
    "age-monsieur": 68,
    "age-madame": 51,
    espVie: 41.6,
    usufruitEconomique: {
      NP: 23.4,
      Usuf: 76.6,
    },
    tauxDeRente: 3.6,
    coefDeCapit: 27.8,
    transactionsViageres: {
      NP: 21.0,
      DtUs: 79.0,
    },
  },
  {
    "age-monsieur": 68,
    "age-madame": 52,
    espVie: 40.6,
    usufruitEconomique: {
      NP: 24.2,
      Usuf: 75.8,
    },
    tauxDeRente: 3.65,
    coefDeCapit: 27.4,
    transactionsViageres: {
      NP: 21.8,
      DtUs: 78.2,
    },
  },
  {
    "age-monsieur": 68,
    "age-madame": 53,
    espVie: 39.6,
    usufruitEconomique: {
      NP: 25.1,
      Usuf: 74.9,
    },
    tauxDeRente: 3.71,
    coefDeCapit: 27.0,
    transactionsViageres: {
      NP: 22.6,
      DtUs: 77.4,
    },
  },
  {
    "age-monsieur": 68,
    "age-madame": 55,
    espVie: 37.6,
    usufruitEconomique: {
      NP: 26.9,
      Usuf: 73.1,
    },
    tauxDeRente: 3.83,
    coefDeCapit: 26.1,
    transactionsViageres: {
      NP: 24.2,
      DtUs: 75.8,
    },
  },
  {
    "age-monsieur": 68,
    "age-madame": 56,
    espVie: 36.7,
    usufruitEconomique: {
      NP: 27.7,
      Usuf: 72.3,
    },
    tauxDeRente: 3.88,
    coefDeCapit: 25.7,
    transactionsViageres: {
      NP: 25.0,
      DtUs: 75.0,
    },
  },
  {
    "age-monsieur": 68,
    "age-madame": 57,
    espVie: 35.7,
    usufruitEconomique: {
      NP: 28.7,
      Usuf: 71.3,
    },
    tauxDeRente: 3.95,
    coefDeCapit: 25.3,
    transactionsViageres: {
      NP: 25.9,
      DtUs: 74.1,
    },
  },
  {
    "age-monsieur": 68,
    "age-madame": 58,
    espVie: 34.8,
    usufruitEconomique: {
      NP: 29.6,
      Usuf: 70.4,
    },
    tauxDeRente: 4.02,
    coefDeCapit: 24.9,
    transactionsViageres: {
      NP: 26.7,
      DtUs: 73.3,
    },
  },
  {
    "age-monsieur": 68,
    "age-madame": 59,
    espVie: 33.8,
    usufruitEconomique: {
      NP: 30.7,
      Usuf: 69.3,
    },
    tauxDeRente: 4.09,
    coefDeCapit: 24.4,
    transactionsViageres: {
      NP: 27.6,
      DtUs: 72.4,
    },
  },
  {
    "age-monsieur": 68,
    "age-madame": 60,
    espVie: 32.8,
    usufruitEconomique: {
      NP: 31.8,
      Usuf: 68.2,
    },
    tauxDeRente: 4.17,
    coefDeCapit: 24.0,
    transactionsViageres: {
      NP: 28.6,
      DtUs: 71.4,
    },
  },
  {
    "age-monsieur": 68,
    "age-madame": 61,
    espVie: 31.9,
    usufruitEconomique: {
      NP: 32.8,
      Usuf: 67.2,
    },
    tauxDeRente: 4.25,
    coefDeCapit: 23.5,
    transactionsViageres: {
      NP: 29.5,
      DtUs: 70.5,
    },
  },
  {
    "age-monsieur": 68,
    "age-madame": 62,
    espVie: 30.9,
    usufruitEconomique: {
      NP: 34.0,
      Usuf: 66.0,
    },
    tauxDeRente: 4.34,
    coefDeCapit: 23.1,
    transactionsViageres: {
      NP: 30.6,
      DtUs: 69.4,
    },
  },
  {
    "age-monsieur": 68,
    "age-madame": 63,
    espVie: 30.0,
    usufruitEconomique: {
      NP: 35.1,
      Usuf: 64.9,
    },
    tauxDeRente: 4.42,
    coefDeCapit: 22.6,
    transactionsViageres: {
      NP: 31.6,
      DtUs: 68.4,
    },
  },
  {
    "age-monsieur": 68,
    "age-madame": 64,
    espVie: 29.0,
    usufruitEconomique: {
      NP: 36.3,
      Usuf: 63.7,
    },
    tauxDeRente: 4.53,
    coefDeCapit: 22.1,
    transactionsViageres: {
      NP: 32.7,
      DtUs: 67.3,
    },
  },
  {
    "age-monsieur": 68,
    "age-madame": 65,
    espVie: 28.1,
    usufruitEconomique: {
      NP: 37.5,
      Usuf: 62.5,
    },
    tauxDeRente: 4.62,
    coefDeCapit: 21.6,
    transactionsViageres: {
      NP: 33.7,
      DtUs: 66.3,
    },
  },
  {
    "age-monsieur": 68,
    "age-madame": 66,
    espVie: 27.2,
    usufruitEconomique: {
      NP: 38.7,
      Usuf: 61.3,
    },
    tauxDeRente: 4.73,
    coefDeCapit: 21.2,
    transactionsViageres: {
      NP: 34.8,
      DtUs: 65.2,
    },
  },
  {
    "age-monsieur": 68,
    "age-madame": 67,
    espVie: 26.3,
    usufruitEconomique: {
      NP: 39.9,
      Usuf: 60.1,
    },
    tauxDeRente: 4.84,
    coefDeCapit: 20.7,
    transactionsViageres: {
      NP: 35.9,
      DtUs: 64.1,
    },
  },
  {
    "age-monsieur": 68,
    "age-madame": 68,
    espVie: 25.3,
    usufruitEconomique: {
      NP: 41.3,
      Usuf: 58.7,
    },
    tauxDeRente: 4.97,
    coefDeCapit: 20.1,
    transactionsViageres: {
      NP: 37.2,
      DtUs: 62.8,
    },
  },
  {
    "age-monsieur": 68,
    "age-madame": 69,
    espVie: 24.5,
    usufruitEconomique: {
      NP: 42.5,
      Usuf: 57.5,
    },
    tauxDeRente: 5.09,
    coefDeCapit: 19.7,
    transactionsViageres: {
      NP: 38.2,
      DtUs: 61.8,
    },
  },
  {
    "age-monsieur": 68,
    "age-madame": 70,
    espVie: 23.5,
    usufruitEconomique: {
      NP: 44,
      Usuf: 56,
    },
    tauxDeRente: 5.24,
    coefDeCapit: 19.1,
    transactionsViageres: {
      NP: 39.6,
      DtUs: 60.4,
    },
  },
  {
    "age-monsieur": 68,
    "age-madame": 71,
    espVie: 22.6,
    usufruitEconomique: {
      NP: 45.4,
      Usuf: 54.6,
    },
    tauxDeRente: 5.39,
    coefDeCapit: 18.6,
    transactionsViageres: {
      NP: 40.9,
      DtUs: 59.1,
    },
  },
  {
    "age-monsieur": 68,
    "age-madame": 72,
    espVie: 21.7,
    usufruitEconomique: {
      NP: 46.9,
      Usuf: 53.1,
    },
    tauxDeRente: 5.55,
    coefDeCapit: 18.0,
    transactionsViageres: {
      NP: 42.2,
      DtUs: 57.8,
    },
  },
  {
    "age-monsieur": 68,
    "age-madame": 73,
    espVie: 20.8,
    usufruitEconomique: {
      NP: 48.3,
      Usuf: 51.7,
    },
    tauxDeRente: 5.73,
    coefDeCapit: 17.4,
    transactionsViageres: {
      NP: 43.5,
      DtUs: 56.5,
    },
  },
  {
    "age-monsieur": 68,
    "age-madame": 74,
    espVie: 20.7,
    usufruitEconomique: {
      NP: 48.5,
      Usuf: 51.5,
    },
    tauxDeRente: 5.75,
    coefDeCapit: 17.4,
    transactionsViageres: {
      NP: 43.7,
      DtUs: 56.3,
    },
  },
  {
    "age-monsieur": 68,
    "age-madame": 75,
    espVie: 20.6,
    usufruitEconomique: {
      NP: 48.7,
      Usuf: 51.3,
    },
    tauxDeRente: 5.77,
    coefDeCapit: 17.3,
    transactionsViageres: {
      NP: 43.8,
      DtUs: 56.2,
    },
  },
  {
    "age-monsieur": 68,
    "age-madame": 76,
    espVie: 20.5,
    usufruitEconomique: {
      NP: 48.9,
      Usuf: 51.1,
    },
    tauxDeRente: 5.79,
    coefDeCapit: 17.3,
    transactionsViageres: {
      NP: 44.0,
      DtUs: 56.0,
    },
  },
  {
    "age-monsieur": 68,
    "age-madame": 77,
    espVie: 20.4,
    usufruitEconomique: {
      NP: 49.0,
      Usuf: 51.0,
    },
    tauxDeRente: 5.81,
    coefDeCapit: 17.2,
    transactionsViageres: {
      NP: 44.1,
      DtUs: 55.9,
    },
  },
  {
    "age-monsieur": 68,
    "age-madame": 78,
    espVie: 20.3,
    usufruitEconomique: {
      NP: 49.2,
      Usuf: 50.8,
    },
    tauxDeRente: 5.84,
    coefDeCapit: 17.1,
    transactionsViageres: {
      NP: 44.3,
      DtUs: 55.7,
    },
  },

  // --------------------- 69 ans ----------------------------

  {
    "age-monsieur": 69,
    "age-madame": 49,
    espVie: 43.6,
    usufruitEconomique: {
      NP: 21.8,
      Usuf: 78.2,
    },
    tauxDeRente: 3.5,
    coefDeCapit: 28.6,
    transactionsViageres: {
      NP: 19.6,
      DtUs: 80.4,
    },
  },
  {
    "age-monsieur": 69,
    "age-madame": 50,
    espVie: 42.5,
    usufruitEconomique: {
      NP: 22.7,
      Usuf: 77.3,
    },
    tauxDeRente: 3.55,
    coefDeCapit: 28.1,
    transactionsViageres: {
      NP: 20.4,
      DtUs: 79.6,
    },
  },
  {
    "age-monsieur": 69,
    "age-madame": 51,
    espVie: 41.5,
    usufruitEconomique: {
      NP: 23.5,
      Usuf: 76.5,
    },
    tauxDeRente: 3.6,
    coefDeCapit: 27.8,
    transactionsViageres: {
      NP: 21.1,
      DtUs: 78.9,
    },
  },
  {
    "age-monsieur": 69,
    "age-madame": 52,
    espVie: 40.5,
    usufruitEconomique: {
      NP: 24.3,
      Usuf: 75.7,
    },
    tauxDeRente: 3.66,
    coefDeCapit: 27.3,
    transactionsViageres: {
      NP: 21.9,
      DtUs: 78.1,
    },
  },
  {
    "age-monsieur": 69,
    "age-madame": 53,
    espVie: 39.6,
    usufruitEconomique: {
      NP: 25.1,
      Usuf: 74.9,
    },
    tauxDeRente: 3.71,
    coefDeCapit: 27.0,
    transactionsViageres: {
      NP: 22.6,
      DtUs: 77.4,
    },
  },
  {
    "age-monsieur": 69,
    "age-madame": 54,
    espVie: 38.6,
    usufruitEconomique: {
      NP: 26.0,
      Usuf: 74.0,
    },
    tauxDeRente: 3.76,
    coefDeCapit: 26.6,
    transactionsViageres: {
      NP: 23.4,
      DtUs: 76.6,
    },
  },
  {
    "age-monsieur": 69,
    "age-madame": 55,
    espVie: 37.6,
    usufruitEconomique: {
      NP: 26.9,
      Usuf: 73.1,
    },
    tauxDeRente: 3.83,
    coefDeCapit: 26.1,
    transactionsViageres: {
      NP: 24.2,
      DtUs: 75.8,
    },
  },
  {
    "age-monsieur": 69,
    "age-madame": 56,
    espVie: 36.6,
    usufruitEconomique: {
      NP: 27.8,
      Usuf: 72.2,
    },
    tauxDeRente: 3.89,
    coefDeCapit: 25.7,
    transactionsViageres: {
      NP: 25.1,
      DtUs: 74.9,
    },
  },
  {
    "age-monsieur": 69,
    "age-madame": 57,
    espVie: 35.6,
    usufruitEconomique: {
      NP: 28.8,
      Usuf: 71.2,
    },
    tauxDeRente: 3.96,
    coefDeCapit: 25.3,
    transactionsViageres: {
      NP: 25.9,
      DtUs: 74.1,
    },
  },
  {
    "age-monsieur": 69,
    "age-madame": 58,
    espVie: 34.7,
    usufruitEconomique: {
      NP: 29.7,
      Usuf: 70.3,
    },
    tauxDeRente: 4.02,
    coefDeCapit: 24.9,
    transactionsViageres: {
      NP: 26.8,
      DtUs: 73.2,
    },
  },
  {
    "age-monsieur": 69,
    "age-madame": 59,
    espVie: 33.8,
    usufruitEconomique: {
      NP: 30.7,
      Usuf: 69.3,
    },
    tauxDeRente: 4.09,
    coefDeCapit: 24.4,
    transactionsViageres: {
      NP: 27.6,
      DtUs: 72.4,
    },
  },
  {
    "age-monsieur": 69,
    "age-madame": 60,
    espVie: 32.8,
    usufruitEconomique: {
      NP: 31.8,
      Usuf: 68.2,
    },
    tauxDeRente: 4.17,
    coefDeCapit: 24.0,
    transactionsViageres: {
      NP: 28.6,
      DtUs: 71.4,
    },
  },
  {
    "age-monsieur": 69,
    "age-madame": 61,
    espVie: 31.8,
    usufruitEconomique: {
      NP: 32.9,
      Usuf: 67.1,
    },
    tauxDeRente: 4.26,
    coefDeCapit: 23.5,
    transactionsViageres: {
      NP: 29.6,
      DtUs: 70.4,
    },
  },
  {
    "age-monsieur": 69,
    "age-madame": 62,
    espVie: 30.9,
    usufruitEconomique: {
      NP: 34.0,
      Usuf: 66.0,
    },
    tauxDeRente: 4.34,
    coefDeCapit: 23.7,
    transactionsViageres: {
      NP: 30.6,
      DtUs: 69.4,
    },
  },
  {
    "age-monsieur": 69,
    "age-madame": 63,
    espVie: 29.9,
    usufruitEconomique: {
      NP: 35.2,
      Usuf: 64.8,
    },
    tauxDeRente: 4.43,
    coefDeCapit: 22.6,
    transactionsViageres: {
      NP: 31.7,
      DtUs: 68.3,
    },
  },
  {
    "age-monsieur": 69,
    "age-madame": 64,
    espVie: 29.0,
    usufruitEconomique: {
      NP: 36.3,
      Usuf: 63.7,
    },
    tauxDeRente: 4.53,
    coefDeCapit: 22.7,
    transactionsViageres: {
      NP: 32.7,
      DtUs: 67.3,
    },
  },
  {
    "age-monsieur": 69,
    "age-madame": 65,
    espVie: 28.1,
    usufruitEconomique: {
      NP: 37.5,
      Usuf: 62.5,
    },
    tauxDeRente: 4.62,
    coefDeCapit: 21.6,
    transactionsViageres: {
      NP: 33.7,
      DtUs: 66.3,
    },
  },
  {
    "age-monsieur": 69,
    "age-madame": 66,
    espVie: 27.1,
    usufruitEconomique: {
      NP: 38.8,
      Usuf: 61.2,
    },
    tauxDeRente: 4.74,
    coefDeCapit: 21.1,
    transactionsViageres: {
      NP: 34.9,
      DtUs: 65.1,
    },
  },
  {
    "age-monsieur": 69,
    "age-madame": 67,
    espVie: 26.2,
    usufruitEconomique: {
      NP: 40.0,
      Usuf: 60.0,
    },
    tauxDeRente: 4.85,
    coefDeCapit: 20.6,
    transactionsViageres: {
      NP: 36.0,
      DtUs: 64.0,
    },
  },
  {
    "age-monsieur": 69,
    "age-madame": 68,
    espVie: 25.2,
    usufruitEconomique: {
      NP: 41.5,
      Usuf: 58.5,
    },
    tauxDeRente: 4.99,
    coefDeCapit: 20.1,
    transactionsViageres: {
      NP: 37.3,
      DtUs: 62.7,
    },
  },
  {
    "age-monsieur": 69,
    "age-madame": 69,
    espVie: 24.41,
    usufruitEconomique: {
      NP: 42.6,
      Usuf: 57.4,
    },
    tauxDeRente: 5.1,
    coefDeCapit: 19.6,
    transactionsViageres: {
      NP: 38.4,
      DtUs: 61.6,
    },
  },
  {
    "age-monsieur": 69,
    "age-madame": 70,
    espVie: 23.4,
    usufruitEconomique: {
      NP: 44.2,
      Usuf: 55.8,
    },
    tauxDeRente: 5.26,
    coefDeCapit: 19.0,
    transactionsViageres: {
      NP: 39.7,
      DtUs: 60.3,
    },
  },
  {
    "age-monsieur": 69,
    "age-madame": 71,
    espVie: 22.5,
    usufruitEconomique: {
      NP: 45.6,
      Usuf: 54.4,
    },
    tauxDeRente: 5.41,
    coefDeCapit: 18.5,
    transactionsViageres: {
      NP: 41.0,
      DtUs: 59.0,
    },
  },
  {
    "age-monsieur": 69,
    "age-madame": 72,
    espVie: 21.6,
    usufruitEconomique: {
      NP: 47.0,
      Usuf: 53.0,
    },
    tauxDeRente: 5.67,
    coefDeCapit: 17.9,
    transactionsViageres: {
      NP: 42.3,
      DtUs: 57.7,
    },
  },
  {
    "age-monsieur": 69,
    "age-madame": 73,
    espVie: 20.8,
    usufruitEconomique: {
      NP: 48.3,
      Usuf: 51.7,
    },
    tauxDeRente: 5.73,
    coefDeCapit: 17.4,
    transactionsViageres: {
      NP: 43.5,
      DtUs: 56.5,
    },
  },
  {
    "age-monsieur": 69,
    "age-madame": 74,
    espVie: 20.0,
    usufruitEconomique: {
      NP: 49.7,
      Usuf: 50.3,
    },
    tauxDeRente: 5.9,
    coefDeCapit: 16.9,
    transactionsViageres: {
      NP: 44.7,
      DtUs: 55.3,
    },
  },
  {
    "age-monsieur": 69,
    "age-madame": 75,
    espVie: 19.8,
    usufruitEconomique: {
      NP: 50.1,
      Usuf: 49.9,
    },
    tauxDeRente: 5.95,
    coefDeCapit: 16.8,
    transactionsViageres: {
      NP: 45.1,
      DtUs: 54.9,
    },
  },
  {
    "age-monsieur": 63,
    "age-madame": 76,
    espVie: 19.7,
    usufruitEconomique: {
      NP: 50.2,
      Usuf: 49.8,
    },
    tauxDeRente: 5.97,
    coefDeCapit: 16.8,
    transactionsViageres: {
      NP: 45.2,
      DtUs: 54.8,
    },
  },
  {
    "age-monsieur": 69,
    "age-madame": 77,
    espVie: 19.5,
    usufruitEconomique: {
      NP: 50.6,
      Usuf: 49.4,
    },
    tauxDeRente: 6.02,
    coefDeCapit: 16.6,
    transactionsViageres: {
      NP: 45.5,
      DtUs: 54.5,
    },
  },
  {
    "age-monsieur": 69,
    "age-madame": 78,
    espVie: 19.4,
    usufruitEconomique: {
      NP: 50.8,
      Usuf: 49.2,
    },
    tauxDeRente: 6.04,
    coefDeCapit: 16.6,
    transactionsViageres: {
      NP: 45.7,
      DtUs: 54.3,
    },
  },
  {
    "age-monsieur": 69,
    "age-madame": 79,
    espVie: 19.3,
    usufruitEconomique: {
      NP: 51.0,
      Usuf: 49.0,
    },
    tauxDeRente: 6.06,
    coefDeCapit: 16.5,
    transactionsViageres: {
      NP: 45.9,
      DtUs: 54.1,
    },
  },

  // --------------------- 70 ans ----------------------------

  {
    "age-monsieur": 70,
    "age-madame": 50,
    espVie: 42.2,
    usufruitEconomique: {
      NP: 22.9,
      Usuf: 77.1,
    },
    tauxDeRente: 3.57,
    coefDeCapit: 28.0,
    transactionsViageres: {
      NP: 20.6,
      DtUs: 79.4,
    },
  },
  {
    "age-monsieur": 70,
    "age-madame": 51,
    espVie: 41.2,
    usufruitEconomique: {
      NP: 23.7,
      Usuf: 76.3,
    },
    tauxDeRente: 3.62,
    coefDeCapit: 27.6,
    transactionsViageres: {
      NP: 21.3,
      DtUs: 78.7,
    },
  },
  {
    "age-monsieur": 70,
    "age-madame": 52,
    espVie: 40.2,
    usufruitEconomique: {
      NP: 24.5,
      Usuf: 75.5,
    },
    tauxDeRente: 3.67,
    coefDeCapit: 27.2,
    transactionsViageres: {
      NP: 22.1,
      DtUs: 77.9,
    },
  },
  {
    "age-monsieur": 70,
    "age-madame": 53,
    espVie: 39.2,
    usufruitEconomique: {
      NP: 25.4,
      Usuf: 74.6,
    },
    tauxDeRente: 3.73,
    coefDeCapit: 26.8,
    transactionsViageres: {
      NP: 22.9,
      DtUs: 77.1,
    },
  },
  {
    "age-monsieur": 70,
    "age-madame": 54,
    espVie: 38.2,
    usufruitEconomique: {
      NP: 26.3,
      Usuf: 73.7,
    },
    tauxDeRente: 3.79,
    coefDeCapit: 26.4,
    transactionsViageres: {
      NP: 23.7,
      DtUs: 76.3,
    },
  },
  {
    "age-monsieur": 70,
    "age-madame": 55,
    espVie: 37.3,
    usufruitEconomique: {
      NP: 27.2,
      Usuf: 72.8,
    },
    tauxDeRente: 3.85,
    coefDeCapit: 26.0,
    transactionsViageres: {
      NP: 24.4,
      DtUs: 75.6,
    },
  },
  {
    "age-monsieur": 70,
    "age-madame": 56,
    espVie: 36.3,
    usufruitEconomique: {
      NP: 28.1,
      Usuf: 71.9,
    },
    tauxDeRente: 3.91,
    coefDeCapit: 25.6,
    transactionsViageres: {
      NP: 25.3,
      DtUs: 74.7,
    },
  },
  {
    "age-monsieur": 70,
    "age-madame": 57,
    espVie: 35.3,
    usufruitEconomique: {
      NP: 29.1,
      Usuf: 70.9,
    },
    tauxDeRente: 3.98,
    coefDeCapit: 25.1,
    transactionsViageres: {
      NP: 26.2,
      DtUs: 73.8,
    },
  },
  {
    "age-monsieur": 70,
    "age-madame": 58,
    espVie: 34.4,
    usufruitEconomique: {
      NP: 30.1,
      Usuf: 69.9,
    },
    tauxDeRente: 4.05,
    coefDeCapit: 24.7,
    transactionsViageres: {
      NP: 27.1,
      DtUs: 72.9,
    },
  },
  {
    "age-monsieur": 70,
    "age-madame": 59,
    espVie: 33.5,
    usufruitEconomique: {
      NP: 31.0,
      Usuf: 69.0,
    },
    tauxDeRente: 4.11,
    coefDeCapit: 24.3,
    transactionsViageres: {
      NP: 27.9,
      DtUs: 72.1,
    },
  },
  {
    "age-monsieur": 70,
    "age-madame": 60,
    espVie: 32.5,
    usufruitEconomique: {
      NP: 32.1,
      Usuf: 67.9,
    },
    tauxDeRente: 4.2,
    coefDeCapit: 23.8,
    transactionsViageres: {
      NP: 28.9,
      DtUs: 71.1,
    },
  },
  {
    "age-monsieur": 70,
    "age-madame": 61,
    espVie: 31.5,
    usufruitEconomique: {
      NP: 33.3,
      Usuf: 66.7,
    },
    tauxDeRente: 4.28,
    coefDeCapit: 23.3,
    transactionsViageres: {
      NP: 29.9,
      DtUs: 70.1,
    },
  },
  {
    "age-monsieur": 70,
    "age-madame": 62,
    espVie: 30.6,
    usufruitEconomique: {
      NP: 34.3,
      Usuf: 65.7,
    },
    tauxDeRente: 4.37,
    coefDeCapit: 22.9,
    transactionsViageres: {
      NP: 30.9,
      DtUs: 69.1,
    },
  },
  {
    "age-monsieur": 70,
    "age-madame": 63,
    espVie: 29.6,
    usufruitEconomique: {
      NP: 35.6,
      Usuf: 64.4,
    },
    tauxDeRente: 4.46,
    coefDeCapit: 22.4,
    transactionsViageres: {
      NP: 32.0,
      DtUs: 68.0,
    },
  },
  {
    "age-monsieur": 70,
    "age-madame": 64,
    espVie: 28.7,
    usufruitEconomique: {
      NP: 36.7,
      Usuf: 63.3,
    },
    tauxDeRente: 4.56,
    coefDeCapit: 21.9,
    transactionsViageres: {
      NP: 33.0,
      DtUs: 67.0,
    },
  },
  {
    "age-monsieur": 70,
    "age-madame": 65,
    espVie: 27.8,
    usufruitEconomique: {
      NP: 37.9,
      Usuf: 62.1,
    },
    tauxDeRente: 4.66,
    coefDeCapit: 21.5,
    transactionsViageres: {
      NP: 34.1,
      DtUs: 65.9,
    },
  },
  {
    "age-monsieur": 70,
    "age-madame": 66,
    espVie: 26.8,
    usufruitEconomique: {
      NP: 39.2,
      Usuf: 60.8,
    },
    tauxDeRente: 4.78,
    coefDeCapit: 20.9,
    transactionsViageres: {
      NP: 35.3,
      DtUs: 64.7,
    },
  },
  {
    "age-monsieur": 70,
    "age-madame": 67,
    espVie: 26.0,
    usufruitEconomique: {
      NP: 40.3,
      Usuf: 59.7,
    },
    tauxDeRente: 4.88,
    coefDeCapit: 20.5,
    transactionsViageres: {
      NP: 36.3,
      DtUs: 63.7,
    },
  },
  {
    "age-monsieur": 70,
    "age-madame": 68,
    espVie: 25.0,
    usufruitEconomique: {
      NP: 41.7,
      Usuf: 58.3,
    },
    tauxDeRente: 5.01,
    coefDeCapit: 19.9,
    transactionsViageres: {
      NP: 37.6,
      DtUs: 62.4,
    },
  },
  {
    "age-monsieur": 70,
    "age-madame": 69,
    espVie: 24.2,
    usufruitEconomique: {
      NP: 42.9,
      Usuf: 57.1,
    },
    tauxDeRente: 5.13,
    coefDeCapit: 19.5,
    transactionsViageres: {
      NP: 38.6,
      DtUs: 61.4,
    },
  },
  {
    "age-monsieur": 70,
    "age-madame": 70,
    espVie: 23.2,
    usufruitEconomique: {
      NP: 44.5,
      Usuf: 55.5,
    },
    tauxDeRente: 5.29,
    coefDeCapit: 18.9,
    transactionsViageres: {
      NP: 40.0,
      DtUs: 60.0,
    },
  },
  {
    "age-monsieur": 70,
    "age-madame": 71,
    espVie: 22.3,
    usufruitEconomique: {
      NP: 45.9,
      Usuf: 54.1,
    },
    tauxDeRente: 5.44,
    coefDeCapit: 18.4,
    transactionsViageres: {
      NP: 41.3,
      DtUs: 58.7,
    },
  },
  {
    "age-monsieur": 70,
    "age-madame": 72,
    espVie: 21.4,
    usufruitEconomique: {
      NP: 47.3,
      Usuf: 52.7,
    },
    tauxDeRente: 5.61,
    coefDeCapit: 17.8,
    transactionsViageres: {
      NP: 42.6,
      DtUs: 57.4,
    },
  },
  {
    "age-monsieur": 70,
    "age-madame": 73,
    espVie: 20.5,
    usufruitEconomique: {
      NP: 48.9,
      Usuf: 51.1,
    },
    tauxDeRente: 5.79,
    coefDeCapit: 17.3,
    transactionsViageres: {
      NP: 44.0,
      DtUs: 56.0,
    },
  },
  {
    "age-monsieur": 70,
    "age-madame": 74,
    espVie: 19.7,
    usufruitEconomique: {
      NP: 50.2,
      Usuf: 49.8,
    },
    tauxDeRente: 5.97,
    coefDeCapit: 16.8,
    transactionsViageres: {
      NP: 45.2,
      DtUs: 54.8,
    },
  },
  {
    "age-monsieur": 70,
    "age-madame": 75,
    espVie: 19.0,
    usufruitEconomique: {
      NP: 51.5,
      Usuf: 48.5,
    },
    tauxDeRente: 6.14,
    coefDeCapit: 16.3,
    transactionsViageres: {
      NP: 46.3,
      DtUs: 53.7,
    },
  },
  {
    "age-monsieur": 70,
    "age-madame": 76,
    espVie: 18.8,
    usufruitEconomique: {
      NP: 51.8,
      Usuf: 48.2,
    },
    tauxDeRente: 6.19,
    coefDeCapit: 16.2,
    transactionsViageres: {
      NP: 46.7,
      DtUs: 53.3,
    },
  },
  {
    "age-monsieur": 70,
    "age-madame": 77,
    espVie: 18.7,
    usufruitEconomique: {
      NP: 52.0,
      Usuf: 48.0,
    },
    tauxDeRente: 6.21,
    coefDeCapit: 16.1,
    transactionsViageres: {
      NP: 46.8,
      DtUs: 53.2,
    },
  },
  {
    "age-monsieur": 70,
    "age-madame": 78,
    espVie: 18.6,
    usufruitEconomique: {
      NP: 52.2,
      Usuf: 47.8,
    },
    tauxDeRente: 6.24,
    coefDeCapit: 16.0,
    transactionsViageres: {
      NP: 47.0,
      DtUs: 53.0,
    },
  },
  {
    "age-monsieur": 70,
    "age-madame": 79,
    espVie: 18.5,
    usufruitEconomique: {
      NP: 52.4,
      Usuf: 47.6,
    },
    tauxDeRente: 6.26,
    coefDeCapit: 16.0,
    transactionsViageres: {
      NP: 47.2,
      DtUs: 52.8,
    },
  },
  {
    "age-monsieur": 70,
    "age-madame": 80,
    espVie: 18.4,
    usufruitEconomique: {
      NP: 52.6,
      Usuf: 47.4,
    },
    tauxDeRente: 6.29,
    coefDeCapit: 15.9,
    transactionsViageres: {
      NP: 47.3,
      DtUs: 52.7,
    },
  },

  // --------------------- 71 ans ----------------------------
  {
    "age-monsieur": 71,
    "age-madame": 51,
    espVie: 41.2,
    usufruitEconomique: {
      NP: 23.7,
      Usuf: 76.3,
    },
    tauxDeRente: 3.62,
    coefDeCapit: 27.6,
    transactionsViageres: {
      NP: 21.3,
      DtUs: 78.7,
    },
  },
  {
    "age-monsieur": 71,
    "age-madame": 52,
    espVie: 40.2,
    usufruitEconomique: {
      NP: 24.5,
      Usuf: 75.5,
    },
    tauxDeRente: 3.67,
    coefDeCapit: 27.2,
    transactionsViageres: {
      NP: 22.1,
      DtUs: 77.9,
    },
  },
  {
    "age-monsieur": 71,
    "age-madame": 53,
    espVie: 39.2,
    usufruitEconomique: {
      NP: 25.4,
      Usuf: 74.6,
    },
    tauxDeRente: 3.73,
    coefDeCapit: 26.8,
    transactionsViageres: {
      NP: 22.9,
      DtUs: 77.1,
    },
  },
  {
    "age-monsieur": 71,
    "age-madame": 54,
    espVie: 38.2,
    usufruitEconomique: {
      NP: 26.3,
      Usuf: 73.7,
    },
    tauxDeRente: 3.79,
    coefDeCapit: 26.4,
    transactionsViageres: {
      NP: 23.7,
      DtUs: 76.3,
    },
  },
  {
    "age-monsieur": 71,
    "age-madame": 55,
    espVie: 37.2,
    usufruitEconomique: {
      NP: 27.3,
      Usuf: 72.7,
    },
    tauxDeRente: 3.85,
    coefDeCapit: 26.0,
    transactionsViageres: {
      NP: 24.5,
      DtUs: 75.5,
    },
  },
  {
    "age-monsieur": 71,
    "age-madame": 56,
    espVie: 36.3,
    usufruitEconomique: {
      NP: 28.1,
      Usuf: 71.9,
    },
    tauxDeRente: 3.91,
    coefDeCapit: 25.6,
    transactionsViageres: {
      NP: 25.3,
      DtUs: 74.7,
    },
  },
  {
    "age-monsieur": 71,
    "age-madame": 57,
    espVie: 35.3,
    usufruitEconomique: {
      NP: 29.1,
      Usuf: 70.9,
    },
    tauxDeRente: 3.98,
    coefDeCapit: 25.1,
    transactionsViageres: {
      NP: 26.2,
      DtUs: 73.8,
    },
  },
  {
    "age-monsieur": 71,
    "age-madame": 58,
    espVie: 34.4,
    usufruitEconomique: {
      NP: 30.1,
      Usuf: 69.9,
    },
    tauxDeRente: 4.05,
    coefDeCapit: 24.7,
    transactionsViageres: {
      NP: 27.1,
      DtUs: 72.9,
    },
  },
  {
    "age-monsieur": 71,
    "age-madame": 59,
    espVie: 33.4,
    usufruitEconomique: {
      NP: 31.1,
      Usuf: 68.9,
    },
    tauxDeRente: 4.12,
    coefDeCapit: 24.3,
    transactionsViageres: {
      NP: 28.0,
      DtUs: 72.0,
    },
  },
  {
    "age-monsieur": 71,
    "age-madame": 60,
    espVie: 32.4,
    usufruitEconomique: {
      NP: 32.2,
      Usuf: 67.8,
    },
    tauxDeRente: 4.2,
    coefDeCapit: 23.8,
    transactionsViageres: {
      NP: 29.0,
      DtUs: 71.0,
    },
  },
  {
    "age-monsieur": 71,
    "age-madame": 61,
    espVie: 37.5,
    usufruitEconomique: {
      NP: 33.3,
      Usuf: 66.7,
    },
    tauxDeRente: 4.28,
    coefDeCapit: 23.3,
    transactionsViageres: {
      NP: 29.9,
      DtUs: 70.1,
    },
  },
  {
    "age-monsieur": 71,
    "age-madame": 62,
    espVie: 30.5,
    usufruitEconomique: {
      NP: 34.5,
      Usuf: 65.5,
    },
    tauxDeRente: 4.38,
    coefDeCapit: 22.9,
    transactionsViageres: {
      NP: 31.0,
      DtUs: 69.0,
    },
  },
  {
    "age-monsieur": 71,
    "age-madame": 63,
    espVie: 29.6,
    usufruitEconomique: {
      NP: 36.6,
      Usuf: 64.4,
    },
    tauxDeRente: 4.46,
    coefDeCapit: 22.4,
    transactionsViageres: {
      NP: 32.0,
      DtUs: 68.0,
    },
  },
  {
    "age-monsieur": 71,
    "age-madame": 64,
    espVie: 28.7,
    usufruitEconomique: {
      NP: 36.7,
      Usuf: 63.3,
    },
    tauxDeRente: 4.56,
    coefDeCapit: 21.9,
    transactionsViageres: {
      NP: 33.0,
      DtUs: 67.0,
    },
  },
  {
    "age-monsieur": 71,
    "age-madame": 65,
    espVie: 27.7,
    usufruitEconomique: {
      NP: 38.0,
      Usuf: 62.0,
    },
    tauxDeRente: 4.67,
    coefDeCapit: 21.4,
    transactionsViageres: {
      NP: 34.2,
      DtUs: 65.8,
    },
  },
  {
    "age-monsieur": 71,
    "age-madame": 66,
    espVie: 26.8,
    usufruitEconomique: {
      NP: 39.2,
      Usuf: 60.8,
    },
    tauxDeRente: 4.78,
    coefDeCapit: 20.9,
    transactionsViageres: {
      NP: 35.3,
      DtUs: 64.7,
    },
  },
  {
    "age-monsieur": 71,
    "age-madame": 67,
    espVie: 25.9,
    usufruitEconomique: {
      NP: 40.5,
      Usuf: 59.5,
    },
    tauxDeRente: 4.89,
    coefDeCapit: 20.4,
    transactionsViageres: {
      NP: 36.4,
      DtUs: 63.6,
    },
  },
  {
    "age-monsieur": 71,
    "age-madame": 68,
    espVie: 24.9,
    usufruitEconomique: {
      NP: 41.9,
      Usuf: 58.1,
    },
    tauxDeRente: 5.03,
    coefDeCapit: 79.9,
    transactionsViageres: {
      NP: 37.7,
      DtUs: 62.3,
    },
  },
  {
    "age-monsieur": 71,
    "age-madame": 69,
    espVie: 24.1,
    usufruitEconomique: {
      NP: 43.1,
      Usuf: 56.9,
    },
    tauxDeRente: 5.15,
    coefDeCapit: 19.4,
    transactionsViageres: {
      NP: 38.8,
      DtUs: 61.2,
    },
  },
  {
    "age-monsieur": 71,
    "age-madame": 70,
    espVie: 23.1,
    usufruitEconomique: {
      NP: 44.6,
      Usuf: 55.4,
    },
    tauxDeRente: 5.31,
    coefDeCapit: 18.8,
    transactionsViageres: {
      NP: 40.2,
      DtUs: 59.8,
    },
  },
  {
    "age-monsieur": 71,
    "age-madame": 71,
    espVie: 22.2,
    usufruitEconomique: {
      NP: 46.0,
      Usuf: 54.0,
    },
    tauxDeRente: 5.46,
    coefDeCapit: 18.3,
    transactionsViageres: {
      NP: 41.4,
      DtUs: 58.6,
    },
  },
  {
    "age-monsieur": 71,
    "age-madame": 72,
    espVie: 21.4,
    usufruitEconomique: {
      NP: 47.3,
      Usuf: 52.7,
    },
    tauxDeRente: 5.61,
    coefDeCapit: 17.8,
    transactionsViageres: {
      NP: 42.6,
      DtUs: 57.4,
    },
  },
  {
    "age-monsieur": 71,
    "age-madame": 73,
    espVie: 20.5,
    usufruitEconomique: {
      NP: 48.9,
      Usuf: 51.1,
    },
    tauxDeRente: 5.79,
    coefDeCapit: 17.3,
    transactionsViageres: {
      NP: 44.0,
      DtUs: 56.0,
    },
  },
  {
    "age-monsieur": 71,
    "age-madame": 74,
    espVie: 19.6,
    usufruitEconomique: {
      NP: 50.4,
      Usuf: 49.6,
    },
    tauxDeRente: 5.99,
    coefDeCapit: 16.7,
    transactionsViageres: {
      NP: 45.4,
      DtUs: 54.6,
    },
  },
  {
    "age-monsieur": 71,
    "age-madame": 75,
    espVie: 18.8,
    usufruitEconomique: {
      NP: 51.8,
      Usuf: 48.2,
    },
    tauxDeRente: 6.19,
    coefDeCapit: 16.2,
    transactionsViageres: {
      NP: 46.7,
      DtUs: 53.3,
    },
  },
  {
    "age-monsieur": 71,
    "age-madame": 76,
    espVie: 18.0,
    usufruitEconomique: {
      NP: 53.3,
      Usuf: 46.7,
    },
    tauxDeRente: 6.4,
    coefDeCapit: 15.6,
    transactionsViageres: {
      NP: 48.0,
      DtUs: 52.0,
    },
  },
  {
    "age-monsieur": 71,
    "age-madame": 77,
    espVie: 17.9,
    usufruitEconomique: {
      NP: 53.5,
      Usuf: 46.5,
    },
    tauxDeRente: 6.42,
    coefDeCapit: 15.5,
    transactionsViageres: {
      NP: 48.2,
      DtUs: 51.8,
    },
  },
  {
    "age-monsieur": 71,
    "age-madame": 78,
    espVie: 17.8,
    usufruitEconomique: {
      NP: 53.7,
      Usuf: 46.3,
    },
    tauxDeRente: 6.45,
    coefDeCapit: 15.5,
    transactionsViageres: {
      NP: 48.3,
      DtUs: 51.7,
    },
  },
  {
    "age-monsieur": 71,
    "age-madame": 79,
    espVie: 17.7,
    usufruitEconomique: {
      NP: 53.9,
      Usuf: 46.1,
    },
    tauxDeRente: 6.48,
    coefDeCapit: 15.4,
    transactionsViageres: {
      NP: 48.5,
      DtUs: 51.5,
    },
  },
  {
    "age-monsieur": 71,
    "age-madame": 80,
    espVie: 17.6,
    usufruitEconomique: {
      NP: 54.1,
      Usuf: 45.9,
    },
    tauxDeRente: 6.51,
    coefDeCapit: 15.4,
    transactionsViageres: {
      NP: 48.7,
      DtUs: 51.3,
    },
  },
  {
    "age-monsieur": 71,
    "age-madame": 81,
    espVie: 17.5,
    usufruitEconomique: {
      NP: 54.3,
      Usuf: 45.7,
    },
    tauxDeRente: 6.54,
    coefDeCapit: 15.3,
    transactionsViageres: {
      NP: 48.8,
      DtUs: 51.2,
    },
  },

  // --------------------- 72 ans ----------------------------

  {
    "age-monsieur": 72,
    "age-madame": 52,
    espVie: 40.1,
    usufruitEconomique: {
      NP: 24.6,
      Usuf: 75.4,
    },
    tauxDeRente: 3.68,
    coefDeCapit: 27.2,
    transactionsViageres: {
      NP: 22.2,
      DtUs: 77.8,
    },
  },
  {
    "age-monsieur": 72,
    "age-madame": 53,
    espVie: 39.2,
    usufruitEconomique: {
      NP: 25.4,
      Usuf: 74.6,
    },
    tauxDeRente: 3.73,
    coefDeCapit: 26.8,
    transactionsViageres: {
      NP: 22.9,
      DtUs: 77.1,
    },
  },
  {
    "age-monsieur": 72,
    "age-madame": 54,
    espVie: 38.1,
    usufruitEconomique: {
      NP: 26.4,
      Usuf: 73.6,
    },
    tauxDeRente: 3.8,
    coefDeCapit: 26.4,
    transactionsViageres: {
      NP: 23.8,
      DtUs: 76.2,
    },
  },
  {
    "age-monsieur": 72,
    "age-madame": 55,
    espVie: 37.2,
    usufruitEconomique: {
      NP: 27.3,
      Usuf: 72.7,
    },
    tauxDeRente: 3.85,
    coefDeCapit: 26.0,
    transactionsViageres: {
      NP: 24.5,
      DtUs: 75.5,
    },
  },
  {
    "age-monsieur": 72,
    "age-madame": 56,
    espVie: 36.2,
    usufruitEconomique: {
      NP: 28.2,
      Usuf: 71.8,
    },
    tauxDeRente: 3.92,
    coefDeCapit: 25.5,
    transactionsViageres: {
      NP: 25.4,
      DtUs: 74.6,
    },
  },
  {
    "age-monsieur": 72,
    "age-madame": 57,
    espVie: 35.2,
    usufruitEconomique: {
      NP: 29.2,
      Usuf: 70.8,
    },
    tauxDeRente: 3.99,
    coefDeCapit: 25.1,
    transactionsViageres: {
      NP: 26.3,
      DtUs: 73.7,
    },
  },
  {
    "age-monsieur": 72,
    "age-madame": 58,
    espVie: 34.3,
    usufruitEconomique: {
      NP: 30.2,
      Usuf: 69.8,
    },
    tauxDeRente: 4.05,
    coefDeCapit: 24.7,
    transactionsViageres: {
      NP: 27.2,
      DtUs: 72.8,
    },
  },
  {
    "age-monsieur": 72,
    "age-madame": 59,
    espVie: 33.4,
    usufruitEconomique: {
      NP: 31.1,
      Usuf: 68.9,
    },
    tauxDeRente: 4.12,
    coefDeCapit: 24.3,
    transactionsViageres: {
      NP: 28.0,
      DtUs: 72.0,
    },
  },
  {
    "age-monsieur": 72,
    "age-madame": 60,
    espVie: 32.4,
    usufruitEconomique: {
      NP: 32.2,
      Usuf: 67.8,
    },
    tauxDeRente: 4.2,
    coefDeCapit: 23.8,
    transactionsViageres: {
      NP: 29.0,
      DtUs: 71.0,
    },
  },
  {
    "age-monsieur": 72,
    "age-madame": 61,
    espVie: 31.4,
    usufruitEconomique: {
      NP: 33.4,
      Usuf: 66.6,
    },
    tauxDeRente: 4.29,
    coefDeCapit: 23.3,
    transactionsViageres: {
      NP: 30.0,
      DtUs: 70.0,
    },
  },
  {
    "age-monsieur": 72,
    "age-madame": 62,
    espVie: 30.5,
    usufruitEconomique: {
      NP: 34.5,
      Usuf: 65.5,
    },
    tauxDeRente: 4.38,
    coefDeCapit: 22.9,
    transactionsViageres: {
      NP: 31.0,
      DtUs: 69.0,
    },
  },
  {
    "age-monsieur": 72,
    "age-madame": 63,
    espVie: 29.5,
    usufruitEconomique: {
      NP: 35.7,
      Usuf: 64.3,
    },
    tauxDeRente: 4.47,
    coefDeCapit: 22.4,
    transactionsViageres: {
      NP: 32.1,
      DtUs: 67.9,
    },
  },
  {
    "age-monsieur": 72,
    "age-madame": 64,
    espVie: 28.6,
    usufruitEconomique: {
      NP: 36.8,
      Usuf: 63.2,
    },
    tauxDeRente: 4.57,
    coefDeCapit: 21.9,
    transactionsViageres: {
      NP: 33.1,
      DtUs: 66.9,
    },
  },
  {
    "age-monsieur": 72,
    "age-madame": 65,
    espVie: 27.7,
    usufruitEconomique: {
      NP: 38.0,
      Usuf: 62.0,
    },
    tauxDeRente: 4.67,
    coefDeCapit: 21.4,
    transactionsViageres: {
      NP: 34.2,
      DtUs: 65.8,
    },
  },
  {
    "age-monsieur": 72,
    "age-madame": 66,
    espVie: 26.7,
    usufruitEconomique: {
      NP: 39.3,
      Usuf: 60.7,
    },
    tauxDeRente: 4.79,
    coefDeCapit: 20.91,
    transactionsViageres: {
      NP: 35.4,
      DtUs: 64.6,
    },
  },
  {
    "age-monsieur": 72,
    "age-madame": 67,
    espVie: 25.9,
    usufruitEconomique: {
      NP: 40.5,
      Usuf: 59.5,
    },
    tauxDeRente: 4.89,
    coefDeCapit: 20.4,
    transactionsViageres: {
      NP: 36.4,
      DtUs: 63.6,
    },
  },
  {
    "age-monsieur": 72,
    "age-madame": 68,
    espVie: 24.9,
    usufruitEconomique: {
      NP: 41.9,
      Usuf: 58.1,
    },
    tauxDeRente: 5.03,
    coefDeCapit: 19.9,
    transactionsViageres: {
      NP: 37.7,
      DtUs: 62.3,
    },
  },
  {
    "age-monsieur": 72,
    "age-madame": 69,
    espVie: 24.1,
    usufruitEconomique: {
      NP: 43.1,
      Usuf: 56.9,
    },
    tauxDeRente: 5.15,
    coefDeCapit: 19.4,
    transactionsViageres: {
      NP: 38.8,
      DtUs: 61.2,
    },
  },
  {
    "age-monsieur": 72,
    "age-madame": 70,
    espVie: 23.1,
    usufruitEconomique: {
      NP: 44.6,
      Usuf: 55.4,
    },
    tauxDeRente: 5.31,
    coefDeCapit: 18.8,
    transactionsViageres: {
      NP: 40.2,
      DtUs: 59.8,
    },
  },
  {
    "age-monsieur": 72,
    "age-madame": 71,
    espVie: 22.2,
    usufruitEconomique: {
      NP: 46.0,
      Usuf: 54.0,
    },
    tauxDeRente: 5.46,
    coefDeCapit: 17.8,
    transactionsViageres: {
      NP: 41.4,
      DtUs: 58.6,
    },
  },
  {
    "age-monsieur": 72,
    "age-madame": 72,
    espVie: 21.3,
    usufruitEconomique: {
      NP: 47.5,
      Usuf: 52.5,
    },
    tauxDeRente: 5.63,
    coefDeCapit: 17.2,
    transactionsViageres: {
      NP: 42.8,
      DtUs: 57.2,
    },
  },
  {
    "age-monsieur": 72,
    "age-madame": 73,
    espVie: 20.4,
    usufruitEconomique: {
      NP: 49.0,
      Usuf: 51.0,
    },
    tauxDeRente: 5.81,
    coefDeCapit: 16.7,
    transactionsViageres: {
      NP: 44.1,
      DtUs: 55.9,
    },
  },
  {
    "age-monsieur": 72,
    "age-madame": 74,
    espVie: 19.6,
    usufruitEconomique: {
      NP: 50.4,
      Usuf: 49.6,
    },
    tauxDeRente: 5.99,
    coefDeCapit: 16.7,
    transactionsViageres: {
      NP: 45.4,
      DtUs: 54.6,
    },
  },
  {
    "age-monsieur": 72,
    "age-madame": 75,
    espVie: 18.7,
    usufruitEconomique: {
      NP: 52.0,
      Usuf: 48.0,
    },
    tauxDeRente: 6.21,
    coefDeCapit: 16.1,
    transactionsViageres: {
      NP: 46.8,
      DtUs: 53.2,
    },
  },
  {
    "age-monsieur": 72,
    "age-madame": 76,
    espVie: 17.9,
    usufruitEconomique: {
      NP: 53.5,
      Usuf: 46.5,
    },
    tauxDeRente: 6.42,
    coefDeCapit: 15.6,
    transactionsViageres: {
      NP: 48.2,
      DtUs: 51.8,
    },
  },
  {
    "age-monsieur": 72,
    "age-madame": 77,
    espVie: 17.2,
    usufruitEconomique: {
      NP: 54.8,
      Usuf: 45.2,
    },
    tauxDeRente: 6.63,
    coefDeCapit: 15.1,
    transactionsViageres: {
      NP: 49.3,
      DtUs: 50.7,
    },
  },
  {
    "age-monsieur": 72,
    "age-madame": 78,
    espVie: 17.0,
    usufruitEconomique: {
      NP: 55.2,
      Usuf: 44.8,
    },
    tauxDeRente: 6.69,
    coefDeCapit: 15.0,
    transactionsViageres: {
      NP: 49.7,
      DtUs: 50.3,
    },
  },
  {
    "age-monsieur": 72,
    "age-madame": 79,
    espVie: 16.9,
    usufruitEconomique: {
      NP: 55.4,
      Usuf: 44.6,
    },
    tauxDeRente: 6.72,
    coefDeCapit: 14.9,
    transactionsViageres: {
      NP: 49.9,
      DtUs: 50.1,
    },
  },
  {
    "age-monsieur": 72,
    "age-madame": 80,
    espVie: 16.8,
    usufruitEconomique: {
      NP: 55.6,
      Usuf: 44.4,
    },
    tauxDeRente: 6.75,
    coefDeCapit: 14.8,
    transactionsViageres: {
      NP: 50.0,
      DtUs: 50.0,
    },
  },
  {
    "age-monsieur": 72,
    "age-madame": 81,
    espVie: 16.7,
    usufruitEconomique: {
      NP: 55.8,
      Usuf: 44.2,
    },
    tauxDeRente: 6.78,
    coefDeCapit: 14.7,
    transactionsViageres: {
      NP: 50.2,
      DtUs: 49.8,
    },
  },
  {
    "age-monsieur": 72,
    "age-madame": 82,
    espVie: 16.6,
    usufruitEconomique: {
      NP: 56.0,
      Usuf: 44.0,
    },
    tauxDeRente: 6.81,
    coefDeCapit: 14.7,
    transactionsViageres: {
      NP: 50.4,
      DtUs: 49.6,
    },
  },

  // --------------------- 73 ans ----------------------------

  {
    "age-monsieur": 73,
    "age-madame": 53,
    espVie: 39.1,
    usufruitEconomique: {
      NP: 25.5,
      Usuf: 74.5,
    },
    tauxDeRente: 3.74,
    coefDeCapit: 26.8,
    transactionsViageres: {
      NP: 23.0,
      DtUs: 77.0,
    },
  },
  {
    "age-monsieur": 73,
    "age-madame": 54,
    espVie: 38.1,
    usufruitEconomique: {
      NP: 26.4,
      Usuf: 73.6,
    },
    tauxDeRente: 3.8,
    coefDeCapit: 26.4,
    transactionsViageres: {
      NP: 23.8,
      DtUs: 76.2,
    },
  },
  {
    "age-monsieur": 73,
    "age-madame": 55,
    espVie: 37.1,
    usufruitEconomique: {
      NP: 27.4,
      Usuf: 72.6,
    },
    tauxDeRente: 3.86,
    coefDeCapit: 25.9,
    transactionsViageres: {
      NP: 24.6,
      DtUs: 75.4,
    },
  },
  {
    "age-monsieur": 73,
    "age-madame": 56,
    espVie: 36.1,
    usufruitEconomique: {
      NP: 28.3,
      Usuf: 71.7,
    },
    tauxDeRente: 3.92,
    coefDeCapit: 25.5,
    transactionsViageres: {
      NP: 25.5,
      DtUs: 74.5,
    },
  },
  {
    "age-monsieur": 73,
    "age-madame": 57,
    espVie: 35.1,
    usufruitEconomique: {
      NP: 29.3,
      Usuf: 70.7,
    },
    tauxDeRente: 3.99,
    coefDeCapit: 25.0,
    transactionsViageres: {
      NP: 26.4,
      DtUs: 73.6,
    },
  },
  {
    "age-monsieur": 73,
    "age-madame": 58,
    espVie: 34.3,
    usufruitEconomique: {
      NP: 30.2,
      Usuf: 69.8,
    },
    tauxDeRente: 4.05,
    coefDeCapit: 24.7,
    transactionsViageres: {
      NP: 27.2,
      DtUs: 72.8,
    },
  },
  {
    "age-monsieur": 73,
    "age-madame": 59,
    espVie: 33.3,
    usufruitEconomique: {
      NP: 31.2,
      Usuf: 68.8,
    },
    tauxDeRente: 4.13,
    coefDeCapit: 24.2,
    transactionsViageres: {
      NP: 28.1,
      DtUs: 71.9,
    },
  },
  {
    "age-monsieur": 73,
    "age-madame": 60,
    espVie: 32.3,
    usufruitEconomique: {
      NP: 32.4,
      Usuf: 67.6,
    },
    tauxDeRente: 4.21,
    coefDeCapit: 23.7,
    transactionsViageres: {
      NP: 29.1,
      DtUs: 70.9,
    },
  },
  {
    "age-monsieur": 73,
    "age-madame": 61,
    espVie: 31.4,
    usufruitEconomique: {
      NP: 33.4,
      Usuf: 66.6,
    },
    tauxDeRente: 4.29,
    coefDeCapit: 23.3,
    transactionsViageres: {
      NP: 30.0,
      DtUs: 70.0,
    },
  },
  {
    "age-monsieur": 73,
    "age-madame": 62,
    espVie: 30.4,
    usufruitEconomique: {
      NP: 34.6,
      Usuf: 65.4,
    },
    tauxDeRente: 4.38,
    coefDeCapit: 22.8,
    transactionsViageres: {
      NP: 31.1,
      DtUs: 68.9,
    },
  },
  {
    "age-monsieur": 73,
    "age-madame": 63,
    espVie: 29.5,
    usufruitEconomique: {
      NP: 35.7,
      Usuf: 64.3,
    },
    tauxDeRente: 4.47,
    coefDeCapit: 22.4,
    transactionsViageres: {
      NP: 32.1,
      DtUs: 67.9,
    },
  },
  {
    "age-monsieur": 73,
    "age-madame": 64,
    espVie: 28.6,
    usufruitEconomique: {
      NP: 36.8,
      Usuf: 63.2,
    },
    tauxDeRente: 4.57,
    coefDeCapit: 21.9,
    transactionsViageres: {
      NP: 33.1,
      DtUs: 66.9,
    },
  },
  {
    "age-monsieur": 73,
    "age-madame": 65,
    espVie: 27.6,
    usufruitEconomique: {
      NP: 38.1,
      Usuf: 61.9,
    },
    tauxDeRente: 4.68,
    coefDeCapit: 21.4,
    transactionsViageres: {
      NP: 34.3,
      DtUs: 65.7,
    },
  },
  {
    "age-monsieur": 73,
    "age-madame": 66,
    espVie: 26.7,
    usufruitEconomique: {
      NP: 39.3,
      Usuf: 60.7,
    },
    tauxDeRente: 4.79,
    coefDeCapit: 20.9,
    transactionsViageres: {
      NP: 35.4,
      DtUs: 64.6,
    },
  },
  {
    "age-monsieur": 73,
    "age-madame": 67,
    espVie: 25.8,
    usufruitEconomique: {
      NP: 40.6,
      Usuf: 59.4,
    },
    tauxDeRente: 4.9,
    coefDeCapit: 20.4,
    transactionsViageres: {
      NP: 36.5,
      DtUs: 63.5,
    },
  },
  {
    "age-monsieur": 73,
    "age-madame": 68,
    espVie: 24.8,
    usufruitEconomique: {
      NP: 42.0,
      Usuf: 58.0,
    },
    tauxDeRente: 5.04,
    coefDeCapit: 19.8,
    transactionsViageres: {
      NP: 37.8,
      DtUs: 62.2,
    },
  },
  {
    "age-monsieur": 73,
    "age-madame": 69,
    espVie: 24.0,
    usufruitEconomique: {
      NP: 43.2,
      Usuf: 56.8,
    },
    tauxDeRente: 5.16,
    coefDeCapit: 19.4,
    transactionsViageres: {
      NP: 38.9,
      DtUs: 61.1,
    },
  },
  {
    "age-monsieur": 73,
    "age-madame": 70,
    espVie: 23.0,
    usufruitEconomique: {
      NP: 44.8,
      Usuf: 55.2,
    },
    tauxDeRente: 5.32,
    coefDeCapit: 18.8,
    transactionsViageres: {
      NP: 40.3,
      DtUs: 59.7,
    },
  },
  {
    "age-monsieur": 73,
    "age-madame": 71,
    espVie: 22.1,
    usufruitEconomique: {
      NP: 46.2,
      Usuf: 53.8,
    },
    tauxDeRente: 5.48,
    coefDeCapit: 18.2,
    transactionsViageres: {
      NP: 41.6,
      DtUs: 58.4,
    },
  },
  {
    "age-monsieur": 73,
    "age-madame": 72,
    espVie: 21.2,
    usufruitEconomique: {
      NP: 47.7,
      Usuf: 52.3,
    },
    tauxDeRente: 5.65,
    coefDeCapit: 17.7,
    transactionsViageres: {
      NP: 42.9,
      DtUs: 57.1,
    },
  },
  {
    "age-monsieur": 73,
    "age-madame": 73,
    espVie: 20.4,
    usufruitEconomique: {
      NP: 49.0,
      Usuf: 51.0,
    },
    tauxDeRente: 5.81,
    coefDeCapit: 17.2,
    transactionsViageres: {
      NP: 44.1,
      DtUs: 55.9,
    },
  },
  {
    "age-monsieur": 73,
    "age-madame": 74,
    espVie: 19.5,
    usufruitEconomique: {
      NP: 50.6,
      Usuf: 49.4,
    },
    tauxDeRente: 6.02,
    coefDeCapit: 16.6,
    transactionsViageres: {
      NP: 45.5,
      DtUs: 54.5,
    },
  },
  {
    "age-monsieur": 73,
    "age-madame": 75,
    espVie: 18.7,
    usufruitEconomique: {
      NP: 52.0,
      Usuf: 48.0,
    },
    tauxDeRente: 6.21,
    coefDeCapit: 16.1,
    transactionsViageres: {
      NP: 46.8,
      DtUs: 53.2,
    },
  },
  {
    "age-monsieur": 73,
    "age-madame": 76,
    espVie: 17.8,
    usufruitEconomique: {
      NP: 53.7,
      Usuf: 46.3,
    },
    tauxDeRente: 6.45,
    coefDeCapit: 15.5,
    transactionsViageres: {
      NP: 48.3,
      DtUs: 51.7,
    },
  },
  {
    "age-monsieur": 73,
    "age-madame": 77,
    espVie: 17.0,
    usufruitEconomique: {
      NP: 55.2,
      Usuf: 44.8,
    },
    tauxDeRente: 6.69,
    coefDeCapit: 15.0,
    transactionsViageres: {
      NP: 49.7,
      DtUs: 50.3,
    },
  },
  {
    "age-monsieur": 73,
    "age-madame": 78,
    espVie: 16.4,
    usufruitEconomique: {
      NP: 56.4,
      Usuf: 43.6,
    },
    tauxDeRente: 6.88,
    coefDeCapit: 14.5,
    transactionsViageres: {
      NP: 50.7,
      DtUs: 49.3,
    },
  },
  {
    "age-monsieur": 73,
    "age-madame": 79,
    espVie: 16.2,
    usufruitEconomique: {
      NP: 56.8,
      Usuf: 43.2,
    },
    tauxDeRente: 6.95,
    coefDeCapit: 14.4,
    transactionsViageres: {
      NP: 51.1,
      DtUs: 48.9,
    },
  },
  {
    "age-monsieur": 73,
    "age-madame": 80,
    espVie: 16.1,
    usufruitEconomique: {
      NP: 57.0,
      Usuf: 43.0,
    },
    tauxDeRente: 6.98,
    coefDeCapit: 14.3,
    transactionsViageres: {
      NP: 51.3,
      DtUs: 48.7,
    },
  },
  {
    "age-monsieur": 73,
    "age-madame": 81,
    espVie: 16.0,
    usufruitEconomique: {
      NP: 57.2,
      Usuf: 42.8,
    },
    tauxDeRente: 7.01,
    coefDeCapit: 14.3,
    transactionsViageres: {
      NP: 51.5,
      DtUs: 48.5,
    },
  },
  {
    "age-monsieur": 73,
    "age-madame": 82,
    espVie: 15.9,
    usufruitEconomique: {
      NP: 57.4,
      Usuf: 42.6,
    },
    tauxDeRente: 7.05,
    coefDeCapit: 14.2,
    transactionsViageres: {
      NP: 51.6,
      DtUs: 48.4,
    },
  },
  {
    "age-monsieur": 73,
    "age-madame": 83,
    espVie: 15.8,
    usufruitEconomique: {
      NP: 57.6,
      Usuf: 42.4,
    },
    tauxDeRente: 7.08,
    coefDeCapit: 14.1,
    transactionsViageres: {
      NP: 51.8,
      DtUs: 48.2,
    },
  },

  // --------------------- 74 ans ----------------------------

  {
    "age-monsieur": 74,
    "age-madame": 54,
    espVie: 38.0,
    usufruitEconomique: {
      NP: 26.5,
      Usuf: 73.5,
    },
    tauxDeRente: 3.8,
    coefDeCapit: 26.3,
    transactionsViageres: {
      NP: 23.9,
      DtUs: 76.1,
    },
  },
  {
    "age-monsieur": 74,
    "age-madame": 55,
    espVie: 37.1,
    usufruitEconomique: {
      NP: 27.4,
      Usuf: 72.6,
    },
    tauxDeRente: 3.86,
    coefDeCapit: 25.9,
    transactionsViageres: {
      NP: 24.6,
      DtUs: 75.4,
    },
  },
  {
    "age-monsieur": 74,
    "age-madame": 56,
    espVie: 36.1,
    usufruitEconomique: {
      NP: 28.3,
      Usuf: 71.7,
    },
    tauxDeRente: 3.92,
    coefDeCapit: 25.5,
    transactionsViageres: {
      NP: 25.5,
      DtUs: 74.5,
    },
  },
  {
    "age-monsieur": 74,
    "age-madame": 57,
    espVie: 35.1,
    usufruitEconomique: {
      NP: 29.3,
      Usuf: 70.7,
    },
    tauxDeRente: 3.99,
    coefDeCapit: 25.0,
    transactionsViageres: {
      NP: 26.4,
      DtUs: 73.6,
    },
  },
  {
    "age-monsieur": 74,
    "age-madame": 58,
    espVie: 34.2,
    usufruitEconomique: {
      NP: 30.3,
      Usuf: 69.7,
    },
    tauxDeRente: 4.06,
    coefDeCapit: 24.6,
    transactionsViageres: {
      NP: 27.2,
      DtUs: 72.8,
    },
  },
  {
    "age-monsieur": 74,
    "age-madame": 59,
    espVie: 33.3,
    usufruitEconomique: {
      NP: 31.2,
      Usuf: 68.8,
    },
    tauxDeRente: 4.13,
    coefDeCapit: 24.2,
    transactionsViageres: {
      NP: 28.1,
      DtUs: 71.9,
    },
  },
  {
    "age-monsieur": 74,
    "age-madame": 60,
    espVie: 32.3,
    usufruitEconomique: {
      NP: 32.4,
      Usuf: 67.6,
    },
    tauxDeRente: 4.21,
    coefDeCapit: 23.7,
    transactionsViageres: {
      NP: 29.1,
      DtUs: 70.9,
    },
  },
  {
    "age-monsieur": 74,
    "age-madame": 61,
    espVie: 31.3,
    usufruitEconomique: {
      NP: 33.5,
      Usuf: 66.5,
    },
    tauxDeRente: 4.3,
    coefDeCapit: 23.3,
    transactionsViageres: {
      NP: 30.2,
      DtUs: 69.8,
    },
  },
  {
    "age-monsieur": 74,
    "age-madame": 62,
    espVie: 30.4,
    usufruitEconomique: {
      NP: 34.6,
      Usuf: 65.4,
    },
    tauxDeRente: 4.38,
    coefDeCapit: 22.8,
    transactionsViageres: {
      NP: 31.1,
      DtUs: 68.9,
    },
  },
  {
    "age-monsieur": 74,
    "age-madame": 63,
    espVie: 29.4,
    usufruitEconomique: {
      NP: 35.8,
      Usuf: 64.2,
    },
    tauxDeRente: 4.48,
    coefDeCapit: 22.3,
    transactionsViageres: {
      NP: 32.2,
      DtUs: 67.8,
    },
  },
  {
    "age-monsieur": 74,
    "age-madame": 64,
    espVie: 28.5,
    usufruitEconomique: {
      NP: 36.9,
      Usuf: 63.1,
    },
    tauxDeRente: 4.58,
    coefDeCapit: 21.8,
    transactionsViageres: {
      NP: 33.2,
      DtUs: 66.8,
    },
  },
  {
    "age-monsieur": 74,
    "age-madame": 65,
    espVie: 27.6,
    usufruitEconomique: {
      NP: 38.1,
      Usuf: 61.9,
    },
    tauxDeRente: 4.68,
    coefDeCapit: 21.4,
    transactionsViageres: {
      NP: 34.3,
      DtUs: 65.7,
    },
  },
  {
    "age-monsieur": 74,
    "age-madame": 66,
    espVie: 26.6,
    usufruitEconomique: {
      NP: 39.5,
      Usuf: 60.5,
    },
    tauxDeRente: 4.8,
    coefDeCapit: 20.3,
    transactionsViageres: {
      NP: 35.5,
      DtUs: 64.5,
    },
  },
  {
    "age-monsieur": 74,
    "age-madame": 67,
    espVie: 25.8,
    usufruitEconomique: {
      NP: 40.6,
      Usuf: 59.4,
    },
    tauxDeRente: 4.9,
    coefDeCapit: 20.4,
    transactionsViageres: {
      NP: 36.5,
      DtUs: 63.5,
    },
  },
  {
    "age-monsieur": 74,
    "age-madame": 68,
    espVie: 24.8,
    usufruitEconomique: {
      NP: 42.0,
      Usuf: 58.0,
    },
    tauxDeRente: 5.04,
    coefDeCapit: 19.8,
    transactionsViageres: {
      NP: 37.8,
      DtUs: 62.2,
    },
  },
  {
    "age-monsieur": 74,
    "age-madame": 69,
    espVie: 24.0,
    usufruitEconomique: {
      NP: 43.2,
      Usuf: 56.8,
    },
    tauxDeRente: 5.16,
    coefDeCapit: 19.4,
    transactionsViageres: {
      NP: 38.9,
      DtUs: 61.1,
    },
  },
  {
    "age-monsieur": 74,
    "age-madame": 70,
    espVie: 23.0,
    usufruitEconomique: {
      NP: 44.8,
      Usuf: 55.2,
    },
    tauxDeRente: 5.32,
    coefDeCapit: 18.8,
    transactionsViageres: {
      NP: 40.3,
      DtUs: 59.7,
    },
  },
  {
    "age-monsieur": 74,
    "age-madame": 71,
    espVie: 22.1,
    usufruitEconomique: {
      NP: 46.2,
      Usuf: 53.8,
    },
    tauxDeRente: 5.48,
    coefDeCapit: 18.2,
    transactionsViageres: {
      NP: 41.6,
      DtUs: 58.4,
    },
  },
  {
    "age-monsieur": 74,
    "age-madame": 72,
    espVie: 21.2,
    usufruitEconomique: {
      NP: 47.7,
      Usuf: 52.3,
    },
    tauxDeRente: 5.65,
    coefDeCapit: 17.7,
    transactionsViageres: {
      NP: 42.9,
      DtUs: 57.1,
    },
  },
  {
    "age-monsieur": 74,
    "age-madame": 73,
    espVie: 20.3,
    usufruitEconomique: {
      NP: 49.2,
      Usuf: 50.8,
    },
    tauxDeRente: 5.84,
    coefDeCapit: 17.1,
    transactionsViageres: {
      NP: 44.3,
      DtUs: 55.7,
    },
  },
  {
    "age-monsieur": 74,
    "age-madame": 74,
    espVie: 19.5,
    usufruitEconomique: {
      NP: 50.6,
      Usuf: 49.4,
    },
    tauxDeRente: 6.02,
    coefDeCapit: 16.6,
    transactionsViageres: {
      NP: 45.5,
      DtUs: 54.5,
    },
  },
  {
    "age-monsieur": 74,
    "age-madame": 75,
    espVie: 18.6,
    usufruitEconomique: {
      NP: 52.2,
      Usuf: 47.8,
    },
    tauxDeRente: 6.24,
    coefDeCapit: 16.0,
    transactionsViageres: {
      NP: 47.0,
      DtUs: 53.0,
    },
  },
  {
    "age-monsieur": 74,
    "age-madame": 76,
    espVie: 17.8,
    usufruitEconomique: {
      NP: 53.7,
      Usuf: 46.3,
    },
    tauxDeRente: 6.45,
    coefDeCapit: 15.5,
    transactionsViageres: {
      NP: 48.3,
      DtUs: 51.7,
    },
  },
  {
    "age-monsieur": 74,
    "age-madame": 77,
    espVie: 16.9,
    usufruitEconomique: {
      NP: 55.4,
      Usuf: 44.6,
    },
    tauxDeRente: 6.72,
    coefDeCapit: 14.9,
    transactionsViageres: {
      NP: 49.9,
      DtUs: 50.1,
    },
  },
  {
    "age-monsieur": 74,
    "age-madame": 78,
    espVie: 16.1,
    usufruitEconomique: {
      NP: 57.0,
      Usuf: 43.0,
    },
    tauxDeRente: 6.98,
    coefDeCapit: 14.3,
    transactionsViageres: {
      NP: 51.3,
      DtUs: 48.7,
    },
  },
  {
    "age-monsieur": 74,
    "age-madame": 79,
    espVie: 15.6,
    usufruitEconomique: {
      NP: 58.0,
      Usuf: 42.0,
    },
    tauxDeRente: 7.16,
    coefDeCapit: 14.0,
    transactionsViageres: {
      NP: 52.2,
      DtUs: 47.8,
    },
  },
  {
    "age-monsieur": 74,
    "age-madame": 80,
    espVie: 15.4,
    usufruitEconomique: {
      NP: 58.4,
      Usuf: 41.6,
    },
    tauxDeRente: 7.23,
    coefDeCapit: 13.8,
    transactionsViageres: {
      NP: 52.5,
      DtUs: 47.5,
    },
  },
  {
    "age-monsieur": 74,
    "age-madame": 81,
    espVie: 15.3,
    usufruitEconomique: {
      NP: 58.6,
      Usuf: 41.4,
    },
    tauxDeRente: 7.27,
    coefDeCapit: 13.8,
    transactionsViageres: {
      NP: 52.7,
      DtUs: 47.3,
    },
  },
  {
    "age-monsieur": 74,
    "age-madame": 82,
    espVie: 15.2,
    usufruitEconomique: {
      NP: 58.8,
      Usuf: 41.2,
    },
    tauxDeRente: 7.31,
    coefDeCapit: 13.7,
    transactionsViageres: {
      NP: 52.9,
      DtUs: 47.1,
    },
  },
  {
    "age-monsieur": 74,
    "age-madame": 83,
    espVie: 15.7,
    usufruitEconomique: {
      NP: 59.0,
      Usuf: 41.0,
    },
    tauxDeRente: 7.35,
    coefDeCapit: 13.6,
    transactionsViageres: {
      NP: 53.1,
      DtUs: 46.9,
    },
  },
  {
    "age-monsieur": 74,
    "age-madame": 84,
    espVie: 15.0,
    usufruitEconomique: {
      NP: 59.2,
      Usuf: 40.8,
    },
    tauxDeRente: 7.39,
    coefDeCapit: 13.5,
    transactionsViageres: {
      NP: 53.3,
      DtUs: 46.7,
    },
  },

  // --------------------- 75 ans ----------------------------
  {
    "age-monsieur": 75,
    "age-madame": 55,
    espVie: 36.8,
    usufruitEconomique: {
      NP: 27.6,
      Usuf: 72.4,
    },
    tauxDeRente: 3.88,
    coefDeCapit: 25.8,
    transactionsViageres: {
      NP: 24.9,
      DtUs: 75.1,
    },
  },
  {
    "age-monsieur": 75,
    "age-madame": 56,
    espVie: 35.8,
    usufruitEconomique: {
      NP: 28.6,
      Usuf: 71.4,
    },
    tauxDeRente: 3.94,
    coefDeCapit: 25.3,
    transactionsViageres: {
      NP: 25.8,
      DtUs: 74.2,
    },
  },
  {
    "age-monsieur": 75,
    "age-madame": 57,
    espVie: 34.9,
    usufruitEconomique: {
      NP: 29.5,
      Usuf: 70.5,
    },
    tauxDeRente: 4.01,
    coefDeCapit: 24.9,
    transactionsViageres: {
      NP: 26.6,
      DtUs: 73.4,
    },
  },
  {
    "age-monsieur": 75,
    "age-madame": 58,
    espVie: 33.9,
    usufruitEconomique: {
      NP: 30.6,
      Usuf: 69.4,
    },
    tauxDeRente: 4.08,
    coefDeCapit: 24.5,
    transactionsViageres: {
      NP: 27.5,
      DtUs: 72.5,
    },
  },
  {
    "age-monsieur": 75,
    "age-madame": 59,
    espVie: 33.0,
    usufruitEconomique: {
      NP: 31.6,
      Usuf: 68.4,
    },
    tauxDeRente: 4.16,
    coefDeCapit: 24.1,
    transactionsViageres: {
      NP: 28.4,
      DtUs: 71.6,
    },
  },
  {
    "age-monsieur": 75,
    "age-madame": 60,
    espVie: 32.0,
    usufruitEconomique: {
      NP: 32.7,
      Usuf: 67.3,
    },
    tauxDeRente: 4.24,
    coefDeCapit: 23.6,
    transactionsViageres: {
      NP: 29.4,
      DtUs: 70.6,
    },
  },
  {
    "age-monsieur": 75,
    "age-madame": 61,
    espVie: 31.1,
    usufruitEconomique: {
      NP: 33.7,
      Usuf: 66.3,
    },
    tauxDeRente: 4.32,
    coefDeCapit: 23.2,
    transactionsViageres: {
      NP: 30.4,
      DtUs: 69.6,
    },
  },
  {
    "age-monsieur": 75,
    "age-madame": 62,
    espVie: 30.1,
    usufruitEconomique: {
      NP: 34.9,
      Usuf: 65.1,
    },
    tauxDeRente: 4.41,
    coefDeCapit: 22.7,
    transactionsViageres: {
      NP: 31.4,
      DtUs: 68.6,
    },
  },
  {
    "age-monsieur": 75,
    "age-madame": 63,
    espVie: 29.2,
    usufruitEconomique: {
      NP: 36.1,
      Usuf: 63.9,
    },
    tauxDeRente: 4.5,
    coefDeCapit: 22.2,
    transactionsViageres: {
      NP: 32.4,
      DtUs: 67.6,
    },
  },
  {
    "age-monsieur": 75,
    "age-madame": 64,
    espVie: 28.3,
    usufruitEconomique: {
      NP: 37.2,
      Usuf: 62.8,
    },
    tauxDeRente: 4.6,
    coefDeCapit: 21.7,
    transactionsViageres: {
      NP: 33.5,
      DtUs: 66.5,
    },
  },
  {
    "age-monsieur": 75,
    "age-madame": 65,
    espVie: 27.3,
    usufruitEconomique: {
      NP: 38.5,
      Usuf: 61.5,
    },
    tauxDeRente: 4.72,
    coefDeCapit: 21.2,
    transactionsViageres: {
      NP: 34.7,
      DtUs: 65.3,
    },
  },
  {
    "age-monsieur": 75,
    "age-madame": 66,
    espVie: 26.4,
    usufruitEconomique: {
      NP: 39.8,
      Usuf: 60.2,
    },
    tauxDeRente: 4.83,
    coefDeCapit: 20.7,
    transactionsViageres: {
      NP: 35.8,
      DtUs: 64.2,
    },
  },
  {
    "age-monsieur": 75,
    "age-madame": 67,
    espVie: 25.6,
    usufruitEconomique: {
      NP: 40.9,
      Usuf: 59.1,
    },
    tauxDeRente: 4.93,
    coefDeCapit: 20.3,
    transactionsViageres: {
      NP: 36.8,
      DtUs: 63.2,
    },
  },
  {
    "age-monsieur": 75,
    "age-madame": 68,
    espVie: 24.7,
    usufruitEconomique: {
      NP: 42.2,
      Usuf: 57.8,
    },
    tauxDeRente: 5.06,
    coefDeCapit: 19.8,
    transactionsViageres: {
      NP: 38.0,
      DtUs: 62.0,
    },
  },
  {
    "age-monsieur": 75,
    "age-madame": 69,
    espVie: 23.8,
    usufruitEconomique: {
      NP: 43.5,
      Usuf: 56.51,
    },
    tauxDeRente: 5.19,
    coefDeCapit: 19.3,
    transactionsViageres: {
      NP: 39.2,
      DtUs: 60.8,
    },
  },
  {
    "age-monsieur": 75,
    "age-madame": 70,
    espVie: 22.8,
    usufruitEconomique: {
      NP: 45.1,
      Usuf: 54.9,
    },
    tauxDeRente: 5.36,
    coefDeCapit: 18.7,
    transactionsViageres: {
      NP: 40.6,
      DtUs: 59.4,
    },
  },
  {
    "age-monsieur": 75,
    "age-madame": 71,
    espVie: 21.9,
    usufruitEconomique: {
      NP: 46.5,
      Usuf: 53.5,
    },
    tauxDeRente: 5.52,
    coefDeCapit: 18.1,
    transactionsViageres: {
      NP: 41.9,
      DtUs: 58.1,
    },
  },
  {
    "age-monsieur": 75,
    "age-madame": 72,
    espVie: 21.0,
    usufruitEconomique: {
      NP: 48.0,
      Usuf: 52.0,
    },
    tauxDeRente: 5.69,
    coefDeCapit: 17.6,
    transactionsViageres: {
      NP: 43.2,
      DtUs: 56.8,
    },
  },
  {
    "age-monsieur": 75,
    "age-madame": 73,
    espVie: 20.1,
    usufruitEconomique: {
      NP: 49.5,
      Usuf: 50.5,
    },
    tauxDeRente: 5.88,
    coefDeCapit: 17.0,
    transactionsViageres: {
      NP: 44.6,
      DtUs: 55.4,
    },
  },
  {
    "age-monsieur": 75,
    "age-madame": 74,
    espVie: 19.3,
    usufruitEconomique: {
      NP: 51.0,
      Usuf: 49.0,
    },
    tauxDeRente: 6.06,
    coefDeCapit: 16.5,
    transactionsViageres: {
      NP: 45.9,
      DtUs: 54.1,
    },
  },
  {
    "age-monsieur": 75,
    "age-madame": 75,
    espVie: 18.4,
    usufruitEconomique: {
      NP: 52.6,
      Usuf: 47.4,
    },
    tauxDeRente: 6.29,
    coefDeCapit: 15.9,
    transactionsViageres: {
      NP: 47.3,
      DtUs: 52.7,
    },
  },
  {
    "age-monsieur": 75,
    "age-madame": 76,
    espVie: 17.6,
    usufruitEconomique: {
      NP: 54.1,
      Usuf: 45.9,
    },
    tauxDeRente: 6.51,
    coefDeCapit: 15.4,
    transactionsViageres: {
      NP: 48.7,
      DtUs: 51.3,
    },
  },
  {
    "age-monsieur": 75,
    "age-madame": 77,
    espVie: 16.7,
    usufruitEconomique: {
      NP: 55.8,
      Usuf: 44.2,
    },
    tauxDeRente: 6.78,
    coefDeCapit: 14.7,
    transactionsViageres: {
      NP: 50.2,
      DtUs: 49.8,
    },
  },
  {
    "age-monsieur": 75,
    "age-madame": 78,
    espVie: 15.9,
    usufruitEconomique: {
      NP: 57.4,
      Usuf: 42.6,
    },
    tauxDeRente: 7.05,
    coefDeCapit: 14.2,
    transactionsViageres: {
      NP: 51.6,
      DtUs: 48.4,
    },
  },
  {
    "age-monsieur": 75,
    "age-madame": 79,
    espVie: 15.7,
    usufruitEconomique: {
      NP: 59.0,
      Usuf: 41.0,
    },
    tauxDeRente: 7.35,
    coefDeCapit: 13.6,
    transactionsViageres: {
      NP: 53.1,
      DtUs: 46.9,
    },
  },
  {
    "age-monsieur": 75,
    "age-madame": 80,
    espVie: 14.7,
    usufruitEconomique: {
      NP: 59.8,
      Usuf: 40.2,
    },
    tauxDeRente: 7.51,
    coefDeCapit: 13.3,
    transactionsViageres: {
      NP: 53.9,
      DtUs: 46.1,
    },
  },
  {
    "age-monsieur": 75,
    "age-madame": 81,
    espVie: 14.6,
    usufruitEconomique: {
      NP: 60.0,
      Usuf: 40.0,
    },
    tauxDeRente: 7.55,
    coefDeCapit: 13.2,
    transactionsViageres: {
      NP: 54.0,
      DtUs: 46.0,
    },
  },
  {
    "age-monsieur": 75,
    "age-madame": 82,
    espVie: 14.5,
    usufruitEconomique: {
      NP: 60.3,
      Usuf: 39.7,
    },
    tauxDeRente: 7.59,
    coefDeCapit: 13.2,
    transactionsViageres: {
      NP: 54.2,
      DtUs: 45.8,
    },
  },
  {
    "age-monsieur": 75,
    "age-madame": 83,
    espVie: 14.4,
    usufruitEconomique: {
      NP: 60.5,
      Usuf: 39.5,
    },
    tauxDeRente: 7.63,
    coefDeCapit: 13.1,
    transactionsViageres: {
      NP: 54.4,
      DtUs: 45.6,
    },
  },
  {
    "age-monsieur": 75,
    "age-madame": 84,
    espVie: 14.3,
    usufruitEconomique: {
      NP: 60.7,
      Usuf: 39.3,
    },
    tauxDeRente: 7.68,
    coefDeCapit: 13.0,
    transactionsViageres: {
      NP: 54.6,
      DtUs: 45.4,
    },
  },
  {
    "age-monsieur": 75,
    "age-madame": 85,
    espVie: 14.2,
    usufruitEconomique: {
      NP: 60.9,
      Usuf: 39.1,
    },
    tauxDeRente: 7.72,
    coefDeCapit: 13.0,
    transactionsViageres: {
      NP: 54.8,
      DtUs: 45.2,
    },
  },


  // --------------------- 76 ans ----------------------------

  {
    "age-monsieur": 76,
    "age-madame": 56,
    espVie: 35.8,
    usufruitEconomique: {
      NP: 28.6,
      Usuf: 71.4,
    },
    tauxDeRente: 3.94,
    coefDeCapit: 25.3,
    transactionsViageres: {
      NP: 25.8,
      DtUs: 74.2,
    },
  },
  {
    "age-monsieur": 76,
    "age-madame": 57,
    espVie: 34.8,
    usufruitEconomique: {
      NP: 29.6,
      Usuf: 70.4,
    },
    tauxDeRente: 4.02,
    coefDeCapit: 24.9,
    transactionsViageres: {
      NP: 26.7,
      DtUs: 73.3,
    },
  },
  {
    "age-monsieur": 76,
    "age-madame": 58,
    espVie: 33.9,
    usufruitEconomique: {
      NP: 30.6,
      Usuf: 69.4,
    },
    tauxDeRente: 4.08,
    coefDeCapit: 24.5,
    transactionsViageres: {
      NP: 27.5,
      DtUs: 72.5,
    },
  },
  {
    "age-monsieur": 76,
    "age-madame": 59,
    espVie: 33.0,
    usufruitEconomique: {
      NP: 31.6,
      Usuf: 68.4,
    },
    tauxDeRente: 4.16,
    coefDeCapit: 24.1,
    transactionsViageres: {
      NP: 28.4,
      DtUs: 71.6,
    },
  },
  {
    "age-monsieur": 76,
    "age-madame": 60,
    espVie: 32.0,
    usufruitEconomique: {
      NP: 32.7,
      Usuf: 67.3,
    },
    tauxDeRente: 4.24,
    coefDeCapit: 23.6,
    transactionsViageres: {
      NP: 29.4,
      DtUs: 70.6,
    },
  },
  {
    "age-monsieur": 76,
    "age-madame": 61,
    espVie: 31.0,
    usufruitEconomique: {
      NP: 33.9,
      Usuf: 66.1,
    },
    tauxDeRente: 4.33,
    coefDeCapit: 23.1,
    transactionsViageres: {
      NP: 30.5,
      DtUs: 69.5,
    },
  },
  {
    "age-monsieur": 76,
    "age-madame": 62,
    espVie: 30.1,
    usufruitEconomique: {
      NP: 34.9,
      Usuf: 65.1,
    },
    tauxDeRente: 4.41,
    coefDeCapit: 22.7,
    transactionsViageres: {
      NP: 31.4,
      DtUs: 68.6,
    },
  },
  {
    "age-monsieur": 76,
    "age-madame": 63,
    espVie: 29.2,
    usufruitEconomique: {
      NP: 36.1,
      Usuf: 63.9,
    },
    tauxDeRente: 4.5,
    coefDeCapit: 22.2,
    transactionsViageres: {
      NP: 32.4,
      DtUs: 67.6,
    },
  },
  {
    "age-monsieur": 76,
    "age-madame": 64,
    espVie: 28.3,
    usufruitEconomique: {
      NP: 37.2,
      Usuf: 62.8,
    },
    tauxDeRente: 4.6,
    coefDeCapit: 21.7,
    transactionsViageres: {
      NP: 33.5,
      DtUs: 66.5,
    },
  },
  {
    "age-monsieur": 76,
    "age-madame": 65,
    espVie: 27.4,
    usufruitEconomique: {
      NP: 38.4,
      Usuf: 61.6,
    },
    tauxDeRente: 4.7,
    coefDeCapit: 21.3,
    transactionsViageres: {
      NP: 34.6,
      DtUs: 65.4,
    },
  },
  {
    "age-monsieur": 76,
    "age-madame": 66,
    espVie: 26.5,
    usufruitEconomique: {
      NP: 39.6,
      Usuf: 60.4,
    },
    tauxDeRente: 4.81,
    coefDeCapit: 20.8,
    transactionsViageres: {
      NP: 35.7,
      DtUs: 64.3,
    },
  },
  {
    "age-monsieur": 76,
    "age-madame": 67,
    espVie: 25.5,
    usufruitEconomique: {
      NP: 41.0,
      Usuf: 59.0,
    },
    tauxDeRente: 4.94,
    coefDeCapit: 20.2,
    transactionsViageres: {
      NP: 36.9,
      DtUs: 63.1,
    },
  },
  {
    "age-monsieur": 76,
    "age-madame": 68,
    espVie: 24.6,
    usufruitEconomique: {
      NP: 42.3,
      Usuf: 57.7,
    },
    tauxDeRente: 5.07,
    coefDeCapit: 19.7,
    transactionsViageres: {
      NP: 38.1,
      DtUs: 61.9,
    },
  },
  {
    "age-monsieur": 76,
    "age-madame": 69,
    espVie: 23.7,
    usufruitEconomique: {
      NP: 43.7,
      Usuf: 56.3,
    },
    tauxDeRente: 5.21,
    coefDeCapit: 19.2,
    transactionsViageres: {
      NP: 39.3,
      DtUs: 60.7,
    },
  },
  {
    "age-monsieur": 76,
    "age-madame": 70,
    espVie: 22.8,
    usufruitEconomique: {
      NP: 45.1,
      Usuf: 54.9,
    },
    tauxDeRente: 5.36,
    coefDeCapit: 18.7,
    transactionsViageres: {
      NP: 40.6,
      DtUs: 59.4,
    },
  },
  {
    "age-monsieur": 76,
    "age-madame": 71,
    espVie: 21.9,
    usufruitEconomique: {
      NP: 46.5,
      Usuf: 53.5,
    },
    tauxDeRente: 5.52,
    coefDeCapit: 18.1,
    transactionsViageres: {
      NP: 41.9,
      DtUs: 58.1,
    },
  },
  {
    "age-monsieur": 76,
    "age-madame": 73,
    espVie: 20.1,
    usufruitEconomique: {
      NP: 49.5,
      Usuf: 50.5,
    },
    tauxDeRente: 5.88,
    coefDeCapit: 17.0,
    transactionsViageres: {
      NP: 44.6,
      DtUs: 55.4,
    },
  },
  {
    "age-monsieur": 76,
    "age-madame": 74,
    espVie: 19.2,
    usufruitEconomique: {
      NP: 51.1,
      Usuf: 48.9,
    },
    tauxDeRente: 6.09,
    coefDeCapit: 16.4,
    transactionsViageres: {
      NP: 46.0,
      DtUs: 54.0,
    },
  },
  {
    "age-monsieur": 76,
    "age-madame": 75,
    espVie: 18.4,
    usufruitEconomique: {
      NP: 52.6,
      Usuf: 47.4,
    },
    tauxDeRente: 6.29,
    coefDeCapit: 15.9,
    transactionsViageres: {
      NP: 47.3,
      DtUs: 52.7,
    },
  },
  {
    "age-monsieur": 76,
    "age-madame": 76,
    espVie: 17.5,
    usufruitEconomique: {
      NP: 54.3,
      Usuf: 45.7,
    },
    tauxDeRente: 6.54,
    coefDeCapit: 15.3,
    transactionsViageres: {
      NP: 48.8,
      DtUs: 51.2,
    },
  },
  {
    "age-monsieur": 76,
    "age-madame": 77,
    espVie: 16.7,
    usufruitEconomique: {
      NP: 55.8,
      Usuf: 44.2,
    },
    tauxDeRente: 6.78,
    coefDeCapit: 14.7,
    transactionsViageres: {
      NP: 50.2,
      DtUs: 49.8,
    },
  },
  {
    "age-monsieur": 76,
    "age-madame": 78,
    espVie: 15.9,
    usufruitEconomique: {
      NP: 57.4,
      Usuf: 42.6,
    },
    tauxDeRente: 7.05,
    coefDeCapit: 14.2,
    transactionsViageres: {
      NP: 51.6,
      DtUs: 48.4,
    },
  },
  {
    "age-monsieur": 76,
    "age-madame": 79,
    espVie: 15.1,
    usufruitEconomique: {
      NP: 59.0,
      Usuf: 41,
    },
    tauxDeRente: 7.35,
    coefDeCapit: 13.6,
    transactionsViageres: {
      NP: 53.1,
      DtUs: 46.9,
    },
  },
  {
    "age-monsieur": 76,
    "age-madame": 80,
    espVie: 14.3,
    usufruitEconomique: {
      NP: 60.7,
      Usuf: 39.3,
    },
    tauxDeRente: 7.68,
    coefDeCapit: 13.0,
    transactionsViageres: {
      NP: 54.6,
      DtUs: 45.4,
    },
  },
  {
    "age-monsieur": 76,
    "age-madame": 81,
    espVie: 13.9,
    usufruitEconomique: {
      NP: 61.5,
      Usuf: 38.5,
    },
    tauxDeRente: 7.86,
    coefDeCapit: 12.7,
    transactionsViageres: {
      NP: 55.4,
      DtUs: 44.6,
    },
  },
  {
    "age-monsieur": 76,
    "age-madame": 82,
    espVie: 13.8,
    usufruitEconomique: {
      NP: 61.57,
      Usuf: 38.3,
    },
    tauxDeRente: 7.9,
    coefDeCapit: 12.7,
    transactionsViageres: {
      NP: 55.6,
      DtUs: 44.4,
    },
  },
  {
    "age-monsieur": 76,
    "age-madame": 83,
    espVie: 13.7,
    usufruitEconomique: {
      NP: 62.0,
      Usuf: 38.0,
    },
    tauxDeRente: 7.95,
    coefDeCapit: 12.6,
    transactionsViageres: {
      NP: 55.8,
      DtUs: 44.2,
    },
  },
  {
    "age-monsieur": 76,
    "age-madame": 84,
    espVie: 13.6,
    usufruitEconomique: {
      NP: 62.2,
      Usuf: 37.8,
    },
    tauxDeRente: 8.0,
    coefDeCapit: 12.5,
    transactionsViageres: {
      NP: 56.0,
      DtUs: 44.0,
    },
  },
  {
    "age-monsieur": 76,
    "age-madame": 85,
    espVie: 13.5,
    usufruitEconomique: {
      NP: 62.4,
      Usuf: 37.6,
    },
    tauxDeRente: 8.05,
    coefDeCapit: 12.4,
    transactionsViageres: {
      NP: 56.2,
      DtUs: 43.8,
    },
  },
  {
    "age-monsieur": 76,
    "age-madame": 86,
    espVie: 13.4,
    usufruitEconomique: {
      NP: 62.6,
      Usuf: 37.4,
    },
    tauxDeRente: 8.1,
    coefDeCapit: 12.4,
    transactionsViageres: {
      NP: 56.4,
      DtUs: 43.6,
    },
  },

  // --------------------- 77 ans ----------------------------
  {
    "age-monsieur": 77,
    "age-madame": 57,
    espVie: 34.8,
    usufruitEconomique: {
      NP: 29.6,
      Usuf: 70.4,
    },
    tauxDeRente: 24.4,
    coefDeCapit: 27.6,
    transactionsViageres: {
      NP: 26.7,
      DtUs: 73.3,
    },
  },
  {
    "age-monsieur": 77,
    "age-madame": 58,
    espVie: 33.8,
    usufruitEconomique: {
      NP: 30.7,
      Usuf: 69.3,
    },
    tauxDeRente: 4.09,
    coefDeCapit: 24.4,
    transactionsViageres: {
      NP: 27.6,
      DtUs: 72.4,
    },
  },
  {
    "age-monsieur": 77,
    "age-madame": 59,
    espVie: 32.9,
    usufruitEconomique: {
      NP: 31.7,
      Usuf: 63.3,
    },
    tauxDeRente: 4.16,
    coefDeCapit: 24.0,
    transactionsViageres: {
      NP: 28.5,
      DtUs: 71.5,
    },
  },
  {
    "age-monsieur": 77,
    "age-madame": 60,
    espVie: 31.9,
    usufruitEconomique: {
      NP: 32.8,
      Usuf: 67.2,
    },
    tauxDeRente: 4.25,
    coefDeCapit: 23.5,
    transactionsViageres: {
      NP: 29.5,
      DtUs: 70.5,
    },
  },
  {
    "age-monsieur": 77,
    "age-madame": 61,
    espVie: 31.0,
    usufruitEconomique: {
      NP: 33.9,
      Usuf: 66.1,
    },
    tauxDeRente: 4.33,
    coefDeCapit: 23.1,
    transactionsViageres: {
      NP: 30.5,
      DtUs: 69.5,
    },
  },
  {
    "age-monsieur": 77,
    "age-madame": 62,
    espVie: 30.0,
    usufruitEconomique: {
      NP: 35.1,
      Usuf: 64.9,
    },
    tauxDeRente: 4.42,
    coefDeCapit: 22.6,
    transactionsViageres: {
      NP: 31.6,
      DtUs: 68.4,
    },
  },
  {
    "age-monsieur": 77,
    "age-madame": 63,
    espVie: 29.1,
    usufruitEconomique: {
      NP: 36.2,
      Usuf: 63.8,
    },
    tauxDeRente: 4.51,
    coefDeCapit: 22.1,
    transactionsViageres: {
      NP: 32.6,
      DtUs: 67.4,
    },
  },
  {
    "age-monsieur": 77,
    "age-madame": 64,
    espVie: 28.2,
    usufruitEconomique: {
      NP: 37.3,
      Usuf: 62.7,
    },
    tauxDeRente: 4.61,
    coefDeCapit: 21.7,
    transactionsViageres: {
      NP: 33.6,
      DtUs: 66.4,
    },
  },
  {
    "age-monsieur": 77,
    "age-madame": 65,
    espVie: 27.3,
    usufruitEconomique: {
      NP: 38.5,
      Usuf: 61.5,
    },
    tauxDeRente: 4.72,
    coefDeCapit: 21.2,
    transactionsViageres: {
      NP: 34.7,
      DtUs: 65.3,
    },
  },
  {
    "age-monsieur": 77,
    "age-madame": 66,
    espVie: 26.4,
    usufruitEconomique: {
      NP: 39.8,
      Usuf: 60.2,
    },
    tauxDeRente: 4.83,
    coefDeCapit: 20.7,
    transactionsViageres: {
      NP: 35.8,
      DtUs: 64.2,
    },
  },
  {
    "age-monsieur": 77,
    "age-madame": 67,
    espVie: 25.5,
    usufruitEconomique: {
      NP: 41.0,
      Usuf: 59.0,
    },
    tauxDeRente: 4.94,
    coefDeCapit: 20.2,
    transactionsViageres: {
      NP: 36.9,
      DtUs: 63.1,
    },
  },
  {
    "age-monsieur": 77,
    "age-madame": 68,
    espVie: 24.6,
    usufruitEconomique: {
      NP: 42.3,
      Usuf: 57.7,
    },
    tauxDeRente: 5.07,
    coefDeCapit: 19.7,
    transactionsViageres: {
      NP: 38.1,
      DtUs: 61.9,
    },
  },
  {
    "age-monsieur": 77,
    "age-madame": 69,
    espVie: 23.7,
    usufruitEconomique: {
      NP: 43.7,
      Usuf: 56.3,
    },
    tauxDeRente: 5.21,
    coefDeCapit: 19.2,
    transactionsViageres: {
      NP: 39.3,
      DtUs: 60.7,
    },
  },
  {
    "age-monsieur": 77,
    "age-madame": 70,
    espVie: 22.7,
    usufruitEconomique: {
      NP: 45.2,
      Usuf: 54.8,
    },
    tauxDeRente: 5.37,
    coefDeCapit: 18.6,
    transactionsViageres: {
      NP: 40.7,
      DtUs: 59.3,
    },
  },
  {
    "age-monsieur": 77,
    "age-madame": 71,
    espVie: 21.8,
    usufruitEconomique: {
      NP: 46.7,
      Usuf: 53.3,
    },
    tauxDeRente: 5.53,
    coefDeCapit: 18.1,
    transactionsViageres: {
      NP: 42.0,
      DtUs: 58.0,
    },
  },
  {
    "age-monsieur": 77,
    "age-madame": 73,
    espVie: 20.0,
    usufruitEconomique: {
      NP: 49.7,
      Usuf: 50.3,
    },
    tauxDeRente: 5.9,
    coefDeCapit: 16.9,
    transactionsViageres: {
      NP: 44.7,
      DtUs: 55.3,
    },
  },
  {
    "age-monsieur": 77,
    "age-madame": 74,
    espVie: 19.2,
    usufruitEconomique: {
      NP: 51.1,
      Usuf: 48.9,
    },
    tauxDeRente: 6.09,
    coefDeCapit: 16.4,
    transactionsViageres: {
      NP: 46.0,
      DtUs: 54.0,
    },
  },
  {
    "age-monsieur": 77,
    "age-madame": 75,
    espVie: 18.3,
    usufruitEconomique: {
      NP: 52.8,
      Usuf: 47.2,
    },
    tauxDeRente: 6.31,
    coefDeCapit: 15.8,
    transactionsViageres: {
      NP: 47.5,
      DtUs: 52.5,
    },
  },
  {
    "age-monsieur": 77,
    "age-madame": 76,
    espVie: 17.5,
    usufruitEconomique: {
      NP: 54.3,
      Usuf: 45.7,
    },
    tauxDeRente: 654.0,
    coefDeCapit: 15.3,
    transactionsViageres: {
      NP: 48.8,
      DtUs: 51.2,
    },
  },
  {
    "age-monsieur": 77,
    "age-madame": 77,
    espVie: 16.6,
    usufruitEconomique: {
      NP: 56.0,
      Usuf: 44.0,
    },
    tauxDeRente: 6.81,
    coefDeCapit: 14.7,
    transactionsViageres: {
      NP: 50.4,
      DtUs: 49.6,
    },
  },
  {
    "age-monsieur": 77,
    "age-madame": 78,
    espVie: 15.8,
    usufruitEconomique: {
      NP: 57.6,
      Usuf: 42.4,
    },
    tauxDeRente: 7.08,
    coefDeCapit: 14.1,
    transactionsViageres: {
      NP: 51.8,
      DtUs: 48.2,
    },
  },
  {
    "age-monsieur": 77,
    "age-madame": 79,
    espVie: 15.0,
    usufruitEconomique: {
      NP: 59.2,
      Usuf: 40.8,
    },
    tauxDeRente: 7.39,
    coefDeCapit: 13.5,
    transactionsViageres: {
      NP: 53.3,
      DtUs: 46.7,
    },
  },
  {
    "age-monsieur": 77,
    "age-madame": 80,
    espVie: 14.2,
    usufruitEconomique: {
      NP: 60.9,
      Usuf: 39.1,
    },
    tauxDeRente: 7.72,
    coefDeCapit: 13.0,
    transactionsViageres: {
      NP: 54.8,
      DtUs: 45.2,
    },
  },
  {
    "age-monsieur": 77,
    "age-madame": 81,
    espVie: 13.5,
    usufruitEconomique: {
      NP: 62.4,
      Usuf: 37.6,
    },
    tauxDeRente: 8.05,
    coefDeCapit: 12.4,
    transactionsViageres: {
      NP: 56.2,
      DtUs: 43.8,
    },
  },
  {
    "age-monsieur": 77,
    "age-madame": 82,
    espVie: 13.3,
    usufruitEconomique: {
      NP: 62.8,
      Usuf: 37.2,
    },
    tauxDeRente: 8.15,
    coefDeCapit: 12.3,
    transactionsViageres: {
      NP: 56.5,
      DtUs: 43.5,
    },
  },
  {
    "age-monsieur": 77,
    "age-madame": 83,
    espVie: 13.2,
    usufruitEconomique: {
      NP: 63.1,
      Usuf: 36.9,
    },
    tauxDeRente: 8.2,
    coefDeCapit: 12.2,
    transactionsViageres: {
      NP: 56.7,
      DtUs: 43.3,
    },
  },
  {
    "age-monsieur": 77,
    "age-madame": 84,
    espVie: 13.1,
    usufruitEconomique: {
      NP: 63.3,
      Usuf: 36.7,
    },
    tauxDeRente: 8.25,
    coefDeCapit: 12.1,
    transactionsViageres: {
      NP: 56.9,
      DtUs: 43.1,
    },
  },
  {
    "age-monsieur": 77,
    "age-madame": 85,
    espVie: 13.0,
    usufruitEconomique: {
      NP: 63.5,
      Usuf: 36.5,
    },
    tauxDeRente: 8.3,
    coefDeCapit: 12.0,
    transactionsViageres: {
      NP: 57.1,
      DtUs: 42.9,
    },
  },
  {
    "age-monsieur": 77,
    "age-madame": 86,
    espVie: 12.9,
    usufruitEconomique: {
      NP: 63.7,
      Usuf: 36.3,
    },
    tauxDeRente: 8.35,
    coefDeCapit: 12.0,
    transactionsViageres: {
      NP: 57.3,
      DtUs: 42.7,
    },
  },
  {
    "age-monsieur": 77,
    "age-madame": 87,
    espVie: 12.7,
    usufruitEconomique: {
      NP: 64.2,
      Usuf: 35.8,
    },
    tauxDeRente: 8.46,
    coefDeCapit: 11.8,
    transactionsViageres: {
      NP: 57.7,
      DtUs: 42.3,
    },
  },

  // --------------------- 78 ans ----------------------------

  {
    "age-monsieur": 78,
    "age-madame": 58,
    espVie: 33.9,
    usufruitEconomique: {
      NP: 30.6,
      Usuf: 69.4,
    },
    tauxDeRente: 4.08,
    coefDeCapit: 24.5,
    transactionsViageres: {
      NP: 27.5,
      DtUs: 72.5,
    },
  },
  {
    "age-monsieur": 78,
    "age-madame": 59,
    espVie: 32.8,
    usufruitEconomique: {
      NP: 31.8,
      Usuf: 68.2,
    },
    tauxDeRente: 4.17,
    coefDeCapit: 24.0,
    transactionsViageres: {
      NP: 28.6,
      DtUs: 71.4,
    },
  },
  {
    "age-monsieur": 78,
    "age-madame": 60,
    espVie: 31.9,
    usufruitEconomique: {
      NP: 32.8,
      Usuf: 67.2,
    },
    tauxDeRente: 4.25,
    coefDeCapit: 23.5,
    transactionsViageres: {
      NP: 29.5,
      DtUs: 70.5,
    },
  },
  {
    "age-monsieur": 78,
    "age-madame": 61,
    espVie: 30.9,
    usufruitEconomique: {
      NP: 34.0,
      Usuf: 66.0,
    },
    tauxDeRente: 4.34,
    coefDeCapit: 23.1,
    transactionsViageres: {
      NP: 30.6,
      DtUs: 69.4,
    },
  },
  {
    "age-monsieur": 78,
    "age-madame": 62,
    espVie: 30.0,
    usufruitEconomique: {
      NP: 35.1,
      Usuf: 64.9,
    },
    tauxDeRente: 4.42,
    coefDeCapit: 22.6,
    transactionsViageres: {
      NP: 31.6,
      DtUs: 68.4,
    },
  },
  {
    "age-monsieur": 78,
    "age-madame": 63,
    espVie: 29.1,
    usufruitEconomique: {
      NP: 36.2,
      Usuf: 63.8,
    },
    tauxDeRente: 4.51,
    coefDeCapit: 22.1,
    transactionsViageres: {
      NP: 32.6,
      DtUs: 67.4,
    },
  },
  {
    "age-monsieur": 78,
    "age-madame": 64,
    espVie: 28.1,
    usufruitEconomique: {
      NP: 37.5,
      Usuf: 62.5,
    },
    tauxDeRente: 4.62,
    coefDeCapit: 21.6,
    transactionsViageres: {
      NP: 33.7,
      DtUs: 66.3,
    },
  },
  {
    "age-monsieur": 78,
    "age-madame": 65,
    espVie: 27.2,
    usufruitEconomique: {
      NP: 38.7,
      Usuf: 61.3,
    },
    tauxDeRente: 4.73,
    coefDeCapit: 21.2,
    transactionsViageres: {
      NP: 34.8,
      DtUs: 65.2,
    },
  },
  {
    "age-monsieur": 78,
    "age-madame": 66,
    espVie: 26.4,
    usufruitEconomique: {
      NP: 39.8,
      Usuf: 60.2,
    },
    tauxDeRente: 4.83,
    coefDeCapit: 20.7,
    transactionsViageres: {
      NP: 35.8,
      DtUs: 64.2,
    },
  },
  {
    "age-monsieur": 78,
    "age-madame": 67,
    espVie: 25.4,
    usufruitEconomique: {
      NP: 41.2,
      Usuf: 58.8,
    },
    tauxDeRente: 4.96,
    coefDeCapit: 20.2,
    transactionsViageres: {
      NP: 37.1,
      DtUs: 62.9,
    },
  },
  {
    "age-monsieur": 78,
    "age-madame": 68,
    espVie: 24.5,
    usufruitEconomique: {
      NP: 42.5,
      Usuf: 57.5,
    },
    tauxDeRente: 5.09,
    coefDeCapit: 19.7,
    transactionsViageres: {
      NP: 38.2,
      DtUs: 61.8,
    },
  },
  {
    "age-monsieur": 78,
    "age-madame": 69,
    espVie: 23.6,
    usufruitEconomique: {
      NP: 43.8,
      Usuf: 56.2,
    },
    tauxDeRente: 22.0,
    coefDeCapit: 19.1,
    transactionsViageres: {
      NP: 39.5,
      DtUs: 60.5,
    },
  },
  {
    "age-monsieur": 78,
    "age-madame": 70,
    espVie: 22.7,
    usufruitEconomique: {
      NP: 45.2,
      Usuf: 54.8,
    },
    tauxDeRente: 5.37,
    coefDeCapit: 18.6,
    transactionsViageres: {
      NP: 40.7,
      DtUs: 59.3,
    },
  },
  {
    "age-monsieur": 78,
    "age-madame": 71,
    espVie: 21.8,
    usufruitEconomique: {
      NP: 46.7,
      Usuf: 53.3,
    },
    tauxDeRente: 5.53,
    coefDeCapit: 18.1,
    transactionsViageres: {
      NP: 42.0,
      DtUs: 58.0,
    },
  },
  {
    "age-monsieur": 78,
    "age-madame": 72,
    espVie: 20.9,
    usufruitEconomique: {
      NP: 48.2,
      Usuf: 51.8,
    },
    tauxDeRente: 5.7,
    coefDeCapit: 17.5,
    transactionsViageres: {
      NP: 43.4,
      DtUs: 56.6,
    },
  },
  {
    "age-monsieur": 78,
    "age-madame": 73,
    espVie: 20.0,
    usufruitEconomique: {
      NP: 49.7,
      Usuf: 50.3,
    },
    tauxDeRente: 5.9,
    coefDeCapit: 16.9,
    transactionsViageres: {
      NP: 44.7,
      DtUs: 55.3,
    },
  },
  {
    "age-monsieur": 78,
    "age-madame": 74,
    espVie: 19.1,
    usufruitEconomique: {
      NP: 51.3,
      Usuf: 48.7,
    },
    tauxDeRente: 6.11,
    coefDeCapit: 16.4,
    transactionsViageres: {
      NP: 46.2,
      DtUs: 53.8,
    },
  },
  {
    "age-monsieur": 78,
    "age-madame": 75,
    espVie: 18.3,
    usufruitEconomique: {
      NP: 52.8,
      Usuf: 47.2,
    },
    tauxDeRente: 6.31,
    coefDeCapit: 15.8,
    transactionsViageres: {
      NP: 47.5,
      DtUs: 52.5,
    },
  },
  {
    "age-monsieur": 78,
    "age-madame": 76,
    espVie: 17.4,
    usufruitEconomique: {
      NP: 54.4,
      Usuf: 45.6,
    },
    tauxDeRente: 6.67,
    coefDeCapit: 15.2,
    transactionsViageres: {
      NP: 49,
      DtUs: 51,
    },
  },
  {
    "age-monsieur": 78,
    "age-madame": 77,
    espVie: 16.6,
    usufruitEconomique: {
      NP: 56.0,
      Usuf: 44.0,
    },
    tauxDeRente: 6.81,
    coefDeCapit: 14.7,
    transactionsViageres: {
      NP: 50.4,
      DtUs: 49.6,
    },
  },
  {
    "age-monsieur": 78,
    "age-madame": 78,
    espVie: 15.8,
    usufruitEconomique: {
      NP: 57.6,
      Usuf: 42.4,
    },
    tauxDeRente: 7.08,
    coefDeCapit: 14.1,
    transactionsViageres: {
      NP: 51.8,
      DtUs: 48.2,
    },
  },
  {
    "age-monsieur": 78,
    "age-madame": 79,
    espVie: 15.0,
    usufruitEconomique: {
      NP: 59.2,
      Usuf: 40.8,
    },
    tauxDeRente: 7.39,
    coefDeCapit: 13.5,
    transactionsViageres: {
      NP: 53.3,
      DtUs: 46.7,
    },
  },
  {
    "age-monsieur": 78,
    "age-madame": 80,
    espVie: 14.2,
    usufruitEconomique: {
      NP: 60.9,
      Usuf: 39.7,
    },
    tauxDeRente: 7.72,
    coefDeCapit: 13.0,
    transactionsViageres: {
      NP: 54.8,
      DtUs: 45.2,
    },
  },
  {
    "age-monsieur": 78,
    "age-madame": 81,
    espVie: 13.4,
    usufruitEconomique: {
      NP: 62.6,
      Usuf: 37.4,
    },
    tauxDeRente: 8.1,
    coefDeCapit: 12.4,
    transactionsViageres: {
      NP: 56.4,
      DtUs: 43.6,
    },
  },
  {
    "age-monsieur": 78,
    "age-madame": 82,
    espVie: 12.7,
    usufruitEconomique: {
      NP: 64.2,
      Usuf: 35.8,
    },
    tauxDeRente: 8.46,
    coefDeCapit: 11.8,
    transactionsViageres: {
      NP: 57.7,
      DtUs: 42.3,
    },
  },
  {
    "age-monsieur": 78,
    "age-madame": 83,
    espVie: 12.5,
    usufruitEconomique: {
      NP: 64.6,
      Usuf: 35.4,
    },
    tauxDeRente: 8.58,
    coefDeCapit: 11.7,
    transactionsViageres: {
      NP: 58.2,
      DtUs: 41.8,
    },
  },
  {
    "age-monsieur": 78,
    "age-madame": 84,
    espVie: 12.4,
    usufruitEconomique: {
      NP: 64.8,
      Usuf: 35.2,
    },
    tauxDeRente: 8.63,
    coefDeCapit: 11.6,
    transactionsViageres: {
      NP: 58.4,
      DtUs: 41.6,
    },
  },
  {
    "age-monsieur": 78,
    "age-madame": 86,
    espVie: 12.2,
    usufruitEconomique: {
      NP: 65.3,
      Usuf: 34.7,
    },
    tauxDeRente: 8.75,
    coefDeCapit: 11.4,
    transactionsViageres: {
      NP: 58.8,
      DtUs: 41.2,
    },
  },
  {
    "age-monsieur": 78,
    "age-madame": 87,
    espVie: 12.1,
    usufruitEconomique: {
      NP: 65.5,
      Usuf: 34.5,
    },
    tauxDeRente: 8.81,
    coefDeCapit: 11.3,
    transactionsViageres: {
      NP: 59.0,
      DtUs: 41.0,
    },
  },
  {
    "age-monsieur": 78,
    "age-madame": 88,
    espVie: 12.0,
    usufruitEconomique: {
      NP: 65.8,
      Usuf: 34.2,
    },
    tauxDeRente: 8.87,
    coefDeCapit: 11.3,
    transactionsViageres: {
      NP: 59.2,
      DtUs: 40.8,
    },
  },

  // --------------------- 79 ans ----------------------------

  {
    "age-monsieur": 79,
    "age-madame": 59,
    espVie: 32.8,
    usufruitEconomique: {
      NP: 31.8,
      Usuf: 68.2,
    },
    tauxDeRente: 4.17,
    coefDeCapit: 24.0,
    transactionsViageres: {
      NP: 28.6,
      DtUs: 71.4,
    },
  },
  {
    "age-monsieur": 79,
    "age-madame": 60,
    espVie: 31.8,
    usufruitEconomique: {
      NP: 32.9,
      Usuf: 67.1,
    },
    tauxDeRente: 4.26,
    coefDeCapit: 23.5,
    transactionsViageres: {
      NP: 29.6,
      DtUs: 70.4,
    },
  },
  {
    "age-monsieur": 79,
    "age-madame": 61,
    espVie: 30.9,
    usufruitEconomique: {
      NP: 34.0,
      Usuf: 66.0,
    },
    tauxDeRente: 4.34,
    coefDeCapit: 23.1,
    transactionsViageres: {
      NP: 30.6,
      DtUs: 69.4,
    },
  },
  {
    "age-monsieur": 79,
    "age-madame": 62,
    espVie: 29.9,
    usufruitEconomique: {
      NP: 35.2,
      Usuf: 64.8,
    },
    tauxDeRente: 4.43,
    coefDeCapit: 22.6,
    transactionsViageres: {
      NP: 31.7,
      DtUs: 68.3,
    },
  },
  {
    "age-monsieur": 79,
    "age-madame": 63,
    espVie: 29.0,
    usufruitEconomique: {
      NP: 36.3,
      Usuf: 63.7,
    },
    tauxDeRente: 4.53,
    coefDeCapit: 22.1,
    transactionsViageres: {
      NP: 32.7,
      DtUs: 67.3,
    },
  },
  {
    "age-monsieur": 79,
    "age-madame": 64,
    espVie: 28.1,
    usufruitEconomique: {
      NP: 37.5,
      Usuf: 62.5,
    },
    tauxDeRente: 4.62,
    coefDeCapit: 21.6,
    transactionsViageres: {
      NP: 33.7,
      DtUs: 66.3,
    },
  },
  {
    "age-monsieur": 79,
    "age-madame": 65,
    espVie: 27.2,
    usufruitEconomique: {
      NP: 38.7,
      Usuf: 61.3,
    },
    tauxDeRente: 4.73,
    coefDeCapit: 21.2,
    transactionsViageres: {
      NP: 34.8,
      DtUs: 65.2,
    },
  },
  {
    "age-monsieur": 79,
    "age-madame": 66,
    espVie: 26.3,
    usufruitEconomique: {
      NP: 39.9,
      Usuf: 60.1,
    },
    tauxDeRente: 4.84,
    coefDeCapit: 20.7,
    transactionsViageres: {
      NP: 35.9,
      DtUs: 64.1,
    },
  },
  {
    "age-monsieur": 79,
    "age-madame": 67,
    espVie: 25.4,
    usufruitEconomique: {
      NP: 41.2,
      Usuf: 58.8,
    },
    tauxDeRente: 4.96,
    coefDeCapit: 20.2,
    transactionsViageres: {
      NP: 37.1,
      DtUs: 62.9,
    },
  },
  {
    "age-monsieur": 79,
    "age-madame": 68,
    espVie: 24.5,
    usufruitEconomique: {
      NP: 42.5,
      Usuf: 57.5,
    },
    tauxDeRente: 5.09,
    coefDeCapit: 19.7,
    transactionsViageres: {
      NP: 38.2,
      DtUs: 61.8,
    },
  },
  {
    "age-monsieur": 79,
    "age-madame": 69,
    espVie: 23.6,
    usufruitEconomique: {
      NP: 43.8,
      Usuf: 56.2,
    },
    tauxDeRente: 5.22,
    coefDeCapit: 19.1,
    transactionsViageres: {
      NP: 39.5,
      DtUs: 60.5,
    },
  },
  {
    "age-monsieur": 79,
    "age-madame": 70,
    espVie: 22.6,
    usufruitEconomique: {
      NP: 45.4,
      Usuf: 54.6,
    },
    tauxDeRente: 5.39,
    coefDeCapit: 18.6,
    transactionsViageres: {
      NP: 40.9,
      DtUs: 59.1,
    },
  },
  {
    "age-monsieur": 79,
    "age-madame": 71,
    espVie: 21.7,
    usufruitEconomique: {
      NP: 46.9,
      Usuf: 53.1,
    },
    tauxDeRente: 5.55,
    coefDeCapit: 18.0,
    transactionsViageres: {
      NP: 42.2,
      DtUs: 57.8,
    },
  },
  {
    "age-monsieur": 79,
    "age-madame": 72,
    espVie: 20.8,
    usufruitEconomique: {
      NP: 48.3,
      Usuf: 51.7,
    },
    tauxDeRente: 3.73,
    coefDeCapit: 17.4,
    transactionsViageres: {
      NP: 43.5,
      DtUs: 56.5,
    },
  },
  {
    "age-monsieur": 79,
    "age-madame": 73,
    espVie: 20.0,
    usufruitEconomique: {
      NP: 49.7,
      Usuf: 50.3,
    },
    tauxDeRente: 5.9,
    coefDeCapit: 16.9,
    transactionsViageres: {
      NP: 44.7,
      DtUs: 55.3,
    },
  },
  {
    "age-monsieur": 79,
    "age-madame": 74,
    espVie: 19.1,
    usufruitEconomique: {
      NP: 51.3,
      Usuf: 48.7,
    },
    tauxDeRente: 6.11,
    coefDeCapit: 16.4,
    transactionsViageres: {
      NP: 46.2,
      DtUs: 53.8,
    },
  },
  {
    "age-monsieur": 79,
    "age-madame": 75,
    espVie: 18.2,
    usufruitEconomique: {
      NP: 52.9,
      Usuf: 47.1,
    },
    tauxDeRente: 6.34,
    coefDeCapit: 15.8,
    transactionsViageres: {
      NP: 47.7,
      DtUs: 52.3,
    },
  },
  {
    "age-monsieur": 79,
    "age-madame": 76,
    espVie: 17.4,
    usufruitEconomique: {
      NP: 54.4,
      Usuf: 45.6,
    },
    tauxDeRente: 6.57,
    coefDeCapit: 15.2,
    transactionsViageres: {
      NP: 49.0,
      DtUs: 51.0,
    },
  },
  {
    "age-monsieur": 79,
    "age-madame": 77,
    espVie: 16.6,
    usufruitEconomique: {
      NP: 56.0,
      Usuf: 44.0,
    },
    tauxDeRente: 6.81,
    coefDeCapit: 14.7,
    transactionsViageres: {
      NP: 50.4,
      DtUs: 49.6,
    },
  },
  {
    "age-monsieur": 79,
    "age-madame": 78,
    espVie: 15.7,
    usufruitEconomique: {
      NP: 57.8,
      Usuf: 42.2,
    },
    tauxDeRente: 7.12,
    coefDeCapit: 14.0,
    transactionsViageres: {
      NP: 52.0,
      DtUs: 48.0,
    },
  },
  {
    "age-monsieur": 79,
    "age-madame": 79,
    espVie: 14.9,
    usufruitEconomique: {
      NP: 59.4,
      Usuf: 40.6,
    },
    tauxDeRente: 7.43,
    coefDeCapit: 13.5,
    transactionsViageres: {
      NP: 53.5,
      DtUs: 46.5,
    },
  },
  {
    "age-monsieur": 79,
    "age-madame": 80,
    espVie: 14.7,
    usufruitEconomique: {
      NP: 61.1,
      Usuf: 38.9,
    },
    tauxDeRente: 7.77,
    coefDeCapit: 12.9,
    transactionsViageres: {
      NP: 55.0,
      DtUs: 45.0,
    },
  },
  {
    "age-monsieur": 79,
    "age-madame": 81,
    espVie: 13.4,
    usufruitEconomique: {
      NP: 62.6,
      Usuf: 37.4,
    },
    tauxDeRente: 8.1,
    coefDeCapit: 12.4,
    transactionsViageres: {
      NP: 56.4,
      DtUs: 43.6,
    },
  },
  {
    "age-monsieur": 79,
    "age-madame": 82,
    espVie: 12.6,
    usufruitEconomique: {
      NP: 64.4,
      Usuf: 35.6,
    },
    tauxDeRente: 8.52,
    coefDeCapit: 11.7,
    transactionsViageres: {
      NP: 57.9,
      DtUs: 42.1,
    },
  },
  {
    "age-monsieur": 79,
    "age-madame": 83,
    espVie: 11.9,
    usufruitEconomique: {
      NP: 66.0,
      Usuf: 34.0,
    },
    tauxDeRente: 8.94,
    coefDeCapit: 11.2,
    transactionsViageres: {
      NP: 59.4,
      DtUs: 40.6,
    },
  },
  {
    "age-monsieur": 79,
    "age-madame": 84,
    espVie: 11.7,
    usufruitEconomique: {
      NP: 66.4,
      Usuf: 33.6,
    },
    tauxDeRente: 9.06,
    coefDeCapit: 11.0,
    transactionsViageres: {
      NP: 59.8,
      DtUs: 40.2,
    },
  },
  {
    "age-monsieur": 79,
    "age-madame": 85,
    espVie: 11.6,
    usufruitEconomique: {
      NP: 66.7,
      Usuf: 33.3,
    },
    tauxDeRente: 9.13,
    coefDeCapit: 11.0,
    transactionsViageres: {
      NP: 60.0,
      DtUs: 40.0,
    },
  },
  {
    "age-monsieur": 79,
    "age-madame": 86,
    espVie: 11.5,
    usufruitEconomique: {
      NP: 66.9,
      Usuf: 33.1,
    },
    tauxDeRente: 9.2,
    coefDeCapit: 10.9,
    transactionsViageres: {
      NP: 60.2,
      DtUs: 39.8,
    },
  },
  {
    "age-monsieur": 79,
    "age-madame": 87,
    espVie: 11.4,
    usufruitEconomique: {
      NP: 67.1,
      Usuf: 32.9,
    },
    tauxDeRente: 9.27,
    coefDeCapit: 10.8,
    transactionsViageres: {
      NP: 60.4,
      DtUs: 39.6,
    },
  },
  {
    "age-monsieur": 79,
    "age-madame": 88,
    espVie: 11.3,
    usufruitEconomique: {
      NP: 67.4,
      Usuf: 32.6,
    },
    tauxDeRente: 9.34,
    coefDeCapit: 10.7,
    transactionsViageres: {
      NP: 60.6,
      DtUs: 39.4,
    },
  },
  {
    "age-monsieur": 79,
    "age-madame": 89,
    espVie: 11.2,
    usufruitEconomique: {
      NP: 67.6,
      Usuf: 32.4,
    },
    tauxDeRente: 9.41,
    coefDeCapit: 10.6,
    transactionsViageres: {
      NP: 60.9,
      DtUs: 39.1,
    },
  },

  // --------------------- 80 ans ----------------------------

  {
    "age-monsieur": 80,
    "age-madame": 60,
    espVie: 32.6,
    usufruitEconomique: {
      NP: 32.0,
      Usuf: 68.0,
    },
    tauxDeRente: 4.19,
    coefDeCapit: 23.9,
    transactionsViageres: {
      NP: 28.8,
      DtUs: 71.2,
    },
  },
  {
    "age-monsieur": 80,
    "age-madame": 61,
    espVie: 31.6,
    usufruitEconomique: {
      NP: 33.2,
      Usuf: 66.8,
    },
    tauxDeRente: 4.27,
    coefDeCapit: 23.4,
    transactionsViageres: {
      NP: 29.8,
      DtUs: 70.2,
    },
  },
  {
    "age-monsieur": 80,
    "age-madame": 62,
    espVie: 30.6,
    usufruitEconomique: {
      NP: 34.3,
      Usuf: 65.7,
    },
    tauxDeRente: 4.37,
    coefDeCapit: 22.9,
    transactionsViageres: {
      NP: 30.9,
      DtUs: 69.1,
    },
  },
  {
    "age-monsieur": 80,
    "age-madame": 63,
    espVie: 29.7,
    usufruitEconomique: {
      NP: 35.4,
      Usuf: 64.6,
    },
    tauxDeRente: 4.45,
    coefDeCapit: 22.5,
    transactionsViageres: {
      NP: 31.9,
      DtUs: 68.1,
    },
  },
  {
    "age-monsieur": 80,
    "age-madame": 64,
    espVie: 28.8,
    usufruitEconomique: {
      NP: 36.6,
      Usuf: 63.4,
    },
    tauxDeRente: 4.55,
    coefDeCapit: 22.0,
    transactionsViageres: {
      NP: 32.9,
      DtUs: 67.1,
    },
  },
  {
    "age-monsieur": 80,
    "age-madame": 65,
    espVie: 27.9,
    usufruitEconomique: {
      NP: 37.7,
      Usuf: 62.3,
    },
    tauxDeRente: 4.65,
    coefDeCapit: 21.5,
    transactionsViageres: {
      NP: 34.0,
      DtUs: 66.0,
    },
  },
  {
    "age-monsieur": 80,
    "age-madame": 66,
    espVie: 27.0,
    usufruitEconomique: {
      NP: 38.9,
      Usuf: 61.1,
    },
    tauxDeRente: 4.75,
    coefDeCapit: 21.0,
    transactionsViageres: {
      NP: 35.0,
      DtUs: 65.0,
    },
  },
  {
    "age-monsieur": 80,
    "age-madame": 67,
    espVie: 26.0,
    usufruitEconomique: {
      NP: 40.3,
      Usuf: 59.7,
    },
    tauxDeRente: 4.88,
    coefDeCapit: 20.5,
    transactionsViageres: {
      NP: 36.3,
      DtUs: 63.7,
    },
  },
  {
    "age-monsieur": 80,
    "age-madame": 68,
    espVie: 25.1,
    usufruitEconomique: {
      NP: 41.6,
      Usuf: 58.4,
    },
    tauxDeRente: 5,
    coefDeCapit: 20,
    transactionsViageres: {
      NP: 37.4,
      DtUs: 62.6,
    },
  },
  {
    "age-monsieur": 80,
    "age-madame": 69,
    espVie: 24.2,
    usufruitEconomique: {
      NP: 42.9,
      Usuf: 57.1,
    },
    tauxDeRente: 5.13,
    coefDeCapit: 19.5,
    transactionsViageres: {
      NP: 38.6,
      DtUs: 61.4,
    },
  },
  {
    "age-monsieur": 80,
    "age-madame": 70,
    espVie: 23.2,
    usufruitEconomique: {
      NP: 44.5,
      Usuf: 55.5,
    },
    tauxDeRente: 5.29,
    coefDeCapit: 18.9,
    transactionsViageres: {
      NP: 40.0,
      DtUs: 60.0,
    },
  },
  {
    "age-monsieur": 80,
    "age-madame": 71,
    espVie: 22.3,
    usufruitEconomique: {
      NP: 45.9,
      Usuf: 54.1,
    },
    tauxDeRente: 5.44,
    coefDeCapit: 18.4,
    transactionsViageres: {
      NP: 41.3,
      DtUs: 58.7,
    },
  },
  {
    "age-monsieur": 80,
    "age-madame": 72,
    espVie: 21.4,
    usufruitEconomique: {
      NP: 47.3,
      Usuf: 52.7,
    },
    tauxDeRente: 5.61,
    coefDeCapit: 17.8,
    transactionsViageres: {
      NP: 42.6,
      DtUs: 57.4,
    },
  },
  {
    "age-monsieur": 80,
    "age-madame": 73,
    espVie: 20.5,
    usufruitEconomique: {
      NP: 48.9,
      Usuf: 51.1,
    },
    tauxDeRente: 5.79,
    coefDeCapit: 17.3,
    transactionsViageres: {
      NP: 44.0,
      DtUs: 56.0,
    },
  },
  {
    "age-monsieur": 80,
    "age-madame": 74,
    espVie: 19.6,
    usufruitEconomique: {
      NP: 50.4,
      Usuf: 49.6,
    },
    tauxDeRente: 5.99,
    coefDeCapit: 16.7,
    transactionsViageres: {
      NP: 45.4,
      DtUs: 54.6,
    },
  },
  {
    "age-monsieur": 80,
    "age-madame": 75,
    espVie: 18.7,
    usufruitEconomique: {
      NP: 52.0,
      Usuf: 48.0,
    },
    tauxDeRente: 6.21,
    coefDeCapit: 16.1,
    transactionsViageres: {
      NP: 46.8,
      DtUs: 53.2,
    },
  },
  {
    "age-monsieur": 80,
    "age-madame": 76,
    espVie: 17.9,
    usufruitEconomique: {
      NP: 53.5,
      Usuf: 46.5,
    },
    tauxDeRente: 6.42,
    coefDeCapit: 15.6,
    transactionsViageres: {
      NP: 48.2,
      DtUs: 51.8,
    },
  },
  {
    "age-monsieur": 80,
    "age-madame": 77,
    espVie: 17.0,
    usufruitEconomique: {
      NP: 55.2,
      Usuf: 44.8,
    },
    tauxDeRente: 6.69,
    coefDeCapit: 15.0,
    transactionsViageres: {
      NP: 49.7,
      DtUs: 50.3,
    },
  },
  {
    "age-monsieur": 80,
    "age-madame": 78,
    espVie: 16.2,
    usufruitEconomique: {
      NP: 56.8,
      Usuf: 43.2,
    },
    tauxDeRente: 6.95,
    coefDeCapit: 14.4,
    transactionsViageres: {
      NP: 51.1,
      DtUs: 48.9,
    },
  },
  {
    "age-monsieur": 80,
    "age-madame": 79,
    espVie: 15.3,
    usufruitEconomique: {
      NP: 58.6,
      Usuf: 41.4,
    },
    tauxDeRente: 7.27,
    coefDeCapit: 13.8,
    transactionsViageres: {
      NP: 52.7,
      DtUs: 47.3,
    },
  },
  {
    "age-monsieur": 80,
    "age-madame": 80,
    espVie: 14.5,
    usufruitEconomique: {
      NP: 60.3,
      Usuf: 39.7,
    },
    tauxDeRente: 7.59,
    coefDeCapit: 13.2,
    transactionsViageres: {
      NP: 54.2,
      DtUs: 45.8,
    },
  },
  {
    "age-monsieur": 80,
    "age-madame": 81,
    espVie: 13.8,
    usufruitEconomique: {
      NP: 61.7,
      Usuf: 38.3,
    },
    tauxDeRente: 7.9,
    coefDeCapit: 12.7,
    transactionsViageres: {
      NP: 55.6,
      DtUs: 44.4,
    },
  },
  {
    "age-monsieur": 80,
    "age-madame": 82,
    espVie: 13.1,
    usufruitEconomique: {
      NP: 63.3,
      Usuf: 36.7,
    },
    tauxDeRente: 8.25,
    coefDeCapit: 12.1,
    transactionsViageres: {
      NP: 56.9,
      DtUs: 43.1,
    },
  },
  {
    "age-monsieur": 80,
    "age-madame": 83,
    espVie: 12.3,
    usufruitEconomique: {
      NP: 65.1,
      Usuf: 34.9,
    },
    tauxDeRente: 8.69,
    coefDeCapit: 11.5,
    transactionsViageres: {
      NP: 58.6,
      DtUs: 41.4,
    },
  },
  {
    "age-monsieur": 80,
    "age-madame": 84,
    espVie: 11.6,
    usufruitEconomique: {
      NP: 66.7,
      Usuf: 33.3,
    },
    tauxDeRente: 9.13,
    coefDeCapit: 11.0,
    transactionsViageres: {
      NP: 60.0,
      DtUs: 40.0,
    },
  },
  {
    "age-monsieur": 80,
    "age-madame": 85,
    espVie: 11.5,
    usufruitEconomique: {
      NP: 66.9,
      Usuf: 33.1,
    },
    tauxDeRente: 9.2,
    coefDeCapit: 10.9,
    transactionsViageres: {
      NP: 60.2,
      DtUs: 39.8,
    },
  },
  {
    "age-monsieur": 80,
    "age-madame": 86,
    espVie: 11.4,
    usufruitEconomique: {
      NP: 67.1,
      Usuf: 32.9,
    },
    tauxDeRente: 9.27,
    coefDeCapit: 10.8,
    transactionsViageres: {
      NP: 60.4,
      DtUs: 39.6,
    },
  },
  {
    "age-monsieur": 80,
    "age-madame": 87,
    espVie: 11.3,
    usufruitEconomique: {
      NP: 67.4,
      Usuf: 32.6,
    },
    tauxDeRente: 9.34,
    coefDeCapit: 10.7,
    transactionsViageres: {
      NP: 60.6,
      DtUs: 39.4,
    },
  },
  {
    "age-monsieur": 80,
    "age-madame": 88,
    espVie: 11.2,
    usufruitEconomique: {
      NP: 67.6,
      Usuf: 32.4,
    },
    tauxDeRente: 9.41,
    coefDeCapit: 10.6,
    transactionsViageres: {
      NP: 60.9,
      DtUs: 39.1,
    },
  },
  {
    "age-monsieur": 80,
    "age-madame": 89,
    espVie: 11.1,
    usufruitEconomique: {
      NP: 67.9,
      Usuf: 32.1,
    },
    tauxDeRente: 9.48,
    coefDeCapit: 10.6,
    transactionsViageres: {
      NP: 61.1,
      DtUs: 38.9,
    },
  },
  {
    "age-monsieur": 80,
    "age-madame": 90,
    espVie: 11.0,
    usufruitEconomique: {
      NP: 68.1,
      Usuf: 31.9,
    },
    tauxDeRente: 9.55,
    coefDeCapit: 10.5,
    transactionsViageres: {
      NP: 61.3,
      DtUs: 38.7,
    },
  },

  // ----------------------- 81 ans ----------------------------

  {
    "age-monsieur": 81,
    "age-madame": 61,
    espVie: 31.5,
    usufruitEconomique: {
      NP: 33.3,
      Usuf: 66.7,
    },
    tauxDeRente: 4.38,
    coefDeCapit: 23.9,
    transactionsViageres: {
      NP: 29.9,
      DtUs: 70.1,
    },
  },

  {
    "age-monsieur": 81,
    "age-madame": 62,
    espVie: 30.6,
    usufruitEconomique: {
      NP: 34.3,
      Usuf: 65.7,
    },
    tauxDeRente: 4.37,
    coefDeCapit: 22.9,
    transactionsViageres: {
      NP: 30.9,
      DtUs: 69.1,
    },
  },
  {
    "age-monsieur": 81,
    "age-madame": 63,
    espVie: 29.6,
    usufruitEconomique: {
      NP: 35.6,
      Usuf: 64.4,
    },
    tauxDeRente: 4.46,
    coefDeCapit: 22.4,
    transactionsViageres: {
      NP: 32.0,
      DtUs: 68.0,
    },
  },
  {
    "age-monsieur": 81,
    "age-madame": 64,
    espVie: 28.7,
    usufruitEconomique: {
      NP: 36.7,
      Usuf: 63.3,
    },
    tauxDeRente: 4.56,
    coefDeCapit: 21.9,
    transactionsViageres: {
      NP: 33.0,
      DtUs: 67.0,
    },
  },
  {
    "age-monsieur": 81,
    "age-madame": 65,
    espVie: 27.8,
    usufruitEconomique: {
      NP: 37.9,
      Usuf: 62.1,
    },
    tauxDeRente: 4.66,
    coefDeCapit: 21.5,
    transactionsViageres: {
      NP: 34.1,
      DtUs: 65.9,
    },
  },
  {
    "age-monsieur": 81,
    "age-madame": 66,
    espVie: 26.9,
    usufruitEconomique: {
      NP: 39.1,
      Usuf: 60.9,
    },
    tauxDeRente: 4.76,
    coefDeCapit: 21.0,
    transactionsViageres: {
      NP: 35.2,
      DtUs: 64.8,
    },
  },
  {
    "age-monsieur": 81,
    "age-madame": 67,
    espVie: 26.0,
    usufruitEconomique: {
      NP: 40.3,
      Usuf: 59.7,
    },
    tauxDeRente: 4.88,
    coefDeCapit: 20.5,
    transactionsViageres: {
      NP: 36.3,
      DtUs: 63.7,
    },
  },
  {
    "age-monsieur": 81,
    "age-madame": 68,
    espVie: 25.0,
    usufruitEconomique: {
      NP: 41.7,
      Usuf: 58.3,
    },
    tauxDeRente: 5.01,
    coefDeCapit: 19.9,
    transactionsViageres: {
      NP: 37.6,
      DtUs: 62.4,
    },
  },
  {
    "age-monsieur": 81,
    "age-madame": 69,
    espVie: 24.1,
    usufruitEconomique: {
      NP: 43.1,
      Usuf: 56.9,
    },
    tauxDeRente: 5.15,
    coefDeCapit: 19.4,
    transactionsViageres: {
      NP: 38.8,
      DtUs: 61.2,
    },
  },
  {
    "age-monsieur": 81,
    "age-madame": 70,
    espVie: 23.1,
    usufruitEconomique: {
      NP: 44.6,
      Usuf: 55.4,
    },
    tauxDeRente: 5.31,
    coefDeCapit: 18.8,
    transactionsViageres: {
      NP: 40.2,
      DtUs: 59.8,
    },
  },
  {
    "age-monsieur": 81,
    "age-madame": 71,
    espVie: 22.2,
    usufruitEconomique: {
      NP: 46.0,
      Usuf: 54.0,
    },
    tauxDeRente: 5.46,
    coefDeCapit: 18.3,
    transactionsViageres: {
      NP: 41.4,
      DtUs: 58.6,
    },
  },
  {
    "age-monsieur": 81,
    "age-madame": 72,
    espVie: 21.3,
    usufruitEconomique: {
      NP: 47.5,
      Usuf: 52.5,
    },
    tauxDeRente: 5.63,
    coefDeCapit: 17.8,
    transactionsViageres: {
      NP: 42.8,
      DtUs: 57.2,
    },
  },
  {
    "age-monsieur": 81,
    "age-madame": 73,
    espVie: 20.4,
    usufruitEconomique: {
      NP: 49.0,
      Usuf: 51.0,
    },
    tauxDeRente: 5.81,
    coefDeCapit: 17.2,
    transactionsViageres: {
      NP: 44.1,
      DtUs: 55.9,
    },
  },
  {
    "age-monsieur": 81,
    "age-madame": 74,
    espVie: 19.5,
    usufruitEconomique: {
      NP: 50.6,
      Usuf: 49.4,
    },
    tauxDeRente: 6.02,
    coefDeCapit: 16.6,
    transactionsViageres: {
      NP: 45.5,
      DtUs: 54.5,
    },
  },
  {
    "age-monsieur": 81,
    "age-madame": 75,
    espVie: 18.7,
    usufruitEconomique: {
      NP: 52.0,
      Usuf: 48.0,
    },
    tauxDeRente: 6.21,
    coefDeCapit: 16.1,
    transactionsViageres: {
      NP: 46.8,
      DtUs: 53.2,
    },
  },
  {
    "age-monsieur": 81,
    "age-madame": 76,
    espVie: 17.8,
    usufruitEconomique: {
      NP: 53.7,
      Usuf: 46.3,
    },
    tauxDeRente: 645.0,
    coefDeCapit: 15.5,
    transactionsViageres: {
      NP: 48.3,
      DtUs: 51.7,
    },
  },
  {
    "age-monsieur": 81,
    "age-madame": 77,
    espVie: 16.9,
    usufruitEconomique: {
      NP: 55.4,
      Usuf: 44.6,
    },
    tauxDeRente: 6.72,
    coefDeCapit: 14.9,
    transactionsViageres: {
      NP: 49.9,
      DtUs: 50.1,
    },
  },
  {
    "age-monsieur": 81,
    "age-madame": 78,
    espVie: 16.1,
    usufruitEconomique: {
      NP: 57.0,
      Usuf: 43.0,
    },
    tauxDeRente: 6.98,
    coefDeCapit: 14.3,
    transactionsViageres: {
      NP: 51.3,
      DtUs: 48.7,
    },
  },
  {
    "age-monsieur": 81,
    "age-madame": 79,
    espVie: 15.3,
    usufruitEconomique: {
      NP: 58.6,
      Usuf: 41.4,
    },
    tauxDeRente: 7.27,
    coefDeCapit: 13.8,
    transactionsViageres: {
      NP: 52.7,
      DtUs: 47.3,
    },
  },
  {
    "age-monsieur": 81,
    "age-madame": 80,
    espVie: 14.5,
    usufruitEconomique: {
      NP: 60.3,
      Usuf: 39.7,
    },
    tauxDeRente: 7.59,
    coefDeCapit: 13.2,
    transactionsViageres: {
      NP: 54.2,
      DtUs: 45.8,
    },
  },
  {
    "age-monsieur": 81,
    "age-madame": 81,
    espVie: 13.7,
    usufruitEconomique: {
      NP: 62.0,
      Usuf: 38.0,
    },
    tauxDeRente: 7.95,
    coefDeCapit: 12.6,
    transactionsViageres: {
      NP: 55.8,
      DtUs: 44.2,
    },
  },
  {
    "age-monsieur": 81,
    "age-madame": 82,
    espVie: 13.0,
    usufruitEconomique: {
      NP: 63.5,
      Usuf: 36.5,
    },
    tauxDeRente: 8.30,
    coefDeCapit: 12,
    transactionsViageres: {
      NP: 57.1,
      DtUs: 42.9,
    },
  },
  {
    "age-monsieur": 81,
    "age-madame": 83,
    espVie: 12.2,
    usufruitEconomique: {
      NP: 65.3,
      Usuf: 34.7,
    },
    tauxDeRente: 8.75,
    coefDeCapit: 11.4,
    transactionsViageres: {
      NP: 58.8,
      DtUs: 41.2,
    },
  },

  {
    "age-monsieur": 81,
    "age-madame": 84,
    espVie: 11.6,
    usufruitEconomique: {
      NP: 66.7,
      Usuf: 33.3,
    },
    tauxDeRente: 9.13,
    coefDeCapit: 11.0,
    transactionsViageres: {
      NP: 60.0,
      DtUs: 40.0,
    },
  },
  {
    "age-monsieur": 81,
    "age-madame": 85,
    espVie: 11.1,
    usufruitEconomique: {
      NP: 67.9,
      Usuf: 32.1,
    },
    tauxDeRente: 9.48,
    coefDeCapit: 10.6,
    transactionsViageres: {
      NP: 61.1,
      DtUs: 38.9,
    },
  },
  {
    "age-monsieur": 81,
    "age-madame": 86,
    espVie: 10.9,
    usufruitEconomique: {
      NP: 68.3,
      Usuf: 31.7,
    },
    tauxDeRente: 9.63,
    coefDeCapit: 10.4,
    transactionsViageres: {
      NP: 61.5,
      DtUs: 38.5,
    },
  },
  {
    "age-monsieur": 81,
    "age-madame": 88,
    espVie: 10.7,
    usufruitEconomique: {
      NP: 68.8,
      Usuf: 31.2,
    },
    tauxDeRente: 9.78,
    coefDeCapit: 10.2,
    transactionsViageres: {
      NP: 61.9,
      DtUs: 38.1,
    },
  },
  {
    "age-monsieur": 81,
    "age-madame": 89,
    espVie: 10.6,
    usufruitEconomique: {
      NP: 69.0,
      Usuf: 31.0,
    },
    tauxDeRente: 9.86,
    coefDeCapit: 10.1,
    transactionsViageres: {
      NP: 62.1,
      DtUs: 37.9,
    },
  },
  {
    "age-monsieur": 81,
    "age-madame": 90,
    espVie: 10.5,
    usufruitEconomique: {
      NP: 69.3,
      Usuf: 30.7,
    },
    tauxDeRente: 9.94,
    coefDeCapit: 10.1,
    transactionsViageres: {
      NP: 62.4,
      DtUs: 37.6,
    },
  },
  {
    "age-monsieur": 81,
    "age-madame": 91,
    espVie: 10.4,
    usufruitEconomique: {
      NP: 69.5,
      Usuf: 30.5,
    },
    tauxDeRente: 10.02,
    coefDeCapit: 10.0,
    transactionsViageres: {
      NP: 62.6,
      DtUs: 37.4,
    },
  },

  // ----------------------- 82 ans ----------------------------

  {
    "age-monsieur": 82,
    "age-madame": 62,
    espVie: 30.4,
    usufruitEconomique: {
      NP: 34.6,
      Usuf: 65.4,
    },
    tauxDeRente: 4.38,
    coefDeCapit: 22.8,
    transactionsViageres: {
      NP: 31.1,
      DtUs: 68.9,
    },
  },
  {
    "age-monsieur": 82,
    "age-madame": 63,
    espVie: 29.4,
    usufruitEconomique: {
      NP: 35.8,
      Usuf: 64.2,
    },
    tauxDeRente: 4.48,
    coefDeCapit: 22.3,
    transactionsViageres: {
      NP: 32.2,
      DtUs: 67.8,
    },
  },
  {
    "age-monsieur": 82,
    "age-madame": 64,
    espVie: 28.5,
    usufruitEconomique: {
      NP: 36.9,
      Usuf: 63.1,
    },
    tauxDeRente: 4.58,
    coefDeCapit: 21.8,
    transactionsViageres: {
      NP: 33.2,
      DtUs: 66.8,
    },
  },
  {
    "age-monsieur": 82,
    "age-madame": 65,
    espVie: 27.5,
    usufruitEconomique: {
      NP: 38.3,
      Usuf: 61.7,
    },
    tauxDeRente: 4.69,
    coefDeCapit: 21.3,
    transactionsViageres: {
      NP: 34.4,
      DtUs: 65.6,
    },
  },
  {
    "age-monsieur": 82,
    "age-madame": 66,
    espVie: 26.7,
    usufruitEconomique: {
      NP: 39.3,
      Usuf: 60.7,
    },
    tauxDeRente: 4.79,
    coefDeCapit: 20.9,
    transactionsViageres: {
      NP: 35.4,
      DtUs: 64.6,
    },
  },
  {
    "age-monsieur": 82,
    "age-madame": 67,
    espVie: 25.8,
    usufruitEconomique: {
      NP: 40.6,
      Usuf: 59.4,
    },
    tauxDeRente: 4.90,
    coefDeCapit: 20.4,
    transactionsViageres: {
      NP: 36.5,
      DtUs: 63.5,
    },
  },
  {
    "age-monsieur": 82,
    "age-madame": 68,
    espVie: 24.8,
    usufruitEconomique: {
      NP: 42.0,
      Usuf: 58.0,
    },
    tauxDeRente: 5.04,
    coefDeCapit: 19.8,
    transactionsViageres: {
      NP: 37.8,
      DtUs: 62.2,
    },
  },
  {
    "age-monsieur": 82,
    "age-madame": 69,
    espVie: 23.9,
    usufruitEconomique: {
      NP: 43.4,
      Usuf: 56.6,
    },
    tauxDeRente: 5.18,
    coefDeCapit: 19.3,
    transactionsViageres: {
      NP: 39.0,
      DtUs: 61.0,
    },
  },
  {
    "age-monsieur": 82,
    "age-madame": 70,
    espVie: 22.9,
    usufruitEconomique: {
      NP: 44.9,
      Usuf: 55.1,
    },
    tauxDeRente: 5.34,
    coefDeCapit: 18.7,
    transactionsViageres: {
      NP: 40.4,
      DtUs: 59.6,
    },
  },
  {
    "age-monsieur": 82,
    "age-madame": 71,
    espVie: 22.0,
    usufruitEconomique: {
      NP: 46.4,
      Usuf: 53.6,
    },
    tauxDeRente: 5.5,
    coefDeCapit: 18.2,
    transactionsViageres: {
      NP: 41.7,
      DtUs: 58.3,
    },
  },
  {
    "age-monsieur": 82,
    "age-madame": 72,
    espVie: 21.1,
    usufruitEconomique: {
      NP: 47.8,
      Usuf: 52.2,
    },
    tauxDeRente: 5.67,
    coefDeCapit: 17.6,
    transactionsViageres: {
      NP: 43.1,
      DtUs: 56.9,
    },
  },
  {
    "age-monsieur": 82,
    "age-madame": 73,
    espVie: 20.2,
    usufruitEconomique: {
      NP: 49.4,
      Usuf: 50.6,
    },
    tauxDeRente: 5.86,
    coefDeCapit: 17.1,
    transactionsViageres: {
      NP: 44.4,
      DtUs: 55.6,
    },
  },
  {
    "age-monsieur": 82,
    "age-madame": 74,
    espVie: 19.4,
    usufruitEconomique: {
      NP: 50.8,
      Usuf: 49.2,
    },
    tauxDeRente: 6.04,
    coefDeCapit: 16.6,
    transactionsViageres: {
      NP: 45.7,
      DtUs: 54.3,
    },
  },
  {
    "age-monsieur": 82,
    "age-madame": 75,
    espVie: 18.5,
    usufruitEconomique: {
      NP: 52.4,
      Usuf: 47.6,
    },
    tauxDeRente: 6.26,
    coefDeCapit: 16.0,
    transactionsViageres: {
      NP: 47.2,
      DtUs: 52.8,
    },
  },
  {
    "age-monsieur": 82,
    "age-madame": 76,
    espVie: 17.6,
    usufruitEconomique: {
      NP: 54.1,
      Usuf: 45.9,
    },
    tauxDeRente: 6.51,
    coefDeCapit: 15.4,
    transactionsViageres: {
      NP: 48.7,
      DtUs: 51.3,
    },
  },
  {
    "age-monsieur": 82,
    "age-madame": 77,
    espVie: 16.8,
    usufruitEconomique: {
      NP: 55.6,
      Usuf: 44.4,
    },
    tauxDeRente: 6.75,
    coefDeCapit: 14.8,
    transactionsViageres: {
      NP: 50.0,
      DtUs: 50.0,
    },
  },
  {
    "age-monsieur": 82,
    "age-madame": 78,
    espVie: 15.9,
    usufruitEconomique: {
      NP: 57.4,
      Usuf: 42.6,
    },
    tauxDeRente: 7.05,
    coefDeCapit: 14.2,
    transactionsViageres: {
      NP: 51.6,
      DtUs: 48.4,
    },
  },
  {
    "age-monsieur": 82,
    "age-madame": 79,
    espVie: 15.1,
    usufruitEconomique: {
      NP: 59.0,
      Usuf: 41.0,
    },
    tauxDeRente: 7.35,
    coefDeCapit: 13.6,
    transactionsViageres: {
      NP: 53.1,
      DtUs: 46.9,
    },
  },
  {
    "age-monsieur": 82,
    "age-madame": 80,
    espVie: 14.3,
    usufruitEconomique: {
      NP: 60.7,
      Usuf: 39.3,
    },
    tauxDeRente: 7.68,
    coefDeCapit: 13.0,
    transactionsViageres: {
      NP: 54.6,
      DtUs: 45.4,
    },
  },
  {
    "age-monsieur": 82,
    "age-madame": 81,
    espVie: 13.6,
    usufruitEconomique: {
      NP: 62.2,
      Usuf: 37.8,
    },
    tauxDeRente: 8.0,
    coefDeCapit: 12.5,
    transactionsViageres: {
      NP: 56.0,
      DtUs: 44.0,
    },
  },
  {
    "age-monsieur": 82,
    "age-madame": 82,
    espVie: 12.8,
    usufruitEconomique: {
      NP: 63.9,
      Usuf: 36.1,
    },
    tauxDeRente: 8.41,
    coefDeCapit: 11.9,
    transactionsViageres: {
      NP: 57.5,
      DtUs: 42.5,
    },
  },
  {
    "age-monsieur": 82,
    "age-madame": 83,
    espVie: 12.1,
    usufruitEconomique: {
      NP: 65.5,
      Usuf: 34.5,
    },
    tauxDeRente: 8.81,
    coefDeCapit: 11.3,
    transactionsViageres: {
      NP: 59.0,
      DtUs: 41.0,
    },
  },
  {
    "age-monsieur": 82,
    "age-madame": 84,
    espVie: 11.4,
    usufruitEconomique: {
      NP: 67.1,
      Usuf: 32.9,
    },
    tauxDeRente: 9.27,
    coefDeCapit: 10.8,
    transactionsViageres: {
      NP: 60.4,
      DtUs: 39.6,
    },
  },
  {
    "age-monsieur": 82,
    "age-madame": 85,
    espVie: 10.8,
    usufruitEconomique: {
      NP: 68.6,
      Usuf: 31.4,
    },
    tauxDeRente: 9.7,
    coefDeCapit: 10.3,
    transactionsViageres: {
      NP: 61.7,
      DtUs: 38.3,
    },
  },
  {
    "age-monsieur": 82,
    "age-madame": 86,
    espVie: 10.4,
    usufruitEconomique: {
      NP: 69.5,
      Usuf: 30.5,
    },
    tauxDeRente: 10.02,
    coefDeCapit: 10.0,
    transactionsViageres: {
      NP: 62.6,
      DtUs: 37.4,
    },
  },
  {
    "age-monsieur": 82,
    "age-madame": 87,
    espVie: 10.2,
    usufruitEconomique: {
      NP: 70.0,
      Usuf: 30.0,
    },
    tauxDeRente: 10.19,
    coefDeCapit: 9.8,
    transactionsViageres: {
      NP: 63.0,
      DtUs: 37.0,
    },
  },
  {
    "age-monsieur": 82,
    "age-madame": 90,
    espVie: 9.9,
    usufruitEconomique: {
      NP: 70.8,
      Usuf: 29.2,
    },
    tauxDeRente: 10.45,
    coefDeCapit: 9.6,
    transactionsViageres: {
      NP: 63.7,
      DtUs: 36.3,
    },
  },
  {
    "age-monsieur": 82,
    "age-madame": 91,
    espVie: 9.8,
    usufruitEconomique: {
      NP: 71.0,
      Usuf: 29.0,
    },
    tauxDeRente: 10.55,
    coefDeCapit: 9.5,
    transactionsViageres: {
      NP: 63.9,
      DtUs: 36.1,
    },
  },
  {
    "age-monsieur": 82,
    "age-madame": 92,
    espVie: 9.7,
    usufruitEconomique: {
      NP: 71.3,
      Usuf: 28.7,
    },
    tauxDeRente: 10.64,
    coefDeCapit: 9.4,
    transactionsViageres: {
      NP: 64.1,
      DtUs: 35.9,
    },
  },

  // ----------------------- 83 ans ----------------------------

  {
    "age-monsieur": 83,
    "age-madame": 63,
    espVie: 29.4,
    usufruitEconomique: {
      NP: 35.8,
      Usuf: 64.2,
    },
    tauxDeRente: 4.48,
    coefDeCapit: 22.3,
    transactionsViageres: {
      NP: 32.2,
      DtUs: 67.8,
    },
  },
  {
    "age-monsieur": 83,
    "age-madame": 64,
    espVie: 28.4,
    usufruitEconomique: {
      NP: 37.1,
      Usuf: 62.9,
    },
    tauxDeRente: 4.59,
    coefDeCapit: 21.8,
    transactionsViageres: {
      NP: 33.4,
      DtUs: 66.6,
    },
  },
  {
    "age-monsieur": 83,
    "age-madame": 65,
    espVie: 27.5,
    usufruitEconomique: {
      NP: 38.3,
      Usuf: 61.7,
    },
    tauxDeRente: 4.69,
    coefDeCapit: 21.3,
    transactionsViageres: {
      NP: 34.4,
      DtUs: 65.6,
    },
  },
  {
    "age-monsieur": 83,
    "age-madame": 66,
    espVie: 26.7,
    usufruitEconomique: {
      NP: 39.3,
      Usuf: 60.7,
    },
    tauxDeRente: 4.79,
    coefDeCapit: 20.9,
    transactionsViageres: {
      NP: 35.4,
      DtUs: 64.6,
    },
  },
  {
    "age-monsieur": 83,
    "age-madame": 67,
    espVie: 25.7,
    usufruitEconomique: {
      NP: 40.7,
      Usuf: 59.3,
    },
    tauxDeRente: 4.92,
    coefDeCapit: 20.3,
    transactionsViageres: {
      NP: 36.7,
      DtUs: 63.3,
    },
  },
  {
    "age-monsieur": 83,
    "age-madame": 68,
    espVie: 24.8,
    usufruitEconomique: {
      NP: 42.0,
      Usuf: 58.0,
    },
    tauxDeRente: 5.04,
    coefDeCapit: 19.8,
    transactionsViageres: {
      NP: 37.8,
      DtUs: 62.2,
    },
  },
  {
    "age-monsieur": 83,
    "age-madame": 69,
    espVie: 23.9,
    usufruitEconomique: {
      NP: 43.4,
      Usuf: 56.6,
    },
    tauxDeRente: 5.18,
    coefDeCapit: 19.3,
    transactionsViageres: {
      NP: 39.0,
      DtUs: 61.0,
    },
  },
  {
    "age-monsieur": 83,
    "age-madame": 70,
    espVie: 22.9,
    usufruitEconomique: {
      NP: 44.9,
      Usuf: 55.1,
    },
    tauxDeRente: 5.34,
    coefDeCapit: 18.7,
    transactionsViageres: {
      NP: 40.4,
      DtUs: 59.6,
    },
  },
  {
    "age-monsieur": 83,
    "age-madame": 71,
    espVie: 22.0,
    usufruitEconomique: {
      NP: 46.4,
      Usuf: 53.6,
    },
    tauxDeRente: 5.5,
    coefDeCapit: 18.2,
    transactionsViageres: {
      NP: 41.7,
      DtUs: 58.3,
    },
  },
  {
    "age-monsieur": 83,
    "age-madame": 72,
    espVie: 21.1,
    usufruitEconomique: {
      NP: 47.8,
      Usuf: 52.2,
    },
    tauxDeRente: 5.67,
    coefDeCapit: 17.6,
    transactionsViageres: {
      NP: 43.1,
      DtUs: 56.9,
    },
  },
  {
    "age-monsieur": 83,
    "age-madame": 73,
    espVie: 20.2,
    usufruitEconomique: {
      NP: 49.4,
      Usuf: 50.6,
    },
    tauxDeRente: 5.86,
    coefDeCapit: 17.1,
    transactionsViageres: {
      NP: 44.4,
      DtUs: 55.6,
    },
  },
  {
    "age-monsieur": 83,
    "age-madame": 74,
    espVie: 19.3,
    usufruitEconomique: {
      NP: 51.0,
      Usuf: 49.0,
    },
    tauxDeRente: 6.06,
    coefDeCapit: 16.5,
    transactionsViageres: {
      NP: 45.9,
      DtUs: 54.1,
    },
  },
  {
    "age-monsieur": 83,
    "age-madame": 75,
    espVie: 18.5,
    usufruitEconomique: {
      NP: 52.4,
      Usuf: 47.6,
    },
    tauxDeRente: 6.26,
    coefDeCapit: 16.0,
    transactionsViageres: {
      NP: 47.2,
      DtUs: 52.8,
    },
  },
  {
    "age-monsieur": 83,
    "age-madame": 76,
    espVie: 17.6,
    usufruitEconomique: {
      NP: 54.1,
      Usuf: 45.9,
    },
    tauxDeRente: 6.51,
    coefDeCapit: 15.4,
    transactionsViageres: {
      NP: 48.7,
      DtUs: 51.3,
    },
  },
  {
    "age-monsieur": 83,
    "age-madame": 77,
    espVie: 16.7,
    usufruitEconomique: {
      NP: 55.8,
      Usuf: 44.2,
    },
    tauxDeRente: 6.78,
    coefDeCapit: 14.7,
    transactionsViageres: {
      NP: 50.2,
      DtUs: 49.8,
    },
  },
  {
    "age-monsieur": 83,
    "age-madame": 78,
    espVie: 15.9,
    usufruitEconomique: {
      NP: 57.4,
      Usuf: 42.6,
    },
    tauxDeRente: 7.05,
    coefDeCapit: 14.2,
    transactionsViageres: {
      NP: 51.6,
      DtUs: 48.4,
    },
  },
  {
    "age-monsieur": 83,
    "age-madame": 79,
    espVie: 15.1,
    usufruitEconomique: {
      NP: 59.0,
      Usuf: 41.0,
    },
    tauxDeRente: 7.35,
    coefDeCapit: 13.6,
    transactionsViageres: {
      NP: 53.1,
      DtUs: 46.9,
    },
  },
  {
    "age-monsieur": 83,
    "age-madame": 80,
    espVie: 14.3,
    usufruitEconomique: {
      NP: 60.7,
      Usuf: 39.3,
    },
    tauxDeRente: 7.68,
    coefDeCapit: 13.0,
    transactionsViageres: {
      NP: 54.6,
      DtUs: 45.4,
    },
  },
  {
    "age-monsieur": 83,
    "age-madame": 81,
    espVie: 13.5,
    usufruitEconomique: {
      NP: 62.4,
      Usuf: 37.6,
    },
    tauxDeRente: 8.05,
    coefDeCapit: 12.4,
    transactionsViageres: {
      NP: 56.2,
      DtUs: 43.8,
    },
  },
  {
    "age-monsieur": 83,
    "age-madame": 82,
    espVie: 12.8,
    usufruitEconomique: {
      NP: 63.9,
      Usuf: 36.1,
    },
    tauxDeRente: 8.41,
    coefDeCapit: 11.9,
    transactionsViageres: {
      NP: 57.5,
      DtUs: 42.5,
    },
  },
  {
    "age-monsieur": 83,
    "age-madame": 83,
    espVie: 12.1,
    usufruitEconomique: {
      NP: 65.5,
      Usuf: 34.5,
    },
    tauxDeRente: 8.81,
    coefDeCapit: 11.3,
    transactionsViageres: {
      NP: 59.0,
      DtUs: 41.0,
    },
  },
  {
    "age-monsieur": 83,
    "age-madame": 84,
    espVie: 11.4,
    usufruitEconomique: {
      NP: 67.1,
      Usuf: 32.9,
    },
    tauxDeRente: 9.27,
    coefDeCapit: 10.8,
    transactionsViageres: {
      NP: 60.4,
      DtUs: 39.6,
    },
  },
  {
    "age-monsieur": 83,
    "age-madame": 85,
    espVie: 10.7,
    usufruitEconomique: {
      NP: 68.8,
      Usuf: 31.2,
    },
    tauxDeRente: 9.78,
    coefDeCapit: 10.2,
    transactionsViageres: {
      NP: 61.9,
      DtUs: 38.1,
    },
  },
  {
    "age-monsieur": 83,
    "age-madame": 86,
    espVie: 10.1,
    usufruitEconomique: {
      NP: 70.3,
      Usuf: 9.7,
    },
    tauxDeRente: 10.28,
    coefDeCapit: 9.7,
    transactionsViageres: {
      NP: 63.2,
      DtUs: 36.8,
    },
  },
  {
    "age-monsieur": 83,
    "age-madame": 87,
    espVie: 9.8,
    usufruitEconomique: {
      NP: 71.0,
      Usuf: 29.0,
    },
    tauxDeRente: 10.55,
    coefDeCapit: 9.5,
    transactionsViageres: {
      NP: 63.9,
      DtUs: 36.1,
    },
  },
  {
    "age-monsieur": 83,
    "age-madame": 88,
    espVie: 9.7,
    usufruitEconomique: {
      NP: 71.3,
      Usuf: 28.7,
    },
    tauxDeRente: 10.64,
    coefDeCapit: 9.4,
    transactionsViageres: {
      NP: 64.7,
      DtUs: 35.9,
    },
  },
  {
    "age-monsieur": 83,
    "age-madame": 89,
    espVie: 9.6,
    usufruitEconomique: {
      NP: 71.5,
      Usuf: 28.5,
    },
    tauxDeRente: 10.74,
    coefDeCapit: 9.3,
    transactionsViageres: {
      NP: 64.4,
      DtUs: 35.6,
    },
  },
  {
    "age-monsieur": 83,
    "age-madame": 90,
    espVie: 9.5,
    usufruitEconomique: {
      NP: 71.8,
      Usuf: 28.2,
    },
    tauxDeRente: 10.84,
    coefDeCapit: 9.2,
    transactionsViageres: {
      NP: 64.6,
      DtUs: 35.4,
    },
  },
  {
    "age-monsieur": 83,
    "age-madame": 91,
    espVie: 9.4,
    usufruitEconomique: {
      NP: 72.0,
      Usuf: 28.0,
    },
    tauxDeRente: 10.94,
    coefDeCapit: 9.1,
    transactionsViageres: {
      NP: 64.8,
      DtUs: 35.2,
    },
  },
  {
    "age-monsieur": 83,
    "age-madame": 92,
    espVie: 9.3,
    usufruitEconomique: {
      NP: 72.3,
      Usuf: 27.7,
    },
    tauxDeRente: 111.04,
    coefDeCapit: 9.1,
    transactionsViageres: {
      NP: 65.0,
      DtUs: 35.0,
    },
  },
  {
    "age-monsieur": 83,
    "age-madame": 93,
    espVie: 9.2,
    usufruitEconomique: {
      NP: 72.5,
      Usuf: 27.5,
    },
    tauxDeRente: 11.14,
    coefDeCapit: 9.0,
    transactionsViageres: {
      NP: 65.3,
      DtUs: 34.7,
    },
  },

  // ----------------------- 84 ans ----------------------------
  {
    "age-monsieur": 84,
    "age-madame": 64,
    espVie: 28.2,
    usufruitEconomique: {
      NP: 37.3,
      Usuf: 62.7,
    },
    tauxDeRente: 4.61,
    coefDeCapit: 21.7,
    transactionsViageres: {
      NP: 33.6,
      DtUs: 66.4,
    },
  },
  {
    "age-monsieur": 84,
    "age-madame": 65,
    espVie: 27.2,
    usufruitEconomique: {
      NP: 38.7,
      Usuf: 61.3,
    },
    tauxDeRente: 4.73,
    coefDeCapit: 21.2,
    transactionsViageres: {
      NP: 34.8,
      DtUs: 65.2,
    },
  },
  {
    "age-monsieur": 84,
    "age-madame": 66,
    espVie: 26.3,
    usufruitEconomique: {
      NP: 39.9,
      Usuf: 60.1,
    },
    tauxDeRente: 4.84,
    coefDeCapit: 20.7,
    transactionsViageres: {
      NP: 35.9,
      DtUs: 64.1,
    },
  },
  {
    "age-monsieur": 84,
    "age-madame": 67,
    espVie: 25.5,
    usufruitEconomique: {
      NP: 41.0,
      Usuf: 59.0,
    },
    tauxDeRente: 4.94,
    coefDeCapit: 20.2,
    transactionsViageres: {
      NP: 36.9,
      DtUs: 63.1,
    },
  },
  {
    "age-monsieur": 84,
    "age-madame": 68,
    espVie: 24.5,
    usufruitEconomique: {
      NP: 42.5,
      Usuf: 57.5,
    },
    tauxDeRente: 5.09,
    coefDeCapit: 19.7,
    transactionsViageres: {
      NP: 38.2,
      DtUs: 61.8,
    },
  },
  {
    "age-monsieur": 84,
    "age-madame": 69,
    espVie: 23.6,
    usufruitEconomique: {
      NP: 43.8,
      Usuf: 56.2,
    },
    tauxDeRente: 5.22,
    coefDeCapit: 19.1,
    transactionsViageres: {
      NP: 39.5,
      DtUs: 60.5,
    },
  },
  {
    "age-monsieur": 84,
    "age-madame": 70,
    espVie: 22.7,
    usufruitEconomique: {
      NP: 45.2,
      Usuf: 54.8,
    },
    tauxDeRente: 5.37,
    coefDeCapit: 18.6,
    transactionsViageres: {
      NP: 40.7,
      DtUs: 59.3,
    },
  },
  {
    "age-monsieur": 84,
    "age-madame": 71,
    espVie: 21.8,
    usufruitEconomique: {
      NP: 46.7,
      Usuf: 53.3,
    },
    tauxDeRente: 5.53,
    coefDeCapit: 18.1,
    transactionsViageres: {
      NP: 42.0,
      DtUs: 58.0,
    },
  },
  {
    "age-monsieur": 84,
    "age-madame": 72,
    espVie: 20.9,
    usufruitEconomique: {
      NP: 48.2,
      Usuf: 51.8,
    },
    tauxDeRente: 5.71,
    coefDeCapit: 17.5,
    transactionsViageres: {
      NP: 43.4,
      DtUs: 56.6,
    },
  },
  {
    "age-monsieur": 84,
    "age-madame": 73,
    espVie: 20.0,
    usufruitEconomique: {
      NP: 49.7,
      Usuf: 50.3,
    },
    tauxDeRente: 5.9,
    coefDeCapit: 16.9,
    transactionsViageres: {
      NP: 44.7,
      DtUs: 55.3,
    },
  },
  {
    "age-monsieur": 84,
    "age-madame": 74,
    espVie: 19.1,
    usufruitEconomique: {
      NP: 51.3,
      Usuf: 48.7,
    },
    tauxDeRente: 6.11,
    coefDeCapit: 16.4,
    transactionsViageres: {
      NP: 46.2,
      DtUs: 53.8,
    },
  },
  {
    "age-monsieur": 84,
    "age-madame": 75,
    espVie: 18.2,
    usufruitEconomique: {
      NP: 52.9,
      Usuf: 47.1,
    },
    tauxDeRente: 6.34,
    coefDeCapit: 15.8,
    transactionsViageres: {
      NP: 47.7,
      DtUs: 52.3,
    },
  },
  {
    "age-monsieur": 84,
    "age-madame": 76,
    espVie: 17.4,
    usufruitEconomique: {
      NP: 54.4,
      Usuf: 45.6,
    },
    tauxDeRente: 6.57,
    coefDeCapit: 15.2,
    transactionsViageres: {
      NP: 49.0,
      DtUs: 51.0,
    },
  },
  {
    "age-monsieur": 84,
    "age-madame": 77,
    espVie: 16.6,
    usufruitEconomique: {
      NP: 56.0,
      Usuf: 44.0,
    },
    tauxDeRente: 6.81,
    coefDeCapit: 14.7,
    transactionsViageres: {
      NP: 50.4,
      DtUs: 49.6,
    },
  },
  {
    "age-monsieur": 84,
    "age-madame": 78,
    espVie: 15.7,
    usufruitEconomique: {
      NP: 57.8,
      Usuf: 42.2,
    },
    tauxDeRente: 7.12,
    coefDeCapit: 14.0,
    transactionsViageres: {
      NP: 52.0,
      DtUs: 48.0,
    },
  },
  {
    "age-monsieur": 84,
    "age-madame": 79,
    espVie: 14.9,
    usufruitEconomique: {
      NP: 59.4,
      Usuf: 40.6,
    },
    tauxDeRente: 7.43,
    coefDeCapit: 13.5,
    transactionsViageres: {
      NP: 53.5,
      DtUs: 46.5,
    },
  },
  {
    "age-monsieur": 84,
    "age-madame": 80,
    espVie: 14.1,
    usufruitEconomique: {
      NP: 61.1,
      Usuf: 38.9,
    },
    tauxDeRente: 7.77,
    coefDeCapit: 12.9,
    transactionsViageres: {
      NP: 55,
      DtUs: 45,
    },
  },
  {
    "age-monsieur": 84,
    "age-madame": 81,
    espVie: 13.4,
    usufruitEconomique: {
      NP: 62.6,
      Usuf: 37.4,
    },
    tauxDeRente: 8.1,
    coefDeCapit: 12.4,
    transactionsViageres: {
      NP: 56.4,
      DtUs: 43.6,
    },
  },
  {
    "age-monsieur": 84,
    "age-madame": 82,
    espVie: 12.6,
    usufruitEconomique: {
      NP: 64.4,
      Usuf: 35.6,
    },
    tauxDeRente: 8.52,
    coefDeCapit: 11.7,
    transactionsViageres: {
      NP: 57.9,
      DtUs: 42.1,
    },
  },
  {
    "age-monsieur": 84,
    "age-madame": 83,
    espVie: 11.9,
    usufruitEconomique: {
      NP: 66.0,
      Usuf: 34.0,
    },
    tauxDeRente: 8.94,
    coefDeCapit: 11.2,
    transactionsViageres: {
      NP: 59.4,
      DtUs: 40.6,
    },
  },
  {
    "age-monsieur": 84,
    "age-madame": 84,
    espVie: 11.2,
    usufruitEconomique: {
      NP: 67.6,
      Usuf: 32.4,
    },
    tauxDeRente: 9.41,
    coefDeCapit: 10.6,
    transactionsViageres: {
      NP: 60.9,
      DtUs: 39.1,
    },
  },
  {
    "age-monsieur": 84,
    "age-madame": 85,
    espVie: 10.6,
    usufruitEconomique: {
      NP: 69.0,
      Usuf: 31.0,
    },
    tauxDeRente: 9.86,
    coefDeCapit: 10.1,
    transactionsViageres: {
      NP: 62.1,
      DtUs: 37.9,
    },
  },
  {
    "age-monsieur": 84,
    "age-madame": 86,
    espVie: 9.9,
    usufruitEconomique: {
      NP: 70.8,
      Usuf: 29.2,
    },
    tauxDeRente: 10.45,
    coefDeCapit: 9.6,
    transactionsViageres: {
      NP: 63.7,
      DtUs: 36.3,
    },
  },
  {
    "age-monsieur": 84,
    "age-madame": 87,
    espVie: 9.7,
    usufruitEconomique: {
      NP: 71.3,
      Usuf: 28.7,
    },
    tauxDeRente: 10.64,
    coefDeCapit: 9.4,
    transactionsViageres: {
      NP: 64.1,
      DtUs: 35.9,
    },
  },
  {
    "age-monsieur": 84,
    "age-madame": 88,
    espVie: 9.5,
    usufruitEconomique: {
      NP: 71.8,
      Usuf: 28.2,
    },
    tauxDeRente: 10.84,
    coefDeCapit: 9.2,
    transactionsViageres: {
      NP: 64.6,
      DtUs: 35.4,
    },
  },
  {
    "age-monsieur": 84,
    "age-madame": 89,
    espVie: 9.3,
    usufruitEconomique: {
      NP: 72.3,
      Usuf: 27.7,
    },
    tauxDeRente: 11.04,
    coefDeCapit: 9.1,
    transactionsViageres: {
      NP: 65.0,
      DtUs: 35.0,
    },
  },
  {
    "age-monsieur": 84,
    "age-madame": 90,
    espVie: 9.1,
    usufruitEconomique: {
      NP: 72.8,
      Usuf: 27.2,
    },
    tauxDeRente: 11.25,
    coefDeCapit: 8.9,
    transactionsViageres: {
      NP: 65.5,
      DtUs: 34.5,
    },
  },
  {
    "age-monsieur": 84,
    "age-madame": 91,
    espVie: 9.0,
    usufruitEconomique: {
      NP: 73.0,
      Usuf: 27.0,
    },
    tauxDeRente: 11.36,
    coefDeCapit: 8.8,
    transactionsViageres: {
      NP: 65.7,
      DtUs: 34.3,
    },
  },
  {
    "age-monsieur": 84,
    "age-madame": 92,
    espVie: 8.9,
    usufruitEconomique: {
      NP: 73.3,
      Usuf: 26.7,
    },
    tauxDeRente: 11.47,
    coefDeCapit: 8.7,
    transactionsViageres: {
      NP: 65.9,
      DtUs: 34.1,
    },
  },
  {
    "age-monsieur": 84,
    "age-madame": 93,
    espVie: 8.8,
    usufruitEconomique: {
      NP: 73.5,
      Usuf: 26.5,
    },
    tauxDeRente: 11.59,
    coefDeCapit: 8.6,
    transactionsViageres: {
      NP: 66.2,
      DtUs: 33.8,
    },
  },
  {
    "age-monsieur": 84,
    "age-madame": 94,
    espVie: 8.7,
    usufruitEconomique: {
      NP: 73.8,
      Usuf: 26.2,
    },
    tauxDeRente: 11.7,
    coefDeCapit: 8.5,
    transactionsViageres: {
      NP: 66.4,
      DtUs: 33.6,
    },
  },

  // ----------------------- 85 ans ----------------------------
  {
    "age-monsieur": 85,
    "age-madame": 65,
    espVie: 27.1,
    usufruitEconomique: {
      NP: 38.8,
      Usuf: 61.2,
    },
    tauxDeRente: 4.74,
    coefDeCapit: 21.1,
    transactionsViageres: {
      NP: 34.9,
      DtUs: 65.1,
    },
  },
  {
    "age-monsieur": 85,
    "age-madame": 66,
    espVie: 26.2,
    usufruitEconomique: {
      NP: 40.0,
      Usuf: 60.0,
    },
    tauxDeRente: 4.85,
    coefDeCapit: 20.6,
    transactionsViageres: {
      NP: 36.0,
      DtUs: 64.0,
    },
  },
  {
    "age-monsieur": 85,
    "age-madame": 67,
    espVie: 25.3,
    usufruitEconomique: {
      NP: 41.3,
      Usuf: 58.7,
    },
    tauxDeRente: 4.97,
    coefDeCapit: 20.1,
    transactionsViageres: {
      NP: 37.2,
      DtUs: 62.8,
    },
  },
  {
    "age-monsieur": 85,
    "age-madame": 68,
    espVie: 24.4,
    usufruitEconomique: {
      NP: 42.6,
      Usuf: 57.4,
    },
    tauxDeRente: 5.1,
    coefDeCapit: 19.6,
    transactionsViageres: {
      NP: 38.4,
      DtUs: 61.6,
    },
  },
  {
    "age-monsieur": 85,
    "age-madame": 69,
    espVie: 23.5,
    usufruitEconomique: {
      NP: 44.0,
      Usuf: 56.0,
    },
    tauxDeRente: 5.24,
    coefDeCapit: 19.1,
    transactionsViageres: {
      NP: 39.6,
      DtUs: 60.4,
    },
  },
  {
    "age-monsieur": 85,
    "age-madame": 70,
    espVie: 22.6,
    usufruitEconomique: {
      NP: 45.4,
      Usuf: 54.6,
    },
    tauxDeRente: 5.39,
    coefDeCapit: 18.6,
    transactionsViageres: {
      NP: 40.9,
      DtUs: 59.1,
    },
  },
  {
    "age-monsieur": 85,
    "age-madame": 71,
    espVie: 21.7,
    usufruitEconomique: {
      NP: 46.9,
      Usuf: 53.7,
    },
    tauxDeRente: 5.55,
    coefDeCapit: 18.0,
    transactionsViageres: {
      NP: 42.2,
      DtUs: 57.8,
    },
  },
  {
    "age-monsieur": 85,
    "age-madame": 72,
    espVie: 20.8,
    usufruitEconomique: {
      NP: 48.3,
      Usuf: 51.7,
    },
    tauxDeRente: 5.73,
    coefDeCapit: 17.4,
    transactionsViageres: {
      NP: 43.5,
      DtUs: 56.5,
    },
  },
  {
    "age-monsieur": 85,
    "age-madame": 73,
    espVie: 19.9,
    usufruitEconomique: {
      NP: 49.9,
      Usuf: 50.1,
    },
    tauxDeRente: 5.92,
    coefDeCapit: 16.9,
    transactionsViageres: {
      NP: 44.9,
      DtUs: 55.1,
    },
  },
  {
    "age-monsieur": 85,
    "age-madame": 74,
    espVie: 19.0,
    usufruitEconomique: {
      NP: 51.5,
      Usuf: 48.5,
    },
    tauxDeRente: 6.14,
    coefDeCapit: 16.3,
    transactionsViageres: {
      NP: 46.3,
      DtUs: 53.7,
    },
  },
  {
    "age-monsieur": 85,
    "age-madame": 75,
    espVie: 18.2,
    usufruitEconomique: {
      NP: 52.9,
      Usuf: 47.1,
    },
    tauxDeRente: 6.34,
    coefDeCapit: 15.8,
    transactionsViageres: {
      NP: 47.7,
      DtUs: 52.3,
    },
  },
  {
    "age-monsieur": 85,
    "age-madame": 76,
    espVie: 17.3,
    usufruitEconomique: {
      NP: 54.6,
      Usuf: 45.4,
    },
    tauxDeRente: 6.6,
    coefDeCapit: 15.2,
    transactionsViageres: {
      NP: 49.2,
      DtUs: 50.8,
    },
  },
  {
    "age-monsieur": 85,
    "age-madame": 77,
    espVie: 16.5,
    usufruitEconomique: {
      NP: 56.2,
      Usuf: 43.3,
    },
    tauxDeRente: 6.85,
    coefDeCapit: 14.6,
    transactionsViageres: {
      NP: 50.6,
      DtUs: 49.4,
    },
  },
  {
    "age-monsieur": 85,
    "age-madame": 78,
    espVie: 15.6,
    usufruitEconomique: {
      NP: 58.0,
      Usuf: 42.0,
    },
    tauxDeRente: 7.16,
    coefDeCapit: 14.0,
    transactionsViageres: {
      NP: 52.2,
      DtUs: 47.8,
    },
  },
  {
    "age-monsieur": 85,
    "age-madame": 79,
    espVie: 14.8,
    usufruitEconomique: {
      NP: 59.6,
      Usuf: 40.4,
    },
    tauxDeRente: 7.47,
    coefDeCapit: 13.4,
    transactionsViageres: {
      NP: 53.7,
      DtUs: 46.3,
    },
  },
  {
    "age-monsieur": 85,
    "age-madame": 80,
    espVie: 14.1,
    usufruitEconomique: {
      NP: 61.1,
      Usuf: 38.9,
    },
    tauxDeRente: 7.77,
    coefDeCapit: 12.9,
    transactionsViageres: {
      NP: 55.0,
      DtUs: 45.0,
    },
  },
  {
    "age-monsieur": 85,
    "age-madame": 81,
    espVie: 13.3,
    usufruitEconomique: {
      NP: 62.8,
      Usuf: 37.2,
    },
    tauxDeRente: 8.15,
    coefDeCapit: 12.3,
    transactionsViageres: {
      NP: 56.5,
      DtUs: 43.5,
    },
  },
  {
    "age-monsieur": 85,
    "age-madame": 82,
    espVie: 12.5,
    usufruitEconomique: {
      NP: 64.6,
      Usuf: 35.4,
    },
    tauxDeRente: 8.58,
    coefDeCapit: 11.7,
    transactionsViageres: {
      NP: 58.2,
      DtUs: 41.8,
    },
  },
  {
    "age-monsieur": 85,
    "age-madame": 83,
    espVie: 11.8,
    usufruitEconomique: {
      NP: 66.2,
      Usuf: 33.8,
    },
    tauxDeRente: 9.0,
    coefDeCapit: 11.1,
    transactionsViageres: {
      NP: 59.6,
      DtUs: 40.4,
    },
  },
  {
    "age-monsieur": 85,
    "age-madame": 84,
    espVie: 11.1,
    usufruitEconomique: {
      NP: 67.9,
      Usuf: 32.1,
    },
    tauxDeRente: 9.48,
    coefDeCapit: 10.6,
    transactionsViageres: {
      NP: 61.1,
      DtUs: 38.9,
    },
  },
  {
    "age-monsieur": 85,
    "age-madame": 85,
    espVie: 10.5,
    usufruitEconomique: {
      NP: 69.3,
      Usuf: 30.7,
    },
    tauxDeRente: 9.94,
    coefDeCapit: 10.1,
    transactionsViageres: {
      NP: 62.4,
      DtUs: 37.6,
    },
  },
  {
    "age-monsieur": 85,
    "age-madame": 86,
    espVie: 9.9,
    usufruitEconomique: {
      NP: 70.8,
      Usuf: 29.2,
    },
    tauxDeRente: 10.45,
    coefDeCapit: 9.6,
    transactionsViageres: {
      NP: 63.7,
      DtUs: 36.3,
    },
  },
  {
    "age-monsieur": 85,
    "age-madame": 87,
    espVie: 9.5,
    usufruitEconomique: {
      NP: 71.8,
      Usuf: 28.2,
    },
    tauxDeRente: 10.84,
    coefDeCapit: 9.2,
    transactionsViageres: {
      NP: 64.6,
      DtUs: 35.4,
    },
  },
  {
    "age-monsieur": 85,
    "age-madame": 88,
    espVie: 9.3,
    usufruitEconomique: {
      NP: 72.3,
      Usuf: 27.7,
    },
    tauxDeRente: 11.04,
    coefDeCapit: 9.1,
    transactionsViageres: {
      NP: 65.0,
      DtUs: 35.0,
    },
  },
  {
    "age-monsieur": 85,
    "age-madame": 89,
    espVie: 9.2,
    usufruitEconomique: {
      NP: 72.5,
      Usuf: 27.5,
    },
    tauxDeRente: 11.14,
    coefDeCapit: 9.0,
    transactionsViageres: {
      NP: 65.3,
      DtUs: 34.7,
    },
  },
  {
    "age-monsieur": 85,
    "age-madame": 90,
    espVie: 9.0,
    usufruitEconomique: {
      NP: 73.0,
      Usuf: 27.0,
    },
    tauxDeRente: 111.36,
    coefDeCapit: 8.8,
    transactionsViageres: {
      NP: 65.7,
      DtUs: 34.3,
    },
  },
  {
    "age-monsieur": 85,
    "age-madame": 91,
    espVie: 8.9,
    usufruitEconomique: {
      NP: 73.3,
      Usuf: 26.7,
    },
    tauxDeRente: 11.47,
    coefDeCapit: 8.7,
    transactionsViageres: {
      NP: 65.9,
      DtUs: 34.1,
    },
  },
  {
    "age-monsieur": 85,
    "age-madame": 92,
    espVie: 8.8,
    usufruitEconomique: {
      NP: 73.5,
      Usuf: 26.5,
    },
    tauxDeRente: 11.59,
    coefDeCapit: 8.6,
    transactionsViageres: {
      NP: 66.2,
      DtUs: 33.8,
    },
  },
  {
    "age-monsieur": 85,
    "age-madame": 93,
    espVie: 8.6,
    usufruitEconomique: {
      NP: 74.0,
      Usuf: 26.011,
    },
    tauxDeRente: 11.82,
    coefDeCapit: 8.5,
    transactionsViageres: {
      NP: 66.6,
      DtUs: 33.4,
    },
  },
  {
    "age-monsieur": 85,
    "age-madame": 94,
    espVie: 8.5,
    usufruitEconomique: {
      NP: 74.3,
      Usuf: 25.7,
    },
    tauxDeRente: 11.94,
    coefDeCapit: 8.4,
    transactionsViageres: {
      NP: 66.9,
      DtUs: 33.1,
    },
  },
  {
    "age-monsieur": 85,
    "age-madame": 95,
    espVie: 8.4,
    usufruitEconomique: {
      NP: 74.6,
      Usuf: 25.4,
    },
    tauxDeRente: 12.07,
    coefDeCapit: 8.3,
    transactionsViageres: {
      NP: 67.1,
      DtUs: 32.9,
    },
  },

  // ----------------------- 86 ans ----------------------------
  {
    "age-monsieur": 86,
    "age-madame": 66,
    espVie: 26.2,
    usufruitEconomique: {
      NP: 40,
      Usuf: 60.0,
    },
    tauxDeRente: 4.85,
    coefDeCapit: 20.6,
    transactionsViageres: {
      NP: 36.0,
      DtUs: 64,
    },
  },
  {
    "age-monsieur": 86,
    "age-madame": 67,
    espVie: 25.3,
    usufruitEconomique: {
      NP: 41.3,
      Usuf: 58.7,
    },
    tauxDeRente: 4.97,
    coefDeCapit: 20.1,
    transactionsViageres: {
      NP: 37.2,
      DtUs: 62.8,
    },
  },
  {
    "age-monsieur": 86,
    "age-madame": 68,
    espVie: 24.4,
    usufruitEconomique: {
      NP: 42.6,
      Usuf: 57.4,
    },
    tauxDeRente: 5.1,
    coefDeCapit: 19.6,
    transactionsViageres: {
      NP: 38.4,
      DtUs: 61.6,
    },
  },
  {
    "age-monsieur": 86,
    "age-madame": 69,
    espVie: 23.5,
    usufruitEconomique: {
      NP: 44.0,
      Usuf: 56.0,
    },
    tauxDeRente: 5.24,
    coefDeCapit: 19.1,
    transactionsViageres: {
      NP: 39.6,
      DtUs: 60.4,
    },
  },
  {
    "age-monsieur": 86,
    "age-madame": 70,
    espVie: 22.5,
    usufruitEconomique: {
      NP: 45.6,
      Usuf: 54.4,
    },
    tauxDeRente: 5.41,
    coefDeCapit: 18.5,
    transactionsViageres: {
      NP: 41.0,
      DtUs: 59.0,
    },
  },
  {
    "age-monsieur": 86,
    "age-madame": 71,
    espVie: 21.6,
    usufruitEconomique: {
      NP: 47.0,
      Usuf: 53.0,
    },
    tauxDeRente: 5.57,
    coefDeCapit: 17.9,
    transactionsViageres: {
      NP: 42.3,
      DtUs: 57.7,
    },
  },
  {
    "age-monsieur": 86,
    "age-madame": 72,
    espVie: 20.7,
    usufruitEconomique: {
      NP: 42.5,
      Usuf: 51.5,
    },
    tauxDeRente: 5.75,
    coefDeCapit: 17.4,
    transactionsViageres: {
      NP: 43.7,
      DtUs: 56.3,
    },
  },
  {
    "age-monsieur": 86,
    "age-madame": 73,
    espVie: 19.9,
    usufruitEconomique: {
      NP: 49.9,
      Usuf: 50.1,
    },
    tauxDeRente: 5.92,
    coefDeCapit: 16.9,
    transactionsViageres: {
      NP: 44.9,
      DtUs: 55.1,
    },
  },
  {
    "age-monsieur": 86,
    "age-madame": 74,
    espVie: 19.0,
    usufruitEconomique: {
      NP: 51.5,
      Usuf: 48.5,
    },
    tauxDeRente: 6.14,
    coefDeCapit: 16.3,
    transactionsViageres: {
      NP: 46.3,
      DtUs: 53.7,
    },
  },
  {
    "age-monsieur": 86,
    "age-madame": 75,
    espVie: 18.1,
    usufruitEconomique: {
      NP: 53.1,
      Usuf: 46.9,
    },
    tauxDeRente: 6.37,
    coefDeCapit: 15.7,
    transactionsViageres: {
      NP: 47.8,
      DtUs: 52.2,
    },
  },
  {
    "age-monsieur": 86,
    "age-madame": 76,
    espVie: 17.3,
    usufruitEconomique: {
      NP: 54.6,
      Usuf: 45.4,
    },
    tauxDeRente: 6.6,
    coefDeCapit: 15.2,
    transactionsViageres: {
      NP: 49.2,
      DtUs: 50.8,
    },
  },
  {
    "age-monsieur": 86,
    "age-madame": 77,
    espVie: 16.4,
    usufruitEconomique: {
      NP: 56.4,
      Usuf: 43.6,
    },
    tauxDeRente: 688.0,
    coefDeCapit: 14.5,
    transactionsViageres: {
      NP: 50.7,
      DtUs: 49.3,
    },
  },
  {
    "age-monsieur": 86,
    "age-madame": 78,
    espVie: 15.6,
    usufruitEconomique: {
      NP: 58.0,
      Usuf: 42.0,
    },
    tauxDeRente: 7.16,
    coefDeCapit: 14.0,
    transactionsViageres: {
      NP: 52.2,
      DtUs: 47.8,
    },
  },
  {
    "age-monsieur": 86,
    "age-madame": 79,
    espVie: 14.8,
    usufruitEconomique: {
      NP: 59.6,
      Usuf: 40.4,
    },
    tauxDeRente: 7.47,
    coefDeCapit: 13.4,
    transactionsViageres: {
      NP: 53.7,
      DtUs: 46.3,
    },
  },
  {
    "age-monsieur": 86,
    "age-madame": 80,
    espVie: 14.0,
    usufruitEconomique: {
      NP: 61.3,
      Usuf: 38.7,
    },
    tauxDeRente: 7.81,
    coefDeCapit: 12.8,
    transactionsViageres: {
      NP: 55.2,
      DtUs: 44.8,
    },
  },
  {
    "age-monsieur": 86,
    "age-madame": 81,
    espVie: 13.3,
    usufruitEconomique: {
      NP: 62.8,
      Usuf: 37.2,
    },
    tauxDeRente: 8.15,
    coefDeCapit: 12.3,
    transactionsViageres: {
      NP: 56.5,
      DtUs: 43.5,
    },
  },
  {
    "age-monsieur": 86,
    "age-madame": 82,
    espVie: 12.5,
    usufruitEconomique: {
      NP: 64.6,
      Usuf: 35.4,
    },
    tauxDeRente: 8.58,
    coefDeCapit: 11.7,
    transactionsViageres: {
      NP: 58.2,
      DtUs: 41.8,
    },
  },
  {
    "age-monsieur": 86,
    "age-madame": 83,
    espVie: 11.8,
    usufruitEconomique: {
      NP: 66.2,
      Usuf: 33.8,
    },
    tauxDeRente: 9.0,
    coefDeCapit: 11.1,
    transactionsViageres: {
      NP: 59.6,
      DtUs: 40.4,
    },
  },
  {
    "age-monsieur": 86,
    "age-madame": 84,
    espVie: 11.1,
    usufruitEconomique: {
      NP: 67.9,
      Usuf: 32.1,
    },
    tauxDeRente: 9.48,
    coefDeCapit: 10.6,
    transactionsViageres: {
      NP: 61.1,
      DtUs: 38.9,
    },
  },
  {
    "age-monsieur": 86,
    "age-madame": 85,
    espVie: 10.5,
    usufruitEconomique: {
      NP: 69.3,
      Usuf: 30.7,
    },
    tauxDeRente: 9.94,
    coefDeCapit: 10.1,
    transactionsViageres: {
      NP: 62.4,
      DtUs: 37.6,
    },
  },
  {
    "age-monsieur": 86,
    "age-madame": 86,
    espVie: 9.9,
    usufruitEconomique: {
      NP: 70.8,
      Usuf: 29.2,
    },
    tauxDeRente: 10.45,
    coefDeCapit: 9.6,
    transactionsViageres: {
      NP: 63.7,
      DtUs: 36.3,
    },
  },
  {
    "age-monsieur": 86,
    "age-madame": 87,
    espVie: 9.3,
    usufruitEconomique: {
      NP: 72.3,
      Usuf: 27.7,
    },
    tauxDeRente: 11.04,
    coefDeCapit: 9.1,
    transactionsViageres: {
      NP: 65,
      DtUs: 35,
    },
  },
  {
    "age-monsieur": 86,
    "age-madame": 88,
    espVie: 8.8,
    usufruitEconomique: {
      NP: 73.5,
      Usuf: 26.5,
    },
    tauxDeRente: 11.59,
    coefDeCapit: 8.6,
    transactionsViageres: {
      NP: 66.2,
      DtUs: 33.8,
    },
  },
  {
    "age-monsieur": 86,
    "age-madame": 89,
    espVie: 8.6,
    usufruitEconomique: {
      NP: 74.0,
      Usuf: 26.0,
    },
    tauxDeRente: 11.82,
    coefDeCapit: 8.5,
    transactionsViageres: {
      NP: 66.6,
      DtUs: 33.4,
    },
  },
  {
    "age-monsieur": 86,
    "age-madame": 90,
    espVie: 8.5,
    usufruitEconomique: {
      NP: 74.3,
      Usuf: 25.7,
    },
    tauxDeRente: 11.94,
    coefDeCapit: 8.4,
    transactionsViageres: {
      NP: 66.9,
      DtUs: 33.1,
    },
  },
  {
    "age-monsieur": 86,
    "age-madame": 91,
    espVie: 8.4,
    usufruitEconomique: {
      NP: 74.6,
      Usuf: 25.41,
    },
    tauxDeRente: 12.07,
    coefDeCapit: 8.3,
    transactionsViageres: {
      NP: 67.1,
      DtUs: 32.9,
    },
  },
  {
    "age-monsieur": 86,
    "age-madame": 92,
    espVie: 8.3,
    usufruitEconomique: {
      NP: 74.8,
      Usuf: 25.2,
    },
    tauxDeRente: 12.2,
    coefDeCapit: 8.2,
    transactionsViageres: {
      NP: 67.3,
      DtUs: 32.7,
    },
  },
  {
    "age-monsieur": 86,
    "age-madame": 93,
    espVie: 8.2,
    usufruitEconomique: {
      NP: 75.1,
      Usuf: 24.9,
    },
    tauxDeRente: 12.33,
    coefDeCapit: 8.1,
    transactionsViageres: {
      NP: 67.6,
      DtUs: 32.4,
    },
  },
  {
    "age-monsieur": 86,
    "age-madame": 94,
    espVie: 8.1,
    usufruitEconomique: {
      NP: 75.4,
      Usuf: 24.6,
    },
    tauxDeRente: 12.47,
    coefDeCapit: 8.0,
    transactionsViageres: {
      NP: 67.8,
      DtUs: 32.2,
    },
  },
  {
    "age-monsieur": 86,
    "age-madame": 95,
    espVie: 8.0,
    usufruitEconomique: {
      NP: 75.6,
      Usuf: 24.4,
    },
    tauxDeRente: 12.6,
    coefDeCapit: 7.9,
    transactionsViageres: {
      NP: 68.1,
      DtUs: 31.9,
    },
  },
  {
    "age-monsieur": 86,
    "age-madame": 96,
    espVie: 7.9,
    usufruitEconomique: {
      NP: 75.9,
      Usuf: 24.1,
    },
    tauxDeRente: 12.75,
    coefDeCapit: 7.8,
    transactionsViageres: {
      NP: 68.3,
      DtUs: 31.7,
    },
  },
  // ----------------------- 87 ans ----------------------------
  {
    "age-monsieur": 87,
    "age-madame": 67,
    espVie: 25.1,
    usufruitEconomique: {
      NP: 41.6,
      Usuf: 58.4,
    },
    tauxDeRente: 5.0,
    coefDeCapit: 20.0,
    transactionsViageres: {
      NP: 37.4,
      DtUs: 62.6,
    },
  },
  {
    "age-monsieur": 87,
    "age-madame": 68,
    espVie: 24.1,
    usufruitEconomique: {
      NP: 43.1,
      Usuf: 56.9,
    },
    tauxDeRente: 5.15,
    coefDeCapit: 19.4,
    transactionsViageres: {
      NP: 38.8,
      DtUs: 61.2,
    },
  },
  {
    "age-monsieur": 87,
    "age-madame": 69,
    espVie: 23.3,
    usufruitEconomique: {
      NP: 44.3,
      Usuf: 55.7,
    },
    tauxDeRente: 5.27,
    coefDeCapit: 19.0,
    transactionsViageres: {
      NP: 39.9,
      DtUs: 60.1,
    },
  },
  {
    "age-monsieur": 87,
    "age-madame": 70,
    espVie: 22.4,
    usufruitEconomique: {
      NP: 45.7,
      Usuf: 54.3,
    },
    tauxDeRente: 5.43,
    coefDeCapit: 18.4,
    transactionsViageres: {
      NP: 41.1,
      DtUs: 58.9,
    },
  },
  {
    "age-monsieur": 87,
    "age-madame": 71,
    espVie: 21.5,
    usufruitEconomique: {
      NP: 47.2,
      Usuf: 52.8,
    },
    tauxDeRente: 5.59,
    coefDeCapit: 17.9,
    transactionsViageres: {
      NP: 42.5,
      DtUs: 57.5,
    },
  },
  {
    "age-monsieur": 87,
    "age-madame": 72,
    espVie: 20.6,
    usufruitEconomique: {
      NP: 48.7,
      Usuf: 51.3,
    },
    tauxDeRente: 5.77,
    coefDeCapit: 17.3,
    transactionsViageres: {
      NP: 43.8,
      DtUs: 56.2,
    },
  },
  {
    "age-monsieur": 87,
    "age-madame": 73,
    espVie: 19.7,
    usufruitEconomique: {
      NP: 50.2,
      Usuf: 49.8,
    },
    tauxDeRente: 5.97,
    coefDeCapit: 16.8,
    transactionsViageres: {
      NP: 45.2,
      DtUs: 54.8,
    },
  },
  {
    "age-monsieur": 87,
    "age-madame": 74,
    espVie: 18.8,
    usufruitEconomique: {
      NP: 51.8,
      Usuf: 48.2,
    },
    tauxDeRente: 6.19,
    coefDeCapit: 16.2,
    transactionsViageres: {
      NP: 46.7,
      DtUs: 53.3,
    },
  },
  {
    "age-monsieur": 87,
    "age-madame": 75,
    espVie: 18.0,
    usufruitEconomique: {
      NP: 53.3,
      Usuf: 46.7,
    },
    tauxDeRente: 6.4,
    coefDeCapit: 15.6,
    transactionsViageres: {
      NP: 48.0,
      DtUs: 52.0,
    },
  },
  {
    "age-monsieur": 87,
    "age-madame": 76,
    espVie: 17.1,
    usufruitEconomique: {
      NP: 55.0,
      Usuf: 45.0,
    },
    tauxDeRente: 6.66,
    coefDeCapit: 15.0,
    transactionsViageres: {
      NP: 49.5,
      DtUs: 50.5,
    },
  },
  {
    "age-monsieur": 87,
    "age-madame": 77,
    espVie: 16.3,
    usufruitEconomique: {
      NP: 56.6,
      Usuf: 43.4,
    },
    tauxDeRente: 6.91,
    coefDeCapit: 14.5,
    transactionsViageres: {
      NP: 50.9,
      DtUs: 49.1,
    },
  },
  {
    "age-monsieur": 87,
    "age-madame": 78,
    espVie: 15.5,
    usufruitEconomique: {
      NP: 58.2,
      Usuf: 41.8,
    },
    tauxDeRente: 7.19,
    coefDeCapit: 13.9,
    transactionsViageres: {
      NP: 52.4,
      DtUs: 47.6,
    },
  },
  {
    "age-monsieur": 87,
    "age-madame": 79,
    espVie: 14.7,
    usufruitEconomique: {
      NP: 59.8,
      Usuf: 40.2,
    },
    tauxDeRente: 7.51,
    coefDeCapit: 13.3,
    transactionsViageres: {
      NP: 53.9,
      DtUs: 46.1,
    },
  },
  {
    "age-monsieur": 87,
    "age-madame": 80,
    espVie: 13.9,
    usufruitEconomique: {
      NP: 61.5,
      Usuf: 38.5,
    },
    tauxDeRente: 7.86,
    coefDeCapit: 12.7,
    transactionsViageres: {
      NP: 55.4,
      DtUs: 44.6,
    },
  },
  {
    "age-monsieur": 87,
    "age-madame": 81,
    espVie: 13.1,
    usufruitEconomique: {
      NP: 63.3,
      Usuf: 36.7,
    },
    tauxDeRente: 8.25,
    coefDeCapit: 12.1,
    transactionsViageres: {
      NP: 56.9,
      DtUs: 43.1,
    },
  },
  {
    "age-monsieur": 87,
    "age-madame": 82,
    espVie: 12.4,
    usufruitEconomique: {
      NP: 64.8,
      Usuf: 35.2,
    },
    tauxDeRente: 8.63,
    coefDeCapit: 11.6,
    transactionsViageres: {
      NP: 58.4,
      DtUs: 41.6,
    },
  },
  {
    "age-monsieur": 87,
    "age-madame": 83,
    espVie: 11.7,
    usufruitEconomique: {
      NP: 66.4,
      Usuf: 33.6,
    },
    tauxDeRente: 9.06,
    coefDeCapit: 11.0,
    transactionsViageres: {
      NP: 59.8,
      DtUs: 40.2,
    },
  },
  {
    "age-monsieur": 87,
    "age-madame": 85,
    espVie: 10.4,
    usufruitEconomique: {
      NP: 69.5,
      Usuf: 30.5,
    },
    tauxDeRente: 10.02,
    coefDeCapit: 10.0,
    transactionsViageres: {
      NP: 62.6,
      DtUs: 37.4,
    },
  },
  {
    "age-monsieur": 87,
    "age-madame": 86,
    espVie: 9.8,
    usufruitEconomique: {
      NP: 71.0,
      Usuf: 29.0,
    },
    tauxDeRente: 10.55,
    coefDeCapit: 9.5,
    transactionsViageres: {
      NP: 63.9,
      DtUs: 36.1,
    },
  },
  {
    "age-monsieur": 87,
    "age-madame": 87,
    espVie: 9.2,
    usufruitEconomique: {
      NP: 72.5,
      Usuf: 27.5,
    },
    tauxDeRente: 11.14,
    coefDeCapit: 9.0,
    transactionsViageres: {
      NP: 65.3,
      DtUs: 34.7,
    },
  },
  {
    "age-monsieur": 87,
    "age-madame": 88,
    espVie: 8.6,
    usufruitEconomique: {
      NP: 74.0,
      Usuf: 26.0,
    },
    tauxDeRente: 11.82,
    coefDeCapit: 8.5,
    transactionsViageres: {
      NP: 66.6,
      DtUs: 33.4,
    },
  },
  {
    "age-monsieur": 87,
    "age-madame": 89,
    espVie: 8.5,
    usufruitEconomique: {
      NP: 74.3,
      Usuf: 25.7,
    },
    tauxDeRente: 11.94,
    coefDeCapit: 8.4,
    transactionsViageres: {
      NP: 66.9,
      DtUs: 33.1,
    },
  },
  {
    "age-monsieur": 87,
    "age-madame": 90,
    espVie: 8.3,
    usufruitEconomique: {
      NP: 74.8,
      Usuf: 25.2,
    },
    tauxDeRente: 12.2,
    coefDeCapit: 8.2,
    transactionsViageres: {
      NP: 67.3,
      DtUs: 32.7,
    },
  },
  {
    "age-monsieur": 87,
    "age-madame": 91,
    espVie: 8.2,
    usufruitEconomique: {
      NP: 75.1,
      Usuf: 24.9,
    },
    tauxDeRente: 12.33,
    coefDeCapit: 8.1,
    transactionsViageres: {
      NP: 67.6,
      DtUs: 32.4,
    },
  },
  {
    "age-monsieur": 87,
    "age-madame": 92,
    espVie: 8.1,
    usufruitEconomique: {
      NP: 75.4,
      Usuf: 24.6,
    },
    tauxDeRente: 12.47,
    coefDeCapit: 8.0,
    transactionsViageres: {
      NP: 67.8,
      DtUs: 32.2,
    },
  },
  {
    "age-monsieur": 87,
    "age-madame": 93,
    espVie: 8.0,
    usufruitEconomique: {
      NP: 75.6,
      Usuf: 24.4,
    },
    tauxDeRente: 12.6,
    coefDeCapit: 7.9,
    transactionsViageres: {
      NP: 68.1,
      DtUs: 31.9,
    },
  },
  {
    "age-monsieur": 87,
    "age-madame": 94,
    espVie: 7.9,
    usufruitEconomique: {
      NP: 75.9,
      Usuf: 24.1,
    },
    tauxDeRente: 12.75,
    coefDeCapit: 7.8,
    transactionsViageres: {
      NP: 68.3,
      DtUs: 31.7,
    },
  },
  {
    "age-monsieur": 87,
    "age-madame": 95,
    espVie: 7.8,
    usufruitEconomique: {
      NP: 76.1,
      Usuf: 23.9,
    },
    tauxDeRente: 12.89,
    coefDeCapit: 7.8,
    transactionsViageres: {
      NP: 68.5,
      DtUs: 31.5,
    },
  },
  {
    "age-monsieur": 87,
    "age-madame": 96,
    espVie: 7.7,
    usufruitEconomique: {
      NP: 76.4,
      Usuf: 23.6,
    },
    tauxDeRente: 13.04,
    coefDeCapit: 7.7,
    transactionsViageres: {
      NP: 68.8,
      DtUs: 31.2,
    },
  },
  {
    "age-monsieur": 87,
    "age-madame": 97,
    espVie: 7.6,
    usufruitEconomique: {
      NP: 76.7,
      Usuf: 23.3,
    },
    tauxDeRente: 13.19,
    coefDeCapit: 7.6,
    transactionsViageres: {
      NP: 69.0,
      DtUs: 31.0,
    },
  },

  // ----------------------- 88 ans ----------------------------

  {
    "age-monsieur": 88,
    "age-madame": 68,
    espVie: 24.2,
    usufruitEconomique: {
      NP: 42.9,
      Usuf: 57.1,
    },
    tauxDeRente: 5.13,
    coefDeCapit: 19.5,
    transactionsViageres: {
      NP: 38.6,
      DtUs: 61.4,
    },
  },
  {
    "age-monsieur": 88,
    "age-madame": 69,
    espVie: 23.3,
    usufruitEconomique: {
      NP: 44.3,
      Usuf: 55.7,
    },
    tauxDeRente: 5.27,
    coefDeCapit: 19.0,
    transactionsViageres: {
      NP: 39.9,
      DtUs: 60.1,
    },
  },
  {
    "age-monsieur": 88,
    "age-madame": 70,
    espVie: 22.4,
    usufruitEconomique: {
      NP: 45.7,
      Usuf: 54.3,
    },
    tauxDeRente: 5.43,
    coefDeCapit: 18.4,
    transactionsViageres: {
      NP: 41.1,
      DtUs: 58.9,
    },
  },
  {
    "age-monsieur": 88,
    "age-madame": 71,
    espVie: 21.5,
    usufruitEconomique: {
      NP: 47.2,
      Usuf: 52.8,
    },
    tauxDeRente: 5.59,
    coefDeCapit: 17.9,
    transactionsViageres: {
      NP: 42.5,
      DtUs: 57.5,
    },
  },
  {
    "age-monsieur": 88,
    "age-madame": 72,
    espVie: 20.6,
    usufruitEconomique: {
      NP: 48.7,
      Usuf: 51.3,
    },
    tauxDeRente: 5.77,
    coefDeCapit: 17.3,
    transactionsViageres: {
      NP: 43.8,
      DtUs: 56.2,
    },
  },
  {
    "age-monsieur": 88,
    "age-madame": 73,
    espVie: 19.7,
    usufruitEconomique: {
      NP: 0.2,
      Usuf: 49.8,
    },
    tauxDeRente: 5.97,
    coefDeCapit: 16.8,
    transactionsViageres: {
      NP: 45.2,
      DtUs: 54.8,
    },
  },
  {
    "age-monsieur": 88,
    "age-madame": 74,
    espVie: 18.8,
    usufruitEconomique: {
      NP: 51.8,
      Usuf: 48.2,
    },
    tauxDeRente: 6.19,
    coefDeCapit: 16.2,
    transactionsViageres: {
      NP: 46.7,
      DtUs: 53.3,
    },
  },
  {
    "age-monsieur": 88,
    "age-madame": 75,
    espVie: 18.0,
    usufruitEconomique: {
      NP: 53.3,
      Usuf: 46.7,
    },
    tauxDeRente: 6.4,
    coefDeCapit: 15.6,
    transactionsViageres: {
      NP: 48.0,
      DtUs: 52.0,
    },
  },
  {
    "age-monsieur": 88,
    "age-madame": 76,
    espVie: 17.1,
    usufruitEconomique: {
      NP: 55.0,
      Usuf: 45.0,
    },
    tauxDeRente: 6.66,
    coefDeCapit: 15.0,
    transactionsViageres: {
      NP: 49.5,
      DtUs: 50.5,
    },
  },
  {
    "age-monsieur": 88,
    "age-madame": 77,
    espVie: 16.3,
    usufruitEconomique: {
      NP: 56.6,
      Usuf: 43.4,
    },
    tauxDeRente: 6.91,
    coefDeCapit: 14.5,
    transactionsViageres: {
      NP: 50.9,
      DtUs: 49.1,
    },
  },
  {
    "age-monsieur": 88,
    "age-madame": 78,
    espVie: 15.5,
    usufruitEconomique: {
      NP: 58.2,
      Usuf: 41.8,
    },
    tauxDeRente: 7.19,
    coefDeCapit: 13.9,
    transactionsViageres: {
      NP: 52.4,
      DtUs: 47.6,
    },
  },
  {
    "age-monsieur": 88,
    "age-madame": 79,
    espVie: 14.7,
    usufruitEconomique: {
      NP: 59.8,
      Usuf: 40.2,
    },
    tauxDeRente: 7.51,
    coefDeCapit: 13.3,
    transactionsViageres: {
      NP: 53.9,
      DtUs: 46.1,
    },
  },
  {
    "age-monsieur": 88,
    "age-madame": 80,
    espVie: 13.9,
    usufruitEconomique: {
      NP: 61.5,
      Usuf: 38.5,
    },
    tauxDeRente: 7.86,
    coefDeCapit: 12.7,
    transactionsViageres: {
      NP: 55.4,
      DtUs: 44.6,
    },
  },
  {
    "age-monsieur": 88,
    "age-madame": 81,
    espVie: 13.1,
    usufruitEconomique: {
      NP: 63.3,
      Usuf: 36.7,
    },
    tauxDeRente: 8.25,
    coefDeCapit: 12.1,
    transactionsViageres: {
      NP: 56.9,
      DtUs: 43.1,
    },
  },
  {
    "age-monsieur": 88,
    "age-madame": 82,
    espVie: 12.4,
    usufruitEconomique: {
      NP: 64.8,
      Usuf: 35.2,
    },
    tauxDeRente: 8.63,
    coefDeCapit: 11.6,
    transactionsViageres: {
      NP: 58.4,
      DtUs: 41.6,
    },
  },
  {
    "age-monsieur": 88,
    "age-madame": 83,
    espVie: 11.7,
    usufruitEconomique: {
      NP: 66.4,
      Usuf: 33.6,
    },
    tauxDeRente: 9.06,
    coefDeCapit: 11.0,
    transactionsViageres: {
      NP: 59.8,
      DtUs: 40.2,
    },
  },
  {
    "age-monsieur": 88,
    "age-madame": 84,
    espVie: 11.0,
    usufruitEconomique: {
      NP: 68.1,
      Usuf: 31.9,
    },
    tauxDeRente: 9.55,
    coefDeCapit: 10.5,
    transactionsViageres: {
      NP: 61.3,
      DtUs: 38.7,
    },
  },
  {
    "age-monsieur": 88,
    "age-madame": 85,
    espVie: 10.3,
    usufruitEconomique: {
      NP: 69.8,
      Usuf: 30.2,
    },
    tauxDeRente: 10.1,
    coefDeCapit: 9.9,
    transactionsViageres: {
      NP: 62.8,
      DtUs: 37.2,
    },
  },
  {
    "age-monsieur": 88,
    "age-madame": 86,
    espVie: 9.7,
    usufruitEconomique: {
      NP: 71.3,
      Usuf: 28.7,
    },
    tauxDeRente: 10.64,
    coefDeCapit: 9.4,
    transactionsViageres: {
      NP: 64.1,
      DtUs: 35.9,
    },
  },
  {
    "age-monsieur": 88,
    "age-madame": 87,
    espVie: 9.2,
    usufruitEconomique: {
      NP: 72.5,
      Usuf: 27.5,
    },
    tauxDeRente: 11.14,
    coefDeCapit: 9.0,
    transactionsViageres: {
      NP: 65.3,
      DtUs: 34.7,
    },
  },
  {
    "age-monsieur": 88,
    "age-madame": 88,
    espVie: 8.6,
    usufruitEconomique: {
      NP: 74.0,
      Usuf: 26.0,
    },
    tauxDeRente: 11.82,
    coefDeCapit: 8.5,
    transactionsViageres: {
      NP: 66.6,
      DtUs: 33.4,
    },
  },
  {
    "age-monsieur": 88,
    "age-madame": 89,
    espVie: 8.2,
    usufruitEconomique: {
      NP: 75.1,
      Usuf: 24.9,
    },
    tauxDeRente: 12.33,
    coefDeCapit: 8.1,
    transactionsViageres: {
      NP: 67.6,
      DtUs: 32.4,
    },
  },
  {
    "age-monsieur": 88,
    "age-madame": 90,
    espVie: 8.0,
    usufruitEconomique: {
      NP: 75.6,
      Usuf: 24.4,
    },
    tauxDeRente: 12.6,
    coefDeCapit: 7.9,
    transactionsViageres: {
      NP: 68.1,
      DtUs: 31.9,
    },
  },
  {
    "age-monsieur": 88,
    "age-madame": 91,
    espVie: 7.9,
    usufruitEconomique: {
      NP: 75.9,
      Usuf: 24.1,
    },
    tauxDeRente: 12.75,
    coefDeCapit: 7.8,
    transactionsViageres: {
      NP: 68.3,
      DtUs: 31.7,
    },
  },
  {
    "age-monsieur": 88,
    "age-madame": 92,
    espVie: 7.8,
    usufruitEconomique: {
      NP: 76.1,
      Usuf: 23.9,
    },
    tauxDeRente: 12.89,
    coefDeCapit: 7.8,
    transactionsViageres: {
      NP: 68.5,
      DtUs: 31.5,
    },
  },
  {
    "age-monsieur": 88,
    "age-madame": 93,
    espVie: 7.7,
    usufruitEconomique: {
      NP: 76.4,
      Usuf: 23.6,
    },
    tauxDeRente: 13.04,
    coefDeCapit: 7.7,
    transactionsViageres: {
      NP: 68.8,
      DtUs: 31.2,
    },
  },
  {
    "age-monsieur": 88,
    "age-madame": 94,
    espVie: 7.6,
    usufruitEconomique: {
      NP: 76.7,
      Usuf: 23.3,
    },
    tauxDeRente: 13.19,
    coefDeCapit: 7.6,
    transactionsViageres: {
      NP: 69.0,
      DtUs: 31.0,
    },
  },
  {
    "age-monsieur": 88,
    "age-madame": 95,
    espVie: 7.5,
    usufruitEconomique: {
      NP: 76.9,
      Usuf: 23.1,
    },
    tauxDeRente: 13.35,
    coefDeCapit: 7.5,
    transactionsViageres: {
      NP: 69.3,
      DtUs: 30.7,
    },
  },
  {
    "age-monsieur": 88,
    "age-madame": 96,
    espVie: 7.4,
    usufruitEconomique: {
      NP: 77.2,
      Usuf: 22.8,
    },
    tauxDeRente: 13.51,
    coefDeCapit: 7.4,
    transactionsViageres: {
      NP: 69.5,
      DtUs: 30.5,
    },
  },
  {
    "age-monsieur": 88,
    "age-madame": 97,
    espVie: 7.3,
    usufruitEconomique: {
      NP: 77.5,
      Usuf: 22.5,
    },
    tauxDeRente: 13.68,
    coefDeCapit: 7.3,
    transactionsViageres: {
      NP: 69.7,
      DtUs: 30.3,
    },
  },
  {
    "age-monsieur": 88,
    "age-madame": 98,
    espVie: 7.2,
    usufruitEconomique: {
      NP: 77.8,
      Usuf: 22.2,
    },
    tauxDeRente: 13.85,
    coefDeCapit: 7.2,
    transactionsViageres: {
      NP: 70,
      DtUs: 30.0,
    },
  },

  // ----------------------- 89 ans ----------------------------
  {
    "age-monsieur": 89,
    "age-madame": 69,
    espVie: 23.3,
    usufruitEconomique: {
      NP: 44.3,
      Usuf: 55.7,
    },
    tauxDeRente: 5.27,
    coefDeCapit: 19,
    transactionsViageres: {
      NP: 39.9,
      DtUs: 60.1,
    },
  },
  {
    "age-monsieur": 89,
    "age-madame": 70,
    espVie: 22.3,
    usufruitEconomique: {
      NP: 45.9,
      Usuf: 54.1,
    },
    tauxDeRente: 5.44,
    coefDeCapit: 18.4,
    transactionsViageres: {
      NP: 41.3,
      DtUs: 58.7,
    },
  },
  {
    "age-monsieur": 89,
    "age-madame": 71,
    espVie: 21.4,
    usufruitEconomique: {
      NP: 47.3,
      Usuf: 52.7,
    },
    tauxDeRente: 5.61,
    coefDeCapit: 17.8,
    transactionsViageres: {
      NP: 42.6,
      DtUs: 57.4,
    },
  },
  {
    "age-monsieur": 89,
    "age-madame": 72,
    espVie: 20.5,
    usufruitEconomique: {
      NP: 48.9,
      Usuf: 51.1,
    },
    tauxDeRente: 5.79,
    coefDeCapit: 17.3,
    transactionsViageres: {
      NP: 44.0,
      DtUs: 56.0,
    },
  },
  {
    "age-monsieur": 89,
    "age-madame": 73,
    espVie: 19.7,
    usufruitEconomique: {
      NP: 50.2,
      Usuf: 49.8,
    },
    tauxDeRente: 5.97,
    coefDeCapit: 16.8,
    transactionsViageres: {
      NP: 45.2,
      DtUs: 54.8,
    },
  },
  {
    "age-monsieur": 89,
    "age-madame": 74,
    espVie: 18.8,
    usufruitEconomique: {
      NP: 51.8,
      Usuf: 48.2,
    },
    tauxDeRente: 6.19,
    coefDeCapit: 16.2,
    transactionsViageres: {
      NP: 46.7,
      DtUs: 53.3,
    },
  },
  {
    "age-monsieur": 89,
    "age-madame": 75,
    espVie: 17.9,
    usufruitEconomique: {
      NP: 53.5,
      Usuf: 46.5,
    },
    tauxDeRente: 6.42,
    coefDeCapit: 15.6,
    transactionsViageres: {
      NP: 48.2,
      DtUs: 51.8,
    },
  },
  {
    "age-monsieur": 89,
    "age-madame": 76,
    espVie: 17.1,
    usufruitEconomique: {
      NP: 55.0,
      Usuf: 45.0,
    },
    tauxDeRente: 6.66,
    coefDeCapit: 15.0,
    transactionsViageres: {
      NP: 49.5,
      DtUs: 50.5,
    },
  },
  {
    "age-monsieur": 89,
    "age-madame": 77,
    espVie: 16.3,
    usufruitEconomique: {
      NP: 56.6,
      Usuf: 43.4,
    },
    tauxDeRente: 6.91,
    coefDeCapit: 14.5,
    transactionsViageres: {
      NP: 50.9,
      DtUs: 49.1,
    },
  },
  {
    "age-monsieur": 89,
    "age-madame": 78,
    espVie: 15.4,
    usufruitEconomique: {
      NP: 58.4,
      Usuf: 41.6,
    },
    tauxDeRente: 7.23,
    coefDeCapit: 13.8,
    transactionsViageres: {
      NP: 52.5,
      DtUs: 47.5,
    },
  },
  {
    "age-monsieur": 89,
    "age-madame": 79,
    espVie: 14.6,
    usufruitEconomique: {
      NP: 60.0,
      Usuf: 40.0,
    },
    tauxDeRente: 7.55,
    coefDeCapit: 13.2,
    transactionsViageres: {
      NP: 54.0,
      DtUs: 46.0,
    },
  },
  {
    "age-monsieur": 89,
    "age-madame": 80,
    espVie: 13.9,
    usufruitEconomique: {
      NP: 61.5,
      Usuf: 38.5,
    },
    tauxDeRente: 7.86,
    coefDeCapit: 12.7,
    transactionsViageres: {
      NP: 55.4,
      DtUs: 44.6,
    },
  },
  {
    "age-monsieur": 89,
    "age-madame": 81,
    espVie: 13.1,
    usufruitEconomique: {
      NP: 63.3,
      Usuf: 36.7,
    },
    tauxDeRente: 8.25,
    coefDeCapit: 12.1,
    transactionsViageres: {
      NP: 56.9,
      DtUs: 43.1,
    },
  },
  {
    "age-monsieur": 89,
    "age-madame": 82,
    espVie: 12.4,
    usufruitEconomique: {
      NP: 64.8,
      Usuf: 35.2,
    },
    tauxDeRente: 8.63,
    coefDeCapit: 11.6,
    transactionsViageres: {
      NP: 58.4,
      DtUs: 41.6,
    },
  },
  {
    "age-monsieur": 89,
    "age-madame": 83,
    espVie: 11.6,
    usufruitEconomique: {
      NP: 66.7,
      Usuf: 33.3,
    },
    tauxDeRente: 9.13,
    coefDeCapit: 11.0,
    transactionsViageres: {
      NP: 60.0,
      DtUs: 40.0,
    },
  },
  {
    "age-monsieur": 89,
    "age-madame": 84,
    espVie: 11.0,
    usufruitEconomique: {
      NP: 68.1,
      Usuf: 31.9,
    },
    tauxDeRente: 9.55,
    coefDeCapit: 10.5,
    transactionsViageres: {
      NP: 61.3,
      DtUs: 38.7,
    },
  },
  {
    "age-monsieur": 89,
    "age-madame": 85,
    espVie: 10.3,
    usufruitEconomique: {
      NP: 69.8,
      Usuf: 30.2,
    },
    tauxDeRente: 10.1,
    coefDeCapit: 9.9,
    transactionsViageres: {
      NP: 62.8,
      DtUs: 37.2,
    },
  },
  {
    "age-monsieur": 89,
    "age-madame": 86,
    espVie: 9.7,
    usufruitEconomique: {
      NP: 71.3,
      Usuf: 28.7,
    },
    tauxDeRente: 10.64,
    coefDeCapit: 9.4,
    transactionsViageres: {
      NP: 64.1,
      DtUs: 35.9,
    },
  },
  {
    "age-monsieur": 89,
    "age-madame": 87,
    espVie: 9.1,
    usufruitEconomique: {
      NP: 72.8,
      Usuf: 27.2,
    },
    tauxDeRente: 11.25,
    coefDeCapit: 8.9,
    transactionsViageres: {
      NP: 65.5,
      DtUs: 34.5,
    },
  },
  {
    "age-monsieur": 89,
    "age-madame": 88,
    espVie: 8.6,
    usufruitEconomique: {
      NP: 74.0,
      Usuf: 26.0,
    },
    tauxDeRente: 11.82,
    coefDeCapit: 8.5,
    transactionsViageres: {
      NP: 66.6,
      DtUs: 33.4,
    },
  },
  {
    "age-monsieur": 89,
    "age-madame": 89,
    espVie: 8.1,
    usufruitEconomique: {
      NP: 75.4,
      Usuf: 24.6,
    },
    tauxDeRente: 12.47,
    coefDeCapit: 8.0,
    transactionsViageres: {
      NP: 67.8,
      DtUs: 32.2,
    },
  },
  {
    "age-monsieur": 89,
    "age-madame": 90,
    espVie: 7.8,
    usufruitEconomique: {
      NP: 76.1,
      Usuf: 23.9,
    },
    tauxDeRente: 12.89,
    coefDeCapit: 7.8,
    transactionsViageres: {
      NP: 68.5,
      DtUs: 31.5,
    },
  },
  {
    "age-monsieur": 89,
    "age-madame": 91,
    espVie: 7.7,
    usufruitEconomique: {
      NP: 76.4,
      Usuf: 23.6,
    },
    tauxDeRente: 13.04,
    coefDeCapit: 7.7,
    transactionsViageres: {
      NP: 68.8,
      DtUs: 31.2,
    },
  },
  {
    "age-monsieur": 89,
    "age-madame": 92,
    espVie: 7.5,
    usufruitEconomique: {
      NP: 76.9,
      Usuf: 23.1,
    },
    tauxDeRente: 13.35,
    coefDeCapit: 7.5,
    transactionsViageres: {
      NP: 69.3,
      DtUs: 30.7,
    },
  },
  {
    "age-monsieur": 89,
    "age-madame": 93,
    espVie: 7.4,
    usufruitEconomique: {
      NP: 77.2,
      Usuf: 22.8,
    },
    tauxDeRente: 13.51,
    coefDeCapit: 7.4,
    transactionsViageres: {
      NP: 69.5,
      DtUs: 30.5,
    },
  },
  {
    "age-monsieur": 89,
    "age-madame": 94,
    espVie: 7.3,
    usufruitEconomique: {
      NP: 77.5,
      Usuf: 22.5,
    },
    tauxDeRente: 13.68,
    coefDeCapit: 7.3,
    transactionsViageres: {
      NP: 69.7,
      DtUs: 30.3,
    },
  },
  {
    "age-monsieur": 89,
    "age-madame": 95,
    espVie: 7.2,
    usufruitEconomique: {
      NP: 77.8,
      Usuf: 22.2,
    },
    tauxDeRente: 13.85,
    coefDeCapit: 7.2,
    transactionsViageres: {
      NP: 70,
      DtUs: 30,
    },
  },
  {
    "age-monsieur": 89,
    "age-madame": 96,
    espVie: 7.1,
    usufruitEconomique: {
      NP: 78.0,
      Usuf: 22.0,
    },
    tauxDeRente: 14.02,
    coefDeCapit: 7.1,
    transactionsViageres: {
      NP: 70.2,
      DtUs: 29.8,
    },
  },
  {
    "age-monsieur": 89,
    "age-madame": 97,
    espVie: 7,
    usufruitEconomique: {
      NP: 78.3,
      Usuf: 21.7,
    },
    tauxDeRente: 14.2,
    coefDeCapit: 7.0,
    transactionsViageres: {
      NP: 70.5,
      DtUs: 29.5,
    },
  },
  {
    "age-monsieur": 89,
    "age-madame": 98,
    espVie: 6.9,
    usufruitEconomique: {
      NP: 73.6,
      Usuf: 21.4,
    },
    tauxDeRente: 14.39,
    coefDeCapit: 6.9,
    transactionsViageres: {
      NP: 70.7,
      DtUs: 29.3,
    },
  },
  {
    "age-monsieur": 89,
    "age-madame": 99,
    espVie: 6.8,
    usufruitEconomique: {
      NP: 8.9,
      Usuf: 21.1,
    },
    tauxDeRente: 14.58,
    coefDeCapit: 6.9,
    transactionsViageres: {
      NP: 71.0,
      DtUs: 29.0,
    },
  },

  // ------------- 90 ans ----------------
  {
    "age-monsieur": 90,
    "age-madame": 70,
    espVie: 22.4,
    usufruitEconomique: {
      NP: 45.7,
      Usuf: 54.3,
    },
    tauxDeRente: 5.43,
    coefDeCapit: 18.4,
    transactionsViageres: {
      NP: 41.1,
      DtUs: 58.9,
    },
  },
  {
    "age-monsieur": 90,
    "age-madame": 71,
    espVie: 21.5,
    usufruitEconomique: {
      NP: 47.2,
      Usuf: 52.8,
    },
    tauxDeRente: 5.59,
    coefDeCapit: 17.9,
    transactionsViageres: {
      NP: 42.5,
      DtUs: 57.5,
    },
  },
  {
    "age-monsieur": 90,
    "age-madame": 72,
    espVie: 20.6,
    usufruitEconomique: {
      NP: 48.7,
      Usuf: 51.3,
    },
    tauxDeRente: 5.77,
    coefDeCapit: 17.3,
    transactionsViageres: {
      NP: 43.8,
      DtUs: 56.2,
    },
  },
  {
    "age-monsieur": 90,
    "age-madame": 73,
    espVie: 19.8,
    usufruitEconomique: {
      NP: 50.1,
      Usuf: 49.9,
    },
    tauxDeRente: 5.95,
    coefDeCapit: 16.8,
    transactionsViageres: {
      NP: 45.1,
      DtUs: 54.9,
    },
  },
  {
    "age-monsieur": 90,
    "age-madame": 74,
    espVie: 18.9,
    usufruitEconomique: {
      NP: 51.7,
      Usuf: 48.3,
    },
    tauxDeRente: 6.16,
    coefDeCapit: 16.2,
    transactionsViageres: {
      NP: 46.5,
      DtUs: 53.5,
    },
  },
  {
    "age-monsieur": 90,
    "age-madame": 75,
    espVie: 18.0,
    usufruitEconomique: {
      NP: 53.3,
      Usuf: 46.7,
    },
    tauxDeRente: 6.4,
    coefDeCapit: 15.6,
    transactionsViageres: {
      NP: 48.0,
      DtUs: 52.0,
    },
  },
  {
    "age-monsieur": 90,
    "age-madame": 76,
    espVie: 17.2,
    usufruitEconomique: {
      NP: 54.8,
      Usuf: 45.2,
    },
    tauxDeRente: 6.63,
    coefDeCapit: 15.1,
    transactionsViageres: {
      NP: 49.3,
      DtUs: 50.7,
    },
  },
  {
    "age-monsieur": 90,
    "age-madame": 77,
    espVie: 16.4,
    usufruitEconomique: {
      NP: 56.4,
      Usuf: 43.6,
    },
    tauxDeRente: 6.88,
    coefDeCapit: 14.5,
    transactionsViageres: {
      NP: 50.7,
      DtUs: 49.3,
    },
  },
  {
    "age-monsieur": 90,
    "age-madame": 78,
    espVie: 15.5,
    usufruitEconomique: {
      NP: 58.2,
      Usuf: 41.8,
    },
    tauxDeRente: 7.19,
    coefDeCapit: 13.9,
    transactionsViageres: {
      NP: 52.4,
      DtUs: 47.6,
    },
  },
  {
    "age-monsieur": 90,
    "age-madame": 79,
    espVie: 14.7,
    usufruitEconomique: {
      NP: 59.8,
      Usuf: 40.2,
    },
    tauxDeRente: 7.51,
    coefDeCapit: 13.3,
    transactionsViageres: {
      NP: 53.9,
      DtUs: 46.1,
    },
  },
  {
    "age-monsieur": 90,
    "age-madame": 80,
    espVie: 13.9,
    usufruitEconomique: {
      NP: 61.5,
      Usuf: 38.5,
    },
    tauxDeRente: 7.86,
    coefDeCapit: 12.7,
    transactionsViageres: {
      NP: 55.4,
      DtUs: 44.6,
    },
  },
  {
    "age-monsieur": 90,
    "age-madame": 81,
    espVie: 13.2,
    usufruitEconomique: {
      NP: 63.1,
      Usuf: 36.9,
    },
    tauxDeRente: 8.2,
    coefDeCapit: 12.2,
    transactionsViageres: {
      NP: 56.7,
      DtUs: 43.3,
    },
  },
  {
    "age-monsieur": 90,
    "age-madame": 82,
    espVie: 12.4,
    usufruitEconomique: {
      NP: 64.8,
      Usuf: 35.2,
    },
    tauxDeRente: 8.63,
    coefDeCapit: 11.6,
    transactionsViageres: {
      NP: 58.4,
      DtUs: 41.6,
    },
  },
  {
    "age-monsieur": 90,
    "age-madame": 83,
    espVie: 11.7,
    usufruitEconomique: {
      NP: 66.4,
      Usuf: 33.6,
    },
    tauxDeRente: 9.06,
    coefDeCapit: 11,
    transactionsViageres: {
      NP: 59.8,
      DtUs: 40.2,
    },
  },
  {
    "age-monsieur": 90,
    "age-madame": 84,
    espVie: 11.0,
    usufruitEconomique: {
      NP: 68.1,
      Usuf: 31.9,
    },
    tauxDeRente: 9.55,
    coefDeCapit: 10.5,
    transactionsViageres: {
      NP: 61.3,
      DtUs: 38.7,
    },
  },
  {
    "age-monsieur": 90,
    "age-madame": 85,
    espVie: 10.4,
    usufruitEconomique: {
      NP: 69.5,
      Usuf: 30.5,
    },
    tauxDeRente: 10.02,
    coefDeCapit: 10.0,
    transactionsViageres: {
      NP: 62.6,
      DtUs: 37.4,
    },
  },
  {
    "age-monsieur": 90,
    "age-madame": 86,
    espVie: 9.8,
    usufruitEconomique: {
      NP: 71.0,
      Usuf: 29.0,
    },
    tauxDeRente: 10.55,
    coefDeCapit: 9.5,
    transactionsViageres: {
      NP: 63.9,
      DtUs: 36.1,
    },
  },
  {
    "age-monsieur": 90,
    "age-madame": 87,
    espVie: 9.2,
    usufruitEconomique: {
      NP: 72.5,
      Usuf: 27.5,
    },
    tauxDeRente: 11.14,
    coefDeCapit: 9.0,
    transactionsViageres: {
      NP: 65.3,
      DtUs: 34.7,
    },
  },
  {
    "age-monsieur": 90,
    "age-madame": 88,
    espVie: 8.6,
    usufruitEconomique: {
      NP: 74.0,
      Usuf: 26.0,
    },
    tauxDeRente: 11.82,
    coefDeCapit: 8.5,
    transactionsViageres: {
      NP: 66.6,
      DtUs: 33.4,
    },
  },
  {
    "age-monsieur": 90,
    "age-madame": 89,
    espVie: 8.1,
    usufruitEconomique: {
      NP: 75.4,
      Usuf: 24.6,
    },
    tauxDeRente: 12.47,
    coefDeCapit: 8.0,
    transactionsViageres: {
      NP: 67.8,
      DtUs: 32.2,
    },
  },
  {
    "age-monsieur": 90,
    "age-madame": 90,
    espVie: 7.7,
    usufruitEconomique: {
      NP: 76.4,
      Usuf: 23.6,
    },
    tauxDeRente: 13.04,
    coefDeCapit: 7.7,
    transactionsViageres: {
      NP: 68.8,
      DtUs: 31.2,
    },
  },
  {
    "age-monsieur": 90,
    "age-madame": 91,
    espVie: 7.6,
    usufruitEconomique: {
      NP: 76.7,
      Usuf: 23.3,
    },
    tauxDeRente: 13.19,
    coefDeCapit: 7.6,
    transactionsViageres: {
      NP: 69.0,
      DtUs: 31.0,
    },
  },
  {
    "age-monsieur": 90,
    "age-madame": 92,
    espVie: 7.4,
    usufruitEconomique: {
      NP: 77.2,
      Usuf: 22.8,
    },
    tauxDeRente: 13.51,
    coefDeCapit: 7.4,
    transactionsViageres: {
      NP: 69.5,
      DtUs: 30.5,
    },
  },
  {
    "age-monsieur": 90,
    "age-madame": 93,
    espVie: 7.3,
    usufruitEconomique: {
      NP: 77.5,
      Usuf: 22.5,
    },
    tauxDeRente: 13.68,
    coefDeCapit: 7.3,
    transactionsViageres: {
      NP: 69.7,
      DtUs: 30.3,
    },
  },
  {
    "age-monsieur": 90,
    "age-madame": 94,
    espVie: 7.2,
    usufruitEconomique: {
      NP: 77.8,
      Usuf: 22.2,
    },
    tauxDeRente: 13.85,
    coefDeCapit: 7.2,
    transactionsViageres: {
      NP: 70.0,
      DtUs: 30.0,
    },
  },
  {
    "age-monsieur": 90,
    "age-madame": 95,
    espVie: 7.1,
    usufruitEconomique: {
      NP: 78.0,
      Usuf: 22.01,
    },
    tauxDeRente: 114.02,
    coefDeCapit: 7.1,
    transactionsViageres: {
      NP: 70.2,
      DtUs: 29.8,
    },
  },
  {
    "age-monsieur": 90,
    "age-madame": 96,
    espVie: 7.0,
    usufruitEconomique: {
      NP: 78.3,
      Usuf: 21.7,
    },
    tauxDeRente: 14.2,
    coefDeCapit: 7.0,
    transactionsViageres: {
      NP: 70.5,
      DtUs: 29.5,
    },
  },
  {
    "age-monsieur": 90,
    "age-madame": 97,
    espVie: 6.9,
    usufruitEconomique: {
      NP: 78.6,
      Usuf: 21.4,
    },
    tauxDeRente: 14.39,
    coefDeCapit: 6.9,
    transactionsViageres: {
      NP: 70.7,
      DtUs: 29.3,
    },
  },
  {
    "age-monsieur": 90,
    "age-madame": 98,
    espVie: 6.8,
    usufruitEconomique: {
      NP: 78.9,
      Usuf: 21.1,
    },
    tauxDeRente: 14.58,
    coefDeCapit: 6.8,
    transactionsViageres: {
      NP: 71.0,
      DtUs: 29.0,
    },
  },
  {
    "age-monsieur": 90,
    "age-madame": 99,
    espVie: 6.7,
    usufruitEconomique: {
      NP: 79.1,
      Usuf: 20.9,
    },
    tauxDeRente: 14.78,
    coefDeCapit: 6.8,
    transactionsViageres: {
      NP: 71.2,
      DtUs: 28.8,
    },
  },
  {
    "age-monsieur": 90,
    "age-madame": 100,
    espVie: 6.6,
    usufruitEconomique: {
      NP: 79.4,
      Usuf: 20.6,
    },
    tauxDeRente: 14.98,
    coefDeCapit: 6.7,
    transactionsViageres: {
      NP: 71.5,
      DtUs: 28.5,
    },
  },

  //---------------------------------------- 91
  {
    "age-monsieur": 91,
    "age-madame": 71,
    espVie: 21.5,
    usufruitEconomique: {
      NP: 47.2,
      Usuf: 52.8,
    },
    tauxDeRente: 5.59,
    coefDeCapit: 17.9,
    transactionsViageres: {
      NP: 42.5,
      DtUs: 57.5,
    },
  },
  {
    "age-monsieur": 91,
    "age-madame": 72,
    espVie: 20.6,
    usufruitEconomique: {
      NP: 48.7,
      Usuf: 51.3,
    },
    tauxDeRente: 5.77,
    coefDeCapit: 17.3,
    transactionsViageres: {
      NP: 43.8,
      DtUs: 56.2,
    },
  },
  {
    "age-monsieur": 91,
    "age-madame": 73,
    espVie: 19.7,
    usufruitEconomique: {
      NP: 50.2,
      Usuf: 49.8,
    },
    tauxDeRente: 5.97,
    coefDeCapit: 16.8,
    transactionsViageres: {
      NP: 45.2,
      DtUs: 54.8,
    },
  },
  {
    "age-monsieur": 91,
    "age-madame": 74,
    espVie: 18.9,
    usufruitEconomique: {
      NP: 51.7,
      Usuf: 48.3,
    },
    tauxDeRente: 6.16,
    coefDeCapit: 16.2,
    transactionsViageres: {
      NP: 46.5,
      DtUs: 53.5,
    },
  },
  {
    "age-monsieur": 91,
    "age-madame": 75,
    espVie: 18.0,
    usufruitEconomique: {
      NP: 53.3,
      Usuf: 46.7,
    },
    tauxDeRente: 6.4,
    coefDeCapit: 15.6,
    transactionsViageres: {
      NP: 48.0,
      DtUs: 52.0,
    },
  },
  {
    "age-monsieur": 91,
    "age-madame": 76,
    espVie: 17.2,
    usufruitEconomique: {
      NP: 54.8,
      Usuf: 45.2,
    },
    tauxDeRente: 6.63,
    coefDeCapit: 15.1,
    transactionsViageres: {
      NP: 49.3,
      DtUs: 50.7,
    },
  },
  {
    "age-monsieur": 91,
    "age-madame": 77,
    espVie: 16.3,
    usufruitEconomique: {
      NP: 56.6,
      Usuf: 43.4,
    },
    tauxDeRente: 6.91,
    coefDeCapit: 14.5,
    transactionsViageres: {
      NP: 50.9,
      DtUs: 49.1,
    },
  },
  {
    "age-monsieur": 91,
    "age-madame": 78,
    espVie: 15.5,
    usufruitEconomique: {
      NP: 58.2,
      Usuf: 41.8,
    },
    tauxDeRente: 7.19,
    coefDeCapit: 13.9,
    transactionsViageres: {
      NP: 52.4,
      DtUs: 47.6,
    },
  },
  {
    "age-monsieur": 91,
    "age-madame": 79,
    espVie: 14.7,
    usufruitEconomique: {
      NP: 59.8,
      Usuf: 40.2,
    },
    tauxDeRente: 7.51,
    coefDeCapit: 13.3,
    transactionsViageres: {
      NP: 53.9,
      DtUs: 46.1,
    },
  },
  {
    "age-monsieur": 91,
    "age-madame": 80,
    espVie: 13.9,
    usufruitEconomique: {
      NP: 61.5,
      Usuf: 38.5,
    },
    tauxDeRente: 7.86,
    coefDeCapit: 12.7,
    transactionsViageres: {
      NP: 55.4,
      DtUs: 44.6,
    },
  },
  {
    "age-monsieur": 91,
    "age-madame": 81,
    espVie: 13.1,
    usufruitEconomique: {
      NP: 63.3,
      Usuf: 36.7,
    },
    tauxDeRente: 8.25,
    coefDeCapit: 12.1,
    transactionsViageres: {
      NP: 56.9,
      DtUs: 43.1,
    },
  },
  {
    "age-monsieur": 91,
    "age-madame": 82,
    espVie: 12.4,
    usufruitEconomique: {
      NP: 64.8,
      Usuf: 35.2,
    },
    tauxDeRente: 8.63,
    coefDeCapit: 11.6,
    transactionsViageres: {
      NP: 58.4,
      DtUs: 41.6,
    },
  },
  {
    "age-monsieur": 91,
    "age-madame": 83,
    espVie: 11.7,
    usufruitEconomique: {
      NP: 66.4,
      Usuf: 33.6,
    },
    tauxDeRente: 9.06,
    coefDeCapit: 11.1,
    transactionsViageres: {
      NP: 59.7,
      DtUs: 40.3,
    },
  },
  {
    "age-monsieur": 91,
    "age-madame": 84,
    espVie: 11.0,
    usufruitEconomique: {
      NP: 68.1,
      Usuf: 31.9,
    },
    tauxDeRente: 9.55,
    coefDeCapit: 10.6,
    transactionsViageres: {
      NP: 61.3,
      DtUs: 38.7,
    },
  },
  {
    "age-monsieur": 91,
    "age-madame": 85,
    espVie: 10.3,
    usufruitEconomique: {
      NP: 69.8,
      Usuf: 30.2,
    },
    tauxDeRente: 10.1,
    coefDeCapit: 9.9,
    transactionsViageres: {
      NP: 62.8,
      DtUs: 37.2,
    },
  },
  {
    "age-monsieur": 91,
    "age-madame": 86,
    espVie: 9.7,
    usufruitEconomique: {
      NP: 71.3,
      Usuf: 28.7,
    },
    tauxDeRente: 10.64,
    coefDeCapit: 9.4,
    transactionsViageres: {
      NP: 64.1,
      DtUs: 35.9,
    },
  },
  {
    "age-monsieur": 91,
    "age-madame": 87,
    espVie: 9.2,
    usufruitEconomique: {
      NP: 72.5,
      Usuf: 27.5,
    },
    tauxDeRente: 11.12,
    coefDeCapit: 8.9,
    transactionsViageres: {
      NP: 65.3,
      DtUs: 34.7,
    },
  },
  {
    "age-monsieur": 91,
    "age-madame": 88,
    espVie: 8.6,
    usufruitEconomique: {
      NP: 74.0,
      Usuf: 26.0,
    },
    tauxDeRente: 11.82,
    coefDeCapit: 8.5,
    transactionsViageres: {
      NP: 66.6,
      DtUs: 33.4,
    },
  },
  {
    "age-monsieur": 91,
    "age-madame": 89,
    espVie: 8.1,
    usufruitEconomique: {
      NP: 75.4,
      Usuf: 24.6,
    },
    tauxDeRente: 12.47,
    coefDeCapit: 8.0,
    transactionsViageres: {
      NP: 67.8,
      DtUs: 32.2,
    },
  },
  {
    "age-monsieur": 91,
    "age-madame": 90,
    espVie: 7.8,
    usufruitEconomique: {
      NP: 76.1,
      Usuf: 23.9,
    },
    tauxDeRente: 12.89,
    coefDeCapit: 7.8,
    transactionsViageres: {
      NP: 68.5,
      DtUs: 31.5,
    },
  },
  {
    "age-monsieur": 91,
    "age-madame": 91,
    espVie: 7.5,
    usufruitEconomique: {
      NP: 76.9,
      Usuf: 23.1,
    },
    tauxDeRente: 13.35,
    coefDeCapit: 7.5,
    transactionsViageres: {
      NP: 69.3,
      DtUs: 30.7,
    },
  },
  {
    "age-monsieur": 91,
    "age-madame": 92,
    espVie: 7.2,
    usufruitEconomique: {
      NP: 77.8,
      Usuf: 22.2,
    },
    tauxDeRente: 13.85,
    coefDeCapit: 7.2,
    transactionsViageres: {
      NP: 70.0,
      DtUs: 30.0,
    },
  },
  {
    "age-monsieur": 91,
    "age-madame": 93,
    espVie: 7.0,
    usufruitEconomique: {
      NP: 78.3,
      Usuf: 21.7,
    },
    tauxDeRente: 14.2,
    coefDeCapit: 7.0,
    transactionsViageres: {
      NP: 70.5,
      DtUs: 29.5,
    },
  },
  {
    "age-monsieur": 91,
    "age-madame": 94,
    espVie: 6.9,
    usufruitEconomique: {
      NP: 78.6,
      Usuf: 21.4,
    },
    tauxDeRente: 14.39,
    coefDeCapit: 6.9,
    transactionsViageres: {
      NP: 70.7,
      DtUs: 29.3,
    },
  },
  {
    "age-monsieur": 91,
    "age-madame": 95,
    espVie: 6.8,
    usufruitEconomique: {
      NP: 78.9,
      Usuf: 21.1,
    },
    tauxDeRente: 14.58,
    coefDeCapit: 6.9,
    transactionsViageres: {
      NP: 71.0,
      DtUs: 29.0,
    },
  },
  {
    "age-monsieur": 91,
    "age-madame": 96,
    espVie: 6.7,
    usufruitEconomique: {
      NP: 79.1,
      Usuf: 20.9,
    },
    tauxDeRente: 14.78,
    coefDeCapit: 6.8,
    transactionsViageres: {
      NP: 71.2,
      DtUs: 28.8,
    },
  },
  {
    "age-monsieur": 91,
    "age-madame": 97,
    espVie: 6.6,
    usufruitEconomique: {
      NP: 79.4,
      Usuf: 20.6,
    },
    tauxDeRente: 14.98,
    coefDeCapit: 6.7,
    transactionsViageres: {
      NP: 71.5,
      DtUs: 28.5,
    },
  },
  {
    "age-monsieur": 91,
    "age-madame": 98,
    espVie: 6.5,
    usufruitEconomique: {
      NP: 79.7,
      Usuf: 20.3,
    },
    tauxDeRente: 15.19,
    coefDeCapit: 6.6,
    transactionsViageres: {
      NP: 71.7,
      DtUs: 28.3,
    },
  },
  {
    "age-monsieur": 91,
    "age-madame": 99,
    espVie: 6.4,
    usufruitEconomique: {
      NP: 80,
      Usuf: 20,
    },
    tauxDeRente: 15.4,
    coefDeCapit: 6.5,
    transactionsViageres: {
      NP: 72,
      DtUs: 28,
    },
  },
  {
    "age-monsieur": 91,
    "age-madame": 100,
    espVie: 6.3,
    usufruitEconomique: {
      NP: 80.2,
      Usuf: 19.8,
    },
    tauxDeRente: 15.63,
    coefDeCapit: 6.4,
    transactionsViageres: {
      NP: 72.2,
      DtUs: 27.8,
    },
  },
  // ----------------- 92 ans -----------------------------
  {
    "age-monsieur": 92,
    "age-madame": 72,
    espVie: 20.5,
    usufruitEconomique: {
      NP: 48.9,
      Usuf: 51.1,
    },
    tauxDeRente: 5.79,
    coefDeCapit: 17.3,
    transactionsViageres: {
      NP: 44.0,
      DtUs: 56.0,
    },
  },
  {
    "age-monsieur": 92,
    "age-madame": 73,
    espVie: 19.6,
    usufruitEconomique: {
      NP: 50.4,
      Usuf: 49.6,
    },
    tauxDeRente: 5.99,
    coefDeCapit: 16.7,
    transactionsViageres: {
      NP: 45.4,
      DtUs: 54.6,
    },
  },
  {
    "age-monsieur": 92,
    "age-madame": 74,
    espVie: 18.7,
    usufruitEconomique: {
      NP: 52,
      Usuf: 48,
    },
    tauxDeRente: 6.21,
    coefDeCapit: 16.1,
    transactionsViageres: {
      NP: 46.8,
      DtUs: 53.2,
    },
  },
  {
    "age-monsieur": 92,
    "age-madame": 75,
    espVie: 17.9,
    usufruitEconomique: {
      NP: 53.5,
      Usuf: 46.5,
    },
    tauxDeRente: 6.42,
    coefDeCapit: 15.6,
    transactionsViageres: {
      NP: 48.2,
      DtUs: 51.8,
    },  
  },
  {
    "age-monsieur": 92,
    "age-madame": 76,
    espVie: 17.0,
    usufruitEconomique: {
      NP: 55.2,
      Usuf: 44.8,
    },
    tauxDeRente: 6.69,
    coefDeCapit: 15.0,
    transactionsViageres: {
      NP: 49.7,
      DtUs: 50.3,
    },
  },
  {
    "age-monsieur": 92,
    "age-madame": 77,
    espVie: 16.2,
    usufruitEconomique: {
      NP: 56.8,
      Usuf: 43.2,
    },
    tauxDeRente: 6.95,
    coefDeCapit: 14.4,
    transactionsViageres: {
      NP: 51.1,
      DtUs: 48.9,
    },
  },
  {
    "age-monsieur": 92,
    "age-madame": 78,
    espVie: 15.4,
    usufruitEconomique: {
      NP: 58.4,
      Usuf: 41.6,
    },
    tauxDeRente: 7.23,
    coefDeCapit: 13.8,
    transactionsViageres: {
      NP: 52.5,
      DtUs: 47.5,
    },
  },
  {
    "age-monsieur": 92,
    "age-madame": 79,
    espVie: 14.6,
    usufruitEconomique: {
      NP: 60.0,
      Usuf: 40,
    },
    tauxDeRente: 7.55,
    coefDeCapit: 13.2,
    transactionsViageres: {
      NP: 54.0,
      DtUs: 46,
    },
  },
  {
    "age-monsieur": 92,
    "age-madame": 80,
    espVie: 13.8,
    usufruitEconomique: {
      NP: 61.7,
      Usuf: 38.3,
    },
    tauxDeRente: 7.9,
    coefDeCapit: 12.7,
    transactionsViageres: {
      NP: 55.6,
      DtUs: 44.4,
    },
  },
  {
    "age-monsieur": 92,
    "age-madame": 81,
    espVie: 13.0,
    usufruitEconomique: {
      NP: 63.5,
      Usuf: 36.5,
    },
    tauxDeRente: 8.30,
    coefDeCapit: 12.0,
    transactionsViageres: {
      NP: 57.1,
      DtUs: 42.9,
    },
  },
  {
    "age-monsieur": 92,
    "age-madame": 82,
    espVie: 12.3,
    usufruitEconomique: {
      NP: 65.1,
      Usuf: 34.9,
    },
    tauxDeRente: 8.69,
    coefDeCapit: 11.5,
    transactionsViageres: {
      NP: 58.6,
      DtUs: 41.4,
    },
  },
  { 
    "age-monsieur": 92,
    "age-madame": 83,
    espVie: 11.6,
    usufruitEconomique: {
      NP: 66.7,
      Usuf: 33.3,
    },
    tauxDeRente: 9.13,
    coefDeCapit: 11.0,
    transactionsViageres: {
      NP: 60.0,
      DtUs: 40.0,
    },
  },
  {
    "age-monsieur": 92,
    "age-madame": 84,
    espVie: 10.9,
    usufruitEconomique: {
      NP: 68.3,
      Usuf: 31.7,
    },
    tauxDeRente: 9.63,
    coefDeCapit: 10.4,
    transactionsViageres: {
      NP: 61.5,
      DtUs: 38.5,
    },
  },
  {
    "age-monsieur": 92,
    "age-madame": 85,
    espVie: 10.3,
    usufruitEconomique: {
      NP: 69.8,
      Usuf: 30.2,
    },
    tauxDeRente: 10.1,
    coefDeCapit: 9.9,
    transactionsViageres: {
      NP: 62.8,
      DtUs: 37.2,
    },
  },
  {
    "age-monsieur": 92,
    "age-madame": 86,
    espVie: 9.7,
    usufruitEconomique: {
      NP: 71.3,
      Usuf: 28.7,
    },
    tauxDeRente: 10.64,
    coefDeCapit: 9.4,
    transactionsViageres: {
      NP: 64.1,
      DtUs: 35.9,
    },
  },
  {
    "age-monsieur": 92,
    "age-madame": 87,
    espVie: 9.2,
    usufruitEconomique: {
      NP: 72.8,
      Usuf: 27.2,
    },
    tauxDeRente: 11.25,
    coefDeCapit: 8.9,
    transactionsViageres: {
      NP: 65.5,
      DtUs: 34.5,
    },
  },
  {
    "age-monsieur": 92,
    "age-madame": 88,
    espVie: 8.5,
    usufruitEconomique: {
      NP: 74.3,
      Usuf: 25.7,
    },
    tauxDeRente: 11.94,
    coefDeCapit: 8.4,
    transactionsViageres: {
      NP: 66.9,
      DtUs: 33.1,
    },
  },
  {
    "age-monsieur": 92,
    "age-madame": 89,
    espVie: 8.0,
    usufruitEconomique: {
      NP: 75.6,
      Usuf: 24.4,
    },
    tauxDeRente: 12.6,
    coefDeCapit: 7.9,
    transactionsViageres: {
      NP: 68.1,
      DtUs: 31.9,
    },
  },
  {
    "age-monsieur": 92,
    "age-madame": 90,
    espVie: 7.7,  
    usufruitEconomique: {
      NP: 76.4,
      Usuf: 23.6,
    },
    tauxDeRente: 13.04,
    coefDeCapit: 7.7,
    transactionsViageres: {
      NP: 68.8,
      DtUs: 31.2,
    },
  },
  {
    "age-monsieur": 92,
    "age-madame": 91,
    espVie: 7.5,
    usufruitEconomique: {
      NP: 76.9,
      Usuf: 23.1,
    },
    tauxDeRente: 13.35,
    coefDeCapit: 7.5,
    transactionsViageres: {
      NP: 69.3,
      DtUs: 30.7,
    },
  },
  {
    "age-monsieur": 92,
    "age-madame": 92,
    espVie: 7.1,
    usufruitEconomique: {
      NP: 78,
      Usuf: 22,
    },
    tauxDeRente: 14.02,
    coefDeCapit: 7.1,
    transactionsViageres: {
      NP: 70.2,
      DtUs: 29.8,
    },
  },
  {
    "age-monsieur": 92,
    "age-madame": 93,
    espVie: 7.0,
    usufruitEconomique: {
      NP: 78.3,
      Usuf: 21.7,
    },
    tauxDeRente: 14.2,
    coefDeCapit: 7.0,
    transactionsViageres: {
      NP: 70.5,
      DtUs: 29.5,
    },
  },
  {
    "age-monsieur": 92,
    "age-madame": 94,
    espVie: 6.9,
    usufruitEconomique: {
      NP: 78.6,
      Usuf: 21.4,
    },
    tauxDeRente: 14.39,
    coefDeCapit: 6.9,
    transactionsViageres: {
      NP: 70.7,
      DtUs: 29.3,
    },
  },
  {
    "age-monsieur": 92,
    "age-madame": 95,
    espVie: 6.7,
    usufruitEconomique: {
      NP: 79.1,
      Usuf: 20.9,
    },
    tauxDeRente: 14.78,
    coefDeCapit: 6.8,
    transactionsViageres: {
      NP: 71.2,
      DtUs: 28.8,
    },
  },
  {
    "age-monsieur": 92,
    "age-madame": 96,
    espVie: 6.6,
    usufruitEconomique: {
      NP: 79.4,
      Usuf: 20.6,
    },
    tauxDeRente: 14.98,
    coefDeCapit: 6.7,
    transactionsViageres: {
      NP: 71.5,
      DtUs: 28.5,
    },
  },
  {
    "age-monsieur": 92,
    "age-madame": 97,
    espVie: 6.5,
    usufruitEconomique: {
      NP: 79.7,
      Usuf: 20.3,
    },
    tauxDeRente: 15.19,
    coefDeCapit: 6.6,
    transactionsViageres: {
      NP: 71.7,
      DtUs: 28.3,
    },
  },
  {
    "age-monsieur": 92,
    "age-madame": 98,
    espVie: 6.4,
    usufruitEconomique: {
      NP: 80,
      Usuf: 20,
    },
    tauxDeRente: 15.4,
    coefDeCapit: 6.5,
    transactionsViageres: {
      NP: 72,
      DtUs: 28,
    },
  },
  {
    "age-monsieur": 92,
    "age-madame": 99,
    espVie: 6.3,
    usufruitEconomique: {
      NP: 80.2,
      Usuf: 19.8,
    },
    tauxDeRente: 15.63,
    coefDeCapit: 6.4,
    transactionsViageres: {
      NP: 72.2,
      DtUs: 27.8,
    },
  },

  // ---- 93 ans ----------------
  {
    "age-monsieur": 93,
    "age-madame": 73,
    espVie: 19.6,
    usufruitEconomique: {
      NP: 50.4,
      Usuf: 49.6,
    },
    tauxDeRente: 5.99,
    coefDeCapit: 16.7,
    transactionsViageres: {
      NP: 45.4,
      DtUs: 54.6,
    },
  },
  {
    "age-monsieur": 93,
    "age-madame": 74,
    espVie: 18.7,
    usufruitEconomique: {
      NP: 52.0,
      Usuf: 48.0,
    },
    tauxDeRente: 6.21,
    coefDeCapit: 16.1,
    transactionsViageres: {
      NP: 46.8,
      DtUs: 53.2,
    },
  },
  {
    "age-monsieur": 93,
    "age-madame": 75,
    espVie: 17.8,
    usufruitEconomique: {
      NP: 53.5,
      Usuf: 46.5,
    },
    tauxDeRente: 6.42,
    coefDeCapit: 15.6,
    transactionsViageres: {
      NP: 48.2,
      DtUs: 51.8,
    },
  },
  {
    "age-monsieur": 93,
    "age-madame": 76,
    espVie: 17.0,
    usufruitEconomique: {
      NP: 55.2,
      Usuf: 44.8,
    },
    tauxDeRente: 6.69,
    coefDeCapit: 15.0,
    transactionsViageres: {
      NP: 49.7,
      DtUs: 50.3,
    },
  },
  {
    "age-monsieur": 93,
    "age-madame": 77,
    espVie: 16.2,
    usufruitEconomique: {
      NP: 56.8,
      Usuf: 43.2,
    },
    tauxDeRente: 6.95,
    coefDeCapit: 14.4,
    transactionsViageres: {
      NP: 51.1,
      DtUs: 48.9,
    },
  },
  {
    "age-monsieur": 93,
    "age-madame": 78,
    espVie: 15.4,
    usufruitEconomique: {
      NP: 58.4,
      Usuf: 41.6,
    },
    tauxDeRente: 7.23,
    coefDeCapit: 13.8,
    transactionsViageres: {
      NP: 52.5,
      DtUs: 47.5,
    },
  },
  {
    "age-monsieur": 93,
    "age-madame": 79,
    espVie: 14.6,
    usufruitEconomique: {
      NP: 60.0,
      Usuf: 40.0,
    },
    tauxDeRente: 7.55,
    coefDeCapit: 13.2,
    transactionsViageres: {
      NP: 54.0,
      DtUs: 46.0,
    },
  },
  {
    "age-monsieur": 93,
    "age-madame": 80,
    espVie: 13.8,
    usufruitEconomique: {
      NP: 61.7,
      Usuf: 38.3,
    },
    tauxDeRente: 7.90,
    coefDeCapit: 12.7,
    transactionsViageres: {
      NP: 55.6,
      DtUs: 44.4,
    },
  },
  {
    "age-monsieur": 93,
    "age-madame": 81,
    espVie: 13.0,
    usufruitEconomique: {
      NP: 63.5,
      Usuf: 36.5,
    },
    tauxDeRente: 8.30,
    coefDeCapit: 12.1,
    transactionsViageres: {
      NP: 57.1,
      DtUs: 42.9,
    },
  },
  {
    "age-monsieur": 93,
    "age-madame": 82,
    espVie: 12.3,
    usufruitEconomique: {
      NP: 65.1,
      Usuf: 34.9,
    },
    tauxDeRente: 8.69,
    coefDeCapit: 11.5,
    transactionsViageres: {
      NP: 58.6,
      DtUs: 41.4,
    },
  },
  {
    "age-monsieur": 93,
    "age-madame": 83,
    espVie: 11.6,
    usufruitEconomique: {
      NP: 66.7,
      Usuf: 33.3,
    },
    tauxDeRente: 9.13,
    coefDeCapit: 11.0,
    transactionsViageres: {
      NP: 60.0,
      DtUs: 40.0,
    },
  },
  {
    "age-monsieur": 93,
    "age-madame": 84,
    espVie: 10.9,
    usufruitEconomique: {
      NP: 68.3,
      Usuf: 31.7,
    },
    tauxDeRente: 9.63,
    coefDeCapit: 10.4,
    transactionsViageres: {
      NP: 61.5,
      DtUs: 38.5,
    },
  },
  {
    "age-monsieur": 93,
    "age-madame": 85,
    espVie: 10.2,
    usufruitEconomique: {
      NP: 70.0,
      Usuf: 30.0,
    },
    tauxDeRente: 10.19,
    coefDeCapit: 9.8,
    transactionsViageres: {
      NP: 63.0,
      DtUs: 37.0,
    },
  },
  {
    "age-monsieur": 93,
    "age-madame": 86,
    espVie: 9.6,
    usufruitEconomique: {
      NP: 71.5,
      Usuf: 28.5,
    },
    tauxDeRente: 10.74,
    coefDeCapit: 9.3,
    transactionsViageres: {
      NP: 64.4,
      DtUs: 35.6,
    },
  },
  {
    "age-monsieur": 93,
    "age-madame": 87,
    espVie: 9.0,
    usufruitEconomique: {
      NP: 72.8,
      Usuf: 27.2,
    },
    tauxDeRente: 11.25,
    coefDeCapit: 8.9,
    transactionsViageres: {
      NP: 65.5,
      DtUs: 34.5,
    },
  },
  {
    "age-monsieur": 93,
    "age-madame": 88,
    espVie: 8.5,
    usufruitEconomique: {
      NP: 74.3,
      Usuf: 25.7,
    },
    tauxDeRente: 11.94,
    coefDeCapit: 8.4,
    transactionsViageres: {
      NP: 66.9,
      DtUs: 33.1,
    },
  },
  {
    "age-monsieur": 93,
    "age-madame": 89,
    espVie: 8.0,
    usufruitEconomique: {
      NP: 75.6,
      Usuf: 24.4,
    },
    tauxDeRente: 12.60,
    coefDeCapit: 7.9,
    transactionsViageres: {
      NP: 68.1,
      DtUs: 31.9,
    },
  },
  {
    "age-monsieur": 93,
    "age-madame": 90,
    espVie: 7.7,
    usufruitEconomique: {
      NP: 76.4,
      Usuf: 23.6,
    },
    tauxDeRente: 13.04,
    coefDeCapit: 7.7,
    transactionsViageres: {
      NP: 68.8,
      DtUs: 31.2,
    },
  },
  {
    "age-monsieur": 93,
    "age-madame": 91,
    espVie: 7.4,
    usufruitEconomique: {
      NP: 77.2,
      Usuf: 22.8,
    },
    tauxDeRente: 13.51,
    coefDeCapit: 7.4,
    transactionsViageres: {
      NP: 69.5,
      DtUs: 30.5,
    },
  },
  {
    "age-monsieur": 93,
    "age-madame": 92,
    espVie: 7.0,
    usufruitEconomique: {
      NP: 78.3,
      Usuf: 21.7,
    },
    tauxDeRente: 14.20,
    coefDeCapit: 7.0,
    transactionsViageres: {
      NP: 70.5,
      DtUs: 29.5,
    },
  },
  {
    "age-monsieur": 93,
    "age-madame": 93,
    espVie: 6.9,
    usufruitEconomique: {
      NP: 78.6,
      Usuf: 21.4,
    },
    tauxDeRente: 14.39,
    coefDeCapit: 6.9,
    transactionsViageres: {
      NP: 70.7,
      DtUs: 29.3,
    },
  },
  {
    "age-monsieur": 93,
    "age-madame": 94,
    espVie: 6.8,
    usufruitEconomique: {
      NP: 78.9,
      Usuf: 21.1,
    },
    tauxDeRente: 14.58,
    coefDeCapit: 6.9,
    transactionsViageres: {
      NP: 71.0,
      DtUs: 29.0,
    },
  },
  {
    "age-monsieur": 93,
    "age-madame": 95,
    espVie: 6.6,
    usufruitEconomique: {
      NP: 79.4,
      Usuf: 20.6,
    },
    tauxDeRente: 14.98,
    coefDeCapit: 6.7,
    transactionsViageres: {
      NP: 71.5,
      DtUs: 28.5,
    },
  },
  {
    "age-monsieur": 93,
    "age-madame": 96,
    espVie: 6.5,
    usufruitEconomique: {
      NP: 79.7,
      Usuf: 20.3,
    },
    tauxDeRente: 15.19,
    coefDeCapit: 6.6,
    transactionsViageres: {
      NP: 71.7,
      DtUs: 28.3,
    },
  },
  {
    "age-monsieur": 93,
    "age-madame": 97,
    espVie: 6.4,
    usufruitEconomique: {
      NP: 80.0,
      Usuf: 20.0,
    },
    tauxDeRente: 15.40,
    coefDeCapit: 6.5,
    transactionsViageres: {
      NP: 72.0,
      DtUs: 28.0,
    },
  },
  {
    "age-monsieur": 93,
    "age-madame": 98,
    espVie: 6.3,
    usufruitEconomique: {
      NP: 80.2,
      Usuf: 19.8,
    },
    tauxDeRente: 15.63,
    coefDeCapit: 6.4,
    transactionsViageres: {
      NP: 72.2,
      DtUs: 27.8,
    },
  },
  {
    "age-monsieur": 93,
    "age-madame": 99,
    espVie: 6.2,
    usufruitEconomique: {
      NP: 80.5,
      Usuf: 19.5,
    },
    tauxDeRente: 15.86,
    coefDeCapit: 6.3,
    transactionsViageres: {
      NP: 72.5,
      DtUs: 27.5,
    },
  },
  {
    "age-monsieur": 93,
    "age-madame": 100,
    espVie: 6.1,
    usufruitEconomique: {
      NP: 80.8,
      Usuf: 19.2,
    },
    tauxDeRente: 16.09,
    coefDeCapit: 6.2,
    transactionsViageres: {
      NP: 72.7,
      DtUs: 27.3,
    },
  },
  {
    "age-monsieur": 94,
    "age-madame": 74,
    espVie: 18.5,
    usufruitEconomique: {
      NP: 52.4,
      Usuf: 47.6,
    },
    tauxDeRente: 6.26,
    coefDeCapit: 16.0,
    transactionsViageres: {
      NP: 47.2,
      DtUs: 52.8,
    },
  },
  {
    "age-monsieur": 94,
    "age-madame": 75,
    espVie: 17.6,
    usufruitEconomique: {
      NP: 54.1,
      Usuf: 45.9,
    },
    tauxDeRente: 6.51,
    coefDeCapit: 15.4,
    transactionsViageres: {
      NP: 48.7,
      DtUs: 51.3,
    },
  },
  {
    "age-monsieur": 94,
    "age-madame": 76,
    espVie: 16.8,
    usufruitEconomique: {
      NP: 55.6,
      Usuf: 44.4,
    },
    tauxDeRente: 6.75,
    coefDeCapit: 14.8,
    transactionsViageres: {
      NP: 50.0,
      DtUs: 50.0,
    },
  },
  {
    "age-monsieur": 94,
    "age-madame": 77,
    espVie: 16.0,
    usufruitEconomique: {
      NP: 57.2,
      Usuf: 42.8,
    },
    tauxDeRente: 7.01,
    coefDeCapit: 14.3,
    transactionsViageres: {
      NP: 51.5,
      DtUs: 48.5,
    },
  },
  {
    "age-monsieur": 94,
    "age-madame": 78,
    espVie: 15.2,
    usufruitEconomique: {
      NP: 58.8,
      Usuf: 41.2,
    },
    tauxDeRente: 7.31,
    coefDeCapit: 13.7,
    transactionsViageres: {
      NP: 52.9,
      DtUs: 47.1,
    },
  },
  {
    "age-monsieur": 94,
    "age-madame": 79,
    espVie: 14.4,
    usufruitEconomique: {
      NP: 60.5,
      Usuf: 39.5,
    },
    tauxDeRente: 7.63,
    coefDeCapit: 13.1,
    transactionsViageres: {
      NP: 54.4,
      DtUs: 45.6,
    },
  },
  {
    "age-monsieur": 94,
    "age-madame": 80,
    espVie: 13.6,
    usufruitEconomique: {
      NP: 62.2,
      Usuf: 37.8,
    },
    tauxDeRente: 8.00,
    coefDeCapit: 12.5,
    transactionsViageres: {
      NP: 56.0,
      DtUs: 44.0,
    },
  },
  {
    "age-monsieur": 94,
    "age-madame": 81,
    espVie: 12.8,
    usufruitEconomique: {
      NP: 63.9,
      Usuf: 36.1,
    },
    tauxDeRente: 8.41,
    coefDeCapit: 11.9,
    transactionsViageres: {
      NP: 57.5,
      DtUs: 42.5,
    },
  },
  {
    "age-monsieur": 94,
    "age-madame": 82,
    espVie: 12.1,
    usufruitEconomique: {
      NP: 65.5,
      Usuf: 34.5,
    },
    tauxDeRente: 8.81,
    coefDeCapit: 11.3,
    transactionsViageres: {
      NP: 59.0,
      DtUs: 41.0,
    },
  },
  {
    "age-monsieur": 94,
    "age-madame": 83,
    espVie: 11.4,
    usufruitEconomique: {
      NP: 67.1,
      Usuf: 32.9,
    },
    tauxDeRente: 9.27,
    coefDeCapit: 10.8,
    transactionsViageres: {
      NP: 60.4,
      DtUs: 39.6,
    },
  },
  {
    "age-monsieur": 94,
    "age-madame": 84,
    espVie: 10.7,
    usufruitEconomique: {
      NP: 68.8,
      Usuf: 31.2,
    },
    tauxDeRente: 9.78,
    coefDeCapit: 10.2,
    transactionsViageres: {
      NP: 61.9,
      DtUs: 38.1,
    },
  },
  {
    "age-monsieur": 94,
    "age-madame": 85,
    espVie: 10.1,
    usufruitEconomique: {
      NP: 70.3,
      Usuf: 29.7,
    },
    tauxDeRente: 10.28,
    coefDeCapit: 9.7,
    transactionsViageres: {
      NP: 63.2,
      DtUs: 36.8,
    },
  },
  {
    "age-monsieur": 94,
    "age-madame": 86,
    espVie: 9.5,
    usufruitEconomique: {
      NP: 71.8,
      Usuf: 28.2,
    },
    tauxDeRente: 10.84,
    coefDeCapit: 9.2,
    transactionsViageres: {
      NP: 64.6,
      DtUs: 35.4,
    },
  },
  {
    "age-monsieur": 94,
    "age-madame": 87,
    espVie: 8.9,
    usufruitEconomique: {
      NP: 73.3,
      Usuf: 26.7,
    },
    tauxDeRente: 11.47,
    coefDeCapit: 8.7,
    transactionsViageres: {
      NP: 65.9,
      DtUs: 34.1,
    },
  },
  {
    "age-monsieur": 94,
    "age-madame": 88,
    espVie: 8.4,
    usufruitEconomique: {
      NP: 74.6,
      Usuf: 25.4,
    },
    tauxDeRente: 12.07,
    coefDeCapit: 8.3,
    transactionsViageres: {
      NP: 67.1,
      DtUs: 32.9,
    },
  },
  {
    "age-monsieur": 94,
    "age-madame": 89,
    espVie: 7.9,
    usufruitEconomique: {
      NP: 75.9,
      Usuf: 24.1,
    },
    tauxDeRente: 12.75,
    coefDeCapit: 7.8,
    transactionsViageres: {
      NP: 68.3,
      DtUs: 31.7,
    },
  },
  {
    "age-monsieur": 94,
    "age-madame": 90,
    espVie: 7.5,
    usufruitEconomique: {
      NP: 76.9,
      Usuf: 23.1,
    },
    tauxDeRente: 13.35,
    coefDeCapit: 7.5,
    transactionsViageres: {
      NP: 69.3,
      DtUs: 30.7,
    },
  },
  {
    "age-monsieur": 94,
    "age-madame": 91,
    espVie: 7.2,
    usufruitEconomique: {
      NP: 77.8,
      Usuf: 22.2,
    },
    tauxDeRente: 13.85,
    coefDeCapit: 7.2,
    transactionsViageres: {
      NP: 70.0,
      DtUs: 30.0,
    },
  },
  {
    "age-monsieur": 94,
    "age-madame": 92,
    espVie: 6.8,
    usufruitEconomique: {
      NP: 78.9,
      Usuf: 21.1,
    },
    tauxDeRente: 14.58,
    coefDeCapit: 6.9,
    transactionsViageres: {
      NP: 71.0,
      DtUs: 29.0,
    },
  },
  {
    "age-monsieur": 94,
    "age-madame": 93,
    espVie: 6.6,
    usufruitEconomique: {
      NP: 79.4,
      Usuf: 20.6,
    },
    tauxDeRente: 14.98,
    coefDeCapit: 6.7,
    transactionsViageres: {
      NP: 71.5,
      DtUs: 28.5,
    },
  },
  {
    "age-monsieur": 94,
    "age-madame": 94,
    espVie: 6.5,
    usufruitEconomique: {
      NP: 79.7,
      Usuf: 20.3,
    },
    tauxDeRente: 15.19,
    coefDeCapit: 6.6,
    transactionsViageres: {
      NP: 71.7,
      DtUs: 28.3,
    },
  },
  {
    "age-monsieur": 94,
    "age-madame": 95,
    espVie: 6.4,
    usufruitEconomique: {
      NP: 80.0,
      Usuf: 20.0,
    },
    tauxDeRente: 15.40,
    coefDeCapit: 6.5,
    transactionsViageres: {
      NP: 72.0,
      DtUs: 28.0,
    },
  },
  {
    "age-monsieur": 94,
    "age-madame": 96,
    espVie: 6.3,
    usufruitEconomique: {
      NP: 80.2,
      Usuf: 19.8,
    },
    tauxDeRente: 15.63,
    coefDeCapit: 6.4,
    transactionsViageres: {
      NP: 72.2,
      DtUs: 27.8,
    },
  },
  {
    "age-monsieur": 94,
    "age-madame": 97,
    espVie: 6.2,
    usufruitEconomique: {
      NP: 80.5,
      Usuf: 19.5,
    },
    tauxDeRente: 15.86,
    coefDeCapit: 6.3,
    transactionsViageres: {
      NP: 72.5,
      DtUs: 27.5,
    },
  },
  {
    "age-monsieur": 94,
    "age-madame": 98,
    espVie: 6.1,
    usufruitEconomique: {
      NP: 80.8,
      Usuf: 19.2,
    },
    tauxDeRente: 16.09,
    coefDeCapit: 6.2,
    transactionsViageres: {
      NP: 72.7,
      DtUs: 27.3,
    },
  },
  {
    "age-monsieur": 94,
    "age-madame": 99,
    espVie: 6.0,
    usufruitEconomique: {
      NP: 81.1,
      Usuf: 18.9,
    },
    tauxDeRente: 16.34,
    coefDeCapit: 6.1,
    transactionsViageres: {
      NP: 73.0,
      DtUs: 27.0,
    },
  },
  {
    "age-monsieur": 94,
    "age-madame": 100,
    espVie: 5.9,
    usufruitEconomique: {
      NP: 81.4,
      Usuf: 18.6,
    },
    tauxDeRente: 16.59,
    coefDeCapit: 6.0,
    transactionsViageres: {
      NP: 73.2,
      DtUs: 26.8,
    },
  },

  // ---- 95 ans ----------------
  {
    "age-monsieur": 95,
    "age-madame": 75,
    espVie: 17.6,
    usufruitEconomique: {
      NP: 54.1,
      Usuf: 45.9,
    },
    tauxDeRente: 6.51,
    coefDeCapit: 15.4,
    transactionsViageres: {
      NP: 48.7,
      DtUs: 51.3,
    },
  },
  {
    "age-monsieur": 95,
    "age-madame": 76,
    espVie: 16.8,
    usufruitEconomique: {
      NP: 55.6,
      Usuf: 44.4,
    },
    tauxDeRente: 6.75,
    coefDeCapit: 14.8,
    transactionsViageres: {
      NP: 50.0,
      DtUs: 50.0,
    },
  },
  {
    "age-monsieur": 95,
    "age-madame": 77,
    espVie: 16.0,
    usufruitEconomique: {
      NP: 57.2,
      Usuf: 42.8,
    },
    tauxDeRente: 7.01,
    coefDeCapit: 14.3,
    transactionsViageres: {
      NP: 51.5,
      DtUs: 48.5,
    },
  },
  {
    "age-monsieur": 95,
    "age-madame": 78,
    espVie: 15.2,
    usufruitEconomique: {
      NP: 58.8,
      Usuf: 41.2,
    },
    tauxDeRente: 7.31,
    coefDeCapit: 13.7,
    transactionsViageres: {
      NP: 52.9,
      DtUs: 47.1,
    },
  },
  {
    "age-monsieur": 95,
    "age-madame": 79,
    espVie: 14.4,
    usufruitEconomique: {
      NP: 60.5,
      Usuf: 39.5,
    },
    tauxDeRente: 7.63,
    coefDeCapit: 13.1,
    transactionsViageres: {
      NP: 54.4,
      DtUs: 45.6,
    },
  },
  {
    "age-monsieur": 95,
    "age-madame": 80,
    espVie: 13.6,
    usufruitEconomique: {
      NP: 62.2,
      Usuf: 37.8,
    },
    tauxDeRente: 8.00,
    coefDeCapit: 12.5,
    transactionsViageres: {
      NP: 56.0,
      DtUs: 44.0,
    },
  },
  {
    "age-monsieur": 95,
    "age-madame": 81,
    espVie: 12.8,
    usufruitEconomique: {
      NP: 63.9,
      Usuf: 36.1,
    },
    tauxDeRente: 8.41,
    coefDeCapit: 11.9,
    transactionsViageres: {
      NP: 57.5,
      DtUs: 42.5,
    },
  },
  {
    "age-monsieur": 95,
    "age-madame": 82,
    espVie: 12.1,
    usufruitEconomique: {
      NP: 65.5,
      Usuf: 34.5,
    },
    tauxDeRente: 8.81,
    coefDeCapit: 11.3,
    transactionsViageres: {
      NP: 59.0,
      DtUs: 41.0,
    },
  },
  {
    "age-monsieur": 95,
    "age-madame": 83,
    espVie: 11.4,
    usufruitEconomique: {
      NP: 67.1,
      Usuf: 32.9,
    },
    tauxDeRente: 9.27,
    coefDeCapit: 10.8,
    transactionsViageres: {
      NP: 60.4,
      DtUs: 39.6,
    },
  },
  {
    "age-monsieur": 95,
    "age-madame": 84,
    espVie: 10.7,
    usufruitEconomique: {
      NP: 68.8,
      Usuf: 31.2,
    },
    tauxDeRente: 9.78,
    coefDeCapit: 10.2,
    transactionsViageres: {
      NP: 61.9,
      DtUs: 38.1,
    },
  },
  {
    "age-monsieur": 95,
    "age-madame": 85,
    espVie: 10.1,
    usufruitEconomique: {
      NP: 70.3,
      Usuf: 29.7,
    },
    tauxDeRente: 10.28,
    coefDeCapit: 9.7,
    transactionsViageres: {
      NP: 63.2,
      DtUs: 36.8,
    },
  },
  {
    "age-monsieur": 95,
    "age-madame": 86,
    espVie: 9.5,
    usufruitEconomique: {
      NP: 71.8,
      Usuf: 28.2,
    },
    tauxDeRente: 10.84,
    coefDeCapit: 9.2,
    transactionsViageres: {
      NP: 64.6,
      DtUs: 35.4,
    },
  },
  {
    "age-monsieur": 95,
    "age-madame": 87,
    espVie: 8.9,
    usufruitEconomique: {
      NP: 73.3,
      Usuf: 26.7,
    },
    tauxDeRente: 11.47,
    coefDeCapit: 8.7,
    transactionsViageres: {
      NP: 65.9,
      DtUs: 34.1,
    },
  },
  {
    "age-monsieur": 95,
    "age-madame": 88,
    espVie: 8.4,
    usufruitEconomique: {
      NP: 74.6,
      Usuf: 25.4,
    },
    tauxDeRente: 12.07,
    coefDeCapit: 8.3,
    transactionsViageres: {
      NP: 67.1,
      DtUs: 32.9,
    },
  },
  {
    "age-monsieur": 95,
    "age-madame": 89,
    espVie: 7.8,
    usufruitEconomique: {
      NP: 75.9,
      Usuf: 24.1,
    },
    tauxDeRente: 12.89,
    coefDeCapit: 7.8,
    transactionsViageres: {
      NP: 68.5,
      DtUs: 31.5,
    },
  },
  {
    "age-monsieur": 95,
    "age-madame": 90,
    espVie: 7.5,
    usufruitEconomique: {
      NP: 76.9,
      Usuf: 23.1,
    },
    tauxDeRente: 13.35,
    coefDeCapit: 7.5,
    transactionsViageres: {
      NP: 69.3,
      DtUs: 30.7,
    },
  },
  {
    "age-monsieur": 95,
    "age-madame": 91,
    espVie: 7.3,
    usufruitEconomique: {
      NP: 77.5,
      Usuf: 22.5,
    },
    tauxDeRente: 13.68,
    coefDeCapit: 7.3,
    transactionsViageres: {
      NP: 69.7,
      DtUs: 30.3,
    },
  },
  {
    "age-monsieur": 95,
    "age-madame": 92,
    espVie: 6.9,
    usufruitEconomique: {
      NP: 78.6,
      Usuf: 21.4,
    },
    tauxDeRente: 14.39,
    coefDeCapit: 6.9,
    transactionsViageres: {
      NP: 70.7,
      DtUs: 29.3,
    },
  },
  {
    "age-monsieur": 95,
    "age-madame": 93,
    espVie: 6.5,
    usufruitEconomique: {
      NP: 79.7,
      Usuf: 20.3,
    },
    tauxDeRente: 15.19,
    coefDeCapit: 6.6,
    transactionsViageres: {
      NP: 71.7,
      DtUs: 28.3,
    },
  },
  {
    "age-monsieur": 95,
    "age-madame": 94,
    espVie: 6.3,
    usufruitEconomique: {
      NP: 80.2,
      Usuf: 19.8,
    },
    tauxDeRente: 15.63,
    coefDeCapit: 6.4,
    transactionsViageres: {
      NP: 72.2,
      DtUs: 27.8,
    },
  },
  {
    "age-monsieur": 95,
    "age-madame": 95,
    espVie: 6.2,
    usufruitEconomique: {
      NP: 80.5,
      Usuf: 19.5,
    },
    tauxDeRente: 15.86,
    coefDeCapit: 6.3,
    transactionsViageres: {
      NP: 72.5,
      DtUs: 27.5,
    },
  },
  {
    "age-monsieur": 95,
    "age-madame": 96,
    espVie: 6.1,
    usufruitEconomique: {
      NP: 80.8,
      Usuf: 19.2,
    },
    tauxDeRente: 16.09,
    coefDeCapit: 6.2,
    transactionsViageres: {
      NP: 72.7,
      DtUs: 27.3,
    },
  },
  {
    "age-monsieur": 95,
    "age-madame": 97,
    espVie: 6.0,
    usufruitEconomique: {
      NP: 81.1,
      Usuf: 18.9,
    },
    tauxDeRente: 16.34,
    coefDeCapit: 6.1,
    transactionsViageres: {
      NP: 73.0,
      DtUs: 27.0,
    },
  },
  {
    "age-monsieur": 95,
    "age-madame": 98,
    espVie: 5.9,
    usufruitEconomique: {
      NP: 81.4,
      Usuf: 18.6,
    },
    tauxDeRente: 16.59,
    coefDeCapit: 6.0,
    transactionsViageres: {
      NP: 73.2,
      DtUs: 26.8,
    },
  },
  {
    "age-monsieur": 95,
    "age-madame": 99,
    espVie: 5.8,
    usufruitEconomique: {
      NP: 81.7,
      Usuf: 18.3,
    },
    tauxDeRente: 16.85,
    coefDeCapit: 5.9,
    transactionsViageres: {
      NP: 73.5,
      DtUs: 26.5,
    },
  },
  {
    "age-monsieur": 95,
    "age-madame": 100,
    espVie: 5.7,
    usufruitEconomique: {
      NP: 81.9,
      Usuf: 18.1,
    },
    tauxDeRente: 17.13,
    coefDeCapit: 5.8,
    transactionsViageres: {
      NP: 73.7,
      DtUs: 26.3,
    },
  },
];









      




  