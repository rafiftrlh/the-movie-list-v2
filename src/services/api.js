import axios from "axios"

const apiKey = "408d6925d42c0a29b9d8800ea223768e"
const baseUrl = "https://api.themoviedb.org/3"
export const imageUrl = "https://image.tmdb.org/t/p/original"

const apiAxios = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: apiKey,
  },
});

export default apiAxios;
