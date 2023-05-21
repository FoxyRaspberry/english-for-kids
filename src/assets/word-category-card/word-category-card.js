function createWordCategoryCard({ image, categoryName }) {
  const element = document.createElement('div');
  element.classList.add('word-category-card__card-element-container');
  element.innerHTML = `
    <img class="word-category-card__image" src="${image}">
    <div class="word-category-card__category-description">
      <div class="word-category-card__category-name">${categoryName}</div>
      <div class="word-category-card__card-count">8 cards</div>
    </div>
  `;
  return element;
}
