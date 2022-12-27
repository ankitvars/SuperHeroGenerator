const SUPERHERO_TOKEN = "10223569763528853";
const baseUrl = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`;
const newHeroButton = document.getElementById("newHeroButton");
const heroImageDiv = document.getElementById("heroImage");
const searchBtn = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");

const getSuperHero = (id) => {
  fetch(`${baseUrl}/${id}`)
    .then((response) => response.json())
    .then((json) => {
      //   console.log(json);
      heroImageDiv.innerHTML = `<img src = ${json.image.url} style = "height:400px; width:400px"/>`;
    });
};

const getSearchSuperHero = (name) => {
  console.log(searchInput.value);
  fetch(`${baseUrl}/search/${name}`)
    .then((response) => response.json())
    .then((json) => {
      const hero = json.results[0];
      //   console.log(hero);
      heroImageDiv.innerHTML = `<img src = ${hero.image.url} style = "height:400px; width:400px"/>`;
    });
};

const randomHero = () => {
  const numHeroes = 700;
  return Math.floor(Math.random() * numHeroes) + 1;
};
newHeroButton.onclick = () => getSuperHero(randomHero());
// const image = "https://www.superherodb.com/pictures2/portraits/10/100/186.jpg"
searchBtn.onclick = () => getSearchSuperHero(searchInput.value);
