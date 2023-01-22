const paginBlock = document.querySelector('.pagination');
const paginBtn = document.querySelectorAll('.pagination-btn');
const leftDots = document.querySelector('button[data-action="left-dots"]');
const rightDots = document.querySelector('button[data-action="right-dots"]');
const endOfPages = document.querySelector('button[data-action="end-of-page"]');
const firstEl = document.querySelector('button[data-action="first"]');

paginBlock.addEventListener('click', onClick);
let num = 1;
let pages = 1;
// pages += Number(endOfPages.textContent);
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
    firstTrigger();
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
  if (num === pages) {
    endOfPage();
  }
  console.log('pages =', pages);
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
  leftDots.textContent = '2';
  paginBtn.forEach(element => {
    let numToString = (resetPag += 1).toString();
    element.textContent = numToString;

    if (
      element.dataset.action === 'first-trigger' ||
      element.dataset.action === 'sec-trigger' ||
      element.dataset.action === 'third-trigger'
    ) {
      element.classList.remove('is-active');
    }
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
    if (
      element.dataset.action === 'first-trigger' ||
      element.dataset.action === 'sec-trigger' ||
      element.dataset.action === 'third-trigger'
    ) {
      element.classList.remove('is-active');
    }
  });
}
function firstTrigger() {
  firstEl.classList.remove('is-active');
  leftDots.classList.remove('is-active');
  paginBtn.forEach(element => {
    if (
      element.dataset.action === 'sec-trigger' ||
      element.dataset.action === 'third-trigger'
    ) {
      element.classList.remove('is-active');
    }
    if (element.dataset.action === 'first-trigger') {
      num = Number(element.textContent);
      element.classList.add('is-active');
    }
  });

  if (num === 6) {
    console.log(123);
    paginBtn.forEach(element => {
      if (element.dataset.action === 'third-trigger') {
        element.classList.add('is-active');
      }
      if (element.dataset.action !== 'third-trigger') {
        element.classList.remove('is-active');
      }
      let textToNumb = Number(element.textContent);
      element.textContent = textToNumb -= 2;
    });
  }
  if (num === 5) {
    paginBtn.forEach(element => {
      if (element.dataset.action === 'third-trigger') {
        element.classList.add('is-active');
      }
      if (element.dataset.action !== 'third-trigger') {
        element.classList.remove('is-active');
      }
      let textToNumb = Number(element.textContent);
      element.textContent = textToNumb -= 2;
    });
    leftDots.textContent = '2';
  }
  if (num === 4) {
    paginBtn.forEach(element => {
      if (element.dataset.action === 'sec-trigger') {
        element.classList.add('is-active');
      }
      if (element.dataset.action !== 'sec-trigger') {
        element.classList.remove('is-active');
      }
      let textToNumb = Number(element.textContent);
      element.textContent = textToNumb -= 1;
    });
    leftDots.textContent = '2';
  }
}
function secTrigger() {
  firstEl.classList.remove('is-active');
  leftDots.classList.remove('is-active');
  paginBtn.forEach(element => {
    if (
      element.dataset.action === 'first-trigger' ||
      element.dataset.action === 'third-trigger'
    ) {
      element.classList.remove('is-active');
    }
    if (element.dataset.action === 'sec-trigger') {
      num = Number(element.textContent);
      element.classList.add('is-active');
    }
  });

  if (num === 5) {
    console.log(123);
    paginBtn.forEach(element => {
      if (element.dataset.action === 'third-trigger') {
        element.classList.add('is-active');
      }
      if (element.dataset.action !== 'third-trigger') {
        element.classList.remove('is-active');
      }
      let textToNumb = Number(element.textContent);
      element.textContent = textToNumb -= 1;
    });
    leftDots.textContent = '2';
  }
  if (num === 6) {
    paginBtn.forEach(element => {
      if (element.dataset.action === 'third-trigger') {
        element.classList.add('is-active');
      }
      if (element.dataset.action !== 'third-trigger') {
        element.classList.remove('is-active');
      }
      let textToNumb = Number(element.textContent);
      element.textContent = textToNumb -= 1;
    });
  }
}
function thirdTrigger() {
  firstEl.classList.remove('is-active');
  leftDots.classList.remove('is-active');
  paginBtn.forEach(element => {
    if (
      element.dataset.action === 'first-trigger' ||
      element.dataset.action === 'sec-trigger'
    ) {
      element.classList.remove('is-active');
    }
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
    if (
      element.dataset.action === 'first-trigger' ||
      element.dataset.action === 'sec-trigger'
    ) {
      element.classList.remove('is-active');
    }
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
  num = Number(leftDots.textContent);

  paginBtn.forEach(element => {
    if (
      element.dataset.action === 'first-trigger' ||
      element.dataset.action === 'sec-trigger'
    ) {
      element.classList.remove('is-active');
    }
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
function rightDotsFun() {}
function endOfPage() {
  // paginBtn.forEach(element => {
  //   let textToNumb = Number(element.textContent);
  //   element.textContent = textToNumb -= 1;
  // });
  // let textToNumb = Number(endOfPages.textContent);
  // rightDots.textContent = textToNumb -= 1;
}
function rightArrow() {
  if (pages === 1) {
    num += 1;
    pages = Number(leftDots.textContent);
    leftDots.classList.add('is-active');
    firstEl.classList.remove('is-active');
    return;
  }

  if (pages === 2) {
    num += 1;
    leftDots.classList.remove('is-active');
    paginBtn.forEach(element => {
      if (element.dataset.action === 'first-trigger') {
        element.classList.add('is-active');
        pages = Number(element.textContent);
      }
    });
    return;
  }
  if (pages === 3) {
    num += 1;
    paginBtn.forEach(element => {
      if (element.dataset.action === 'first-trigger') {
        element.classList.remove('is-active');
      }
      if (element.dataset.action === 'sec-trigger') {
        element.classList.add('is-active');
        pages = Number(element.textContent);
      }
    });
    return;
  }
  if (pages === 4) {
    num += 1;
    paginBtn.forEach(element => {
      if (element.dataset.action === 'sec-trigger') {
        element.classList.remove('is-active');
      }
      if (element.dataset.action === 'third-trigger') {
        element.classList.add('is-active');
        pages = Number(element.textContent);
      }
    });
    return;
  }
  if (pages >= 5) {
    leftDots.textContent = '...';
    paginBtn.forEach(element => {
      if (element.dataset.action === 'third-trigger') {
        element.classList.add('is-active');
      }
      if (element.dataset.action === 'major-trigger') {
        num = Number(element.textContent);
        pages = Number(element.textContent);
      }
      let textToNumb = Number(element.textContent);
      element.textContent = textToNumb += 1;
    });
    return;
  }

  // if (num === 3) {
  //   leftDots.classList.add('is-active');
  //   firstEl.classList.remove('is-active');
  // }
  // if (num === 4) {
  //   leftDots.classList.add('is-active');
  //   firstEl.classList.remove('is-active');
  // }
  // if (num === 1) {
  //   leftDots.classList.add('is-active');
  //   firstEl.classList.remove('is-active');
  // }
}
