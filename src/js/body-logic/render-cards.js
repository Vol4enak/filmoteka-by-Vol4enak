import {
  getFetchedByTrends,
  getFetchedByGenders,
  getFetchedById,
} from '../header-logic/feach-API';


const bodyEl = document.querySelector('.main-container');
export default async function renderCards() {
  const getsTrands = await getFetchedByTrends();
  const getsGenders = await getFetchedByGenders();
  const getsId = await getFetchedById();
  console.log(getsId);
  console.log(getsGenders);
console.log(getsTrands);
  // console.log(bodyEl.insertAdjacentHTML('beforeend', zxc.poster_path));
  return getsTrands.results.map(({ backdrop_path, original_title }) => {
    const render = `<div>
            <img src="${backdrop_path}" alt="123" width="336" height="455">
            <p>${original_title}</p>
            <p>Drama, Action | 2020</p>
        </div>`;
    return bodyEl.insertAdjacentHTML('beforeend', render);
  });
}
// /r9PkFnRUIthgBp2JZZzD380MWZy.jpg
// /feU1DWV5zMWxXUHJyAIk3dHRQ9c.jpg
// /anHwj9IupRoRZZ98WTBvHpTiE6A.jpg
// /1NqwE6LP9IEdOZ57NCT51ftHtWT.jpg
// /8lvHyhjr8oUKOOy2dKXoALWKdp0.png
// /kP7t6RwGz2AvvTkvnI1uteEwHet.png