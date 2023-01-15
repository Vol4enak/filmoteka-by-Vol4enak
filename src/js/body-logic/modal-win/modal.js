import { renderModalInformation } from '../../body-logic/render-cards';
import { getFetchedById } from '../../header-logic/feach-API';
import { onWatched } from './modal-btn';
const container = document.querySelector('.main-container');
const modal = document.querySelector('.modal');
const clearModal = document.querySelector('.clearing-modal');
const modalBtn = document.querySelector('.btn-close');
const body = document.querySelector('body');

container.addEventListener('click', e => {
  const query = e.target.nodeName;
  const dataId = e.target.dataset.action;
  getIdFromLocalStorage(dataId);
  if (query === 'IMG' || query === 'P' || query === 'UL') {
    getFetchedById(dataId).then(res => {
      renderModalInformation(res);
    });
    modal.addEventListener('click', onBtnClick);
    modal.classList.remove('visibility');
    body.style.overflow = 'hidden';
    modalBtn.addEventListener('click', onClose);
  }
});

function onClose() {
  clearModal.innerHTML = '';
  modal.classList.add('visibility');
  body.style.overflow = 'visible';
  modal.removeEventListener('click', onBtnClick);
}

let arrIdCardForWatched = [];
let arrIdCardForQueue = [];
function onBtnClick(e) {
  const query = e.target.nodeName;
  const queryClass = e.target.className;
  const dataId = e.target.dataset.action;

  if (queryClass === 'overlay') {
    onClose();
  }
  if (query === 'BUTTON' && dataId === 'watched') {
    console.log(queryClass);
    //    modal-btn__watched.textConten = "123";
    console.log(dataId);

    let idCard = localStorage.getItem('data');
    if (arrIdCardForWatched.includes(idCard)) {
      console.log('error');
      console.log(arrIdCardForWatched);
      return;
    }
    arrIdCardForWatched.push(idCard);
    console.log(arrIdCardForWatched);
  }
  if (query === 'BUTTON' && dataId === 'queue') {
    console.log(dataId);
    let idCard = localStorage.getItem('data');
    if (arrIdCardForQueue.includes(idCard)) {
      console.log('error');
      console.log(arrIdCardForQueue);
      return;
    }

    arrIdCardForQueue.push(idCard);
    console.log(arrIdCardForQueue);
  }
}

function getIdFromLocalStorage(data) {
  localStorage.setItem('data', data);
}
