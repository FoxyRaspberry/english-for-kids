import './style.css';
import { categoriesMap } from './data/categories';
import { createWordCategoryCard } from './assets/word-category-card/word-category-card';
import { createWordCard } from './assets/word-card/word-card';

class CategoryCardListComponent {
  constructor(categoriesMap, containerElement) {
    this.containerElement = containerElement;
    this.initializationView(categoriesMap);
  }

  // Private.
  appendCards(categoriesMap, listElement) {
    const cardsDocumentFragment = new DocumentFragment();
    this.categoriesElementsMap = new Map();
    categoriesMap.forEach(category => {
      const categoryCardElement = createWordCategoryCard(category);
      cardsDocumentFragment.appendChild(categoryCardElement);
      this.categoriesElementsMap.set(categoryCardElement, category);
    });
    listElement.appendChild(cardsDocumentFragment);
  }

  // Первоначальная подготовка визуального представления.
  initializationView(categoriesMap) {
    this.listElement = document.createElement('div');
    this.listElement.classList.add('word-category-card__list-container');
    this.appendCards(categoriesMap, this.listElement);
    // Обработать все клики внутри элемента для вывода списка карточек.
    // Клики по карточкам интерпретировать как команду для отображения соответствующих карточек слов.
    this.listElement.addEventListener('click', (pointerEvent) => {
      const categoryCardElement = pointerEvent.target.closest('.word-category-card__card-element-container');
      if (categoryCardElement) {
        const wordsMap = this.categoriesElementsMap.get(categoryCardElement).wordsMap;
        this.containerElement.innerHTML = '';
        displayWordCards(wordsMap, this.containerElement);
      }
    });
    this.containerElement.appendChild(this.listElement);
  }
}

const catalogCardsContainerElement = document.getElementsByClassName('js-word-category-card__category-card-list-component-container')[0];
const categoryCardListComponent = new CategoryCardListComponent(categoriesMap, catalogCardsContainerElement);

function displayWordCards(wordsMap, cardsContainerElement) {
  const cardsDocumentFragment = new DocumentFragment();
  wordsMap.forEach(word => {
    const wordCardElement = createWordCard(word);
    cardsDocumentFragment.appendChild(wordCardElement.element);
  });
  cardsContainerElement.appendChild(cardsDocumentFragment);
}
