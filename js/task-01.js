const categoriesAll = document.querySelector('#categories');
console.log(`В списке ${categoriesAll.children.length} категории.`);

const titleAll = document.querySelectorAll('h2');
const listCategories = document.querySelectorAll('ul');

const animalTitle = titleAll[0].textContent;
const animalCategories = listCategories[1].children.length;
console.log(`Категория: ${animalTitle}. Количество элементов: ${animalCategories}.`);

const foodTitle = titleAll[1].textContent;
const foodCategories = listCategories[2].children.length;
console.log(`Категория: ${foodTitle}. Количество элементов: ${foodCategories}.`);

const technologiesTitle = titleAll[2].textContent;
const technologieslCategories = listCategories[3].children.length;
console.log(`Категория: ${technologiesTitle}. Количество элементов: ${technologieslCategories}.`);