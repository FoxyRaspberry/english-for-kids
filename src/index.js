import './style.css';
import { categoriesMap } from './data/categories';
import { createWordCategoryCard } from './assets/word-category-card/word-category-card';
import { createWordCard } from './assets/word-card/word-card';

class CategoryCardListComponent {
  constructor(categoriesMap, containerElement) {
    this.categoriesMap = categoriesMap;
    this.containerElement = containerElement;
    this.initializationView(categoriesMap);
  }

  // Выводить карточки слов в соответствии с ID категории.
  displayWordCardsByCategoryID(categoryID) {
    const wordsMap = this.categoriesMap.get(categoryID).wordsMap;
    this.displayWordCardsByWordsMap(wordsMap);
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
      const wordCardElement = createWordCard(word);
      cardsDocumentFragment.appendChild(wordCardElement.element);
    });
    cardsContainerElement.appendChild(cardsDocumentFragment);
  }

  displayWordCardsByWordsMap(wordsMap) {
    const wordListElement = document.createElement('div');
    wordListElement.classList.add('word-card-list__container');
    this.appendWordCards(wordsMap, wordListElement);
    this.containerElement.innerHTML = '';
    this.containerElement.appendChild(wordListElement);
  }

  // Первоначальная подготовка визуального представления.
  initializationView(categoriesMap) {
    this.listElement = document.createElement('div');
    this.listElement.classList.add('word-category-card__list-container');
    this.appendCategoryCards(categoriesMap, this.listElement);
    // Обработать все клики внутри элемента для вывода списка карточек.
    // Клики по карточкам интерпретировать как команду для отображения соответствующих карточек слов.
    this.listElement.addEventListener('click', (pointerEvent) => {
      const categoryCardElement = pointerEvent.target.closest('.word-category-card__card-element-container');
      if (categoryCardElement) {
        const wordsMap = this.categoriesElementsMap.get(categoryCardElement).wordsMap;
        this.displayWordCardsByWordsMap(wordsMap);
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
