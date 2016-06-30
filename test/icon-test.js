var tape = require("tape"),
    icon = require("../");

tape("foo() returns the answer to the ultimate question of life, the universe, and everything.", function(test) {
  test.equal(icon.icon(), 42);
  test.end();
});
