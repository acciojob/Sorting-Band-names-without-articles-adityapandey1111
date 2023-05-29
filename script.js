//your code here
// Input array of band names
let bandNames = ['The Beatles', 'Aerosmith', 'Red Hot Chili Peppers', 'The Rolling Stones', 'Guns N\' Roses'];

// Function to remove articles from band names
function removeArticles(name) {
  // List of articles to be removed
  const articles = ['a', 'an', 'the'];

  // Split the name into words
  const words = name.split(' ');

  // Filter out the articles and join the remaining words
  const filteredWords = words.filter(word => !articles.includes(word.toLowerCase()));
  const modifiedName = filteredWords.join(' ');

  return modifiedName;
}

// Sort and display the band names
bandNames.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));
const ul = document.getElementById('band');
bandNames.forEach(name => {
  const li = document.createElement('li');
  li.textContent = name;
  ul.appendChild(li);
});

