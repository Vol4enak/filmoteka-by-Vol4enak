import {
  getFetchedByTrends,
  getFetchedByGenders,
  getFetchedById,
} from '../header-logic/feach-API';
const API_KEY = 'bcde96d2248e63a51f520e697b2ad108';

const bodyEl = document.querySelector('.main-container');
export default async function renderCards() {
  const getsTrands = await getFetchedByTrends();
  // const getsId = await getId();

  // console.log(getsId);
  // const getsGenders = await getFetchedByGenders();
  // console.log(getsGenders);
  console.log(getsTrands);
  // console.log(bodyEl.insertAdjacentHTML('beforeend', zxc.poster_path));
  return getsTrands.results.map(({ poster_path, original_title, id }) => {
    getId(id)

    const render = `<article>
            <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="123" width="336" height="455">
            <p>${original_title}</p>
            <p> | 2020</p>
        </article>`;

    return bodyEl.insertAdjacentHTML('beforeend', render);
  });
}
// /r9PkFnRUIthgBp2JZZzD380MWZy.jpg
// /feU1DWV5zMWxXUHJyAIk3dHRQ9c.jpg
// /anHwj9IupRoRZZ98WTBvHpTiE6A.jpg
// /1NqwE6LP9IEdOZ57NCT51ftHtWT.jpg
// /8lvHyhjr8oUKOOy2dKXoALWKdp0.png
// /kP7t6RwGz2AvvTkvnI1uteEwHet.png

async function getId(id) {
  const getsId = await getFetchedById(id);
  console.log(getsId);
  return getsId;
}