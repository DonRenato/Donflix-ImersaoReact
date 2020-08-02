import configs from '../config';

const URL_VIDEOS = `${configs.URL_BACKEND}/videos`;

function create(videoObj) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(videoObj),
  }).then(async (data) => {
    if (data.ok) {
      const resp = await data.json();
      return resp;
    }

    throw new Error('SERVER FORA DO AR');
  });
}

export default {
  create,

};
