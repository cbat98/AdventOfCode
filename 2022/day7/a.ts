interface Directory {
    name: string;
    children: any[];
}

interface SystemFile {
    parent: Directory;
    name : string;
    size : number;
}

const input :string = Deno.readTextFileSync("testinput.txt").slice(0, -1)

const commands :string[] = input.split("$ ")
commands.shift()

let commandAndOutput : string[][] = commands.map(c => c.split("\n"))
commandAndOutput = commandAndOutput.map(c => c.filter(d => d !== ""))

let files :string[] = []
files = files.concat(...commandAndOutput).filter((f : string) => f.match(/^[0-9]/))

console.log({files})
// commandAndOutput.forEach(c => {
    // switch (c[0].split(" ")[0]) {
        // case "cd":
            // console.log("Change directory")
            // break;
        // case "ls":
            // console.log("List files")
            // break;
        // default:
            // console.log("Unknown Command!")
            // break;
   // }
// });

console.log({commandAndOutput})
