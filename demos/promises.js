import axios from 'axios';

const BASE_URL = 'https://httpbin.org'

const successfulRequest = () => {
    return axios.get(`${BASE_URL}/status/200`)
};

const failedRequest = () => {
    return axios.get(`${BASE_URL}/status/403`)
};

const randomRequest = () => {
    return axios.get(`${BASE_URL}/status/200,403`)
}

module.exports = {
    successfulRequest,
    failedRequest,
    randomRequest
};