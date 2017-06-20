const Vue = require("Vue");

const App = () =>
  new Vue({
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

module.exports = App;
