import './game-over.css';

export function createGameOverElement(errorCount) {
  if (errorCount) {
    return createErrorCountContainerElement(errorCount);
  }
  return createSuccessfulGameContainerElement();
}

function createErrorCountContainerElement(errorCount) {
  const errorCountContainerElement = document.createElement('div');
  errorCountContainerElement.classList.add('game-over__container');
  errorCountContainerElement.innerHTML = `
    <div class="game-over__error-image"></div>
    <h1>Total errors: ${errorCount}</h1>
  `;
  return errorCountContainerElement;
}

function createSuccessfulGameContainerElement() {
  const successfulGameContainerElement = document.createElement('div');
  successfulGameContainerElement.classList.add('game-over__container');
  successfulGameContainerElement.innerHTML = `
    <div class="game-over__success-image"></div>
    <h1>Well done! Move only forward!</h1>
  `;
  return successfulGameContainerElement;
}
