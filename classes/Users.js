import axios from 'axios';

const ENDPOINT = 'https://jsonplaceholder.typicode.com';

class Users {
    static all() {
        return axios.get(`${ENDPOINT}/users`).then(response => response.data)
    };

    static create() {
        return axios.post(`${ENDPOINT}/users`).then(response => response.data)
    }
};

module.exports = Users;