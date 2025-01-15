 interface UsufruitEconomiqueSeul {
  NP: number;
  Usuf: number;
}
interface TransactionsViageresSeul {
  NP: number;
  DtUs: number;
}

 interface ViagerSeulInterface {
  age: number;
  espVie: number;
  usufruitEconomique: UsufruitEconomiqueSeul;
  tauxDeRente: number;
  coefDeCapit: number;
  transactionsViageres: TransactionsViageresSeul;
}

export const tableauViagerSeulHomme: ViagerSeulInterface[] = [
  {
    age: 40,
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
    age: 41,
    espVie: 40.8,
    usufruitEconomique: {
      NP: 24.0,
      Usuf: 76.0,
    },
    tauxDeRente: 3.64,
    coefDeCapit: 27.1,
    transactionsViageres: {
      NP: 21.6,
      DtUs: 78.4,
    },
  },
  {
    age: 42,
    espVie: 39.8,
    usufruitEconomique: {
      NP: 24.9,
      Usuf: 74.1,
    },
    tauxDeRente: 3.7,
    coefDeCapit: 27.4,
    transactionsViageres: {
      NP: 22.4,
      DtUs: 77.6,
    },
  },
  {
    age: 43,
    espVie: 38.9,
    usufruitEconomique: {
      NP: 25.7,
      Usuf: 74.3,
    },
    tauxDeRente: 3.75,
    coefDeCapit: 26.7,
    transactionsViageres: {
      NP: 23.1,
      DtUs: 76.9,
    },
  },
  {
    age: 44,
    espVie: 38.0,
    usufruitEconomique: {
      NP: 26.5,
      Usuf: 73.5,
    },
    tauxDeRente: 3.8,
    coefDeCapit: 26.3,
    transactionsViageres: {
      NP: 23.9,
      DtUs: 75.6,
    },
  },
  {
    age: 45,
    espVie: 37.0,
    usufruitEconomique: {
      NP: 27.5,
      Usuf: 72.5,
    },
    tauxDeRente: 3.85,
    coefDeCapit: 26.0,
    transactionsViageres: {
      NP: 24.7,
      DtUs: 75.3,
    },
  },
  {
    age: 46,
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
    age: 47,
    espVie: 35.1,
    usufruitEconomique: {
      NP: 29.2,
      Usuf: 70.8,
    },
    tauxDeRente: 3.98,
    coefDeCapit: 25.1,
    transactionsViageres: {
      NP: 26.3,
      DtUs: 73.7,
    },
  },
  {
    age: 48,
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
    age: 49,
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
    age: 50,
    espVie: 32.5,
    usufruitEconomique: {
      NP: 32.1,
      Usuf: 67.9,
    },
    tauxDeRente: 4.2,
    coefDeCapit: 23.8,
    transactionsViageres: {
      NP: 28.8,
      DtUs: 71.1,
    },
  },
  {
    age: 51,
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
    age: 52,
    espVie: 30.4,
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
    age: 53,
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
    age: 54,
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
    age: 55,
    espVie: 28.2,
    usufruitEconomique: {
      NP: 37.3,
      Usuf: 62.7,
    },
    tauxDeRente: 4.61,
    coefDeCapit: 21.8,
    transactionsViageres: {
      NP: 33.5,
      DtUs: 66.4,
    },
  },
  {
    age: 56,
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
    age: 57,
    espVie: 26.3,
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
    age: 58,
    espVie: 25.4,
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
    age: 59,
    espVie: 24.4,
    usufruitEconomique: {
      NP: 42.0,
      Usuf: 58.0,
    },
    tauxDeRente: 5.08,
    coefDeCapit: 19.8,
    transactionsViageres: {
      NP: 37.8,
      DtUs: 62.2,
    },
  },
  {
    age: 60,
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
    age: 61,
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
    age: 62,
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
    age: 63,
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
    age: 64,
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
    age: 65,
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
    age: 66,
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
    age: 67,
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
    age: 68,
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
    age: 69,
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
    age: 70,
    espVie: 16.5,
    usufruitEconomique: {
      NP: 56.2,
      Usuf: 43.8,
    },
    tauxDeRente: 6.85,
    coefDeCapit: 14.6,
    transactionsViageres: {
      NP: 50.6,
      DtUs: 49.4,
    },
  },
  {
    age: 71,
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
    age: 72,
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
    age: 73,
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
    age: 74,
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
    age: 75,
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
    age: 76,
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
    age: 77,
    espVie: 11.8,
    usufruitEconomique: {
      NP: 66.3,
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
    age: 78,
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
    age: 79,
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
    age: 80,
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
    age: 81,
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
    age: 82,
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
    age: 83,
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
    age: 84,
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
    age: 85,
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
    age: 86,
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
    age: 87,
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
    age: 88,
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
    age: 89,
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
    age: 90,
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
    age: 91,
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
  {
    age: 92,
    espVie: 5.5,
    usufruitEconomique: {
      NP: 82.5,
      Usuf: 17.5,
    },
    tauxDeRente: 17.7,
    coefDeCapit: 5.7,
    transactionsViageres: {
      NP: 74.3,
      DtUs: 25.7,
    },
  },
  {
    age: 93,
    espVie: 5.3,
    usufruitEconomique: {
      NP: 83.1,
      Usuf: 16.9,
    },
    tauxDeRente: 18.31,
    coefDeCapit: 5.5,
    transactionsViageres: {
      NP: 74.8,
      DtUs: 25.2,
    },
  },
  {
    age: 94,
    espVie: 5.1,
    usufruitEconomique: {
      NP: 83.7,
      Usuf: 16.3,
    },
    tauxDeRente: 18.98,
    coefDeCapit: 5.3,
    transactionsViageres: {
      NP: 75.3,
      DtUs: 24.7,
    },
  },
  {
    age: 95,
    espVie: 4.9,
    usufruitEconomique: {
      NP: 84.3,
      Usuf: 15.7,
    },
    tauxDeRente: 19.7,
    coefDeCapit: 5.1,
    transactionsViageres: {
      NP: 75.8,
      DtUs: 24.2,
    },
  },
  {
    age: 96,
    espVie: 4.7,
    usufruitEconomique: {
      NP: 84.9,
      Usuf: 15.1,
    },
    tauxDeRente: 20.47,
    coefDeCapit: 4.9,
    transactionsViageres: {
      NP: 76.4,
      DtUs: 23.6,
    },
  },
  {
    age: 97,
    espVie: 4.5,
    usufruitEconomique: {
      NP: 85.5,
      Usuf: 14.5,
    },
    tauxDeRente: 21.32,
    coefDeCapit: 4.7,
    transactionsViageres: {
      NP: 76.9,
      DtUs: 23.1,
    },
  },
  {
    age: 98,
    espVie: 4.2,
    usufruitEconomique: {
      NP: 86.4,
      Usuf: 13.6,
    },
    tauxDeRente: 22.75,
    coefDeCapit: 4.4,
    transactionsViageres: {
      NP: 77.7,
      DtUs: 22.3,
    },
  },
  {
    age: 99,
    espVie: 4.0,
    usufruitEconomique: {
      NP: 87.0,
      Usuf: 13.0,
    },
    tauxDeRente: 23.82,
    coefDeCapit: 4.2,
    transactionsViageres: {
      NP: 78.3,
      DtUs: 21.7,
    },
  },
  {
    age: 100,
    espVie: 3.7,
    usufruitEconomique: {
      NP: 87.9,
      Usuf: 12.1,
    },
    tauxDeRente: 25.64,
    coefDeCapit: 3.9,
    transactionsViageres: {
      NP: 79.1,
      DtUs: 20.9,
    },
  },
  {
    age: 101,
    espVie: 3.4,
    usufruitEconomique: {
      NP: 88.8,
      Usuf: 11.2,
    },
    tauxDeRente: 27.78,
    coefDeCapit: 3.6,
    transactionsViageres: {
      NP: 79.9,
      DtUs: 20.1,
    },
  },
  {
    age: 102,
    espVie: 3.0,
    usufruitEconomique: {
      NP: 90.0,
      Usuf: 10.0,
    },
    tauxDeRente: 31.3,
    coefDeCapit: 3.2,
    transactionsViageres: {
      NP: 81.0,
      DtUs: 19.0,
    },
  },
  {
    age: 103,
    espVie: 2.7,
    usufruitEconomique: {
      NP: 91.0,
      Usuf: 9.0,
    },
    tauxDeRente: 34.62,
    coefDeCapit: 2.9,
    transactionsViageres: {
      NP: 81.9,
      DtUs: 18.1,
    },
  },
  {
    age: 104,
    espVie: 2.5,
    usufruitEconomique: {
      NP: 91.6,
      Usuf: 8.4,
    },
    tauxDeRente: 37.28,
    coefDeCapit: 2.7,
    transactionsViageres: {
      NP: 82.5,
      DtUs: 17.5,
    },
  },
  {
    age: 105,
    espVie: 2.3,
    usufruitEconomique: {
      NP: 92.3,
      Usuf: 7.7,
    },
    tauxDeRente: 40.41,
    coefDeCapit: 2.5,
    transactionsViageres: {
      NP: 83.1,
      DtUs: 16.9,
    },
  },
];

export type {ViagerSeulInterface, UsufruitEconomiqueSeul, TransactionsViageresSeul};
