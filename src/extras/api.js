import axios from 'axios';
import config from '../../api_config.json';

export default axios.create({
  baseURL: (config || {}).url || 'http://localhost/uaeval_api',
  headers: {
    'Content-type': 'application/json',
    'pragma': 'no-cache',
    'cache-control': 'no-cache'
  }
});