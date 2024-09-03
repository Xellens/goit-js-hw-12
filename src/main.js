import { createGalleryCardTemplate } from './js/render-functions.js';
import { fetchPhotos } from './js/pixabay-api';
import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.loader');
const loadMoreBtnEl = document.querySelector('.loader-btn'); //шукаємо кнопку завантажити ще
loadMoreBtnEl.insertAdjacentElement('afterend', loaderEl);
const simpleLightbox = new SimpleLightbox('.js-gallery a', {
  captionDelay: 250,
  captionPosition: 'bottom',
  captionsData: 'alt',
  overlayOpacity: 1,
});
let currentPage = 1; //номер групи при першому запиті, за замовчуванням
let searchedValue = ''; // Зробили змінну глобальною, щоб використ у ф.кнопки завантажити ще
let quantityElements = 0;

const onSearchFormSubmit = async event => {
  try {
    event.preventDefault(); // Зупиняємо дію браузера за замовчуванням

    searchedValue = searchFormEl.elements.user_query.value.trim(); // Зчитуємо значення пошукового запиту

    // Якщо поле пусте, показуємо попередження
    if (searchedValue === '') {
      iziToast.warning({
        message: 'Please enter a search query.',
        position: 'bottomRight',
      });
      return;
    }
    galleryEl.innerHTML = ''; // Очищаємо галерею перед новим пошуком
    quantityElements = 0; // Скидаємо кількість елементів
    loaderEl.classList.remove('is-hidden'); // Показуємо лоадер
    currentPage = 1;
    const response = await fetchPhotos(searchedValue, currentPage); // 1Запит до API, викликаємо ф-ію і передаємо в неї значення інпута та номер групи
    const data = response.data; // Отримуємо дані з відповіді

    // Перевірка наявності результатів
    if (!data.hits || data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'bottomRight',
      });
      galleryEl.innerHTML = ''; // Очищаємо галерею
      searchFormEl.reset(); // Очищаємо інпут
      loaderEl.classList.add('is-hidden'); // Ховаємо лоадер
      loadMoreBtnEl.classList.add('is-hidden'); // Ховаємо кнопку, якщо результатів немає
      return;
    }

    // Створюємо шаблон карток зображень
    const galleryCardsTemplate = data.hits
      .map(imgDetails => createGalleryCardTemplate(imgDetails))
      .join('');
    galleryEl.innerHTML = galleryCardsTemplate; // Вставляємо картки у галерею
    simpleLightbox.refresh(); // Оновлюємо SimpleLightbox
    loadMoreBtnEl.classList.remove('is-hidden');
    searchFormEl.reset(); // Очищаємо поле введення після успішного запиту
    quantityElements += response.data.hits.length;
  } catch (err) {
    console.log(err);
    iziToast.error({
      message: 'An error occurred. Please try again later.',
      position: 'bottomRight',
    });
  } finally {
    loaderEl.classList.add('is-hidden'); // Ховаємо лоадер
  }
};

const onLoadMoreBtnClick = async event => {
  try {
    currentPage++; //збільш номер групи на одиницю при кожному кліку на кн
    const response = await fetchPhotos(searchedValue, currentPage); // і робимо запит на сервер виклик ф fetchPhotos()
    const data = response.data; // Витягуємо дані з відповіді

    if (!data.hits || data.hits.length === 0) {
      loadMoreBtnEl.classList.add('is-hidden'); // Ховаємо кнопку, якщо результатів немає
      return;
    }
    const galleryCardsTemplate = data.hits
      .map(imgDetails => createGalleryCardTemplate(imgDetails))
      .join('');
    galleryEl.insertAdjacentHTML('beforeend', galleryCardsTemplate);
    simpleLightbox.refresh();
    // Отримання висоти першої картки галереї
    const { height: cardHeight } =
      galleryEl.firstElementChild.getBoundingClientRect();

    // Плавне прокручування сторінки на дві висоти картки
    scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
    // Цей блок коду перевіряє, чи кількість завантажених елементів quantityElements перевищує або дорівнює загальній кількості доступних результатів response.data.totalHits. Якщо це так, показується повідомлення за допомогою iziToast, що ви досягли кінця результатів пошуку. Також ховається кнопка завантаження ще (loadMoreBtnEl) та лоадер (loaderEl).
    quantityElements += response.data.hits.length;

    if (Math.ceil(data.totalHits / 15) === currentPage) {
      iziToast.show({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
        backgroundColor: '#ef4040',
        messageColor: '#fff',
        timeout: 5000,
      });

      loaderEl.classList.add('is-hidden');
      loadMoreBtnEl.classList.add('is-hidden');
    }
  } catch (err) {
    console.log(err);
  }
};
// Додаємо обробник події на форму
searchFormEl.addEventListener('submit', onSearchFormSubmit);
//Додаємо обробник події на кнопку
loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick);
