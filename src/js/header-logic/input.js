import {getFetchBySearch} from "./feach-API"
import {renderLogic} from "../body-logic/render-cards"


const form = document.querySelector('.header-form');

export async function input() {
  form.addEventListener('submit', onSearch);
}

 async function onSearch(e) {
   e.preventDefault();
   const searchQuery = e.target.searchQuery.value.trim()
console.log(searchQuery);
  if (searchQuery === '') return console.log('error');
   const zxc = await getFetchBySearch(searchQuery);
  console.log(zxc);
   return renderLogic(zxc);
}
