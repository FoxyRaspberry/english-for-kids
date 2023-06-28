import './word-card-play-mode.css';

export function createWordCardPlayMode({ audio, image }) {
  const element = document.createElement('div');
  element.classList.add('word-card-play-mode__card-element-container');
  element.innerHTML = `
    <div class="word-card-play-mode__front-side">
      <div class="word-card-play-mode__image-container">
        <img class="word-card-play-mode__image" src="${image}" alt="word picture">
      </div>
      <div class="word-card-play-mode__bottom"></div>
    </div>
  `;

  //Создать функцию воспроизведения звуков.
  function playSound() {
    const audioElement = new Audio(audio);
    audioElement.play();
  }

  return {
    playSound,
    element,
  };
}
