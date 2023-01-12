import getFetched from '../header-logic/feach-API';

const bodyEl = document.querySelector('.main-container');
export default async function renderCards() {
  const zxc = await getFetched();
  console.log(zxc);
  // console.log(bodyEl.insertAdjacentHTML('beforeend', zxc.poster_path));
  return zxc.results.map(({ backdrop_path, original_title }) => {
    const render = `<div>
            <img src="${backdrop_path}" alt="123" width="336" height="455">
            <p>${original_title}</p>
            <p>Drama, Action | 2020</p>
        </div>`;
    return bodyEl.insertAdjacentHTML('beforeend', render);
  });
}
