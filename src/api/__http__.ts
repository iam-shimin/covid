import axios from 'axios';

axios.defaults.baseURL = 'https://data.covid19india.org';

export default axios.get;