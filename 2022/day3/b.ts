const fs = require("fs");

const PRIORITIES = "_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

fs.readFile("./day3/input.txt", "utf8", (err:string, input:string) => {
    let rucksacks : string[] = input.split("\n")
    rucksacks.pop()

    let rucksacksComp : string[][] = []
    for(let i = 0; i < rucksacks.length; i += 3) {
        rucksacksComp.push([rucksacks[i], rucksacks[i + 1], rucksacks[i + 2]]);
    }

    const intersections : string[] = rucksacksComp.map(r => {
        return r[0].split("").filter(c => r[1].includes(c) && r[2].includes(c))[0]
    })

    const sum = intersections.map(i => {
        return PRIORITIES.indexOf(i)
    }).reduce((tot, i) => {
        return tot += i
    })

    console.log(sum)
})
