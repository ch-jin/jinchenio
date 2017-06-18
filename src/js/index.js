import Vue from "./vue.min.js";
require("../scss/index.scss");

document.addEventListener("DOMContentLoaded", () => {
  const app = new Vue({
    el: ".page-wrapper",
    data: {
      page: "WORK",
    },
    methods: {
      about() {
        return this.page === "ABOUT";
      },
      work() {
        return this.page === "WORK";
      },
      resume() {
        return this.page === "RESUME";
      },
      handleClick(type) {
        this.page = type;
      },
    },
  });
});
