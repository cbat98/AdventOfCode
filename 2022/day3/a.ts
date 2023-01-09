const fs = require("fs");

const PRIORITIES = "_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

fs.readFile("./day3/input.txt", "utf8", (err:string, input:string) => {
    let rucksacks : string[] = input.split("\n")
    rucksacks.pop()

    const rucksacksComp : string[][] = rucksacks.map(r => {
        return [r.substring(0, r.length / 2), r.substring(r.length / 2)]
    })

    const intersections : string[] = rucksacksComp.map(r => {
        return r[0].split("").filter(c => r[1].includes(c))[0]
    })

    const sum = intersections.map(i => {
        return PRIORITIES.indexOf(i)
    }).reduce((tot, i) => {
        return tot += i
    })

    console.log(sum)
})
