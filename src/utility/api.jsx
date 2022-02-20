const API_KEY = '24297910-266d35e9d32fe9ab4dcc44a53';
const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 12;
function fetchImage(imageName, page) {
  const url = `${BASE_URL}?q=${imageName}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`;
  return fetch(url).then(response => {
    console.log(response);
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Нет такой картинки ${imageName}`)).then(
      data => {
        return data.hits;
      }
    );
  });
}

const api = { fetchImage };
export default api;
