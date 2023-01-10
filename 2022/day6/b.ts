const input = Deno.readTextFileSync("input.txt").slice(0, -1)

const MESSAGE_SIZE = 14;

let i = 0

for (; i < input.length; i++) {
    const packet = new Set();

    for (let j = 0; j < MESSAGE_SIZE; j++) {
        packet.add(input[i + j])
    }

    if (packet.size == MESSAGE_SIZE) break
}

console.log("Found new packet at ", i + MESSAGE_SIZE)
