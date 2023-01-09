const input = await Deno.readTextFile("testinput.txt")

let formatted = input.split("\n\n")

formatted[0] = formatted[0].split("\n")
formatted[0].pop()

formatted[0] = formatted[0].map(l => {
    return l.replaceAll("   ", " ")
        .replaceAll("[", "")
        .replaceAll("]", "")
        .replaceAll("  ", "_")
        .replaceAll(" ", "")
        .replaceAll("_", " ")
})

formatted[0] = formatted[0].map((_, colIndex) => formatted[0].map(row => row[colIndex]));

formatted[0] = formatted[0].map(f => f.filter(v => v !== " "))

console.log("cols", formatted[0].length)

formatted[1] = formatted[1].split("\n")
formatted[1].pop()

formatted[1] = formatted[1].map(l => {
    l = l.split(" ")
    return [parseInt(l[1]), parseInt(l[3]), parseInt(l[5])]
})

const stack = formatted[0]
const commands = formatted[1]

console.log({stack})
console.log({commands})
