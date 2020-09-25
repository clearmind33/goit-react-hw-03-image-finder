import axios from 'axios';

export const fetchImages = (searchQuery, page = 1) => {
  const apiKey = '18420801-792268c411b378fb9aa5f6a71';
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data.hits);
};
