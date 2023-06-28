import './word-card.css';

export function createWordCard({ audio, image, translation, word }) {
  const element = document.createElement('div');
  element.classList.add('word-card__card-element-container');
  element.innerHTML = `
    <div class="word-card__front-side">
      <div class="word-card__image-container">
        <img class="word-card__image" src="${image}" alt="word picture">
      </div>
      <div class="word-card__description">
        <div class="word-card__word">${word}</div>
        <button class="word-card__turn-button">
          <img class="word-card__turn-button-image" src="junkyard/turn_button.png" alt="turn button">
        </button>
      </div>
    </div>
    <div class="word-card__backside">
      <div class="word-card__image-container">
        <img class="word-card__image" src="${image}" alt="word picture">
      </div>
      <div class="word-card__description">
        <div class="word-card__word-translation">${translation}</div>
      </div>
    </div>
  `;

  const wordCardCSSClassModifier = 'word-card__card-element-container--turned';

  //Создать функции воспроизведения звуков, поворота карточки.
  function playSound() {
    const audioElement = new Audio(audio);
    audioElement.play();
  }

  function turnCard() {
    element.classList.add(wordCardCSSClassModifier);
    element.addEventListener('mouseleave', turnCardBack);
  }

  function turnCardBack() {
    element.classList.remove(wordCardCSSClassModifier);
    element.removeEventListener('mouseleave', turnCardBack);
  }

  //Обработать клик в зависимости от зоны клика.
  const handleClick = (pointerEvent) => {
    if (pointerEvent.target.closest('.word-card__turn-button')) {
      turnCard();
      return;
    }
    if (pointerEvent.target.closest('.word-card__front-side')) {
      playSound();
    }
  };

  element.addEventListener('click', handleClick);

  function destroy() {
    element.removeEventListener('click', handleClick);
  }

  return {
    destroy,
    element,
  };
}
