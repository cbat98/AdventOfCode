const input = await Deno.readTextFile("input.txt")

let elves : any = input.split("\n\n");

elves = elves.map((elf:string) => {
    return elf.split("\n").map((f:string) => parseInt(f) || 0)
})

let sums = elves.map((e:number[]) => e.reduce((total:number, f:number) => total += f))

sums.sort((a:number,b:number) => a - b)

let top3 = sums.slice(sums.length - 3)

console.log(top3.reduce((total:number, e:number) => total += e))
