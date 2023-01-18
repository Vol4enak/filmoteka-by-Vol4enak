const paginBlock = document.querySelector('.pagination');
paginBlock.addEventListener('click', onClick);

function onClick(e) {
  console.log(e.target.dataset.action);
}
