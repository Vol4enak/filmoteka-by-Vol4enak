const paginBlock = document.querySelector('.pagination');
const paginBtn = document.querySelectorAll('.pagination-btn');
const leftDots = document.querySelector('button[data-action="left-dots"]');
const rightDots = document.querySelector('button[data-action="right-dots"]');
const endOfPages = document.querySelector('button[data-action="end-of-page"]');
const firstEl = document.querySelector('button[data-action="first"]');

paginBlock.addEventListener('click', onClick);
let num = 1;

function onClick(e) {
  const queryName = e.target.nodeName;
  const dataName = e.target.dataset.action;

  if (queryName !== 'BUTTON') {
    return;
  }

  if (num > 1 && dataName === 'left-arrow') {
    leftArrow();
  }
  if (dataName === 'first') {
    first();
  }

  if (dataName === 'left-dots') {
    leftDotsFun();
  }

  if (dataName === 'first-trigger') {
    firstTrigger(dataName);
  }

  if (dataName === 'sec-trigger') {
    secTrigger();
  }

  if (dataName === 'third-trigger') {
    thirdTrigger();
  }

  if (dataName === 'major-trigger') {
    majorTrigger();
  }
  if (dataName === 'fourth-trigger') {
    fourthTrigger();
  }

  if (dataName === 'right-arrow') {
    rightArrow();
  }
  if (dataName === 'right-dots') {
    rightDotsFun();
  }

  console.log('num =', num);
}

function leftArrow() {
  num -= 1;

  paginBtn.forEach(element => {
    let textToNumb = Number(element.textContent);
    element.textContent = textToNumb -= 1;
  });
  rightDots.textContent = '...';
}
function first() {
  num = 1;
  pages = 1;
  let resetPag = 2;
  firstEl.classList.add('is-active');
  leftDots.classList.remove('is-active');
  endOfPages.classList.remove('is-active');
  leftDots.textContent = '2';
  rightDots.textContent = '...';
  paginBtn.forEach(element => {
    let numToString = (resetPag += 1).toString();
    element.textContent = numToString;

    element.classList.remove('is-active');
  });
}
function leftDotsFun() {
  num = Number(leftDots.textContent);
  if (Number.isNaN(num)) {
    first();
    return;
  }
  firstEl.classList.remove('is-active');
  leftDots.classList.add('is-active');
  paginBtn.forEach(element => {
    element.classList.remove('is-active');
  });
}
function firstTrigger(dataName) {
  firstEl.classList.remove('is-active');
  leftDots.classList.remove('is-active');
  endOfPages.classList.remove('is-active');
  paginBtn.forEach(element => {
    element.classList.remove('is-active');

    if (element.dataset.action === dataName) {
      num = Number(element.textContent);
      element.classList.add('is-active');
    }
  });

  if (num === 6) {
    activeRightSite('third-trigger');
  }
  if (num === 5) {
    activeRightSite('third-trigger');
    leftDots.textContent = '2';
  }
  if (num === 4) {
    activeRightSite('sec-trigger');
    leftDots.textContent = '2';
  }
}
function secTrigger() {
  firstEl.classList.remove('is-active');
  leftDots.classList.remove('is-active');
  paginBtn.forEach(element => {
    element.classList.remove('is-active');

    if (element.dataset.action === 'sec-trigger') {
      num = Number(element.textContent);
      element.classList.add('is-active');
    }
  });

  if (num === 5) {
    activeRightSite('third-trigger');
    leftDots.textContent = '2';
  }
  if (num === 6) {
    activeRightSite('third-trigger');
  }
}
function thirdTrigger() {
  firstEl.classList.remove('is-active');
  leftDots.classList.remove('is-active');
  paginBtn.forEach(element => {
    element.classList.remove('is-active');

    if (element.dataset.action === 'third-trigger') {
      num = Number(element.textContent);
      element.classList.add('is-active');
    }
  });
}
function majorTrigger() {
  leftDots.textContent = '...';
  leftDots.classList.remove('is-active');
  firstEl.classList.remove('is-active');
  paginBtn.forEach(element => {
    element.classList.remove('is-active');

    if (element.dataset.action === 'third-trigger') {
      element.classList.add('is-active');
    }
    if (element.dataset.action === 'major-trigger') {
      num = Number(element.textContent);
    }
    let textToNumb = Number(element.textContent);
    element.textContent = textToNumb += 1;
  });
}
function fourthTrigger() {
  leftDots.textContent = '...';
  leftDots.classList.remove('is-active');
  firstEl.classList.remove('is-active');
  endOfPages.classList.remove('is-active');
  num = Number(leftDots.textContent);

  paginBtn.forEach(element => {
    element.classList.remove('is-active');

    if (element.dataset.action === 'third-trigger') {
      element.classList.add('is-active');
    }
    if (element.dataset.action === 'fourth-trigger') {
      num = Number(element.textContent);
    }
    let textToNumb = Number(element.textContent);
    element.textContent = textToNumb += 2;
  });
}
function rightDotsFun() {
  console.log(endOfPages.textContent);
  num = Number(endOfPages.textContent);

  let resetPag = Number(endOfPages.textContent) - 7;

  endOfPages.classList.add('is-active');
  leftDots.classList.remove('is-active');
  firstEl.classList.remove('is-active');
  leftDots.textContent = '...';

  rightDots.textContent = endOfPages.textContent - 1;
  paginBtn.forEach(element => {
    let numToString = (resetPag += 1);
    element.textContent = numToString;

    element.classList.remove('is-active');
  });
}
function endOfPage() {}
function rightArrow() {
  if (num === 1) {
    num += 1;

    leftDots.classList.add('is-active');
    firstEl.classList.remove('is-active');
    return;
  }

  if (num === 2) {
    num += 1;
    leftDots.classList.remove('is-active');
    paginBtn.forEach(element => {
      if (element.dataset.action === 'first-trigger') {
        element.classList.add('is-active');
      }
    });
    return;
  }
  if (num === 3) {
    num += 1;
    paginBtn.forEach(element => {
      if (element.dataset.action === 'first-trigger') {
        element.classList.remove('is-active');
      }
      if (element.dataset.action === 'sec-trigger') {
        element.classList.add('is-active');
      }
    });
    return;
  }
  if (num === 4) {
    num += 1;
    paginBtn.forEach(element => {
      if (element.dataset.action === 'sec-trigger') {
        element.classList.remove('is-active');
      }
      if (element.dataset.action === 'third-trigger') {
        element.classList.add('is-active');
      }
    });
    return;
  }

  if (num >= 5 && num <= Number(endOfPages.textContent) - 5) {
    leftDots.textContent = '...';
    paginBtn.forEach(element => {
      if (element.dataset.action === 'third-trigger') {
        element.classList.add('is-active');
      }
      if (element.dataset.action === 'major-trigger') {
        num = Number(element.textContent);
      }

      let textToNumb = Number(element.textContent);
      element.textContent = textToNumb += 1;
    });
    console.log(num);
  }
  let cheakTrue = Number(endOfPages.textContent) >= num;
  if (cheakTrue && num <= Number(endOfPages.textContent - 1)) {
    num += 1;
    console.log(123);
    rightDots.textContent = endOfPages.textContent - 1;
    if (num === Number(endOfPages.textContent) - 3) {
      paginBtn.forEach(element => {
        element.classList.remove('is-active');
        if (element.dataset.action === 'major-trigger') {
          element.classList.add('is-active');
        }
      });
    }
    if (num === Number(endOfPages.textContent) - 2) {
      paginBtn.forEach(element => {
        element.classList.remove('is-active');
        if (element.dataset.action === 'fourth-trigger') {
          element.classList.add('is-active');
        }
      });
    }
    if (num === Number(endOfPages.textContent) - 1) {
      paginBtn.forEach(element => {
        element.classList.remove('is-active');
      });
      rightDots.classList.add('is-active');
    }
    if (num === Number(endOfPages.textContent)) {
      rightDots.classList.remove('is-active');

      endOfPages.classList.add('is-active');
    }

    return;
  }
}

function activeRightSite(dataName) {
  paginBtn.forEach(element => {
    if (element.dataset.action === dataName) {
      element.classList.add('is-active');
    }
    if (element.dataset.action !== dataName) {
      element.classList.remove('is-active');
    }
    let textToNumb = Number(element.textContent);
    element.textContent = textToNumb -= 2;
  });
}
