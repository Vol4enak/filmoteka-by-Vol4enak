import input from './input';
import axios from 'axios';

export default async function getFetched() {
  const getFetch = await fetch(
    'https://api.themoviedb.org/3/movie/90?api_key=bcde96d2248e63a51f520e697b2ad108&language=en-US'
  );
  const card = await getFetch.json();
  return card;
}

// async function getFatched() {

// }
