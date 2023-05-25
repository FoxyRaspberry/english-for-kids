import './style.css';
import { categoriesMap } from './data/categories';
import { createWordCategoryCard } from './assets/word-category-card/word-category-card';
import { createWordCard } from './assets/word-card/word-card';


function displayCategoryCards(categoriesMap, cardsContainerElement) {
  const cardsDocumentFragment = new DocumentFragment();
  categoriesMap.forEach(categories => {
    const categoriesCardElement = createWordCategoryCard(categories);
    cardsDocumentFragment.appendChild(categoriesCardElement);
  });
  cardsContainerElement.appendChild(cardsDocumentFragment);
}

const catalogCardsContainerElement = document.getElementsByClassName('word-category-card__container')[0];
displayCategoryCards (categoriesMap, catalogCardsContainerElement);
