const Vue = require("Vue");
const App = require("../src/js/app");
const assert = require("assert");

describe("App", () => {
  it("is a Vue instance", function() {
    const app = App();
    assert(app instanceof Vue);
  });
});
