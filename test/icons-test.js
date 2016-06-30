var tape = require("tape"),
    icon = require("../");

tape("icons is the array of icon types", function (test) {
    test.deepEqual(icon.icons, [
        icon.iconHeart
    ]);
    test.end();
});