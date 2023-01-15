import {getFetchBySearch} from "./feach-API"
import { renderBodyCards } from '../body-logic/render-cards';


const form = document.querySelector('.header-form');

export async function input() {
  form.addEventListener('submit', onSearch);
}


 async function onSearch(e) {
   e.preventDefault();
   const searchQuery = e.target.searchQuery.value.trim()

  if (searchQuery === '') return console.log('error');
   const zxc = await getFetchBySearch(searchQuery);

   return renderBodyCards(zxc);
}
