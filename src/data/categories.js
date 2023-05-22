const categoriesData = [
  {
    categoryName: 'Action 1',
    imagePath: 'assets/images/bg_for_categories/action1.jpg',
  },
  {
    categoryName: 'Action 2',
    imagePath: 'assets/images/bg_for_categories/action2.jpg',
  },
  {
    categoryName: 'Animal 1',
    imagePath: 'assets/images/bg_for_categories/animal1.jpg',
  },
  {
    categoryName: 'Animal 2',
    imagePath: 'assets/images/bg_for_categories/animal2.jpg',
  },
  {
    categoryName: 'Body',
    imagePath: 'assets/images/bg_for_categories/body.jpg',
  },
  {
    categoryName: 'Emotions',
    imagePath: 'assets/images/bg_for_categories/emotion.jpg',
  },
  {
    categoryName: 'Pets',
    imagePath: 'assets/images/bg_for_categories/pets.jpg',
  },
  {
    categoryName: 'Places',
    imagePath: 'assets/images/bg_for_categories/places.jpg',
  },
];

const wordsByCategories = [ 
  [
    {
      word: 'cry',
      translation: 'плакать',
      image: 'assets/images/action1/cry.jpg',
      audio: 'assets/sounds/action1/cry.mp3'
    },
    {
      word: 'dance',
      translation: 'танцевать',
      image: 'assets/images/action1/dance.jpg',
      audio: 'assets/sounds/action1/dance.mp3'
    },
    {
      word: 'dive',
      translation: 'нырять',
      image: 'assets/images/action1/dive.jpg',
      audio: 'assets/sounds/action1/dive.mp3'
    },
    {
      word: 'draw',
      translation: 'рисовать',
      image: 'assets/images/action1/draw.jpg',
      audio: 'assets/sounds/action1/draw.mp3'
    },
    {
      word: 'fish',
      translation: 'ловить рыбу',
      image: 'assets/images/action1/fish.jpg',
      audio: 'assets/sounds/action1/fish.mp3'
    },
    {
      word: 'fly',
      translation: 'летать',
      image: 'assets/images/action1/fly.jpg',
      audio: 'assets/sounds/action1/fly.mp3'
    },
    {
      word: 'hug',
      translation: 'обнимать',
      image: 'assets/images/action1/hug.jpg',
      audio: 'assets/sounds/action1/hug.mp3'
    },
    {
      word: 'jump',
      translation: 'прыгать',
      image: 'assets/images/action1/jump.jpg',
      audio: 'assets/sounds/action1/jump.mp3'
    }
  ],
  [
    {
      word: 'open',
      translation: 'открывать',
      image: 'assets/images/action2/open.jpg',
      audio: 'assets/sounds/action2/open.mp3'
    },
    {
      word: 'play',
      translation: 'играть',
      image: 'assets/images/action2/play.jpg',
      audio: 'assets/sounds/action2/play.mp3'
    },
    {
      word: 'point',
      translation: 'указывать',
      image: 'assets/images/action2/point.jpg',
      audio: 'assets/sounds/action2/point.mp3'
    },
    {
      word: 'ride',
      translation: 'ездить',
      image: 'assets/images/action2/ride.jpg',
      audio: 'assets/sounds/action2/ride.mp3'
    },
    {
      word: 'run',
      translation: 'бегать',
      image: 'assets/images/action2/run.jpg',
      audio: 'assets/sounds/action2/run.mp3'
    },
    {
      word: 'sing',
      translation: 'петь',
      image: 'assets/images/action2/sing.jpg',
      audio: 'assets/sounds/action2/sing.mp3'
    },
    {
      word: 'skip',
      translation: 'пропускать, прыгать',
      image: 'assets/images/action2/skip.jpg',
      audio: 'assets/sounds/action2/skip.mp3'
    },
    {
      word: 'swim',
      translation: 'плавать',
      image: 'assets/images/action2/swim.jpg',
      audio: 'assets/sounds/action2/swim.mp3'
    }
  ],
  [
    {
      word: 'cat',
      translation: 'кот',
      image: 'assets/images/pets/cat.jpg',
      audio: 'assets/sounds/pets/cat.mp3'
    },
    {
      word: 'chick',
      translation: 'цыплёнок',
      image: 'assets/images/pets/chick.jpg',
      audio: 'assets/sounds/pets/chick.mp3'
    },
    {
      word: 'chicken',
      translation: 'курица',
      image: 'assets/images/pets/chicken.jpg',
      audio: 'assets/sounds/pets/chicken.mp3'
    },
    {
      word: 'dog',
      translation: 'собака',
      image: 'assets/images/pets/dog.jpg',
      audio: 'assets/sounds/pets/dog.mp3'
    },
    {
      word: 'horse',
      translation: 'лошадь',
      image: 'assets/images/pets/horse.jpg',
      audio: 'assets/sounds/pets/horse.mp3'
    },
    {
      word: 'pig',
      translation: 'свинья',
      image: 'assets/images/pets/pig.jpg',
      audio: 'assets/sounds/pets/pig.mp3'
    },
    {
      word: 'caw',
      translation: 'свинья',
      image: 'assets/images/pets/caw.jpg',
      audio: 'assets/sounds/pets/caw.mp3'
    },
    {
      word: 'donkey',
      translation: 'свинья',
      image: 'assets/images/pets/donkey.jpg',
      audio: 'assets/sounds/pets/donkey.mp3'
    },
  ],
  [
    {
      word: 'rabbit',
      translation: 'кролик',
      image: 'assets/images/animal1/rabbit.jpg',
      audio: 'assets/sounds/animal1/rabbit.mp3'
    },
    {
      word: 'sheep',
      translation: 'овца',
      image: 'assets/images/animal1/sheep.jpg',
      audio: 'assets/sounds/animal1/sheep.mp3'
    },
    {
      word: 'bird',
      translation: 'птица',
      image: 'assets/images/animal1/bird.jpg',
      audio: 'assets/sounds/animal1/bird.mp3'
    },
    {
      word: 'fish',
      translation: 'рыба',
      image: 'assets/images/animal1/fish.jpg',
      audio: 'assets/sounds/animal1/fish.mp3'
    },
    {
      word: 'frog',
      translation: 'жаба',
      image: 'assets/images/animal1/frog.jpg',
      audio: 'assets/sounds/animal1/frog.mp3'
    },
    {
      word: 'giraffe',
      translation: 'жирафа',
      image: 'assets/images/animal1/giraffe.jpg',
      audio: 'assets/sounds/animal1/giraffe.mp3'
    },
    {
      word: 'lion',
      translation: 'лев',
      image: 'assets/images/animal1/lion.jpg',
      audio: 'assets/sounds/animal1/lion.mp3'
    },
    {
      word: 'mouse',
      translation: 'мышь',
      image: 'assets/images/animal1/mouse.jpg',
      audio: 'assets/sounds/animal1/mouse.mp3'
    },
  ],
  [
    {
      word: 'turtle',
      translation: 'черепаха',
      image: 'assets/images/animal2/turtle.jpg',
      audio: 'assets/sounds/animal2/turtle.mp3'
    },
    {
      word: 'dolphin',
      translation: 'дельфин',
      image: 'assets/images/animal2/dolphin.jpg',
      audio: 'assets/sounds/animal2/dolphin.mp3'
    },
    {
      word: 'bee',
      translation: 'пчела',
      image: 'assets/images/animal2/bee.jpg',
      audio: 'assets/sounds/animal2/bee.mp3'
    },
    {
      word: 'elephant',
      translation: 'слон',
      image: 'assets/images/animal2/elephant.jpg',
      audio: 'assets/sounds/animal2/elephant.mp3'
    },
    {
      word: 'fox',
      translation: 'лиса',
      image: 'assets/images/animal2/fox.jpg',
      audio: 'assets/sounds/animal2/fox.mp3'
    },
    {
      word: 'hippocampus',
      translation: 'морской конёк',
      image: 'assets/images/animal2/hippocampus.jpg',
      audio: 'assets/sounds/animal2/hippocampus.mp3'
    },
    {
      word: 'panda',
      translation: 'панда',
      image: 'assets/images/animal2/panda.jpg',
      audio: 'assets/sounds/animal2/panda.mp3'
    },
    {
      word: 'penguin',
      translation: 'пенгвин',
      image: 'assets/images/animal2/penguin.jpg',
      audio: 'assets/sounds/animal2/penguin.mp3'
    },
  ],
  [
    {
      word: 'ear',
      translation: 'ухо',
      image: 'assets/images/body/ear.jpg',
      audio: 'assets/sounds/body/ear.mp3'
    },
    {
      word: 'hand',
      translation: 'рука',
      image: 'assets/images/body/hand.jpg',
      audio: 'assets/sounds/body/hand.mp3'
    },
    {
      word: 'head',
      translation: 'голова',
      image: 'assets/images/body/head.jpg',
      audio: 'assets/sounds/body/head.mp3'
    },
    {
      word: 'neck',
      translation: 'шея',
      image: 'assets/images/body/neck.jpg',
      audio: 'assets/sounds/body/neck.mp3'
    },
    {
      word: 'nose',
      translation: 'нос',
      image: 'assets/images/body/nose.jpg',
      audio: 'assets/sounds/body/nose.mp3'
    },
    {
      word: 'skull',
      translation: 'череп',
      image: 'assets/images/body/skull.jpg',
      audio: 'assets/sounds/body/skull.mp3'
    },
    {
      word: 'stomach',
      translation: 'желудок',
      image: 'assets/images/body/stomach.jpg',
      audio: 'assets/sounds/body/stomach.mp3'
    },
    {
      word: 'tooth',
      translation: 'зуб',
      image: 'assets/images/body/tooth.jpg',
      audio: 'assets/sounds/body/tooth.mp3'
    },
  ],
  [
    {
      word: 'beach',
      translation: 'пляж',
      image: 'assets/images/places/beach.jpg',
      audio: 'assets/sounds/places/beach.mp3'
    },
    {
      word: 'city',
      translation: 'город',
      image: 'assets/images/body/city.jpg',
      audio: 'assets/sounds/places/city.mp3'
    },
    {
      word: 'desert',
      translation: 'пустыня',
      image: 'assets/images/body/desert.jpg',
      audio: 'assets/sounds/places/desert.mp3'
    },
    {
      word: 'field',
      translation: 'поле',
      image: 'assets/images/body/field.jpg',
      audio: 'assets/sounds/places/feild.mp3'
    },
    {
      word: 'forest',
      translation: 'лес',
      image: 'assets/images/body/forest.jpg',
      audio: 'assets/sounds/places/forest.mp3'
    },
    {
      word: 'river',
      translation: 'река',
      image: 'assets/images/body/river.jpg',
      audio: 'assets/sounds/places/river.mp3'
    },
    {
      word: 'room',
      translation: 'комната',
      image: 'assets/images/body/room.jpg',
      audio: 'assets/sounds/places/room.mp3'
    },
    {
      word: 'village',
      translation: 'деревня',
      image: 'assets/images/body/village.jpg',
      audio: 'assets/sounds/places/village.mp3'
    },
  ],
  [
    {
      word: 'sad',
      translation: 'грустный',
      image: 'assets/images/emotion/sad.jpg',
      audio: 'assets/sounds/emotion/sad.mp3'
    },
    {
      word: 'angry',
      translation: 'сердитый',
      image: 'assets/images/emotion/angry.jpg',
      audio: 'assets/sounds/emotion/angry.mp3'
    },
    {
      word: 'happy',
      translation: 'счастливый',
      image: 'assets/images/emotion/happy.jpg',
      audio: 'assets/sounds/emotion/happy.mp3'
    },
    {
      word: 'tired',
      translation: 'уставший',
      image: 'assets/images/emotion/tired.jpg',
      audio: 'assets/sounds/emotion/tired.mp3'
    },
    {
      word: 'surprised',
      translation: 'удивлённый',
      image: 'assets/images/emotion/surprised.jpg',
      audio: 'assets/sounds/emotion/surprised.mp3'
    },
    {
      word: 'scared',
      translation: 'испуганный',
      image: 'assets/images/emotion/scared.jpg',
      audio: 'assets/sounds/emotion/scared.mp3'
    },
    {
      word: 'smile',
      translation: 'улыбка',
      image: 'assets/images/emotion/smile.jpg',
      audio: 'assets/sounds/emotion/smile.mp3'
    },
    {
      word: 'laugh',
      translation: 'смех',
      image: 'assets/images/emotion/laugh.jpg',
      audio: 'assets/sounds/emotion/laugh.mp3'
    }
  ]
];

const categoriesPreparationForMap = wordsByCategories.map((words, index) => {
  const categoryID = index + 1;
  const wordsPreparationForMap = words.map((wordObject, index) => {
    const wordID = index + 1;
    const word = {
      ...wordObject,
      id: wordID,
    }
    return [wordID, word];
  });
  const wordsMap = new Map(wordsPreparationForMap);
  const category = {
    id: categoryID,
    ...categoriesData[index],
    wordsMap,
  };
  return [categoryID, category];
});
export const categoriesMap = new Map(categoriesPreparationForMap);
