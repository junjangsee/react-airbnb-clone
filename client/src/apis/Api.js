import Axios from 'axios';

class Api {
  constructor(domain) {
    this.domain = domain;
    this.data = null;
  }

  async get(url) {
    try {
      this.data = await Axios.get(`${this.domain}${url}`);
      return this.data;
    } catch (error) {
      console.log(new Error(error.response.data));
      return error.response.data;
    }
  }

  async post(url, data) {
    try {
      this.data = await Axios.post(`${this.domain}${url}`, data);
      return this.data;
    } catch (error) {
      console.log(new Error(error.response.data));
      return error.response.data;
    }
  }

  async put(url, data) {
    try {
      this.data = await Axios.put(`${this.domain}${url}`, data);
      return this.data;
    } catch (error) {
      console.log(new Error(error.response.data));
      return error.response.data;
    }
  }

  async delete(url) {
    try {
      this.data = await Axios.delete(`${this.domain}${url}`);
      return this.data;
    } catch (error) {
      console.log(new Error(error.response.data));
      return error.response.data;
    }
  }
}

export default Api;
