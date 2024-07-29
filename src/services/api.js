import axios from "axios"

const apiKey = import.meta.env.VITE_SECRET_API_KEY
const baseUrl = "https://api.themoviedb.org/3"
export const imageUrl = "https://image.tmdb.org/t/p/original"

const apiAxios = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: apiKey,
  },
});

export default apiAxios;
