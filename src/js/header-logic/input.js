const form = document.querySelector('.header-form');

export default function input() {
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (e.target.searchQuery.value.trim() === '') return console.log('error');
    return e.target.searchQuery.value.trim();
  });
}

function onSearch(e) {}
