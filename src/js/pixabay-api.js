import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/'; //звертаюсь до власт defaults.baseURL і тепер з доп бібл axios  до get запиту автоматично дод.цей шлях. а вказуємо в запиті тепер лише русурси

export const fetchPhotos = (searchedValue, page) => {
  //передаємо знач інпута та номер групи для показу фото
  const axiosOptions = {
    params: {
      key: '45775776-b95713cfaff84e770c32e25ed',
      q: searchedValue,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page, //номер групи
      per_page: 15, //обмежуємо кільк фото (елем) завантажених з сервера в групі (назва власт у документації бекенду )/змінюється при кліку на кнопку "завантажити ще"
    },
  };
  return axios.get('', axiosOptions); // лапки вказують на те, що тут використ базовий url
};
