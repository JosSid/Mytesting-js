const axios = require('axios')
const dbAddress = 'http://localhost:3030';

module.exports = {
  find: async (params) => {
    try {
      let response = await axios.get(`${dbAddress}/comments`, {params});
      return response.data;
    } catch(e){
      throw new Error(null);
    }
  },

  findOne: async (id) => {
    try{
      let response = await axios.get(`${dbAddress}/comments/${id}`);
      return response.data;
    } catch(e) {
      throw new Error(null);
    }
  },

  create: async (comment) => {
    try {
      let response = await axios.post(`${dbAddress}/comments/`, comment);
      return response.data;
    } catch(e) {
      throw new Error(null);
    }
  },

  update: async (comment) => {
    try {
      let response =  await axios.patch(`${dbAddress}/comments/${comment.id}`, comment);
      return response.data;
    } catch(e) {
      throw new Error(null);
    }
  },
  delete: async (id) => {
    try {
      let response =  await axios.delete(`${dbAddress}/comments/${id}`);
      return response.data;
    } catch(e) {
      throw new Error(null);
    }
  }
}
