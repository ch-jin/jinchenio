const Vue = require("Vue");
const App = require("../src/js/app");
const assert = require("assert");

describe("App", () => {
  it("is a Vue instance", () => {
    const app = App();
    assert(app instanceof Vue);
    const app2 = Vue.extend(app);
  });
});
