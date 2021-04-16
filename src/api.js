import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost/uaeval_api/',
  headers: {
    'Content-type': 'application/json'
  }
});