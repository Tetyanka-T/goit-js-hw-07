const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const list = document.querySelector('#ingredients');

const makeItem = ingredients => {
  return ingredients.map(ingredient => {
    const itemEl = document.createElement('li');
    itemEl.textContent = ingredient;
    return itemEl;
  });
};

const elements =  makeItem(ingredients);
list.append(...elements);

 console.log(elements);

 