import axios from 'axios';

// 563492ad6f9170000100000136d82078533a40eba8c82e9106eac165

export const getImages = async (searchTerm = 'programming') => await axios.get(`https://api.pexels.com/v1/search?query=${searchTerm}`, {
    headers: {
        Authorization: '563492ad6f9170000100000136d82078533a40eba8c82e9106eac165',
    },
})