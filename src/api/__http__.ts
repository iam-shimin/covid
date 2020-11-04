import axios from 'axios';

axios.defaults.baseURL = 'https://api.covid19india.org';

export default axios.get;