var fs = require("fs");
var PRIORITIES = "_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
fs.readFile("./day3/input.txt", "utf8", function (err, input) {
    var rucksacks = input.split("\n");
    rucksacks.pop();
    var rucksacksComp = [];
    for (var i = 0; i < rucksacks.length; i += 3) {
        rucksacksComp.push([rucksacks[i], rucksacks[i + 1], rucksacks[i + 2]]);
    }
    var intersections = rucksacksComp.map(function (r) {
        return r[0].split("").filter(function (c) { return r[1].includes(c) && r[2].includes(c); })[0];
    });
    var sum = intersections.map(function (i) {
        return PRIORITIES.indexOf(i);
    }).reduce(function (tot, i) {
        return tot += i;
    });
    console.log(sum);
});
