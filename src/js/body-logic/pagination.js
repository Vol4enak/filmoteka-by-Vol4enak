const paginBlock = document.querySelector('.pagination');
const paginBtn = document.querySelectorAll('.pagination-btn');
const leftDots = document.querySelector('button[data-action="left-dots"]');
const rightDots = document.querySelector('button[data-action="right-dots"]');
const endOfPages = document.querySelector('button[data-action="end-of-page"]');
paginBlock.addEventListener('click', onClick);
let num = 1;
let endPages = -7;
endPages += Number(endOfPages.textContent);
function onClick(e) {
  const queryName = e.target.nodeName;
  const dataName = e.target.dataset.action;
  if (queryName !== 'BUTTON') {
    return;
  }

  if (num > 1 && dataName === 'left-arrow') {
    num -= 1;
    console.log(num);
    paginBtn.forEach(element => {
      let textToNumb = Number(element.textContent);
      element.textContent = textToNumb -= 1;
    });
     rightDots.textContent = '...';
  }

  if (num > 1 && dataName === 'first-trigger') {
    if (num === 2) {
      num -= 1;
      paginBtn.forEach(element => {
        let textToNumb = Number(element.textContent);
        element.textContent = textToNumb -= 1;
      });
      leftDots.textContent = '2';
      return;
    }

    num -= 2;
    console.log(num);
    paginBtn.forEach(element => {
      let textToNumb = Number(element.textContent);
      element.textContent = textToNumb -= 2;
    });
    rightDots.textContent = '...';
  }

  if (num > 1 && dataName === 'sec-trigger') {
    num -= 1;
    console.log(num);
    paginBtn.forEach(element => {
      let textToNumb = Number(element.textContent);
      element.textContent = textToNumb -= 1;
    });
    rightDots.textContent = '...';
  }
  if (num === 1) {
    leftDots.textContent = '2';
  }
  if (num === endPages) return;
  if (dataName === 'major-trigger') {
    leftDots.textContent = '...';
    num += 1;
    console.log(num);
    paginBtn.forEach(element => {
      let textToNumb = Number(element.textContent);
      element.textContent = textToNumb += 1;
    });
  }
  if (dataName === 'fourth-trigger') {
    leftDots.textContent = '...';
    num += 2;
    console.log(num);
    paginBtn.forEach(element => {
      let textToNumb = Number(element.textContent);
      element.textContent = textToNumb += 2;
    });
  }

  if (num === endPages) {
    paginBtn.forEach(element => {
      let textToNumb = Number(element.textContent);
      element.textContent = textToNumb -= 1;
    });

    let textToNumb = Number(endOfPages.textContent);
    rightDots.textContent = textToNumb -= 1;
  }

  console.log(endPages);

  if (dataName === 'right-arrow') {
    leftDots.textContent = '...';
    //  if (num === 1) {
    //    console.log(num);
    //    leftDots.textContent = '2';
    //  }
    num += 1;
    paginBtn.forEach(element => {
      let textToNumb = Number(element.textContent);
      element.textContent = textToNumb += 1;
    });
  }
}
