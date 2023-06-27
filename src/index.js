import './style.css';
import { categoriesMap } from './data/categories';
import { createWordCategoryCard } from './assets/word-category-card/word-category-card';
import { createWordCard } from './assets/word-card/word-card';
import { createWordCardPlayMode } from './assets/word-card-play-mode/word-card-play-mode';
import { PlayModeComponent } from './assets/play-mode/play-mode';
import { createGameOverElement } from './assets/game-over/game-over';

function goBackToTheMainPage() {
  location.reload();
}

class CategoryCardListComponent {
  constructor(categoriesMap, containerElement) {
    this.categoriesMap = categoriesMap;
    this.containerElement = containerElement;
    this.initializationView(categoriesMap);
  }

  changePlayMode(value) {
    this.playMode = value;
  }

  // Выводить карточки слов в соответствии с ID категории.
  displayWordCardsByCategoryID(categoryID) {
    // `categoriesMap` содержит ключ - ID, значение - {category}, у значения нужен `wordsMap`.
    const wordsMap = this.categoriesMap.get(categoryID).wordsMap;
    this.displayWordCardsByWordsMap(wordsMap);
  }

  // Если слово угадано верно, карточка становится неактивной. 
  markWordCardAsDisabled(wordID) {
    const hiddenWordCardElement = this.wordIDsToElementsMap.get(wordID);
    hiddenWordCardElement.style.opacity = 0.5;
    hiddenWordCardElement.style.cursor = 'not-allowed';
    this.wordsElementsMarkedAsDisabledSet.add(hiddenWordCardElement);
  }

  // Private.
  appendCategoryCards(categoriesMap, listElement) {
    const cardsDocumentFragment = new DocumentFragment();
    this.categoriesElementsMap = new Map();
    categoriesMap.forEach(category => {
      const categoryCardElement = createWordCategoryCard(category);
      cardsDocumentFragment.appendChild(categoryCardElement);
      this.categoriesElementsMap.set(categoryCardElement, category);
    });
    listElement.appendChild(cardsDocumentFragment);
  }

  appendWordCards(wordsMap, cardsContainerElement) {
    const cardsDocumentFragment = new DocumentFragment();
    wordsMap.forEach(word => {
      const wordCard = createWordCard(word);
      cardsDocumentFragment.appendChild(wordCard.element);
    });
    cardsContainerElement.appendChild(cardsDocumentFragment);
  }

  appendWordCardsPlayMode(wordsMap, cardsContainerElement) {
    const wordCardElementCSSClass = `js-word-card`;
    const cardsDocumentFragment = new DocumentFragment();
    this.wordIDsToElementsMap = new Map();
    this.wordsElementsMap = new Map();
    this.wordsElementsMarkedAsDisabledSet = new Set();
    wordsMap.forEach(word => {
      const wordCard = createWordCardPlayMode(word);
      wordCard.element.classList.add(wordCardElementCSSClass);
      cardsDocumentFragment.appendChild(wordCard.element);
      this.wordIDsToElementsMap.set(word.id, wordCard.element);
      this.wordsElementsMap.set(wordCard.element, word);
    });
    // Обработать все клики внутри элемента для вывода списка карточек слов.
    // Клики по карточкам интерпретировать как команду для создания пользовательского события.
    cardsContainerElement.addEventListener('click', (pointerEvent) => {
      const wordCardElement = pointerEvent.target.closest(`.${wordCardElementCSSClass}`);
      // Если этого элемента нет, значит клик не по карточке.
      if (!wordCardElement) return;
      // Если карточка неактивна, события не происходят.
      if (this.wordsElementsMarkedAsDisabledSet.has(wordCardElement)) return;
      // `wordsElementsMap` содержит ключ - элемент, значение - {word}, у значения нужен `id`.
      const wordID = this.wordsElementsMap.get(wordCardElement).id;
      this.dispatchWordCardClickedEvent(wordID);
    });
    cardsContainerElement.appendChild(cardsDocumentFragment);
  }

  // Создать пользовательское событие с данными о категории слов, на карточку которой кликнул пользователь.
  dispatchCategoryCardClickedEvent(category) {
    const categoryCardClickedEvent = new CustomEvent('categoryCardClicked', {
      detail: {
        category: category,
      },
    });
    this.containerElement.dispatchEvent(categoryCardClickedEvent);
  }

  // Создать пользовательское событие с данными об ID слова, на карточку которого кликнул пользователь.
  dispatchWordCardClickedEvent(wordID) {
    const wordCardClickedEvent = new CustomEvent('wordCardClicked', {
      detail: {
        wordID: wordID,
      },
    });
    this.containerElement.dispatchEvent(wordCardClickedEvent);
  }

  displayWordCardsByWordsMap(wordsMap) {
    const wordListElement = document.createElement('div');
    wordListElement.classList.add('word-card-list__container');
    if (!this.playMode) {
      this.appendWordCards(wordsMap, wordListElement);
    }
    else {
      this.appendWordCardsPlayMode(wordsMap, wordListElement);
    }
    this.containerElement.innerHTML = '';
    this.containerElement.appendChild(wordListElement);
  }

  // Первоначальная подготовка визуального представления.
  initializationView(categoriesMap) {
    this.playMode = false;
    this.listElement = document.createElement('div');
    this.listElement.classList.add('word-category-card__list-container');
    this.appendCategoryCards(categoriesMap, this.listElement);
    // Обработать все клики внутри элемента для вывода списка карточек.
    // Клики по карточкам интерпретировать как команду для отображения соответствующих карточек слов.
    this.listElement.addEventListener('click', (pointerEvent) => {
      const categoryCardElement = pointerEvent.target.closest('.word-category-card__card-element-container');
      if (categoryCardElement) {
        // `categoriesElementsMap` содержит ключ - элемент, значение - {category}, нужен весь объект.
        const category = this.categoriesElementsMap.get(categoryCardElement);
        this.dispatchCategoryCardClickedEvent(category);
        this.displayWordCardsByWordsMap(category.wordsMap);
      }
    });
    this.containerElement.appendChild(this.listElement);
  }
}

// Burger-navigation: закрывать навигацию при выборе категории, выводить на экран выбранную категорию //
const navigationListElement = document.getElementsByClassName('navigation__list')[0];
navigationListElement.addEventListener('click', (pointerEvent) => {
  const categoryID = +pointerEvent.target.dataset.categoryId;
  if (categoryID) {
    burgerCheckboxElement.checked = false;
    categoryCardListComponent.displayWordCardsByCategoryID(categoryID);
  }
});

function switchBodyScrollable(scrollable) {
  if (scrollable) {
    document.body.classList.remove('navigation__section--fix-scroll');
  } else {
    document.body.classList.add('navigation__section--fix-scroll');
  }
}

const burgerCheckboxElement = document.getElementById('burger-checkbox');
burgerCheckboxElement.addEventListener('change', (event) => {
  switchBodyScrollable(!event.target.checked);
});

const catalogCardsContainerElement = document.getElementsByClassName('js-word-category-card__category-card-list-component-container')[0];
const categoryCardListComponent = new CategoryCardListComponent(categoriesMap, catalogCardsContainerElement);

// Активировать переключение режимов.
const switchToggleCheckboxElement = document.getElementById('toggle-checkbox');
switchToggleCheckboxElement.addEventListener('change', (event) => {
  categoryCardListComponent.changePlayMode(switchToggleCheckboxElement.checked);
});
catalogCardsContainerElement.addEventListener('categoryCardClicked', (customEvent) => {
  switchToggleCheckboxElement.setAttribute('disabled', 'true');
  switchToggleCheckboxElement.parentElement.style.opacity = 0.4;
  switchToggleCheckboxElement.parentElement.style.cursor = 'not-allowed';
  if (switchToggleCheckboxElement.checked) {
    const wordsMap = customEvent.detail.category.wordsMap;
    const playModeControlsContainerElement = document.getElementsByClassName('js-header__play-mode-controls')[0];
    const playModeComponent = new PlayModeComponent(
      playModeControlsContainerElement,
      wordsMap,
      categoryCardListComponent, 
      catalogCardsContainerElement,
    );
    playModeControlsContainerElement.addEventListener('gameOver', (customEvent) => {
      const errorCount = customEvent.detail.errorCount;
      const gameOverElement = createGameOverElement(errorCount);
      document.body.appendChild(gameOverElement);
      setTimeout(() => {
        gameOverElement.remove();
        goBackToTheMainPage();
      }, 10000);
    });
  }
});
