import axios from 'axios';

const KEY = 'AIzaSyC5EfoK-3n3G4LRumQ5ClIV0WEclsglrDo';

export default axios.create ({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  }
});

