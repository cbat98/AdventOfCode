var fs = require("fs");
var CHEATSHEET = {
    // A-ROCK - B-PAPER - C-SCISSORS
    // X-LOSE - Y-DRAW  - Z-WIN
    "A X": 3,
    "A Y": 4,
    "A Z": 8,
    "B X": 1,
    "B Y": 5,
    "B Z": 9,
    "C X": 2,
    "C Y": 6,
    "C Z": 7
};
fs.readFile("./day2/input.txt", "utf8", function (err, input) {
    var lines = input.split("\n");
    lines.pop();
    var scores = lines.map(function (l) { return CHEATSHEET[l]; });
    console.log(scores);
    console.log(scores.reduce(function (tot, f) { return tot += f; }));
});
