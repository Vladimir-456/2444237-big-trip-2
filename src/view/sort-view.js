import AbstractView from '../framework/view/abstract-view';
import { SortType } from '../util.js';


function createSortTemplate() {
  return (
    `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
          <div class="trip-sort__item  trip-sort__item--day">
            <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day">
            <label class="trip-sort__btn" for="sort-day" data-sort-type="${SortType.DAY}">Day</label>
          </div>

          <div class="trip-sort__item  trip-sort__item--event" >
            <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>
            <label class="trip-sort__btn" for="sort-event">Event</label>
          </div>

          <div class="trip-sort__item  trip-sort__item--time">
            <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time"">
            <label class="trip-sort__btn" for="sort-time" data-sort-type="${SortType.TIME}">Time</label>
          </div>

          <div class="trip-sort__item  trip-sort__item--price ">
            <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price" checked ">
            <label class="trip-sort__btn" for="sort-price" data-sort-type="${SortType.PRICE}">Price</label>
          </div>

          <div class="trip-sort__item  trip-sort__item--offer">
            <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>
            <label class="trip-sort__btn" for="sort-offer">Offers</label>
          </div>
      </form>`
  );
}

export default class SortView extends AbstractView {
  #handleSortTypeChange = null;
  constructor({onSortTypeChange}) {
    super();
    this.#handleSortTypeChange = onSortTypeChange;
    this.element.addEventListener('click', this.#handleSortChange);

  }

  get template() {
    return createSortTemplate();
  }

  #handleSortChange = (evt) => {
    evt.preventDefault();
    this.#handleSortTypeChange(evt.target.dataset.sortType);
  };
}
