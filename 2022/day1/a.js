var fs = require("fs");
fs.readFile("./input.txt", "utf8", function (err, input) {
    var elves = input.split("\n\n");
    elves = elves.map(function (elf) {
        return elf.split("\n").map(function (f) { return parseInt(f) || 0; });
    });
    var sums = elves.map(function (e) { return e.reduce(function (total, f) { return total += f; }); });
    console.log("max", Math.max.apply(Math, sums));
});
