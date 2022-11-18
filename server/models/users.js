const axios = require('axios')
const dbAddress = 'http://localhost:3030';

module.exports = {
  find: async (params) => {
    try {
      let response = await axios.get(`${dbAddress}/users`, {params});
      return response.data;
    } catch(e){
      throw new Error(null);
    }
  },

  findOne: async (id) => {
    try{
      let response = await axios.get(`${dbAddress}/users/${id}`);
      return response.data;
    } catch(e) {
      throw new Error(null);
    }
  },

  create: async (user) => {
    try {
      let response = await axios.post(`${dbAddress}/users/`, user);
      return response.data;
    } catch(e) {
      throw new Error(null);
    }
  },

  update: async (user) => {
    try {
      let response =  await axios.patch(`${dbAddress}/users/${user.id}`, user);
      return response.data;
    } catch(e) {
      throw new Error(null);
    }
  },
  delete: async (id) => {
    try {
      let response =  await axios.delete(`${dbAddress}/users/${id}`);
      return response.data;
    } catch(e) {
      throw new Error(null);
    }
  }
}
