import axios from "axios";

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': 'ed57c5a04amsh082d39a427e254bp14c4d8jsn3c9cbd457bd5',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const YoutubeApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  
    return data;
};