const itemsEl = document.querySelectorAll('.item');
console.log('Number of categories:', itemsEl.length);

itemsEl.forEach(category => {
  console.log('Category:', category.querySelector('h2').textContent);
  console.log('Elements:', category.querySelectorAll('li').length);
});