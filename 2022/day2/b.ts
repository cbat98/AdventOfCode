const CHEATSHEET = {
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
    "C Z": 7,    
}

const input = await Deno.readTextFile("./input.txt")

let lines = input.split("\n")
lines.pop()

const scores = lines.map(l => CHEATSHEET[l])

console.log("total", scores.reduce((tot, f) => tot += f))
