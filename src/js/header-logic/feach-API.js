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

export async function getFetchedByGenders(){
  const getFetch = await fetch(
`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
  )
  const card = await getFetch.json();
  return card;
  
}

export async function getFetchedById() {
   const getFetch = await fetch(
     `https://api.themoviedb.org/3/search/movie?api_key=bcde96d2248e63a51f520e697b2ad108&language=en-US&query=war&page=1&include_adult=true`
   );
   const card = await getFetch.json();
   return card;
}
// async function getFatched() {

// }
