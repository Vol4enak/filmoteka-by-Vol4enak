import input from "./input"

const API_KEY = "bcde96d2248e63a51f520e697b2ad108";
const FETCH_HTTP = "https://api.themoviedb.org/3"

export async function getFetchedByTrends() {
  const getFetch = await fetch(
    `${FETCH_HTTP}/trending/movie/day?api_key=${API_KEY}`
  );
  const card = await getFetch.json();
  return card;
}

export async function getFetchBySearch(query) {
  console.log(query);
  const getFetchFromSearch = await fetch(`
${FETCH_HTTP}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`);
  const cardInfo = await getFetchFromSearch.json();

  return cardInfo;
}

export async function getFetchedById(id) {
   const getFetch = await fetch(
     `${FETCH_HTTP}/movie/${id}?api_key=${API_KEY}&language=en-US`
   );
  const card = await getFetch.json();
  
   return card.genres;
}
