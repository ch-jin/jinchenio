import Vue from "./vue.min.js";

const app = new Vue({
  el: ".page-wrapper",
  data: {
    page: "ABOUT",
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
