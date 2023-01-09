var fs = require("fs");
var CHEATSHEET = {
    "A X": 4,
    "A Y": 8,
    "A Z": 3,
    "B X": 1,
    "B Y": 5,
    "B Z": 9,
    "C X": 7,
    "C Y": 2,
    "C Z": 6
};
fs.readFile("./day2/input.txt", "utf8", function (err, input) {
    var lines = input.split("\n");
    lines.pop();
    var scores = lines.map(function (l) { return CHEATSHEET[l]; });
    console.log(scores.reduce(function (tot, f) { return tot += f; }));
});
