import input from './input';
import axios from 'axios';
const API_KEY = "bcde96d2248e63a51f520e697b2ad108";
export async function getFetchedByTrends() {
  const getFetch = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  );
  const card = await getFetch.json();
  return card;
}

// export async function getFetchedByGenders(){
//   const getFetch = await fetch(
// `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
//   )
//   const card = await getFetch.json();
//   return card;
  
// }

export async function getFetchedById(id) {
   const getFetch = await fetch(
     `https://api.themoviedb.org/3/movie/${id}?api_key=bcde96d2248e63a51f520e697b2ad108&language=en-US`
   );
   const card = await getFetch.json();
   return card.genres;
}
