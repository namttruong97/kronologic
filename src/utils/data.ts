const CHARACTER = {
  ADVENTURER: 'ADVENTURER',
  BARONESS: 'BARONESS',
  CHAUFFEUR: 'CHAUFFEUR',
  DETECTIVE: 'DETECTIVE',
  VOURNALIST: 'VOURNALIST',
  SERVANT: 'SERVANT',
};

const ROOM = {
  DANCE_HALL: 'DANCE HALL',
  MUSIC_HALL: 'MUSIC HALL',
  STAGE_HALL: 'STAGE HALL',
  GRAND_FOYER: 'GRAND FOYER',
  GALLERY: 'GALLERY',
  GRAND_STAIRCASE: 'GRAND STAIRCASE',
};

enum ENUM_CHARACTER {
  ADVENTURER,
  BARONESS,
  CHAUFFEUR,
  DETECTIVE,
  VOURNALIST,
  SERVANT,
}
enum ENUM_DATATYPE {
  ROOM,
  TIME,
  CHARACTER,
}

const SCENARIO = {
  ONE: 'Poison in High Society',
  TWO: 'The Phantom of the Opera',
  THREE: `The Singer's Jewels`,
};

const arrCharacter = Object.keys(CHARACTER).map((item) => ({
  label: item,
  value: item,
}));

const arrRoom = Object.values(ROOM).map((item) => ({
  label: item,
  value: item,
}));

const arrTime = Object.keys([1, 2, 3, 4, 5, 6]).map((item, index) => ({
  label: (index + 1).toString(),
  value: (index + 1).toString(),
}));

const SCENARIO_ONE_QUESTIONS = [
  {
    question: 'Who is assassin: ',
    data: arrCharacter,
    type: ENUM_DATATYPE.CHARACTER,
  },
  {
    question: 'In what location: ',
    data: arrRoom,
    type: ENUM_DATATYPE.ROOM,
  },
  {
    question: 'What time: ',
    data: arrTime,
    type: ENUM_DATATYPE.TIME,
  },
];

const SCENARIO_TWO_QUESTIONS = [
  {
    question: 'Who is the phantom: ',
    data: arrCharacter,
    type: ENUM_DATATYPE.CHARACTER,
  },
];

const SCENARIO_THREE_QUESTIONS = [
  {
    question: 'Who has the jewels at Time 6: ',
    data: arrCharacter,
    type: ENUM_DATATYPE.CHARACTER,
  },
  {
    question: 'What location of the jewels at Time 6: ',
    data: arrRoom,
    type: ENUM_DATATYPE.ROOM,
  },
];
const SCENARIO_RESULT = {
  1: [
    [1, CHARACTER.ADVENTURER, ROOM.DANCE_HALL, '5'],
    [2, CHARACTER.CHAUFFEUR, ROOM.STAGE_HALL, '4'],
    [3, CHARACTER.BARONESS, ROOM.GRAND_STAIRCASE, '5'],
    [4, CHARACTER.VOURNALIST, ROOM.GALLERY, '4'],
    [5, CHARACTER.CHAUFFEUR, ROOM.DANCE_HALL, '6'],
  ],
  2: [
    [1, CHARACTER.SERVANT],
    [2, CHARACTER.VOURNALIST],
    [3, CHARACTER.CHAUFFEUR],
    [4, CHARACTER.DETECTIVE],
    [5, CHARACTER.VOURNALIST],
  ],
  3: [
    [1, CHARACTER.CHAUFFEUR, ROOM.GRAND_FOYER],
    [2, CHARACTER.SERVANT, ROOM.GRAND_FOYER],
    [3, CHARACTER.ADVENTURER, ROOM.STAGE_HALL],
    [4, CHARACTER.ADVENTURER, ROOM.GRAND_STAIRCASE],
    [5, CHARACTER.BARONESS, ROOM.GRAND_FOYER],
  ],
};
export {
  CHARACTER,
  ENUM_CHARACTER,
  ENUM_DATATYPE,
  ROOM,
  SCENARIO,
  SCENARIO_ONE_QUESTIONS,
  SCENARIO_RESULT,
  SCENARIO_THREE_QUESTIONS,
  SCENARIO_TWO_QUESTIONS,
};
