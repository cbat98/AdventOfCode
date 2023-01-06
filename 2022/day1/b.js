var fs = require("fs");
fs.readFile("./input.txt", "utf8", function (err, input) {
    var elves = input.split("\n\n");
    elves = elves.map(function (elf) {
        return elf.split("\n").map(function (f) { return parseInt(f) || 0; });
    });
    var sums = elves.map(function (e) { return e.reduce(function (total, f) { return total += f; }); });
    sums.sort(function (a, b) { return a - b; });
    var top3 = sums.slice(sums.length - 3);
    console.log(top3.reduce(function (total, e) { return total += e; }));
});
