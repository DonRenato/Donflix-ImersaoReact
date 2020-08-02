import configs from '../config';

const URL_CATEGORIESWITHVIDEO = `${configs.URL_BACKEND_2}/categorias?_embed=videos`;
const URL_CATEGORIES = `${configs.URL_BACKEND_2}/categorias`;

function getAllCategoriesWithVideos() {
  return fetch(URL_CATEGORIESWITHVIDEO).then(async (data) => {
    if (data.ok) {
      const resp = await data.json();
      return resp;
    }

    throw new Error('SERVER FORA DO AR');
  });
}

function getAll() {
  return fetch(`${URL_CATEGORIES}`).then(async (data) => {
    if (data.ok) {
      const resp = await data.json();
      return resp;
    }

    throw new Error('SERVER FORA DO AR');
  });
}

function create(catObj) {
  return fetch(URL_CATEGORIES, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(catObj),
  }).then(async (data) => {
    if (data.ok) {
      const resp = await data.json();
      return resp;
    }

    throw new Error('SERVER FORA DO AR');
  });
}

export default {
  getAllCategoriesWithVideos,
  getAll,
  create,

};
