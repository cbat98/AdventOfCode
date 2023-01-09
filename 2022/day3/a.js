var fs = require("fs");
var PRIORITIES = "_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
fs.readFile("./day3/input.txt", "utf8", function (err, input) {
    var rucksacks = input.split("\n");
    rucksacks.pop();
    var rucksacksComp = rucksacks.map(function (r) {
        return [r.substring(0, r.length / 2), r.substring(r.length / 2)];
    });
    var intersections = rucksacksComp.map(function (r) {
        return r[0].split("").filter(function (c) { return r[1].includes(c); })[0];
    });
    var sum = intersections.map(function (i) {
        return PRIORITIES.indexOf(i);
    }).reduce(function (tot, i) {
        return tot += i;
    });
    console.log(sum);
});
