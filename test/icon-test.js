var tape = require("tape"),
    icon = require("../");

tape("icon() returns a default icon shape", function (test) {
    var testee = icon.icon();
    test.equals(testee().substr(0,11), "M0,0L0,-5L0");
    test.end();
});


tape("icon({type: 'heart'}) returns a heart shape", function (test) {
    var testee = icon.icon({type: 'heart'});
    test.equals(testee().substr(0,11), "M0,0L0,-5L0");
    test.end();
});