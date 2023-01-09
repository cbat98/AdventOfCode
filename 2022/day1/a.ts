const file = await Deno.readTextFile("./input.txt")

let elves : any = file.split("\n\n");

elves = elves.map((elf:string) => {
    return elf.split("\n").map((f:string) => parseInt(f) || 0)
})

let sums = elves.map((e:number[]) => e.reduce((total:number, f:number) => total += f))

console.log("max", Math.max(...sums))
