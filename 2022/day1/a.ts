const fs = require("fs");

fs.readFile("./day1/input.txt", "utf8", (err:string, input:string) => {
    let elves : any = input.split("\n\n");

    elves = elves.map((elf:string) => {
        return elf.split("\n").map((f:string) => parseInt(f) || 0)
    })

    let sums = elves.map((e:number[]) => e.reduce((total:number, f:number) => total += f))

    console.log("max", Math.max(...sums))
})
