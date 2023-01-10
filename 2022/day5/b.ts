function transpose(matrix) {
  const rows = matrix.length, cols = matrix[0].length;
  const grid = [];
  for (let j = 0; j < cols; j++) {
    grid[j] = Array(rows);
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      grid[j][i] = matrix[i][j];
    }
  }
  return grid;
}

const input = await Deno.readTextFile("input.txt")

let formatted = input.split("\n\n")

formatted[0] = formatted[0].split("\n")
formatted[0].pop()

formatted[0] = formatted[0].map(l => {
    return l.replaceAll("    ", "_")
        .replaceAll("] ", "")
        .replaceAll("]", "")
        .replaceAll("[", "")
        .replaceAll(" ", "")
})

formatted[0] = transpose(formatted[0])

formatted[0] = formatted[0].map(l => l.filter(i => i !== "_"))

formatted[0] = formatted[0].map(f => f.filter(v => v !== " "))

formatted[1] = formatted[1].split("\n")
formatted[1].pop()

formatted[1] = formatted[1].map(l => {
    l = l.split(" ")
    return [parseInt(l[1]), parseInt(l[3]), parseInt(l[5])]
})

const stack = formatted[0]
const commands = formatted[1]

for (let i = 0; i < commands.length; i++) {
    let crates = stack[commands[i][1] - 1].splice(0, commands[i][0])
    stack[commands[i][2] - 1].unshift(...crates)
}

console.log("top: ", stack.map(s => s[0]).join(""))
