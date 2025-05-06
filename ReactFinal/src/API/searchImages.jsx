// src/api/pexels.js
import axios from 'axios';

const API_KEY = 'U6jnCMhSAmgR6KAV7m1YHPJiJN6poa3nS8CPxGq7r7HmBrwhmBFl0Bzt';
const BASE_URL = 'https://www.pexels.com';

export const searchImages = async (query, perPage = 5) => {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      headers: {
        Authorization: API_KEY
      },
      params: {
        query,
        per_page: perPage
      }
    });

    return response.data.photos.map(photo => photo.src.medium);
  } catch (error) {
    console.error('Error al buscar imágenes en Pexels:', error);
    return [];
  }
};
