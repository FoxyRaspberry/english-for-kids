import './word-category-card.css';

export function createWordCategoryCard({ imagePath, categoryName }) {
  const element = document.createElement('div');
  element.classList.add('word-category-card__card-element-container');
  element.innerHTML = `
    <div class="word-category-card__image-container">
      <img class="word-category-card__image" src="${imagePath}">
    </div>
    <div class="word-category-card__category-description">
      <div class="word-category-card__category-name">${categoryName}</div>
      <div class="word-category-card__card-count">8 cards</div>
    </div>
  `;
  return element;
}
