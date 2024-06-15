import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': 'c773f12795msh2975d5e0f9fc398p194637jsnf0bfc4bb4492' ,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

const APIdata = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  
  return data;
}

export default APIdata