const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsUlistEl = document.querySelector('#ingredients');

const makeIngredientsTtem = ingredient => {
  const ingredientsItem = document.createElement("li");
  ingredientsItem.textContent = ingredient;
  ingredientsItem.classList = 'item';
  return ingredientsItem;
};

ingredientsUlistEl.append(...ingredients.map(makeIngredientsTtem));