document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#form');
  form.addEventListener('submit', handleFormSubmit);

  const button = document.querySelector('#delete');
  button.addEventListener('click', handleDeleteClick);
});

const handleFormSubmit = function(event) {
  event.preventDefault();

  const listElement = document.createElement('li');

  const species = createElementWithText('h2', this.species.value, listElement);

  const latin = createElementWithText('h3', this.latin.value, listElement);

  const country = createElementWithText('h4', this.country.value, listElement);

  const status = createElementWithText('p', this.status.value, listElement);

  const image = document.createElement('img');
  image.src = this.image.value;
  listElement.appendChild(image);

  const speciesList = document.querySelector('#species-list');
  speciesList.appendChild(listElement);

  this.reset();
};

const handleDeleteClick = function(){
  const speciesList = document.querySelector('#species-list');
  speciesList.innerHTML = '';
};

const createElementWithText = function(element, text, parent){
  const newElement = document.createElement(element);
  newElement.textContent = text;
  parent.appendChild(newElement);
};
