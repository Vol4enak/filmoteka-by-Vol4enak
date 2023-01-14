import {
  getFetchedByTrends,
  getFetchBySearch,
  getFetchedById,
} from '../header-logic/feach-API';

const bodyEl = document.querySelector('.main-container');

export async function renderCardsByTrend() {
  const getsTrands = await getFetchedByTrends();
renderLogic(getsTrands)  
}

export async function renderCardsBySearch() {
  const getSearch = await getFetchBySearch()
  renderLogic(getSearch)
}


export function renderLogic(name) {

  name.results.map(
    ({ poster_path, original_title, id, release_date }) => {
      getFetchedById(id).then(res => {
        console.log(res);
        let genres = res.map(res => res.name + []);

        if (genres.length > 3) {
          genres = genres.slice(0, 2) + ', other';
        }
        genres = genres.toString().replaceAll(',', ', ');

        const render = `<article>
            <img class="movie-preview"src="https://image.tmdb.org/t/p/w500${poster_path}" alt="123" width="336" height="455">
            <ul class="info-list">
              <li>
              <p class="info-list__title">${original_title}</p>
              </li>
              <li>
            <p class="info-list__genres">${genres} | ${release_date.slice(0, 4)}</p></li>
          </ul>
                      </article>`;

        return bodyEl.insertAdjacentHTML('beforeend', render);
      });
    }
  );
}
