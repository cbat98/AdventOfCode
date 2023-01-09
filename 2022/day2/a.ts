const fs = require("fs")

const CHEATSHEET = {
    "A X": 4,
    "A Y": 8,
    "A Z": 3,
    "B X": 1,    
    "B Y": 5,
    "B Z": 9,
    "C X": 7,
    "C Y": 2,
    "C Z": 6,    
}

fs.readFile("./day2/input.txt", "utf8", (err:string, input:string) => {
    let lines = input.split("\n")
    lines.pop()

    const scores = lines.map(l => CHEATSHEET[l])

    console.log(scores.reduce((tot, f) => tot += f))
})
