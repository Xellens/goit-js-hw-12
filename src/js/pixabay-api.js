import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchPhotos = (searchedValue, page) => {
  const axiosOptions = {
    params: {
      key: '45775776-b95713cfaff84e770c32e25ed',
      q: searchedValue,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 15,
    },
  };
  return axios.get('', axiosOptions);
};
