import axios from 'axios';

export default axios.create({
  baseURL: 'http://api.coincap.io/v2',
  headers: {
    'Content-type': 'application/json'
  }
});
