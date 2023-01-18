import './js/body-logic/modal-win/modal';
import './js/body-logic/modal-win/modal-btn';
import "./js/body-logic/pagination"
import { input } from './js/header-logic/input';
import getFetchedByTrends from './js/header-logic/feach-API';
import {
  renderCardsByTrend,
  renderCardsBySearch,
} from './js/body-logic/render-cards';
renderCardsByTrend();
input();
