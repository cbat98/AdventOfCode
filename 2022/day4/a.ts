const input = await Deno.readTextFile("input.txt")

let lines = input.split("\n").map(l => l.split(",").map(ll => ll.split("-").map(i => parseInt(i))))
lines.pop()

let count = 0

lines.forEach(l => {
    const first = l[0]
    const second = l[1]

    if (first[0] <= second[0] && first[1] >= second[1]) {
        count++
    } else if (second[0] <= first[0] && second[1] >= first[1]) {
        count++
    }
})

console.log("overlaps", count)
