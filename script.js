let bandNames = ['The Rolling Stones', 'Led Zeppelin', 'The Beatles', 'Pink Floyd', 'Aerosmith'];

// Remove articles from band names
function removeArticles(name) {
  const articles = ['a', 'an', 'the'];
  const words = name.split(' ');
  if (articles.includes(words[0].toLowerCase())) {
    words.shift();
  }
  return words.join(' ');
}

// Sort band names without articles
bandNames.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));

// Display band names in HTML
const bandList = document.getElementById('band');
bandNames.forEach(name => {
  const listItem = document.createElement('li');
  listItem.textContent = name;
  bandList.appendChild(listItem);
});
