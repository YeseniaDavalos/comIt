let n1 = 0;
let n2 = 1;
const limit = 10;
let output = "";

for (let count = 0; count < limit; count++) {
output += n1 + " ";
let next = n1 + n2;
n1 = n2;
n2 = next;
}

console.log(output.trim());
