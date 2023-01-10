const input = Deno.readTextFileSync("input.txt").slice(0, -1)

let i = 0

for (; i < input.length; i++) {
    const packet = new Set();

    packet.add(input[i+0])
    packet.add(input[i+1])
    packet.add(input[i+2])
    packet.add(input[i+3])
    
    if (packet.size == 4) break
}

console.log("Found new packet at ", i+4)
