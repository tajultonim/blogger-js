"use strict";
exports.__esModule = true;
const axios = require("axios").default;
const baseUrl = "https://www.googleapis.com/blogger/v3/blogs/";

class blogger {
  constructor(key, id) {
    this.key = key;
    this.id = id;
  }

  async getBlog() {
    let r = await axios.get(baseUrl + this.id + "?key=" + this.key);
    return r.data;
  }

  async getBlogByURL(url) {
    let r = await axios.get(baseUrl + "byurl?key=" + this.key + "&url=" + url);
    return r.data;
  }

  async getPostList() {
    let r = await axios.get(baseUrl + this.id + "/posts?key=" + this.key);
    return r.data;
  }

  async getPostById(postId) {
    let r = await axios.get(
      baseUrl + this.id + "/posts/" + postId + "?key=" + this.key
    );
    return r.data;
  }

  async searchPost(q) {
    let r = await axios.get(
      baseUrl + this.id + "/posts/search?key=" + this.key + "&q=" + q
    );
    return r.data;
  }

  async getPostByPath(path) {
    let r = await axios.get(
      baseUrl + this.id + "/posts/bypath?key=" + this.key + "&path=" + path
    );
    return r.data;
  }

  async getPageList() {
    let r = await axios.get(baseUrl + this.id + "/pages?key=" + this.key);
    return r.data;
  }

  async getPageById(pageId) {
    let r = await axios.get(
      baseUrl + this.id + "/pages/" + pageId + "?key=" + this.key
    );
    return r.data;
  }
}

exports["default"] = blogger;
