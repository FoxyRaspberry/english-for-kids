import './play-mode.css';

export class PlayModeComponent {
  constructor(
    playModeControlsContainerElement, // Основа для генерации визуального представления.
    wordsMap, // Набор загадываемых слов.
    categoryCardListComponent, // Экземпляр класса, содержащий карточки категорий и слов.
    catalogCardsContainerElement, // HTML-элемент для подписки на события `CategoryCardListComponent`.
  ) {
    this.categoryCardListComponent = categoryCardListComponent;
    this.catalogCardsContainerElement = catalogCardsContainerElement;
    this.wordsMap = wordsMap;
    this.initializationView(playModeControlsContainerElement);
  }
  
  // Private.

  // Генерировать и произнести случайное слово из имеющихся в `currentWordsArray`.
  chooseCurrentWord() {
    if (this.currentWordsArray.length) {
      this.currentWord = getRandomItem(this.currentWordsArray);
      this.playSound(this.currentWord.audio);
    }
    else {
      this.gameOver();
    }
  }

  // Добавить кнопку 'Начать игру', задать стили.
  createStartButton(containerElement) {
    const startButtonElement = document.createElement('button');
    startButtonElement.classList.add('play-mode__button-start');
    startButtonElement.innerHTML = 'Start game';
    const handleStartButtonClick = () => {
      startButtonElement.removeEventListener('click', handleStartButtonClick);
      startButtonElement.remove();
      this.createRepeatButton(containerElement);
      this.startTheGame();
    };
    startButtonElement.addEventListener('click', handleStartButtonClick);
    containerElement.appendChild(startButtonElement);
  }

  // Добавить кнопку 'Повтор', задать стили.
  createRepeatButton(containerElement) {
    const repeatButtonElement = document.createElement('button');
    repeatButtonElement.classList.add('play-mode__button-repeat');
    repeatButtonElement.addEventListener('click', (pointerEvent) => {
      this.playSound(this.currentWord.audio);
    });
    containerElement.appendChild(repeatButtonElement);
  }

  createScoresList(containerElement) {
    this.scoresListElement = document.createElement('ul');
    this.scoresListElement.classList.add('play-mode__scores-list');
    containerElement.appendChild(this.scoresListElement);
  }

  // когда игра окончена:
  // если все слова угаданы правильно, разыгрывается сигнал «успех», карточки со словами убираются, а на странице отображается радостный смайлик.
  // если при отгадывании слов были ошибки, проигрывается сигнал «неудача», карточки со словами убираются, а на странице отображается грустный смайлик с количеством ошибок.
  // после этого приложение автоматически перенаправляет на главную страницу со списком категорий.
  gameOver() {

  }

  initializationView(playModeControlsContainerElement) {
    const containerElement = document.createElement('div');
    containerElement.classList.add('play-mode-button__container');
    this.createScoresList(containerElement);
    this.createStartButton(containerElement);
    playModeControlsContainerElement.appendChild(containerElement);
  }

  playSound(sound) {
    const audioElement = new Audio(sound);
    audioElement.play();
  }
  
  // Если слово отгадано неверно - воспроизводится звуковой сигнал "ошибка".
  playSoundFailure() {
    this.playSound('./assets/sounds/failure.mp3');
  }
  
  // Если слово отгадано верно - воспроизводится звуковой сигнал «правильно».
  playSoundSuccess() {
    this.playSound('./assets/sounds/success.mp3');
  }

  // Отобразить правильный/неправильный вариант ответа.
  // `scoresArray` - массив булевых значений.
  renderScores(scoresArray) {
    const scoresDocumentFragment = new DocumentFragment();
    const limitItems = 5;
    const startIndex = Math.max(0, scoresArray.length - limitItems);
    for (let index = startIndex; index < scoresArray.length; index++) {
      const booleanValue = scoresArray[index];
      const scoreItemElement = document.createElement('li');
      scoreItemElement.classList.add(booleanValue ? 'score-item--right' : 'score-item--incorrect');
      scoresDocumentFragment.appendChild(scoreItemElement);
    }
    this.scoresListElement.innerHTML = '';
    this.scoresListElement.appendChild(scoresDocumentFragment);
  }

  startTheGame() {
    this.scoresArray = [];
    this.currentWordsArray = [];
    this.wordsMap.forEach(word => {
      this.currentWordsArray.push(word);
    });
    this.chooseCurrentWord();
    this.catalogCardsContainerElement.addEventListener('wordCardClicked', (customEvent) => {
      const selectedWordID = customEvent.detail.wordID;
      if (selectedWordID === this.currentWord.id) {
        this.scoresArray.push(true);
        this.categoryCardListComponent.markWordCardAsDisabled(selectedWordID); // Заблокировать карточку.
        this.playSoundSuccess();
        setTimeout(() => {
          this.chooseCurrentWord();
        }, 2000);
      }
      else {
        this.scoresArray.push(false);
        this.playSoundFailure();
      }
      this.renderScores(this.scoresArray);
    });
  }
}

// Вернуть псевдослучайное целое число в диапазоне.
function getRandomNumber(min, max) { 
  return Math.floor(min + Math.random() * (max + 1 - min));
}

function getRandomItem(array) {
  const index = getRandomNumber(0, array.length - 1);
  const item = array[index];
  array.splice(index, 1);
  return item;
}
